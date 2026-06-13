"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "MasterG",
    description:
      "Plataforma de gamificação para aprendizado de programação. Sistema de ranks, desafios diários e leaderboard em tempo real com WebSockets.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Socket.io", "Redis"],
    live: "https://masterg.dev",
    github: "https://github.com/seugithub/masterg",
    featured: true,
    color: "#c62a88",
  },
  {
    title: "Legal-E",
    description:
      "Assistente jurídico com IA para análise de contratos e documentos legais. Reduz o tempo de revisão em 80% usando LLMs fine-tuned.",
    tech: ["Python", "FastAPI", "LangChain", "React", "GPT-4"],
    live: "https://legal-e.app",
    github: "https://github.com/seugithub/legal-e",
    featured: true,
    color: "#8b2fc9",
  },
  {
    title: "Kisan AI",
    description:
      "Plataforma de agri-tech com IA para previsão de safras e detecção de doenças em plantas por visão computacional.",
    tech: ["Python", "TensorFlow", "React Native", "FastAPI", "GCS"],
    live: "https://kisanai.tech",
    github: "https://github.com/seugithub/kisan-ai",
    featured: false,
    color: "#2a8b4f",
  },
  {
    title: "Zeta",
    description:
      "Fintech para gestão de finanças pessoais com categorização automática de gastos, metas e alertas inteligentes.",
    tech: ["React", "TypeScript", "Node.js", "Plaid API", "MongoDB"],
    live: "https://zeta.finance",
    github: "https://github.com/seugithub/zeta",
    featured: false,
    color: "#2a6bc6",
  },
  {
    title: "CropCut",
    description:
      "Ferramenta SaaS de edição de vídeo automática com IA. Detecta highlights, adiciona captions e formata para múltiplas plataformas.",
    tech: ["Next.js", "FFmpeg", "Whisper AI", "AWS S3", "Stripe"],
    live: "https://cropcut.io",
    github: "https://github.com/seugithub/cropcut",
    featured: false,
    color: "#c67a2a",
  },
  {
    title: "DevLink",
    description:
      "Rede social para desenvolvedores com match de habilidades para projetos colaborativos. Think LinkedIn × GitHub.",
    tech: ["Next.js", "GraphQL", "PostgreSQL", "Redis", "Cloudinary"],
    live: "https://devlink.app",
    github: "https://github.com/seugithub/devlink",
    featured: false,
    color: "#2ac6a8",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#c62a88] font-mono text-xs tracking-widest uppercase mb-3"
        >
          03 / Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-14"
        >
          Things I&apos;ve built
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group relative flex flex-col rounded-xl border bg-[#111118] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                p.featured
                  ? "border-[#c62a88]/30 hover:border-[#c62a88]/60"
                  : "border-white/8 hover:border-white/15"
              }`}
            >
              {/* Top color bar */}
              <div className="h-1 w-full" style={{ background: p.color }} />

              {/* Featured badge */}
              {p.featured && (
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#c62a88]/20 text-[#c62a88] border border-[#c62a88]/30">
                    Featured
                  </span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white font-bold text-lg"
                  style={{ backgroundColor: `${p.color}22`, border: `1px solid ${p.color}44` }}
                >
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-5 h-5" style={{ color: p.color }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-[#888899] text-sm leading-relaxed mb-5 flex-1">{p.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-[#888899] font-mono border border-white/8">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#888899] hover:text-white transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#888899] hover:text-[#c62a88] transition-colors ml-auto"
                  >
                    Live
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
