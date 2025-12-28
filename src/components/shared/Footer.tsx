import Link from 'next/link';
import { Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import { profileData } from '@/lib/data/profile';

const navigation = {
    main: [
        { name: 'Sobre Mí', href: '#about' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Cursos', href: '#courses' },
        { name: 'Contacto', href: '#contact' },
    ],
    social: [
        {
            name: 'GitHub',
            href: profileData.socialLinks.find(link => link.platform === 'GitHub')?.url || '#',
            icon: Github,
        },
        {
            name: 'LinkedIn',
            href: profileData.socialLinks.find(link => link.platform === 'LinkedIn')?.url || '#',
            icon: Linkedin,
        },
        {
            name: 'WhatsApp',
            href: profileData.socialLinks.find(link => link.platform === 'WhatsApp')?.url || '#',
            icon: MessageCircle,
        },
        {
            name: 'Email',
            href: `mailto:${profileData.email}`,
            icon: Mail,
        },
    ],
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <a
                                href={item.href}
                                className="text-sm leading-6 text-gray-400 hover:text-white transition-colors"
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>

                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>

                <p className="mt-10 text-center text-xs leading-5 text-gray-400">
                    &copy; {currentYear} {profileData.name}. Todos los derechos reservados.
                </p>

                <p className="mt-2 text-center text-xs leading-5 text-gray-500">
                    Desarrollado con Next.js, TypeScript y Tailwind CSS
                </p>
            </div>
        </footer>
    );
}
