import { useState, useEffect } from 'react';
import TetrisLoader from '../companat/TetrisLoader';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/diouri11/repos');
                if (!response.ok) throw new Error('Failed to fetch projects');
                const data = await response.json();

                const filteredProjects = data.filter(repo => {
                    const excludedNames = [
                        'task_manager',
                        'jalal_adam',
                        'alx-low_level_programming',
                        'iOSInitialSetup',
                        'alx-zero_day',
                        'zero_day',
                        'alx-pre_course'
                    ];

                    if (excludedNames.includes(repo.name)) return false;
                    if (repo.name.startsWith('cmc_ex')) return false;
                    return true;
                });

                setProjects(filteredProjects);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-dark-purple to-brand-navy pt-24 px-8 text-white">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-12">My Projects</h1>

                {loading ? (
                    <TetrisLoader text="Loading Projects..." />
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, idx) => {
                            const gradients = [
                                "from-brand-red to-brand-salmon",
                                "from-brand-yellow to-brand-orange",
                                "from-brand-med-blue to-brand-cyan",
                            ];

                            return (
                                <div
                                    key={project.id}
                                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:scale-[1.03] transition-all duration-500 flex flex-col group h-full"
                                >
                                    <div className={`h-40 bg-gradient-to-br ${gradients[idx % gradients.length]} rounded-xl mb-4 group-hover:shadow-lg transition-all duration-500`}></div>
                                    <h3 className="text-xl font-bold mb-2 truncate" title={project.name}>
                                        {project.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                                    </h3>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-4 line-clamp-3 text-sm flex-grow">
                                        {project.description || "No description available."}
                                    </p>
                                    <a
                                        href={project.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-center w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-sm font-semibold mt-auto"
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </main>
    );
}
