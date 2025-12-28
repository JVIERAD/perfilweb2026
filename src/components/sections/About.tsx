"use client";

import { motion } from 'framer-motion';
import { profileData } from '@/lib/data/profile';
import { Card } from '@/components/ui/card';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Sobre Mí</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 border-none shadow-lg">
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                {profileData.bio}
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        <span className="font-semibold">Email:</span> {profileData.email}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        <span className="font-semibold">Ubicación:</span> {profileData.location}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        <span className="font-semibold">Disponibilidad:</span> {profileData.availability}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Filosofía de Trabajo</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Creo firmemente en el trabajo de calidad, siguiendo las mejores prácticas y enfocándome en entender
                            el problema antes de actuar. Trabajo con disciplina, aprendizaje continuo y resultados.
                            "Si lo puedes imaginar, lo puedes programar".
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                                <p className="text-3xl font-bold text-blue-600 mb-1">2+</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Años de Experiencia</p>
                            </div>
                            <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                                <p className="text-3xl font-bold text-purple-600 mb-1">10+</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Proyectos Completados</p>
                            </div>
                            <div className="p-4 bg-pink-50 dark:bg-pink-900/30 rounded-lg">
                                <p className="text-3xl font-bold text-pink-600 mb-1">10+</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Clientes Satisfechos</p>
                            </div>
                            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                                <p className="text-3xl font-bold text-indigo-600 mb-1">40+</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Tecnologías</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
