"use client";

import { motion } from 'framer-motion';
import { coursesData } from '@/lib/data/courses';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen } from 'lucide-react';

export default function Courses() {
    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Beginner':
                return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
            case 'Intermediate':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
            case 'Advanced':
                return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
        }
    };

    return (
        <section id="courses" className="py-24 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Cursos que Puedo Impartir</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Comparto mis conocimientos a través de cursos especializados, contactame 😊.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {coursesData.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="p-6 h-full hover:shadow-lg transition-shadow dark:bg-gray-800">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex-1">
                                        {course.title}
                                    </h3>
                                    <Badge className={getLevelColor(course.level)}>
                                        {course.level}
                                    </Badge>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>

                                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <BookOpen className="h-4 w-4" />
                                        <span>{course.curriculum.length} módulos</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tecnologías:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {course.technologies.map(tech => (
                                            <Badge key={tech} variant="outline">{tech}</Badge>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Temario:</h4>
                                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                        {course.curriculum.slice(0, 5).map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                        {course.curriculum.length > 5 && (
                                            <li className="text-blue-600 dark:text-blue-400">
                                                +{course.curriculum.length - 5} módulos más...
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
