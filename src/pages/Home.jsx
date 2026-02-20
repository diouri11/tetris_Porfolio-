import { Link } from "react-router-dom";
import profileImg from "../assets/WhatsApp Image 2026-01-09 at 18.31.07.jpeg";
import TetrisNameGame from "../companat/TetrisNameGame";

export default function Home() {
    return (
        <main className="min-h-screen bg-brand-navy bg-tetris-grid pt-24 pb-12 px-4 sm:px-8 scanlines">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Tetris Name Animation */}
                <section>
                    <TetrisNameGame />
                </section>

                <section className="grid md:grid-cols-12 gap-8 items-center bg-black/40 p-8 tetris-block-shadow tetris-border rounded-lg relative overflow-hidden group">
                    <div className="md:col-span-8 z-10">
                        <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-4 italic">
                            Hi, I’m <span className="text-brand-yellow" style={{ fontFamily: "'Pixelify Sans', sans-serif" }}>Adam Diouri</span> —
                            <span className="block text-brand-salmon">Full-Stack Developer</span> &
                            <span className="text-brand-cyan"> Cybersecurity Enthusiast</span>
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-tight font-bold border-l-4 border-brand-purple pl-4">
                            I build responsive web applications, explore advanced security practices, and dive into ethical hacking challenges to make technology safer and smarter.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/projects" className="px-6 py-3 bg-brand-purple text-white font-black uppercase tracking-widest tetris-block-shadow hover:scale-105 active:scale-95 transition-all inline-block">
                                View My Work
                            </Link>
                            <button className="px-6 py-3 bg-brand-blue text-white font-black uppercase tracking-widest tetris-block-shadow hover:scale-105 active:scale-95 transition-all">
                                <a target="_blank" href="https://drive.google.com/file/d/1Zh6YH74jdUPI3GX6Y5rRydKXLtqEVjQH/view?usp=sharing"> Download Resume </a>
                            </button>
                            <Link to="/contact" className="px-6 py-3 bg-brand-green text-white font-black uppercase tracking-widest tetris-block-shadow hover:scale-105 active:scale-95 transition-all inline-block">
                                Contact Me
                            </Link>
                        </div>
                    </div>
                    <div className="md:col-span-4 flex justify-center">
                        <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
                            <div className="absolute inset-0 bg-brand-purple animate-pulse blur-xl opacity-30"></div>
                            <img
                                src={profileImg}
                                alt="Adam Diouri"
                                className="w-full h-full object-cover tetris-border tetris-block-shadow grayscale hover:grayscale-0 transition-all duration-500 rounded-lg relative z-10"
                            />
                        </div>
                    </div>
                </section>


                <section className="bg-brand-dark-purple p-8 tetris-block-shadow tetris-border rounded-lg">
                    <h2 className="text-3xl font-black uppercase text-brand-yellow mb-6">/ About Me /</h2>
                    <div className="space-y-4 text-gray-100 font-medium text-lg max-w-4xl">
                        <p>
                            I’m a passionate developer currently studying full-stack development, with hands-on experience in Python, C, JavaScript, React, and modern web technologies.
                        </p>
                        <p className="border-l-4 border-brand-orange pl-4 bg-black/20 py-2">
                            Beyond coding, I’m exploring cybersecurity, penetration testing, and bug bounty programs, aiming to combine secure software practices with efficient design.
                        </p>
                        <p>
                            I enjoy tackling challenging problems, optimizing applications, and learning new technologies every day.
                        </p>
                    </div>
                </section>


                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-brand-red p-6 tetris-block-shadow tetris-border flex flex-col items-center">
                        <h3 className="font-black text-white uppercase mb-4 text-xl">Frontend</h3>
                        <ul className="text-white/90 font-bold space-y-1 text-center">
                            <li>React</li>
                            <li>TailwindCSS</li>
                            <li>HTML5 / CSS3</li>
                            <li>JavaScript</li>
                            <li>Redux</li>
                        </ul>
                    </div>
                    <div className="bg-brand-blue p-6 tetris-block-shadow tetris-border flex flex-col items-center mt-6 lg:mt-12">
                        <h3 className="font-black text-white uppercase mb-4 text-xl">Backend</h3>
                        <ul className="text-white/90 font-bold space-y-1 text-center">
                            <li>Node.js</li>
                            <li>Python</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div className="bg-brand-purple p-6 tetris-block-shadow tetris-border flex flex-col items-center">
                        <h3 className="font-black text-white uppercase mb-4 text-xl">Cybersecurity</h3>
                        <ul className="text-white/90 font-bold space-y-1 text-center">
                            <li>Ethical Hacking</li>
                            <li>Bug Bounty</li>
                            <li>Security+</li>
                            <li>CCNA Basics</li>
                        </ul>
                    </div>
                    <div className="bg-brand-orange p-6 tetris-block-shadow tetris-border flex flex-col items-center mt-6 lg:mt-12">
                        <h3 className="font-black text-white uppercase mb-4 text-xl">Tools</h3>
                        <ul className="text-white/90 font-bold space-y-1 text-center">
                            <li>Git / GitHub</li>
                            <li>Docker</li>
                            <li>VS Code</li>
                            <li>Linux</li>
                        </ul>
                    </div>
                </section>


                <section className="space-y-8">
                    <h2 className="text-4xl font-black uppercase text-brand-salmon italic">/// Selected Projects ///</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group bg-black/40 tetris-border tetris-block-shadow p-6 hover:bg-black/60 transition-all">
                            <div className="h-4 w-1/2 bg-brand-cyan mb-4 animate-flicker"></div>
                            <h3 className="text-2xl font-black text-white mb-2 uppercase">Portfolio Website</h3>
                            <p className="text-gray-400 font-bold mb-4">Built with React & TailwindCSS, showcases my skills and projects.</p>
                            <button className="px-4 py-2 bg-brand-cyan text-black font-black uppercase text-xs tetris-block-shadow">See Project</button>
                        </div>
                        <div className="group bg-black/40 tetris-border tetris-block-shadow p-6 hover:bg-black/60 transition-all">
                            <div className="h-4 w-1/2 bg-brand-red mb-4 animate-flicker delay-100"></div>
                            <h3 className="text-2xl font-black text-white mb-2 uppercase">Bug Bounty Labs</h3>
                            <p className="text-gray-400 font-bold mb-4">Hands-on exercises for finding and fixing vulnerabilities.</p>
                            <button className="px-4 py-2 bg-brand-red text-white font-black uppercase text-xs tetris-block-shadow">See Project</button>
                        </div>
                        <div className="group bg-black/40 tetris-border tetris-block-shadow p-6 hover:bg-black/60 transition-all">
                            <div className="h-4 w-1/2 bg-brand-yellow mb-4 animate-flicker delay-200"></div>
                            <h3 className="text-2xl font-black text-white mb-2 uppercase">Simple Shell (C)</h3>
                            <p className="text-gray-400 font-bold mb-4">A custom command-line shell to understand low-level programming.</p>
                            <button className="px-4 py-2 bg-brand-yellow text-black font-black uppercase text-xs tetris-block-shadow">See Project</button>
                        </div>
                        <div className="group bg-black/40 tetris-border tetris-block-shadow p-6 hover:bg-black/60 transition-all">
                            <div className="h-4 w-1/2 bg-brand-green mb-4 animate-flicker delay-300"></div>
                            <h3 className="text-2xl font-black text-white mb-2 uppercase">Management System</h3>
                            <p className="text-gray-400 font-bold mb-4">Python-based CRUD system for horse breeding data modeling.</p>
                            <button className="px-4 py-2 bg-brand-green text-white font-black uppercase text-xs tetris-block-shadow">See Project</button>
                        </div>
                    </div>
                </section>


                <section className="bg-white/5 tetris-border p-8 border-dashed border-2">
                    <h2 className="text-2xl font-black uppercase text-brand-cyan mb-6">Currently Loading...</h2>
                    <div className="grid md:grid-cols-3 gap-6 font-bold text-gray-300 italic">
                        <div className="border-l-2 border-brand-purple pl-4">
                            Deepening knowledge in cybersecurity (OSCP prep, bug bounty)
                        </div>
                        <div className="border-l-2 border-brand-yellow pl-4">
                            Improving full-stack skills by building advanced React applications
                        </div>
                        <div className="border-l-2 border-brand-red pl-4">
                            Exploring responsive and secure web applications with best practices
                        </div>
                    </div>
                </section>


                <div className="text-center pt-8 border-t border-white/10">
                    <span className="text-brand-yellow text-xs font-black uppercase tracking-[1em] animate-pulse">Level 99 Developer</span>
                </div>

            </div>
        </main>
    );
}
