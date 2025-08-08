"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          Hi all, I’m <span className="text-purple-300">Hutama</span> 👋
        </h1>

        <p className="text-lg text-gray-300">Full-Stack & Frontend Developer</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 pt-4">
          <Social href="https://github.com/hutamafs" label="GitHub">
            <Github />
          </Social>
          <Social href="https://www.linkedin.com/in/hutamafs/" label="LinkedIn">
            <Linkedin />
          </Social>
          <Social href="mailto:hutama.fs@gmail.com" label="Email">
            <Mail />
          </Social>
        </div>
      </motion.div>
    </section>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/10 transition"
    >
      <span className="sr-only">{label}</span>
      <div className="[&>svg]:h-5 [&>svg]:w-5">{children}</div>
    </a>
  );
}
