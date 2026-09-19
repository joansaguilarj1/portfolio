import { Landmark, Users, CodeXml, Rocket } from "lucide-react";

const aboutItems = [
    { name: "Experiencia", title: "4+ Años de experiencia", description: "Desarrollando soluciones web para el sector financiero.", icon: Users, color: "#1e65eb" },
    { name: "Area", title: "Banca & Seguros", description: "Experiencia en proyectos para Davivienda y Seguros Cardif BNP Paribas.", icon: Landmark, color: "#A27BDC" },
    { name: "Stack", title: "Full Stack", description: "Frontend moderno y backend sólido con las mejores prácticas.", icon: CodeXml, color: "#5FB558" },
    { name: "Tecnologia", title: "Pasión por la tecnología", description: "En constante aprendizaje y siempre buscando nuevos desafíos.", icon: Rocket, color: "#F28E16" },
];


export default function About() {
    return (
        <section
            id="sobre-mi"
            className="relative min-h-screen overflow-hidden bg-slate-950 pt-16">
            <div className="mx-auto flex min-h-[calc(100vh-30rem)] max-w-7xl items-center px-6 py-20">
                <div className="grid w-full gap-12 lg:grid-cols-4 lg:items-center bg-slate-900/50 rounded-xl  ">

                    {/* abouts */}

                    {aboutItems.map((item) => (

                        <div key={item.name} className="flex flex-col gap-2 p-10 rounded-xl">
                            <div className="flex items-center gap-3" >
                                <item.icon
                                    size={45}
                                    color={item.color}
                                />
                                <h2 className="text-sm font-semibold text-white" >
                                    {item.title}
                                </h2>
                            </div>
                            <p className="text-sm font-normal text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}