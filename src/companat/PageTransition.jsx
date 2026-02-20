import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TetrisLoader from "./TetrisLoader";

/**
 * PageTransition – Shows a brief Tetris loader animation
 * every time the route changes, before revealing the page content.
 */
export default function PageTransition({ children }) {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (loading) {
        return (
            <main className="min-h-screen bg-brand-navy flex items-center justify-center">
                <TetrisLoader text="Loading..." />
            </main>
        );
    }

    return children;
}
