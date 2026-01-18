export default function Contact() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-dark-purple to-brand-navy pt-24 px-8 text-white">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-12">Get In Touch</h1>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl shadow-brand-navy/50">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-gray-300 mb-2 font-medium">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2 font-medium">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2 font-medium">Message</label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all resize-none"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-brand-purple to-brand-salmon text-white font-semibold rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-brand-purple/30"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
