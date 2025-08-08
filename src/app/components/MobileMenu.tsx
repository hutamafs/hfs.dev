"use client";

import Link from "next/link";

export default function MobileMenu({
  open,
  setOpen,
  navLinks,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  navLinks: { id: string; label: string }[];
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-white text-2xl z-50">
      {navLinks.map((link) => (
        <Link
          key={link.id}
          href={`#${link.id}`}
          onClick={() => setOpen(false)}
          className="hover:text-purple-400 transition"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
