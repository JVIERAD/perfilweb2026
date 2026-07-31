import { Testimonial } from '@/types';

export const testimonialsData: Testimonial[] = [
    {
        id: "1",
        name: "Angel Sanchez",
        role: "Emprendedor Digital",
        company: "Marca Personal",
        rating: 5,
        comment: "Excelente trabajo en el desarrollo de nuestra plataforma. Su atención al detalle y capacidad para resolver problemas complejos fue genial. Definitivamente lo recomendaría.",
        date: "2025-06",
        projectRelated: "Marketing Digital"
    },
    {
        id: "2",
        name: "Fio Rodriguez",
        role: "Emprendedora Digital",
        company: "Store Burgger",
        rating: 5,
        comment: "Trabajar con Javier fue una experiencia fantástica. Entregó el proyecto antes de tiempo y con una calidad excepcional. Su conocimiento es sobresaliente.",
        date: "2025-07",
        projectRelated: "Store Burgger"
    },
    {
        id: "3",
        name: "Ana Martínez",
        role: "Founder",
        company: "Startup Innovadora",
        rating: 4,
        comment: "Muy profesional y comunicativo durante todo el proyecto. La aplicación móvil que desarrolló superó nuestras expectativas en términos de rendimiento y UX.",
        date: "2025-09",
        projectRelated: "Task Management App"
    },
    {
        id: "4",
        name: "Luis Fernández",
        role: "CTO",
        company: "Anonimo",
        rating: 5,
        comment: "Su experiencia en arquitectura de sistemas fue clave para escalar nuestra infraestructura. Altamente recomendado para proyectos complejos.",
        date: "2024-07",
        projectRelated: "Anonimo"
    },
    {
        id: "5",
        name: "Patricia González",
        role: "Development Lead",
        company: "Software Agency",
        rating: 5,
        comment: "Un desarrollador excepcional con gran capacidad para trabajar en equipo. Sus contribuciones mejoraron significativamente la calidad de nuestro código.",
        date: "2024-10",
        projectRelated: "Software Agency"
    }
];

// Helper function to get average rating
export const getAverageRating = () => {
    const total = testimonialsData.reduce((sum, t) => sum + t.rating, 0);
    return (total / testimonialsData.length).toFixed(1);
};

// Get testimonials count
export const getTestimonialsCount = () => testimonialsData.length;
