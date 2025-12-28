"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { projectsData } from '@/lib/data/projects';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types';

function ProjectCard({ project }: { project: Project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!project.images || project.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [project.images]);

    return (
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
            <div className="h-48 relative overflow-hidden group">
                {project.images && project.images.length > 0 ? (
                    <div className="relative h-full w-full bg-gray-100 dark:bg-gray-800">
                        <AnimatePresence mode="popLayout" initial={false}>
                            <motion.img
                                key={currentImageIndex}
                                src={project.images[currentImageIndex]}
                                alt={project.title}
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ duration: 1.0, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full object-cover"
                                whileHover={{ scale: 1.5 }}
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />

                        {/* Indicadores de carrusel si hay más de una imagen */}
                        {project.images.length > 1 && (
                            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
                                {project.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-1.5 h-1.5 rounded-full shadow-sm transition-all ${idx === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                        <span className="text-6xl">🚀</span>
                    </div>
                )}
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    {project.featured && (
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600">
                            Destacado
                        </Badge>
                    )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map(tech => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                </div>
                <div className="flex gap-2">
                    {project.demoUrl && (
                        <Button size="sm" variant="outline" asChild className="flex-1">
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Demo
                            </a>
                        </Button>
                    )}
                    {project.sourceUrl && (
                        <Button size="sm" variant="outline" asChild className="flex-1">
                            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-1" />
                                Código
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState('Todos');

    const categories = ['Todos', ...Array.from(new Set(projectsData.map(p => p.category)))];
    const filteredProjects = filter === 'Todos'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-24 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Proyectos</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Una selección de proyectos en los que he trabajado y desarrollado.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(category => (
                        <Button
                            key={category}
                            variant={filter === category ? 'default' : 'outline'}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
