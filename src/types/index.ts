// TypeScript interfaces and types for Portfolio Web 2026

export interface Profile {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    email: string;
    phone?: string;
    location: string;
    availability: string;
    image: string;
    cvUrl: string;
    socialLinks: SocialLink[];
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface Skill {
    id: string;
    name: string;
    category: SkillCategory;
    proficiency: number; // 0-100
    icon?: string;
    yearsOfExperience?: number;
}

export type SkillCategory =
    | 'Frontend'
    | 'Backend'
    | 'Bases de Datos'
    | 'Desarrollo Móvil'
    | 'Cloud & DevOps'
    | 'OS & Infraestructura'
    | 'Redes & Ciberseguridad'
    | 'Arquitectura'
    | 'Herramientas';

export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string | 'Present';
    description?: string;
    gpa?: string;
    achievements?: string[];
    logo?: string;
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    issueDate: string;
    expiryDate?: string;
    credentialId?: string;
    credentialUrl?: string;
    badge?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    category: ProjectCategory;
    role: string;
    startDate: string;
    endDate: string | 'Present';
    images: string[];
    demoUrl?: string;
    sourceUrl?: string;
    featured: boolean;
    metrics?: ProjectMetric[];
}

export type ProjectCategory =
    | 'Web Development'
    | 'Mobile Development'
    | 'Desktop Application'
    | 'API/Backend'
    | 'DevOps'
    | 'Data Science'
    | 'Other';

export interface ProjectMetric {
    label: string;
    value: string;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    level: CourseLevel;
    duration: string; // e.g., "8 weeks", "40 hours"
    curriculum: string[];
    technologies: string[];
    prerequisites?: string[];
    image?: string;
}

export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    image?: string;
    rating: number; // 1-5
    comment: string;
    date: string;
    projectRelated?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}
