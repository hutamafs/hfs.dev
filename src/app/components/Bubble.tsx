"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const actions = [
  { label: "Copy email", onClick: "copy", icon: "✉️" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-handle",
    icon: "💼",
  },
  { label: "GitHub", href: "https://github.com/your-handle", icon: "🐙" },
  { label: "Résumé", href: "/resume.pdf", icon: "📄" },
];

export default function HelperBubble() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setHidden(localStorage.getItem("helper:hidden") === "1");
  }, []);
  const hide = () => {
    setHidden(true);
    localStorage.setItem("helper:hidden", "1");
  };

  if (hidden) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: prefersReduced ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: prefersReduced ? 1 : 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
            className="mb-3 w-64 rounded-2xl border border-black/10 bg-white/90 p-3 shadow-2xl backdrop-blur-sm
                       dark:bg-slate-900/90 dark:border-white/10"
            role="dialog"
            aria-label="Quick actions"
          >
            <div className="flex items-center justify-between pb-2">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                Quick actions
              </p>
              <button
                onClick={hide}
                className="rounded-md p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Hide helper"
              >
                ✕
              </button>
            </div>

            <ul className="grid grid-cols-2 gap-2">
              {actions.map((a) => (
                <li key={a.label}>
                  {"href" in a ? (
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-white p-2
                                 text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-50
                                 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700"
                    >
                      <span className="text-base">{a.icon}</span>
                      <span>{a.label}</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("you@hfs.dev");
                      }}
                      className="group flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-white p-2
                                 text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-50
                                 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700"
                    >
                      <span className="text-base">{a.icon}</span>
                      <span>{a.label}</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
              Wanna build something <span className="font-medium">cooked</span>?
              Let’s queue up. 🎮
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-lg
                   hover:shadow-xl dark:bg-slate-900 dark:border-white/10"
      >
        {/* chat bubble icon */}
        <span className="text-xl">💬</span>
      </button>
    </div>
  );
}
