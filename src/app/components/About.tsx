"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaAws,
} from "react-icons/fa";
import MapCard from "./MapCard";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiGo,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";

export default function About() {
  const techStack = [
    { icon: <FaReact />, label: "React" },
    { icon: <SiNextdotjs />, label: "Next.js" },
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <SiGo />, label: "Go" },
    { icon: <SiTailwindcss />, label: "Tailwind" },
    { icon: <SiPostgresql />, label: "PostgreSQL" },
    { icon: <FaGithub />, label: "GitHub" },
    { icon: <FaJsSquare />, label: "JavaScript" },
    { icon: <FaHtml5 />, label: "HTML5" },
    { icon: <FaCss3Alt />, label: "CSS3" },
    { icon: <SiFigma />, label: "Figma" },
    { icon: <FaAws />, label: "AWS" },
  ];

  return (
    <section id="about" className="pt-10">
      <div className="mx-auto max-w-6xl flex justify-center flex-col px-4">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-white">
          About Me
        </h2>
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex justify-center w-full mb-8 rounded-3xl bg-[#0f1126] p-6 md:p-8 ring-1 ring-white/10"
          >
            <p className="max-w-prose text-center md:text-left text-gray-300 leading-relaxed">
              Aspiring developer proficient in building accessible applications
              with React, <b>Next.js</b>, and <b>Node.js</b>, while actively
              exploring backend technologies including Go and containerization
              with Docker and&nbsp;
              <b>AWS</b>.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* MAP CARD */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-[#0f1126] ring-1 ring-white/10"
          >
            <MapCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-3xl bg-[#0f1126] p-6 md:p-8 ring-1 ring-white/10"
          >
            <div className="mb-4 text-purple-300">My Toolkit</div>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300 hover:bg-white/10 transition"
                >
                  <div className="text-2xl">{tech.icon}</div>
                  <span className="text-xs">{tech.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
