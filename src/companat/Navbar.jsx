import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-red backdrop-blur-md border-b border-white/20 shadow-[0_4px_20px_rgba(234,20,28,0.3)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-black italic tracking-tighter text-white hover:text-brand-yellow transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    >
                        ADAM DIOURI
                    </Link>

                    {/* Integrated Game Over Element */}
                    <div className="hidden lg:flex items-center space-x-2 bg-black/40 px-4 py-1.5 rounded-full border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse shadow-[0_0_8px_#FEFB34]"></div>
                        <span className="text-[10px] uppercase font-black tracking-widest text-white animate-flicker">
                            System Status: <span className="text-brand-yellow">Game Over</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`relative px-4 py-2 text-sm font-bold uppercase tracking-tight transition-all duration-300
                    ${isActive(link.path)
                                            ? "text-white scale-110"
                                            : "text-white/60 hover:text-white"
                                        }
                  `}
                                >
                                    {link.name}
                                    {isActive(link.path) && (
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-brand-yellow shadow-[0_0_8px_#FEFB34]"></span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="px-5 py-2 bg-gradient-to-r from-brand-purple to-brand-salmon text-white text-sm font-bold uppercase tracking-widest rounded-full hover:scale-105 hover:shadow-lg hover:shadow-brand-purple/40 transition-all duration-300 border border-white/10"
                        >
                            Hire Me
                        </Link>
                    </div>

                    {/* Mobile Menu Button omitted for brevity in search but kept in file if possible, or I'll just replace the whole nav block */}
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white hover:text-brand-yellow transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 py-4 space-y-2 bg-brand-red border-t border-white/20 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all duration-300
                ${isActive(link.path)
                                    ? "text-white bg-black/20 border border-white/30"
                                    : "text-white/70 hover:text-white hover:bg-black/10"
                                }
              `}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-white/10 flex justify-center">
                        <span className="text-[10px] uppercase font-black tracking-widest text-white animate-flicker">
                            GAME OVER
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
