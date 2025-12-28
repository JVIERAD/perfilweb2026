# Portfolio Web 2026

Portfolio profesional moderno construído con Next.js 14+, TypeScript, React 18+ y Tailwind CSS.

## Características

✨ **Diseño Moderno**: Interfaz atractiva con animaciones suaves y efectos visuales  
🎨 **Responsive**: Diseño mobile-first que se adapta perfectamente a todos los dispositivos  
⚡ **Rendimiento Óptimo**: Next.js 14 con SSG para cargas ultrarrápidas  
🔍 **SEO Optimizado**: Meta tags, Open Graph y Schema.org markup  
📧 **Formulario de Contacto**: Integrado con Resend para envío de emails  
🎭 **Animaciones**: Transiciones suaves con Framer Motion  
♿ **Accesible**: Cumple con estándares WCAG 2.1 AA  

## Stack Tecnológico

- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript
- **UI Library**: React 18+
- **Estilos**: Tailwind CSS + shadcn/ui
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod
- **Email**: Resend
- **Iconos**: Lucide React
- **Deployment**: Vercel

## Comenzando

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. Clona el repositorio
```bash
git clone <tu-repositorio>
cd perfilweb2026
```

2. Instala las dependencias
```bash
npm install
```

3. Configura las variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Resend API Key
RESEND_API_KEY=tu_api_key_de_resend

# Contact Email
CONTACT_EMAIL=tu@email.com
```

Para obtener tu API key de Resend:
- Regístrate en [resend.com](https://resend.com)
- Ve a API Keys y crea una nueva
- Copia la key al archivo .env.local

4. Ejecuta el servidor de desarrollo  
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Personalización

### Datos del Portfolio

Todos los datos del portfolio están en archivos TypeScript en `src/lib/data/`:

- **profile.ts**: Información personal, biografía, contacto
- **skills.ts**: Habilidades técnicas y competencias  
- **education.ts**: Formación académica y certificaciones
- **projects.ts**: Proyectos realizados
- **courses.ts**: Cursos que puedes impartir
- **testimonials.ts**: Testimonios de clientes

Simplemente edita estos archivos con tu información real.

### Imágenes

Coloca tus imágenes en las carpetas correspondientes:
- `public/images/`: Foto de perfil y otras imágenes
- `public/projects/`: Capturas de tus proyectos
- `public/cv/`: Tu CV en formato PDF

### Estilos

- Los colores y estilos base están en `src/app/globals.css`
- Personaliza los componentes en `src/components/`
- Ajusta animaciones en los archivos de componentes

## Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm start        # Servidor de producción
npm run lint     # Ejecutar ESLint
```

## Deployment en Vercel

1. Sube tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Configura las variables de entorno:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy!

Vercel detectará automáticamente Next.js y configurará todo por ti.

## Estructura del Proyecto

```
perfilweb2026/
├── public/              # Archivos estáticos
│   ├── images/         # Imágenes
│   ├── cv/            # CV en PDF
│   └── projects/      # Imágenes de proyectos
├── src/
│   ├── app/           # App Router de Next.js
│   │   ├── api/      # API Routes
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/    # Componentes React
│   │   ├── sections/ # Secciones del portfolio
│   │   ├── shared/   # Componentes compartidos
│   │   └── ui/       # Componentes de shadcn/ui
│   ├── lib/
│   │   └── data/     # Datos del portfolio
│   └── types/        # TypeScript types
└── package.json
```

## Optimización SEO

El sitio incluye automáticamente:
- Meta tags optimizados para cada página
- Open Graph para redes sociales  
- Twitter Cards
- Schema.org markup (Person, Portfolio)
- Sitemap.xml
- robots.txt

## Soporte

Si tienes problemas o preguntas:
1. Revisa la [documentación de Next.js](https://nextjs.org/docs)
2. Consulta la [documentación de shadcn/ui](https://ui.shadcn.com)
3. Revisa la [documentación de Resend](https://resend.com/docs)

## Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo para tu portfolio personal.

---

Desarrollado con ❤️ usando Next.js y TypeScript
