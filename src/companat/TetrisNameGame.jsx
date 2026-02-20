import { useRef, useEffect, useState, useCallback } from "react";
import "./TetrisNameGame.css";

// ─── Standard Tetrimino shapes ──────────────────────────────────────────────
const TETRIMINOS = [
    // I
    [[1, 1, 1, 1]],
    // O
    [
        [1, 1],
        [1, 1],
    ],
    // T
    [
        [0, 1, 0],
        [1, 1, 1],
    ],
    // S
    [
        [0, 1, 1],
        [1, 1, 0],
    ],
    // Z
    [
        [1, 1, 0],
        [0, 1, 1],
    ],
    // L
    [
        [1, 0],
        [1, 0],
        [1, 1],
    ],
    // J
    [
        [0, 1],
        [0, 1],
        [1, 1],
    ],
];

// ─── Pixel-art letter definitions (5 rows × variable cols) ──────────────────
const LETTERS = {
    A: [
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
    ],
    D: [
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
    ],
    M: [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
    ],
    I: [
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1],
    ],
    O: [
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
    ],
    U: [
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
    ],
    R: [
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
        [1, 0, 1, 0],
        [1, 0, 0, 1],
    ],
};

// Brand colors
const NAME_COLORS = [
    "#01EDFA", "#DD0AB2", "#FEFB34", "#53DA3F",
    "#FD3F59",
    "#0077D3", "#FFC82E", "#EA141C", "#01EDFA", "#DD0AB2", "#FEFB34",
];

const DARK_COLORS = [
    "#1a1a2e", "#16213e", "#0f3460", "#1b1b2f",
    "#222240", "#191932", "#252545", "#1e1e3a",
];

const NAME = "ADAM DIOURI";

// ─── Build name target cells ────────────────────────────────────────────────
function buildNameBlocks(gridCols, nameRowStart) {
    const blocks = [];
    let cursorX = 0;
    const letterSpacing = 1;
    const wordSpacing = 3;
    let colorIdx = 0;

    for (let i = 0; i < NAME.length; i++) {
        const ch = NAME[i];
        if (ch === " ") {
            cursorX += wordSpacing;
            colorIdx++;
            continue;
        }
        const shape = LETTERS[ch];
        if (!shape) continue;
        const color = NAME_COLORS[colorIdx % NAME_COLORS.length];
        const cols = shape[0].length;
        for (let row = 0; row < shape.length; row++) {
            for (let col = 0; col < cols; col++) {
                if (shape[row][col]) {
                    blocks.push({
                        gridX: cursorX + col,
                        gridY: nameRowStart + row,
                        color,
                    });
                }
            }
        }
        cursorX += cols + letterSpacing;
        colorIdx++;
    }

    // Center horizontally
    const maxNameX = Math.max(...blocks.map((b) => b.gridX)) + 1;
    const offsetX = Math.floor((gridCols - maxNameX) / 2);
    blocks.forEach((b) => (b.gridX += offsetX));

    return blocks;
}

export default function TetrisNameGame() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const animRef = useRef(null);
    const [glowing, setGlowing] = useState(false);
    const [done, setDone] = useState(false);

    const runAnimation = useCallback(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");

        // ─── Grid setup ───────────────────────────────────────────────────
        const gridCols = 56;
        const nameRows = 5;
        const debrisRows = 3; // rows of dark blocks below the name
        const nameRowStart = 2; // name starts at row 2
        const gridRows = nameRowStart + nameRows + debrisRows + 1;

        const containerWidth = container.clientWidth;
        const blockSize = Math.max(Math.floor(containerWidth / (gridCols + 2)), 8);
        const canvasW = gridCols * blockSize;
        const canvasH = gridRows * blockSize;
        canvas.width = canvasW;
        canvas.height = canvasH;

        // ─── Build name blocks ────────────────────────────────────────────
        const nameBlocks = buildNameBlocks(gridCols, nameRowStart);
        const nameSet = new Set(nameBlocks.map((b) => `${b.gridX},${b.gridY}`));

        // ─── Build debris blocks (dark Tetriminos below and around name) ─
        const debrisBlocks = [];
        const debrisStartRow = nameRowStart + nameRows;

        // Fill a few rows below solid with debris
        for (let row = debrisStartRow; row < gridRows; row++) {
            for (let col = 0; col < gridCols; col++) {
                // Leave some random gaps for realism
                if (Math.random() > 0.15) {
                    debrisBlocks.push({
                        gridX: col,
                        gridY: row,
                        color: DARK_COLORS[Math.floor(Math.random() * DARK_COLORS.length)],
                    });
                }
            }
        }

        // Also scatter some dark blocks around the name area (sides) to look like stacked pieces
        for (let row = nameRowStart; row < debrisStartRow; row++) {
            for (let col = 0; col < gridCols; col++) {
                if (!nameSet.has(`${col},${row}`)) {
                    // Sparse fill on sides
                    const distFromCenter = Math.abs(col - gridCols / 2);
                    const prob = distFromCenter > gridCols * 0.35 ? 0.6 : 0.05;
                    if (Math.random() < prob) {
                        debrisBlocks.push({
                            gridX: col,
                            gridY: row,
                            color: DARK_COLORS[Math.floor(Math.random() * DARK_COLORS.length)],
                        });
                    }
                }
            }
        }

        // ─── Create falling Tetrimino pieces for phase 1 ──────────────────
        // Group debris blocks into Tetrimino-shaped pieces
        const phase1Pieces = [];
        const usedDebris = new Set();

        for (const db of debrisBlocks) {
            const key = `${db.gridX},${db.gridY}`;
            if (usedDebris.has(key)) continue;

            // Try to fit a random Tetrimino shape
            const tetShape = TETRIMINOS[Math.floor(Math.random() * TETRIMINOS.length)];
            const pieceCells = [];
            let fits = true;

            for (let r = 0; r < tetShape.length && fits; r++) {
                for (let c = 0; c < tetShape[r].length && fits; c++) {
                    if (tetShape[r][c]) {
                        const gx = db.gridX + c;
                        const gy = db.gridY + r;
                        const k = `${gx},${gy}`;
                        if (gx >= gridCols || gy >= gridRows || usedDebris.has(k)) {
                            fits = false;
                        } else {
                            pieceCells.push({ gridX: gx, gridY: gy, key: k });
                        }
                    }
                }
            }

            if (fits && pieceCells.length > 0) {
                const color = DARK_COLORS[Math.floor(Math.random() * DARK_COLORS.length)];
                pieceCells.forEach((pc) => usedDebris.add(pc.key));
                phase1Pieces.push({
                    cells: pieceCells,
                    color,
                    offsetY: 0,
                    finalY: 0,
                    currentY: -(Math.random() * canvasH * 0.4 + blockSize * 3),
                    speed: 2,
                    gravity: 1.5 + Math.random() * 0.5,
                    landed: false,
                    bounceVel: 0,
                    bouncing: false,
                });
            } else {
                // Single block fallback
                usedDebris.add(key);
                phase1Pieces.push({
                    cells: [{ gridX: db.gridX, gridY: db.gridY, key }],
                    color: db.color,
                    offsetY: 0,
                    finalY: 0,
                    currentY: -(Math.random() * canvasH * 0.2 + blockSize * 2),
                    speed: 6,
                    gravity: 3.0 + Math.random() * 1.0,
                    landed: false,
                    bounceVel: 0,
                    bouncing: false,
                });
            }
        }

        // Shuffle and assign stagger delays
        phase1Pieces.sort(() => Math.random() - 0.5);
        phase1Pieces.forEach((p, i) => {
            p.delay = Math.floor(i * 0.8);
            p.frameCount = 0;
        });

        // ─── Phase 2: name blocks fall as individual colored blocks ───────
        const phase2Blocks = nameBlocks
            .map((b) => ({
                ...b,
                currentY: -(Math.random() * canvasH * 0.3 + blockSize * 3),
                finalY: b.gridY * blockSize,
                speed: 2,
                gravity: 1.5 + Math.random() * 0.5,
                landed: false,
                bounceVel: 0,
                bouncing: false,
                frameCount: 0,
                delay: 0, // set after phase 1
            }))
            .sort(() => Math.random() - 0.5);

        // ─── Animation state ─────────────────────────────────────────────
        let phase = 1;
        let phase2Started = false;
        let allDone = false;
        let flashFrame = 0;

        setGlowing(false);
        setDone(false);

        function drawBlock(x, y, size, color, highlight = false) {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, size, size);

            // 3D effect: top-left highlight
            ctx.fillStyle = "rgba(255,255,255,0.15)";
            ctx.fillRect(x, y, size, 2);
            ctx.fillRect(x, y, 2, size);

            // 3D effect: bottom-right shadow
            ctx.fillStyle = "rgba(0,0,0,0.35)";
            ctx.fillRect(x, y + size - 2, size, 2);
            ctx.fillRect(x + size - 2, y, 2, size);

            // Grid border
            ctx.strokeStyle = "rgba(0,0,0,0.5)";
            ctx.lineWidth = 1;
            ctx.strokeRect(x + 0.5, y + 0.5, size - 1, size - 1);

            if (highlight) {
                ctx.fillStyle = "rgba(255,255,255,0.1)";
                ctx.fillRect(x, y, size, size);
            }
        }

        function animatePiece(piece) {
            piece.frameCount++;
            if (piece.frameCount < piece.delay) return false; // not started yet

            if (!piece.landed) {
                piece.speed += piece.gravity;
                piece.currentY += piece.speed;
                if (piece.currentY >= 0) {
                    piece.currentY = 0;
                    piece.landed = true;
                    piece.bouncing = true;
                    piece.bounceVel = -piece.speed * 0.2;
                }
                return true; // still moving
            }

            if (piece.bouncing) {
                piece.bounceVel += 1.0;
                piece.currentY += piece.bounceVel;
                if (piece.currentY >= 0) {
                    piece.currentY = 0;
                    if (Math.abs(piece.bounceVel) < 0.8) {
                        piece.bouncing = false;
                    } else {
                        piece.bounceVel = -piece.bounceVel * 0.1;
                    }
                }
                return true;
            }

            return false; // settled
        }

        function animateNameBlock(block) {
            block.frameCount++;
            if (block.frameCount < block.delay) return false;

            if (!block.landed) {
                block.speed += block.gravity;
                block.currentY += block.speed;
                if (block.currentY >= block.finalY) {
                    block.currentY = block.finalY;
                    block.landed = true;
                    block.bouncing = true;
                    block.bounceVel = -block.speed * 0.25;
                }
                return true;
            }

            if (block.bouncing) {
                block.bounceVel += 1.0;
                block.currentY += block.bounceVel;
                if (block.currentY >= block.finalY) {
                    block.currentY = block.finalY;
                    if (Math.abs(block.bounceVel) < 0.8) {
                        block.bouncing = false;
                    } else {
                        block.bounceVel = -block.bounceVel * 0.1;
                    }
                }
                return true;
            }
            return false;
        }

        function animate() {
            ctx.clearRect(0, 0, canvasW, canvasH);

            // Subtle grid background
            ctx.strokeStyle = "rgba(255,255,255,0.025)";
            ctx.lineWidth = 1;
            for (let x = 0; x < canvasW; x += blockSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvasH);
                ctx.stroke();
            }
            for (let y = 0; y < canvasH; y += blockSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvasW, y);
                ctx.stroke();
            }

            // ─── Phase 1: Dark Tetriminos ──────────────────────────────────
            let phase1Moving = false;
            for (const piece of phase1Pieces) {
                const moving = animatePiece(piece);
                if (moving) phase1Moving = true;

                if (piece.frameCount >= piece.delay) {
                    for (const cell of piece.cells) {
                        const x = cell.gridX * blockSize;
                        const y = cell.gridY * blockSize + piece.currentY;
                        drawBlock(x, y, blockSize, piece.color, piece.bouncing);
                    }
                }
            }

            // Transition to phase 2 when phase 1 is done
            if (!phase1Moving && phase === 1) {
                phase = 2;
                phase2Started = true;
                phase2Blocks.forEach((b, i) => {
                    b.delay = Math.floor(i * 1.5);
                    b.frameCount = 0;
                });
            }

            // ─── Phase 2: Colored name blocks ──────────────────────────────
            if (phase >= 2) {
                let nameMoving = false;
                for (const block of phase2Blocks) {
                    const moving = animateNameBlock(block);
                    if (moving) nameMoving = true;

                    if (block.frameCount >= block.delay) {
                        const x = block.gridX * blockSize;
                        const y = block.currentY;
                        drawBlock(x, y, blockSize, block.color, block.bouncing);

                        // Glow effect for name blocks
                        if (block.landed && !block.bouncing) {
                            ctx.shadowColor = block.color;
                            ctx.shadowBlur = 6;
                            ctx.fillStyle = block.color;
                            ctx.fillRect(x + 2, y + 2, blockSize - 4, blockSize - 4);
                            ctx.shadowBlur = 0;
                        }
                    }
                }

                // All done
                if (!nameMoving && phase2Started && !allDone) {
                    // Check that all blocks are past their delays
                    const allStarted = phase2Blocks.every(
                        (b) => b.frameCount >= b.delay
                    );
                    if (allStarted) {
                        allDone = true;
                        setGlowing(true);
                        setDone(true);
                    }
                }
            }

            // Flash effect on completion
            if (allDone) {
                flashFrame++;
                if (flashFrame < 40) {
                    const alpha = Math.sin((flashFrame / 40) * Math.PI) * 0.25;
                    ctx.fillStyle = `rgba(1,237,250,${alpha})`;
                    ctx.fillRect(0, 0, canvasW, canvasH);
                }
            }

            if (!allDone || flashFrame < 40) {
                animRef.current = requestAnimationFrame(animate);
            }
        }

        animRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        runAnimation();
        return () => {
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, [runAnimation]);

    const handleReplay = () => {
        if (animRef.current) cancelAnimationFrame(animRef.current);
        setGlowing(false);
        setDone(false);
        runAnimation();
    };

    return (
        <div
            ref={containerRef}
            className={`tetris-name-container${glowing ? " glow" : ""}`}
        >
            <canvas ref={canvasRef} />
            {done && (
                <button className="tetris-replay-btn" onClick={handleReplay}>
                    ▶ Replay
                </button>
            )}
        </div>
    );
}
