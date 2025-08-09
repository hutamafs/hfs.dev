import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import ComingSoonCard from "./ComingSoonCard";

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "My little corner of the web, built with Next.js, where I show off my projects and share what I’ve been up to as a developer.",
      image: "/hfs-banner.png",
      tech: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: FaReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Vercel", icon: SiVercel },
      ],
      liveUrl: "#",
      codeUrl: "https://github.com/hutamafs/hfs.dev",
      category: "Web Development",
      gradient: "from-slate-800 to-slate-900",
    },
  ];

  const renderUrl = (url: string, target: string | null = null) => {
    return (
      <a
        href={url}
        className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
        target={target ?? "_self"}
      >
        View code
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    );
  };

  return (
    <section id="projects" className="text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Featured Works
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Project Card */}
              <div
                className={`bg-gradient-to-br text-white
            rounded-2xl p-8 h-80 relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 `}
                style={{
                  backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.5)),url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Bottom section with dots and link */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2 flex-1 max-w-2/5">
                      {project.tech.map((t, i) => (
                        <t.icon
                          key={i}
                          title={t.name}
                          className="text-white/80 hover:text-white transition-colors"
                          size={20}
                        />
                      ))}
                    </div>
                    <div className="flex flex-1 max-w-3/5 justify-between">
                      {renderUrl(project.liveUrl, null)}|
                      {renderUrl(project.codeUrl, "_blank")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          {projects.length === 1 && <ComingSoonCard />}
        </div>
      </div>
    </section>
  );
}
