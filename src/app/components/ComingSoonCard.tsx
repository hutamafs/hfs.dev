"use client";
import { useState, useEffect, useMemo } from "react";

const ComingSoonCard = () => {
  const emojis = useMemo(() => ["🚧", "🔧", "🚀"], []);
  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji((prev) => {
        const currentIndex = emojis.indexOf(prev);
        return emojis[(currentIndex + 1) % emojis.length];
      });
    }, 1200); // change every 1.2s
    return () => clearInterval(interval);
  }, [emojis]);

  return (
    <div className="bg-slate-800/50 rounded-2xl p-8 h-80 flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="text-4xl animate-bounce">{currentEmoji}</div>

      <h3 className="text-xl font-bold text-white mt-4 animate-pulse">
        Work in Progress
      </h3>

      <p className="text-slate-400 mt-2">Hutama is cooking... stay tuned!</p>
    </div>
  );
};

export default ComingSoonCard;
