"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "Languages" | "Frameworks" | "Databases" | "AI/ML" | "Others";

const skillMap: Record<Category, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Python", "Go", "Rust", "Java", "C++", "SQL"],
  Frameworks: ["Next.js", "React", "FastAPI", "Node.js", "Express", "Tailwind", "Prisma", "GraphQL"],
  Databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase", "Firebase", "SQLite"],
  "AI/ML": ["LangChain", "OpenAI API", "TensorFlow", "PyTorch", "Hugging Face", "Whisper", "FAISS"],
  Others: ["Docker", "AWS", "Git", "Linux", "Figma", "CI/CD", "Stripe", "WebSockets"],
};

const categories: Category[] = ["Languages", "Frameworks", "Databases", "AI/ML", "Others"];

const keyboardRows = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["Z","X","C","V","B","N","M"],
];

const keyToCategory: Record<string, Category> = {
  Q: "Languages", W: "Languages", E: "Languages", R: "Languages",
  T: "Frameworks", Y: "Frameworks", U: "Frameworks", I: "Frameworks",
  O: "Databases", P: "Databases",
  A: "Languages", S: "Frameworks", D: "Databases", F: "AI/ML", G: "AI/ML",
  H: "Others", J: "Others", K: "Others", L: "Others",
  Z: "Languages", X: "Frameworks", C: "Databases", V: "AI/ML",
  B: "AI/ML", N: "Others", M: "Others",
};

export default function Skills() {
  const [active, setActive] = useState<Category>("Languages");

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#c62a88] font-mono text-xs tracking-widest uppercase mb-3"
        >
          04 / Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Tech I work with
        </motion.h2>
        <p className="text-[#888899] mb-12">
          Clique nas teclas para explorar as categorias
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Keyboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2 select-none"
          >
            {/* Category row (spacebar equivalent) */}
            <div className="flex gap-1.5 mb-4 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`key px-4 py-2 text-xs font-mono rounded-md transition-all ${
                    active === cat ? "active text-white" : "text-[#888899]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* QWERTY rows */}
            {keyboardRows.map((row, ri) => (
              <div key={ri} className={`flex gap-1.5 ${ri === 1 ? "ml-4" : ri === 2 ? "ml-8" : ""}`}>
                {row.map((k) => {
                  const cat = keyToCategory[k];
                  const isActive = cat === active;
                  return (
                    <motion.button
                      key={k}
                      whileTap={{ scale: 0.92 }}
                      onClick={() => setActive(cat)}
                      className={`key w-9 h-9 text-xs font-mono font-semibold flex items-center justify-center ${
                        isActive ? "active text-white" : "text-[#888899]"
                      }`}
                    >
                      {k}
                    </motion.button>
                  );
                })}
              </div>
            ))}

            {/* Space bar */}
            <div className="flex ml-10 mt-1">
              <div className="key w-48 h-7 rounded-md" />
            </div>
          </motion.div>

          {/* Skills list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-xl border border-white/8 bg-[#111118] p-6 min-h-[280px]">
              <p className="text-[#c62a88] font-mono text-xs tracking-widest uppercase mb-5">
                {active}
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-wrap gap-2"
                >
                  {skillMap[active].map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="px-3 py-1.5 rounded-md bg-[#c62a88]/10 border border-[#c62a88]/25 text-white text-sm font-mono hover:bg-[#c62a88]/20 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress bars */}
            <div className="mt-6 space-y-3">
              {[
                { label: "Frontend", pct: 90 },
                { label: "Backend", pct: 80 },
                { label: "DevOps", pct: 65 },
                { label: "AI/ML", pct: 70 },
              ].map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs text-[#888899] mb-1">
                    <span>{label}</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#c62a88] to-[#8b2fc9]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
