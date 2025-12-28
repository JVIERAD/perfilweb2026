"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { skillsData, getSkillCategories } from '@/lib/data/skills';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
    const categories = getSkillCategories();
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredSkills =
        activeCategory === 'All'
            ? skillsData
            : skillsData.filter((skill) => skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Habilidades Técnicas</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Tecnologías y herramientas con las que trabajo diariamente
                    </p>
                </motion.div>

                <Tabs defaultValue="All" className="w-full">
                    <TabsList className="flex flex-wrap justify-center gap-2 h-auto p-2 bg-transparent mb-8">
                        <TabsTrigger value="All" onClick={() => setActiveCategory('All')}>
                            Todas
                        </TabsTrigger>
                        {categories.map((category) => (
                            <TabsTrigger
                                key={category}
                                value={category}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <TabsContent value={activeCategory} className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                                        <Badge variant="outline">{skill.category}</Badge>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                                            <span>Competencia</span>
                                            <span className="font-semibold">{skill.proficiency}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.proficiency}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full"
                                            />
                                        </div>
                                        {skill.yearsOfExperience && (
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                                {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'año' : 'años'} de experiencia
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
