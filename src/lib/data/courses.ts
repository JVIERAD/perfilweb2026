import { Course } from '@/types';

export const coursesData: Course[] = [
    {
        id: "1",
        title: "Desarrollo Web Moderno con React y Next.js",
        description: "Aprende a crear aplicaciones web modernas usando React 18, Next.js 14, TypeScript y Tailwind CSS desde cero hasta nivel avanzado",
        level: "Beginner",
        duration: "2 a 3 semanas (Aprox.)",
        curriculum: [
            "Fundamentos de React y componentes",
            "TypeScript para React",
            "Next.js App Router y Server Components",
            "Estilización con Tailwind CSS",
            "Gestión de estado (Context, Zustand)",
            "Integración de APIs y fetching de datos",
            "Autenticación y autorización",
            "Optimización y mejores prácticas",
            "Deployment en Vercel",
            "Proyecto final completo"
        ],
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        prerequisites: ["JavaScript básico", "HTML y CSS"],
        image: "/courses/react-nextjs.jpg"
    },
    {
        id: "2",
        title: "Ofimática y Herramientas Digitales para Estudiantes y Negocios",
        description: "Domina Microsoft Office y herramientas digitales modernas para destacar en la secundaria, universidad o emprendimientos",
        level: "Advanced",
        duration: "4 semanas (Aprox.)",
        curriculum: [
            "Introducción a la ofimática moderna",
            "Microsoft Word para trabajos académicos",
            "Microsoft Excel para cálculos y gráficos",
            "Microsoft PowerPoint para presentaciones efectivas",
            "Diseño básico con Canva",
            "Creación de sitios web con Wix y WordPress",
            "Introducción a Figma para diseño digital",
            "Organización de archivos y productividad",
            "Proyecto final integrador"
        ],
        technologies: ["Microsoft Office", "Canva", "Wix", "WordPress", "Figma"],
        prerequisites: ["Ninguno"],
        image: "/courses/ofimatica-herramientas.jpg"
    },
    {
        id: "3",
        title: "Herramientas Digitales e IA para el Trabajo Colaborativo",
        description: "Aprende a trabajar de forma colaborativa usando herramientas digitales modernas e inteligencia artificial para aumentar la productividad en estudios y negocios",
        level: "Intermediate",
        duration: "2 a 3 semanas (Aprox.)",
        curriculum: [
            "Introducción al trabajo colaborativo digital",
            "Google Workspace y Microsoft 365",
            "Gestión de archivos en la nube",
            "Trabajo en equipo con Drive, OneDrive y Teams",
            "Introducción a la Inteligencia Artificial aplicada",
            "Uso práctico de IA para tareas académicas y laborales",
            "Automatización básica de tareas",
            "Buenas prácticas de colaboración y comunicación",
            "Proyecto práctico colaborativo"
        ],
        technologies: ["Google Workspace", "Microsoft 365", "IA Generativa"],
        prerequisites: ["Conocimientos básicos de computación"],
        image: "/courses/colaboracion-ia.jpg"
    },
    {
        id: "4",
        title: "Mantenimiento, Ensamblaje y Soporte Técnico de Computadoras",
        description: "Curso práctico para aprender mantenimiento preventivo y correctivo, ensamblaje y diagnóstico de computadoras y laptops",
        level: "Intermediate",
        duration: "3 a 4 semanas (Aprox.)",
        curriculum: [
            "Fundamentos de hardware y componentes internos",
            "Identificación de partes de PC y laptops",
            "Ensamblaje y desensamblaje seguro",
            "Mantenimiento preventivo y limpieza",
            "Diagnóstico y solución de fallas comunes",
            "Instalación de sistemas operativos",
            "Actualización de hardware (RAM, SSD, HDD)",
            "Buenas prácticas de seguridad",
            "Práctica final de soporte técnico"
        ],
        technologies: ["Hardware PC", "Windows", "Linux"],
        prerequisites: ["Conocimientos básicos de computación"],
        image: "/courses/mantenimiento-pc.jpg"
    }
];

// Helper functions
export const getCoursesByLevel = (level: string) => {
    return coursesData.filter(course => course.level === level);
};
