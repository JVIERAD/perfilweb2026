"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { testimonialsData, getAverageRating } from '@/lib/data/testimonials';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    };

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(interval);
    }, []);

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`h-5 w-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
            />
        ));
    };

    return (
        <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Testimonios</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Lo que dicen mis clientes y estudiantes
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2">
                        <div className="flex">{renderStars(5)}</div>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">{getAverageRating()}</span>
                        <span className="text-gray-600 dark:text-gray-400">({testimonialsData.length} reseñas)</span>
                    </div>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="p-8 md:p-12 dark:bg-gray-700">
                            <div className="flex mb-4">{renderStars(testimonialsData[currentIndex].rating)}</div>

                            <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">
                                "{testimonialsData[currentIndex].comment}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                                    {testimonialsData[currentIndex].name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white">
                                        {testimonialsData[currentIndex].name}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {testimonialsData[currentIndex].role} @ {testimonialsData[currentIndex].company}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    <div className="flex justify-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevTestimonial}
                            className="rounded-full"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <div className="flex items-center gap-2">
                            {testimonialsData.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all ${index === currentIndex
                                        ? 'w-8 bg-blue-600 dark:bg-blue-400'
                                        : 'w-2 bg-gray-300 dark:bg-gray-600'
                                        }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextTestimonial}
                            className="rounded-full"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
