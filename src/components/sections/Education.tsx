"use client";

import { motion } from 'framer-motion';
import { educationData, certificationsData } from '@/lib/data/education';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Education() {
    return (
        <section id="education" className="py-24 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Formación Académica</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                </motion.div>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Educación</h3>
                    <div className="space-y-6">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="p-6 dark:bg-gray-700">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                                        <span className="text-gray-600 dark:text-gray-300">
                                            {edu.startDate} - {edu.endDate}
                                        </span>
                                    </div>
                                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{edu.institution}</p>
                                    <p className="text-gray-600 dark:text-gray-300 mb-3">{edu.description}</p>
                                    {edu.gpa && <p className="text-sm text-gray-500 dark:text-gray-400">Promedio de calificaciones: {edu.gpa}</p>}
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Certificaciones</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificationsData.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="p-6 h-full dark:bg-gray-700">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h4>
                                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-3">{cert.issuer}</p>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Emitido: {cert.issueDate}</p>
                                    {cert.expiryDate && (
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Expira: {cert.expiryDate}</p>
                                    )}
                                    {cert.credentialUrl && (
                                        <a
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            Ver credencial →
                                        </a>
                                    )}
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
