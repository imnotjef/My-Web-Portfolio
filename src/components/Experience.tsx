"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Empresa ABC",
    period: "Jan 2024 – Jun 2024",
    location: "Remoto",
    description:
      "Desenvolvimento de features full-stack em ambiente de alta escala. Trabalhei com APIs REST, otimizações de banco de dados e melhoria da experiência do usuário no produto principal.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Startup XYZ",
    period: "Jul 2023 – Dez 2023",
    location: "Híbrido",
    description:
      "Responsável pela criação de interfaces responsivas e acessíveis. Implementei design system interno, reduzi o bundle size em 40% e melhorei o Core Web Vitals do produto.",
    tech: ["React", "Tailwind CSS", "Figma", "Storybook", "Vite"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#c62a88] font-mono text-xs tracking-widest uppercase mb-3"
        >
          02 / Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-14"
        >
          Where I&apos;ve worked
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c62a88]/60 via-[#c62a88]/20 to-transparent md:-translate-x-0.5 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2 md:[&>div:last-child]:row-start-1"}`}
              >
                {/* Date / left column */}
                <div className={`hidden md:flex items-start ${i % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12 col-start-1 row-start-1"}`}>
                  <div className="text-right">
                    <p className="text-[#c62a88] font-mono text-sm font-medium">{exp.period}</p>
                    <p className="text-[#888899] text-sm mt-1">{exp.location}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-[#c62a88] ring-4 ring-[#0a0a0f] hidden md:block" />

                {/* Card */}
                <div className={`p-6 rounded-xl border border-white/8 bg-[#111118] hover:border-[#c62a88]/30 transition-colors ${i % 2 === 0 ? "md:col-start-2 md:pl-12" : "md:pr-12"}`}>
                  {/* Mobile date */}
                  <p className="text-[#c62a88] font-mono text-xs mb-2 md:hidden">{exp.period}</p>
                  <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                  <p className="text-[#c62a88] text-sm mt-0.5 mb-4">{exp.company}</p>
                  <p className="text-[#888899] text-sm leading-relaxed mb-5">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-[#c62a88]/10 text-[#c62a88] border border-[#c62a88]/20 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
