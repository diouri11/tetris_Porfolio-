export default function Contact() {
    return (
        <main className="min-h-screen bg-brand-navy bg-tetris-grid pt-24 pb-12 px-4 sm:px-8 scanlines">
            <div className="max-w-4xl mx-auto space-y-12">

                <section className="text-center">
                    <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-4 italic">
                        <span className="text-brand-cyan">Contact</span> Me
                    </h1>
                    <p className="text-lg text-gray-300 font-bold max-w-xl mx-auto">
                        Feel free to reach out — I'm always open to new opportunities, collaborations, and conversations.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Phone Card */}
                    <a
                        href="tel:+212612345678"
                        className="group bg-black/40 tetris-border tetris-block-shadow p-8 flex flex-col items-center text-center hover:scale-105 transition-all duration-300 no-underline"
                    >
                        <div className="w-16 h-16 bg-brand-green flex items-center justify-center tetris-block-shadow mb-6">
                            <span className="text-3xl">📞</span>
                        </div>
                        <h2 className="text-2xl font-black uppercase text-brand-green mb-2">Phone</h2>
                        <p className="text-gray-300 font-bold text-lg group-hover:text-white transition-colors">
                            +212 6 12 34 56 78
                        </p>
                        <span className="mt-4 text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-brand-green transition-colors">
                            Tap to call →
                        </span>
                    </a>

                    {/* Email Card */}
                    <a
                        href="mailto:adam.diouri@example.com"
                        className="group bg-black/40 tetris-border tetris-block-shadow p-8 flex flex-col items-center text-center hover:scale-105 transition-all duration-300 no-underline"
                    >
                        <div className="w-16 h-16 bg-brand-purple flex items-center justify-center tetris-block-shadow mb-6">
                            <span className="text-3xl">✉️</span>
                        </div>
                        <h2 className="text-2xl font-black uppercase text-brand-purple mb-2">Email</h2>
                        <p className="text-gray-300 font-bold text-lg group-hover:text-white transition-colors">
                            adam.diouri@example.com
                        </p>
                        <span className="mt-4 text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-brand-purple transition-colors">
                            Click to email →
                        </span>
                    </a>

                    {/* GitHub Card */}
                    <a
                        href="https://github.com/diouri11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-black/40 tetris-border tetris-block-shadow p-8 flex flex-col items-center text-center hover:scale-105 transition-all duration-300 no-underline"
                    >
                        <div className="w-16 h-16 bg-brand-cyan flex items-center justify-center tetris-block-shadow mb-6">
                            <span className="text-3xl">💻</span>
                        </div>
                        <h2 className="text-2xl font-black uppercase text-brand-cyan mb-2">GitHub</h2>
                        <p className="text-gray-300 font-bold text-lg group-hover:text-white transition-colors">
                            github.com/diouri11
                        </p>
                        <span className="mt-4 text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-brand-cyan transition-colors">
                            View repos →
                        </span>
                    </a>

                    {/* LinkedIn Card */}
                    <a
                        href="https://linkedin.com/in/adam-diouri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-black/40 tetris-border tetris-block-shadow p-8 flex flex-col items-center text-center hover:scale-105 transition-all duration-300 no-underline"
                    >
                        <div className="w-16 h-16 bg-brand-blue flex items-center justify-center tetris-block-shadow mb-6">
                            <span className="text-3xl">🔗</span>
                        </div>
                        <h2 className="text-2xl font-black uppercase text-brand-blue mb-2">LinkedIn</h2>
                        <p className="text-gray-300 font-bold text-lg group-hover:text-white transition-colors">
                            Adam Diouri
                        </p>
                        <span className="mt-4 text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-brand-blue transition-colors">
                            Connect →
                        </span>
                    </a>

                </section>

                <div className="text-center pt-8 border-t border-white/10">
                    <span className="text-brand-yellow text-xs font-black uppercase tracking-[1em] animate-pulse">
                        Let's Build Something Great
                    </span>
                </div>

            </div>
        </main>
    );
}
