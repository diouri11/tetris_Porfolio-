import { useRef, useEffect } from "react";
import "./TetrisLoader.css";

// Standard Tetrimino shapes
const SHAPES = [
    [[1, 1, 1, 1]],           // I
    [[1, 1], [1, 1]],         // O
    [[0, 1, 0], [1, 1, 1]],   // T
    [[0, 1, 1], [1, 1, 0]],   // S
    [[1, 1, 0], [0, 1, 1]],   // Z
    [[1, 0], [1, 0], [1, 1]], // L
    [[0, 1], [0, 1], [1, 1]], // J
];

const COLORS = [
    "#01EDFA", "#DD0AB2", "#FEFB34", "#53DA3F",
    "#FD3F59", "#0077D3", "#FFC82E", "#EA141C",
];

/**
 * TetrisLoader – A small, looping Tetris animation used as a loading indicator.
 * Tetrimino pieces fall endlessly in a small canvas.
 * 
 * @param {string} text – Loading text to display (default: "Loading...")
 */
export default function TetrisLoader({ text = "Loading..." }) {
    const canvasRef = useRef(null);
    const animRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const blockSize = 24;
        const cols = 20;
        const rows = 22;
        canvas.width = cols * blockSize;
        canvas.height = rows * blockSize;

        // Grid to track landed blocks
        const grid = Array.from({ length: rows }, () =>
            Array(cols).fill(null)
        );

        function drawBlock(x, y, color) {
            const px = x * blockSize;
            const py = y * blockSize;
            ctx.fillStyle = color;
            ctx.fillRect(px, py, blockSize, blockSize);
            ctx.fillStyle = "rgba(255,255,255,0.2)";
            ctx.fillRect(px, py, blockSize, 2);
            ctx.fillRect(px, py, 2, blockSize);
            ctx.fillStyle = "rgba(0,0,0,0.3)";
            ctx.fillRect(px, py + blockSize - 2, blockSize, 2);
            ctx.fillRect(px + blockSize - 2, py, 2, blockSize);
            ctx.strokeStyle = "rgba(0,0,0,0.4)";
            ctx.lineWidth = 1;
            ctx.strokeRect(px + 0.5, py + 0.5, blockSize - 1, blockSize - 1);
        }

        // Current falling piece
        let piece = null;

        function spawnPiece() {
            const shapeIdx = Math.floor(Math.random() * SHAPES.length);
            const shape = SHAPES[shapeIdx];
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];
            const pieceWidth = shape[0].length;
            return {
                shape,
                color,
                x: Math.floor(Math.random() * (cols - pieceWidth)),
                y: -shape.length,
                dropTimer: 0,
                dropSpeed: 3 + Math.floor(Math.random() * 3), // frames per drop
            };
        }

        function canMove(p, dx, dy) {
            for (let r = 0; r < p.shape.length; r++) {
                for (let c = 0; c < p.shape[r].length; c++) {
                    if (p.shape[r][c]) {
                        const nx = p.x + c + dx;
                        const ny = p.y + r + dy;
                        if (nx < 0 || nx >= cols || ny >= rows) return false;
                        if (ny >= 0 && grid[ny][nx]) return false;
                    }
                }
            }
            return true;
        }

        function lockPiece(p) {
            for (let r = 0; r < p.shape.length; r++) {
                for (let c = 0; c < p.shape[r].length; c++) {
                    if (p.shape[r][c]) {
                        const gy = p.y + r;
                        const gx = p.x + c;
                        if (gy >= 0 && gy < rows && gx >= 0 && gx < cols) {
                            grid[gy][gx] = p.color;
                        }
                    }
                }
            }
            // Clear full rows
            for (let row = rows - 1; row >= 0; row--) {
                if (grid[row].every((cell) => cell !== null)) {
                    grid.splice(row, 1);
                    grid.unshift(Array(cols).fill(null));
                    row++; // recheck this row
                }
            }
        }

        piece = spawnPiece();

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw grid background
            ctx.strokeStyle = "rgba(255,255,255,0.04)";
            for (let x = 0; x <= cols; x++) {
                ctx.beginPath();
                ctx.moveTo(x * blockSize, 0);
                ctx.lineTo(x * blockSize, canvas.height);
                ctx.stroke();
            }
            for (let y = 0; y <= rows; y++) {
                ctx.beginPath();
                ctx.moveTo(0, y * blockSize);
                ctx.lineTo(canvas.width, y * blockSize);
                ctx.stroke();
            }

            // Draw landed blocks
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (grid[r][c]) drawBlock(c, r, grid[r][c]);
                }
            }

            // Move piece down
            piece.dropTimer++;
            if (piece.dropTimer >= piece.dropSpeed) {
                piece.dropTimer = 0;
                if (canMove(piece, 0, 1)) {
                    piece.y++;
                } else {
                    lockPiece(piece);
                    piece = spawnPiece();
                    // If new piece can't spawn, clear the grid (restart)
                    if (!canMove(piece, 0, 0)) {
                        for (let r = 0; r < rows; r++) {
                            grid[r].fill(null);
                        }
                    }
                }
            }

            // Draw falling piece
            for (let r = 0; r < piece.shape.length; r++) {
                for (let c = 0; c < piece.shape[r].length; c++) {
                    if (piece.shape[r][c]) {
                        const py = piece.y + r;
                        if (py >= 0) drawBlock(piece.x + c, py, piece.color);
                    }
                }
            }

            animRef.current = requestAnimationFrame(animate);
        }

        animRef.current = requestAnimationFrame(animate);

        return () => {
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, []);

    return (
        <div className="tetris-loader-overlay">
            <canvas ref={canvasRef} className="tetris-loader-canvas" />
            <span className="tetris-loader-text">{text}</span>
        </div>
    );
}
