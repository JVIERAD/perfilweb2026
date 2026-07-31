import { Education, Certification } from '@/types';

export const educationData: Education[] = [
    {
        id: "1",
        degree: "Ingeniero de Sistemas",
        institution: "Universidad Cesar Vallejo",
        location: "Piura, Perú",
        startDate: "2021",
        endDate: "2026",
        description: "Analisis sistematico, Automatización de procesos, desarrollo de software, despliegue web, herramientas digitales y diseño de interfaces modernas.",
        gpa: "92/100",
        achievements: [
            "Mejor proyecto de tesis 2020",
            "Miembro del club de programación competitiva"
        ]
    },
    {
        id: "2",
        degree: "Computacion en Sistemas",
        institution: "Cisco Networking Academy en convenio con la Universidad César Vallejo",
        location: "Piura, Perú",
        startDate: "2023",
        endDate: "2025",
        description: "Redes, TIC, Ciberseguridad, Ciencia de Datos y Sistemas Operativos",
        gpa: "95/100"
    }
];

export const certificationsData: Certification[] = [
    {
        id: "1",
        name: "Asociado de CyberOps",
        issuer: "Cisco Networking Academy",
        issueDate: "2025-08",
        credentialId: "CJ-CYBEROPS-2025",
        credentialUrl: "https://www.credly.com/badges/aa8588e6-91bc-4f63-ad40-16b19094f15b"
    },
    {
        id: "2",
        name: "Operating Systems Basics",
        issuer: "Cisco Networking Academy",
        issueDate: "2025-06",
        credentialId: "CJ-OS-2025",
        credentialUrl: "https://www.credly.com/badges/8a21ef13-71ac-4011-9219-048e02a351ec"
    },
    {
        id: "3",
        name: "CCNA: Redes Empresariales, Seguridad y Automatización",
        issuer: "Cisco Networking Academy",
        issueDate: "2025-03",
        credentialId: "CJ-CCNA3-2025",
        credentialUrl: "https://www.credly.com/badges/cc75c389-ee82-4be9-aa4c-85cf4152cf40"
    },
    {
        id: "4",
        name: "Introducción a la Ciencia de Datos",
        issuer: "Cisco Networking Academy",
        issueDate: "2024-10",
        credentialId: "CJ-DS-2024",
        credentialUrl: "https://www.credly.com/badges/87b92d8c-8bab-41fb-b4df-add5adec251d"
    },
    {
        id: "5",
        name: "CCNA: Switching, Routing, and Wireless Essentials",
        issuer: "Cisco Networking Academy",
        issueDate: "2024-09",
        credentialId: "CJ-CCNA2-2024",
        credentialUrl: "https://www.credly.com/badges/25c9dcf0-1e36-4281-a85c-baef4f0bd997"
    },
    {
        id: "6",
        name: "Introducción a la Ciberseguridad",
        issuer: "Cisco Networking Academy",
        issueDate: "2024-08",
        credentialId: "CJ-CYBER-2024",
        credentialUrl: "https://www.credly.com/badges/4c5c4963-b94a-479c-a051-bccb9cc9ba5f"
    },
    {
        id: "7",
        name: "CCNA: Introduction to Networks",
        issuer: "Cisco Networking Academy",
        issueDate: "2024-02",
        credentialId: "CJ-CCNA1-2024"
    },
    {
        id: "8",
        name: "Exploración de Redes con Cisco Packet Tracer",
        issuer: "Cisco Networking Academy",
        issueDate: "2024-01",
        credentialId: "CJ-PT-NET-2024"
    },
    {
        id: "9",
        name: "Introducción a Cisco Packet Tracer",
        issuer: "Cisco Networking Academy",
        issueDate: "2024-01",
        credentialId: "CJ-PT-INTRO-2024"
    }
];

export const coursesCompletedData = [
    {
        id: "1",
        name: "Full Stack Web Development",
        institution: "Udemy",
        completionDate: "2021-12",
        hours: 60
    },
    {
        id: "2",
        name: "Advanced TypeScript",
        institution: "Frontend Masters",
        completionDate: "2022-05",
        hours: 40
    },
    {
        id: "3",
        name: "System Design for Interviews",
        institution: "Educative.io",
        completionDate: "2023-01",
        hours: 30
    }
];
