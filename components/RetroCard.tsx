"use client";

import type React from "react";
import { useEffect, useState } from "react";

interface RetroCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  badge?: string;
  badgeColor?: "green" | "red" | "yellow" | "gray";
  action?: React.ReactNode;
}

const RetroCard: React.FC<RetroCardProps> = ({
  title,
  children,
  className = "",
  badge,
  badgeColor = "gray",
  action,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const badgeStyles = {
    green: "bg-green-950/50 text-green-400 border-green-900",
    red: "bg-red-950/50 text-red-400 border-red-900",
    yellow: "bg-yellow-950/50 text-yellow-400 border-yellow-900",
    gray: "bg-zinc-800/50 text-zinc-400 border-zinc-700",
  };

  return (
    <div
      className={`relative group border border-zinc-800 bg-zinc-950 p-6 flex flex-col gap-4 transition-all duration-300 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_4px,6px_100%] opacity-20 group-hover:opacity-30 transition-opacity"></div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-zinc-700/50 transition-colors pointer-events-none z-10 box-border"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] transition-opacity duration-500 pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-zinc-700 group-hover:border-zinc-400 transition-colors duration-300 z-20" />
      <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-zinc-700 group-hover:border-zinc-400 transition-colors duration-300 z-20" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-zinc-700 group-hover:border-zinc-400 transition-colors duration-300 z-20" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-zinc-700 group-hover:border-zinc-400 transition-colors duration-300 z-20" />

      {(title || badge) && (
        <div className="flex justify-between items-start mb-2 relative z-20">
          {title && (
            <h3 className="text-lg md:text-xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-all flex flex-wrap">
              {title.split("").map((char) => (
                <span
                  key={title.indexOf(char) + Math.random()}
                  className="hover-flicker inline-block"
                  style={
                    isMounted
                      ? {
                          animationDuration: `${0.3 + Math.random() * 0.7}s`,
                          animationDelay: `${Math.random() * 0.5}s`,
                        }
                      : {}
                  }
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h3>
          )}
          {badge && (
            <span
              className={`text-[10px] px-2 py-1 border ${badgeStyles[badgeColor]} font-mono uppercase tracking-widest shadow-sm`}
            >
              {badge}
            </span>
          )}
        </div>
      )}

      <div className="text-zinc-400 leading-relaxed text-sm md:text-base relative z-20 group-hover:text-zinc-300 transition-colors">
        {children}
      </div>

      {action && (
        <div className="mt-auto pt-4 border-t border-zinc-800/50 relative z-20 flex flex-col">
          {action}
        </div>
      )}
    </div>
  );
};

export default RetroCard;
