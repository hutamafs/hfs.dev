"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experiences" },
  { id: "portfolio", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function FloatingPillNav() {
  const [visible, setVisible] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingUp = y < lastY - 2;
      const pastHero = y > window.innerHeight * 0.6;
      setVisible(goingUp && pastHero);
      setLastY(y);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="
            fixed left-1/2 top-6 z-50 -translate-x-1/2
            rounded-full border border-white/10 bg-black/60 backdrop-blur-xl
            px-3 py-2 shadow-lg
            md:px-4
          "
        >
          <ul className="flex items-center gap-2 md:gap-4 text-sm md:text-[15px]">
            {links.map((l) => (
              <li key={l.id}>
                <Link
                  href={`#${l.id}`}
                  className="rounded-full px-3 py-1.5 text-gray-200 hover:text-white hover:bg-white/10 transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
