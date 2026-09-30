import { portfolioContent } from "@/content/site";

const aboutItems = portfolioContent.about.highlights;

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden bg-surface-secondary pt-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aboutItems.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-white/10 bg-card-primary p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <item.icon size={40} color={item.color} />

                <h2 className="text-sm font-semibold text-white">
                  {item.title}
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}