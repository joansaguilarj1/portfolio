import { Landmark, Users, CodeXml, Rocket } from "lucide-react";
export const portfolioContent = {
    navbar: {
        logo: "SA",
        name: "Sebastian Aguilar",

        links: [
            { label: "Inicio", href: "#inicio" },
            { label: "Sobre mí", href: "#sobre-mi" },
            { label: "Experiencia", href: "#experiencia" },
            { label: "Proyectos", href: "#proyectos" },
            { label: "Habilidades", href: "#habilidades" },
            { label: "Contacto", href: "#contacto" },
        ],
    },

    hero: {
        greeting: "¡Hola! Soy",
        firstName: "Sebastian",
        lastName: "Aguilar",
        role: "Full Stack Developer",

        description:
            "Full Stack Developer con experiencia construyendo aplicaciones web para el sector financiero y de seguros. Trabajo principalmente con TypeScript, React, Next.js, Node.js y NestJS, PostgreSQL, llevando funcionalidades desde la lógica de negocio hasta su implementación en producción.",

        projectsButton: "Ver mis proyectos",
        cvButton: "Descargar CV",
    },

    about: {
        title: "Experiencia laboral",

        description:
            "...",

        highlights: [
            {
                name: "Experiencia",
                title: "5+ Años de experiencia",
                description:
                    "Desarrollando software y soluciones tecnológicas para diversas industrias.",
                icon: Users,
                color: "#1e65eb",
            },
            {
                name: "Area",
                title: "Banca & Seguros",
                description:
                    "Experiencia en proyectos para Davivienda y Seguros Cardif BNP Paribas.",
                icon: Landmark,
                color: "#A27BDC",
            },
            {
                name: "Stack",
                title: "Full Stack",
                description:
                    "Frontend moderno y backend sólido con las mejores prácticas.",
                icon: CodeXml,
                color: "#5FB558",
            },
            {
                name: "Tecnologia",
                title: "Pasión por la tecnología",
                description:
                    "En constante aprendizaje y siempre buscando nuevos desafíos.",
                icon: Rocket,
                color: "#F28E16",
            },
        ]
    },

    experience: {
        title: "Experiencia Profesional",
        experiences: [
            {
                logo: "/images/sofka-logo.webp",
                company: "Sofka Technologies",
                role: "Full Stack Developer",
                period: "Abr 2024 — Abr 2025",
                description:
                    "Desarrollé y di soporte a funcionalidades de los módulos de gestion interna de BNP Cardif Paribas, contribuyendo a la calidad del código mediante refactorizaciones e implementación de pruebas unitarias. También realicé mantenimiento al videojuego Casita de Artistas y al backend para Davivienda.",
                technologies: [
                    "TypeScript",
                    "Next.js",
                    "NestJS",
                    "PostgreSQL",
                ],
            },
            {
                logo: "/images/tcs-logo.webp",
                company: "Tata Consultancy Services",
                role: "Frontend Developer",
                period: "Nov 2021 — Abr 2024",
                description:
                    "Desarrollé módulos para la SuperApp de Davivienda, implementando flujos de citas, créditos y productos financieros. Trabajé bajo Scrum, desde la planificación hasta el despliegue y mantenimiento. Actué como soporte en la fase de lanzamiento de los productos digitales.",
                technologies: [
                    "Angular",
                    "TypeScript",
                    "Jenkins",
                    "GCP",
                ],
            },
        ],
        cvButton: " Ver CV completo"
    },

    projecs: {
        title: "Proyectos",
        cvButton: "Ver todos los proyectos",
        cardbuttons: {
            projects: "Ver proyectos",
            repository: "Ver Respositorio"
        },
        highlights: [
            {
                title: "Project One",
                description: "This is the first project description. This is the first project description. This is the first project description. This is the first project description. This is the first project description. This is the first project description.",
                technologies: ["React", "TypeScript", "Tailwind CSS"],
                image: "/images/project-one.webp",
                link: "https://example.com/project-one",
                repository: "https://github.com/example/project-one"
            },
            {
                title: "Project Two",
                description: "This is the second project description.",
                technologies: ["Vue.js", "JavaScript", "CSS"],
                image: "/images/project-two.webp",
                link: "https://example.com/project-two",
                repository: "https://github.com/example/project-two"
            },
            {
                title: "Project Three",
                description: "This is the third project description.",
                technologies: ["Angular", "TypeScript", "Sass"],
                image: "/images/project-three.webp",
                link: "https://example.com/project-three",
                repository: "https://github.com/example/project-three"
            }
        ]
    },

    contact: {
        title: "¿Buscas talento para tu equipo o tienes algún proyecto en mente?",
        subTitle: "¡Hablemos!",
        description: "Estoy abierto a nuevas oportunidades y proyectos desafiantes, si crees que puedo aportar valor a tu equipo no dudes en contactarme.",
        mail: "Joansaguilarj@gmail.com",
        phone: "+57 311882550",
        city: "Bogota, Colombia",
        buttonState: {
            send: "Enviando...",
            label: "Enviar Mensaje",
        },
        reponseMsg: {
            success: "¡Mensaje enviado con éxito! Te responderé pronto.",
            error: "Ocurrió un error al enviar el mensaje. Intenta de nuevo."
        },
        form: {
            namePlaceholder: "nombre",
            emailPlaceholder: "correo",
            subjectPlaceholder: "asunto",
            messagePlaceholder: "escribe tu mensaje...",
            sendButton: "Enviando...",
            labelButton: "Enviar Mensaje",
        },
    },

    footer: {
        text: "© 2026 Joan Sebastian Aguilar",
        logo: "SA",
    },
};