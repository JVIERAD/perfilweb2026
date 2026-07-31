import { Project } from '@/types';

export const projectsData: Project[] = [
    {
        id: "1",
        title: "Portafolio Web 2026",
        description: "Portafolio web profesional que funciona como CV digital interactivo, permitiendo mostrar experiencia, habilidades, proyectos u otros datos mas detallados de forma atractiva y profesional.",
        longDescription: "Desarrollé una plataforma de e-commerce moderna utilizando Next.js 14 y Stripe para pagos. Incluye gestión de inventario, sistema de cupones, y analytics en tiempo real.",
        technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
        category: "Web Development",
        role: "Full Stack Developer",
        startDate: "2025-12",
        endDate: "2025-12",
        images: ["/projects/perfilweb20261.avif", "/projects/perfilweb202612.avif"],
        demoUrl: "https://perfilweb2026.vercel.app",
        sourceUrl: "https://github.com/JVIERAD/perfilweb2026",
        featured: true,
        metrics: [
            { label: "Usuarios activos", value: "1000+" },
            { label: "Transacciones mensuales", value: "$50K+" },
            { label: "Performance Score", value: "95/100" }
        ]
    },
    {
        id: "2",
        title: "Sistema de Gestión de Tareas",
        description: "Aplicación de gestión de tareas con colaboración en tiempo real y sincronización multiplataforma.",
        longDescription: "App de productividad construida con React Native y Firebase, permitiendo sincronización en tiempo real entre dispositivos.",
        technologies: ["Flutter", "Firebase", "Firestorage", "FirebaseAuth"],
        category: "Mobile Development",
        role: "Lead Developer",
        startDate: "2023-01",
        endDate: "2023-05",
        images: ["/projects/elyos1.avif", "/projects/elyos2.avif"],
        //demoUrl: "https://taskapp.ejemplo.com",
        //sourceUrl: "https://github.com/usuario/taskapp",
        featured: true,
        metrics: [
            { label: "Downloads", value: "5000+" },
            { label: "Rating", value: "4.7/5" }
        ]
    },
    {
        id: "3",
        title: "Web de Ventas y Dashboard",
        description: "Web interactiva para la visualización, compra de productos en linea y generación de reportes empresariales.",
        longDescription: "Sistema de ventas con gráficos interactivos, filtros avanzados y exportación de reportes en múltiples formatos.",
        technologies: ["CakePHP", "Xampp", "HTML+CSS+JS", "Bootstrap"],
        category: "Web Development",
        role: "Frontend Developer",
        startDate: "2022-08",
        endDate: "2022-12",
        images: ["/projects/webtienda1.avif", "/projects/webtienda2.avif"],
        featured: false,
        metrics: [
            { label: "Data Points", value: "1M+" },
            { label: "Load Time", value: "<2s" }
        ]
    },
    {
        id: "4",
        title: "Plataforma de Chat en Tiempo Real",
        description: "Plataforma web de mensajería en tiempo real con autenticación de usuarios, gestión de contactos y conversaciones privadas sincronizadas al instante.",
        longDescription: "Backend robusto construido con Node.js y PostgreSQL para manejar miles de dispositivos IoT simultáneamente.",
        technologies: ["React+Vite", "FastAPI", "PostgreSQL", "Redis", "Docker", "WebSockets y JWT"],
        category: "Web Development",
        role: "Full Stack Developer",
        startDate: "2026-07",
        endDate: "2026-08",
        images: ["/projects/chatweb.png", "/projects/chatweb2.png"],
        //sourceUrl: "https://github.com/usuario/iot-api",
        featured: false,
        metrics: [
            { label: "Devices Managed", value: "10K+" },
            { label: "Uptime", value: "99.9%" }
        ]
    },
    {
        id: "5",
        title: "Plataforma GRIN Web",
        description: "Plataforma web modular para cotizaciones técnicas, cálculos solares y gestión de visitas con backend FastAPI y frontend React+Vite.",
        longDescription: "Aplicación full stack construida sobre un monolito modular: frontend React+Vite para formularios, tablas y visualización, y backend FastAPI + PostgreSQL para APIs REST, generación de PDFs y procesos asíncronos en Redis/RQ.",
        technologies: ["React+Vite", "FastAPI", "PostgreSQL", "Redis + RQ", "Docker", "SQLAlchemy + Pydantic"],
        category: "Web Development",
        role: "Full Stack Developer",
        startDate: "2026-04",
        endDate: "2026-07",
        images: ["/projects/grinweb.png", "/projects/grinweb2.png"],
        //sourceUrl: "https://github.com/usuario/grin_web",
        featured: false,
        metrics: [
            { label: "Módulos integrados", value: "5" },
            { label: "Servicios Docker", value: "6" }
        ]
}
];

// Helper functions
export const getFeaturedProjects = () => {
    return projectsData.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string) => {
    return projectsData.filter(project => project.category === category);
};
