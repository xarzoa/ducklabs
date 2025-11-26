"use client";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/10 backdrop-blur-md animate-slide-down">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter text-white cursor-pointer glitch-hover">
          DuckLabs<span className="text-zinc-500">_</span>
        </div>

        <nav className="flex items-center gap-8">
          <button
            type="button"
            onClick={() => router.push("/")}
            className={`text-xs md:text-sm uppercase tracking-widest hover:text-white transition-colors ${pathname === "/" ? "text-white border-b border-white pb-0.5" : "text-zinc-500"}`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => router.push("/projects")}
            className={`text-xs md:text-sm uppercase tracking-widest hover:text-white transition-colors ${pathname === "/projects" ? "text-white border-b border-white pb-0.5" : "text-zinc-500"}`}
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => router.push("/about")}
            className={`text-xs md:text-sm uppercase tracking-widest hover:text-white transition-colors ${pathname === "/about" ? "text-white border-b border-white pb-0.5" : "text-zinc-500"}`}
          >
            About
          </button>
        </nav>
      </div>
    </header>
  );
}
