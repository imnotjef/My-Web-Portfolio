"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ],
  Specifics: [
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Resume", href: "/resume.pdf" },
    { label: "Contact", href: "#cta" },
  ],
  Socials: [
    { label: "GitHub", href: "https://github.com/seugithub" },
    { label: "LinkedIn", href: "https://linkedin.com/in/seuperfil" },
    { label: "Twitter", href: "https://twitter.com/seutwitter" },
    { label: "Email", href: "mailto:seu@email.com" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16"
        >
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-md bg-[#c62a88] flex items-center justify-center text-white font-bold text-sm">
                &lt;/&gt;
              </span>
              <span className="font-semibold text-white">dev.portfolio</span>
            </a>
            <p className="text-[#888899] text-sm leading-relaxed">
              Fast enough to ship. Sharp enough to scale.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[#888899] text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-[#888899] text-sm">
            © {year} Seu Nome. Feito com Next.js 15 & Tailwind CSS.
          </p>
          <div className="flex items-center gap-1 text-[#888899] text-sm">
            <span>Designed &amp; Built by</span>
            <span className="text-[#c62a88] font-medium ml-1">Você</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
