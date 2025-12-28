"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download, Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profileData } from '@/lib/data/profile';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    <motion.div variants={itemVariants} className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-50"></div>
                            <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-700 shadow-xl">
                                <img
                                    src={profileData.image}
                                    alt={profileData.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
                    >
                        {profileData.name}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
                    >
                        {profileData.title}
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
                    >
                        {profileData.tagline}
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-md text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-12"
                    >
                        📍 {profileData.location} • {profileData.availability}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button size="lg" asChild className="group">
                            <a href={profileData.cvUrl} download>
                                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                                Descargar CV
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a href="#contact">
                                <Mail className="mr-2 h-5 w-5" />
                                Contáctame
                            </a>
                        </Button>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-12 flex justify-center gap-6"
                    >
                        {profileData.socialLinks.slice(0, 3).map((link) => (
                            <a
                                key={link.platform}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                {link.platform === 'GitHub' && <Github className="h-6 w-6" />}
                                {link.platform === 'LinkedIn' && <Linkedin className="h-6 w-6" />}
                                {link.platform === 'WhatsApp' && <MessageCircle className="h-6 w-6" />}
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2 text-gray-400">
                    <span className="text-sm">Desliza hacia abajo</span>
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
