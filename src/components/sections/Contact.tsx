"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { profileData } from '@/lib/data/profile';

const contactSchema = z.object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
    message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitStatus('success');
                reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contáctame</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        ¿Tienes un proyecto en mente? No dudes en contactarme
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Información de Contacto
                        </h3>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                                    <a
                                        href={`mailto:${profileData.email}`}
                                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {profileData.email}
                                    </a>
                                </div>
                            </div>

                            {profileData.phone && (
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white">Teléfono</p>
                                        <a
                                            href={`tel:${profileData.phone}`}
                                            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                        >
                                            {profileData.phone}
                                        </a>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-6 w-6 text-pink-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">Ubicación</p>
                                    <p className="text-gray-600 dark:text-gray-300">{profileData.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-lg">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Disponibilidad</h4>
                            <p className="text-gray-700 dark:text-gray-300">{profileData.availability}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-6">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Nombre *
                                    </label>
                                    <Input
                                        {...register('name')}
                                        placeholder="Tu nombre"
                                        className={errors.name ? 'border-red-500' : ''}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Email *
                                    </label>
                                    <Input
                                        {...register('email')}
                                        type="email"
                                        placeholder="tu@email.com"
                                        className={errors.email ? 'border-red-500' : ''}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Asunto *
                                    </label>
                                    <Input
                                        {...register('subject')}
                                        placeholder="Asunto del mensaje"
                                        className={errors.subject ? 'border-red-500' : ''}
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Mensaje *
                                    </label>
                                    <Textarea
                                        {...register('message')}
                                        placeholder="Escribe tu mensaje aquí..."
                                        rows={6}
                                        className={errors.message ? 'border-red-500' : ''}
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                    )}
                                </div>

                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-green-800">
                                            ¡Mensaje enviado con éxito! Te responderé pronto.
                                        </p>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-red-800">
                                            Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                                        </p>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        'Enviar Mensaje'
                                    )}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
