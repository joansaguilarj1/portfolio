import { Landmark, Users, CodeXml, Rocket } from "lucide-react";

const aboutItems = [
  {
    name: "Experiencia",
    title: "4+ Años de experiencia",
    description:
      "Desarrollando soluciones web para el sector financiero.",
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
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aboutItems.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-white/10 bg-slate-900/50 p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <item.icon size={40} color={item.color} />

                <h2 className="text-sm font-semibold text-white">
                  {item.title}
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}