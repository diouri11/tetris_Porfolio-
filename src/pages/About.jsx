export default function About() {
    return (
        <main className="min-h-screen bg-brand-navy bg-tetris-grid pt-24 pb-12 px-4 sm:px-8 scanlines text-white">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Heading Block */}
                <div className="bg-brand-dark-purple p-6 tetris-block-shadow tetris-border w-fit">
                    <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter italic">
                        About Me
                    </h1>
                </div>

                {/* Intro Section */}
                <section className="bg-black/40 p-8 tetris-block-shadow tetris-border rounded-lg relative overflow-hidden group">
                    <div className="z-10 relative">
                        <h2 className="text-2xl font-black text-brand-salmon mb-4 uppercase">/ Personal Statement /</h2>
                        <p className="text-xl leading-snug font-bold border-l-4 border-brand-purple pl-4 text-gray-200">
                            Hi, I’m <span className="text-brand-yellow" style={{ fontFamily: "'Pixelify Sans', sans-serif" }}>Adam Diouri</span> — a second-year full-stack developer student at CMC Casablanca and a cybersecurity enthusiast. I’m passionate about creating web applications that are functional, efficient, and secure. I thrive on solving complex problems, learning new technologies, and exploring the intersection between software development and cybersecurity.
                        </p>
                        <p className="mt-4 text-lg font-medium italic text-brand-cyan">
                            I believe technology is most powerful when it’s built with purpose, security, and user experience in mind.
                        </p>
                    </div>
                </section>

                {/* My Journey - Staggered Blocks */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <section className="bg-brand-dark-purple p-8 tetris-block-shadow tetris-border rounded-lg">
                        <h2 className="text-2xl font-black uppercase text-brand-orange mb-6">/ My Journey /</h2>
                        <div className="space-y-4 font-bold text-gray-100 italic">
                            <p>
                                I started programming with <span className="text-brand-green">Python and C</span>, focusing on building small projects that taught me logic, problem-solving, and low-level system understanding.
                            </p>
                            <p className="border-l-2 border-brand-yellow pl-4">
                                Over time, I expanded into full-stack development, mastering technologies such as React, Vue.js, Next.js, and more.
                            </p>
                        </div>
                    </section>
                    <section className="bg-brand-navy/60 p-8 tetris-block-shadow tetris-border rounded-lg mt-0 lg:mt-12">
                        <p className="font-bold text-gray-200 leading-relaxed">
                            Alongside development, I discovered my interest in <span className="text-brand-salmon animate-pulse">Cybersecurity</span>. Exploring ethical hacking, penetration testing, and bug bounty programs gave me insight into how software can be exploited and how to prevent it.
                        </p>
                        <p className="mt-4 text-gray-400 font-medium">
                            I aim to build applications with a mindset that prioritizes safety and performance.
                        </p>
                    </section>
                </div>

                {/* Skills & Expertise Grid */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-black uppercase text-brand-yellow text-center italic">/// Expertise ///</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Frontend */}
                        <div className="bg-brand-blue p-6 tetris-block-shadow tetris-border">
                            <h3 className="font-black text-white uppercase mb-4 text-xl border-b-2 border-brand-cyan inline-block">Frontend</h3>
                            <ul className="text-white/90 font-bold space-y-2 text-sm italic">
                                <li>React, Vue.js, Next.js</li>
                                <li>HTML5 / CSS3 / JavaScript</li>
                                <li>TailwindCSS</li>
                                <li>Redux & Vuex</li>
                                <li>GSAP Animations</li>
                            </ul>
                        </div>
                        {/* Backend */}
                        <div className="bg-brand-purple p-6 tetris-block-shadow tetris-border mt-6 lg:mt-0">
                            <h3 className="font-black text-white uppercase mb-4 text-xl border-b-2 border-brand-salmon inline-block">Backend</h3>
                            <ul className="text-white/90 font-bold space-y-2 text-sm italic">
                                <li>Node.js & Express</li>
                                <li>Python</li>
                                <li>SQL & MongoDB</li>
                                <li>Secure Auth</li>
                                <li>API Architecture</li>
                            </ul>
                        </div>
                        {/* Cyber */}
                        <div className="bg-brand-red p-6 tetris-block-shadow tetris-border">
                            <h3 className="font-black text-white uppercase mb-4 text-xl border-b-2 border-brand-yellow inline-block">Cybersec</h3>
                            <ul className="text-white/90 font-bold space-y-2 text-sm italic">
                                <li>Ethical Hacking</li>
                                <li>Penetration Testing</li>
                                <li>Bug Bounty Hunting</li>
                                <li>IDOR / XSS / CSRF</li>
                                <li>CCNA Basics</li>
                            </ul>
                        </div>
                        {/* Tools */}
                        <div className="bg-brand-dark-orange p-6 tetris-block-shadow tetris-border mt-6 lg:mt-0">
                            <h3 className="font-black text-white uppercase mb-4 text-xl border-b-2 border-brand-green inline-block">Tools</h3>
                            <ul className="text-white/90 font-bold space-y-2 text-sm italic">
                                <li>Git & GitHub</li>
                                <li>Docker</li>
                                <li>Linux</li>
                                <li>VS Code</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Current Focus & Learning */}
                <section className="bg-black/20 p-8 tetris-block-shadow tetris-border border-dashed">
                    <h2 className="text-2xl font-black uppercase text-brand-cyan mb-6 tracking-widest animate-flicker">Current Focus: Loading...</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-4 border border-brand-cyan/20 bg-brand-cyan/5 rounded italic font-bold">OSCP, CEH, Security+ Prep</div>
                        <div className="p-4 border border-brand-yellow/20 bg-brand-yellow/5 rounded italic font-bold">Complex React/Next.js Apps</div>
                        <div className="p-4 border border-brand-purple/20 bg-brand-purple/5 rounded italic font-bold">Bug Bounty Research</div>
                        <div className="p-4 border border-brand-red/20 bg-brand-red/5 rounded italic font-bold">Secure Coding Practices</div>
                    </div>
                </section>

                {/* Interests Section */}
                <section className="bg-brand-green/10 p-8 tetris-block-shadow tetris-border">
                    <h2 className="text-2xl font-black uppercase text-brand-green mb-6">/ Extra Touch /</h2>
                    <div className="flex flex-wrap gap-4">
                        {["Snooker & Soccer", "Algorithm Challenges", "Gamer of the Year", "Philosophy & Ethics"].map((item, idx) => (
                            <div key={idx} className="bg-brand-green px-4 py-2 font-black uppercase text-xs tracking-tighter tetris-block-shadow">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Philosophy / Vision - The Special Block */}
                <section className="py-12 flex justify-center">
                    <div className="bg-white/5 p-12 tetris-block-shadow tetris-border text-center max-w-3xl relative">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-brand-yellow"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-brand-yellow"></div>
                        <h2 className="text-brand-yellow font-black uppercase tracking-[0.5em] mb-8">My Vision</h2>
                        <blockquote className="text-2xl md:text-3xl font-bold italic mb-8 leading-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                            "By time, indeed, mankind is in loss, except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience."
                        </blockquote>
                        <cite className="text-brand-salmon font-black uppercase tracking-widest">— Surah Al-Asr</cite>
                        <p className="mt-8 text-gray-400 font-bold uppercase text-sm tracking-tighter">
                            Consistency • Integrity • Purposeful Effort
                        </p>
                    </div>
                </section>

            </div>
        </main>
    );
}
