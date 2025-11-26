import { Github, Instagram, Send, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 relative z-10 mt-20 font-mono">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-between items-baseline mb-8 border-b border-zinc-900 pb-4">
          <h2 className="text-2xl font-bold text-zinc-100">
            DuckLabs<span className="text-zinc-600">.</span>
          </h2>
          <span className="text-xs text-zinc-600 font-mono">EST. MMXXIV</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-sm font-bold text-zinc-100 mb-4 uppercase tracking-widest border-l-2 border-zinc-700 pl-2">
              Connect
            </h3>
            <ul className="space-y-3 text-zinc-500 text-sm">
              <li className="hover:text-zinc-300 cursor-pointer flex items-center gap-2 transition-colors">
                <Instagram className="w-4 h-4" /> Instagram
              </li>
              <li className="hover:text-zinc-300 cursor-pointer flex items-center gap-2 transition-colors">
                <Github className="w-4 h-4" /> Github
              </li>
              <li className="hover:text-zinc-300 cursor-pointer flex items-center gap-2 transition-colors">
                <Send className="w-4 h-4" /> Telegram
              </li>
              <li className="hover:text-zinc-300 cursor-pointer flex items-center gap-2 transition-colors">
                <Twitter className="w-4 h-4" /> X (Twitter)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-zinc-100 mb-4 uppercase tracking-widest border-l-2 border-zinc-700 pl-2">
              Company
            </h3>
            <ul className="space-y-3 text-zinc-500 text-sm">
              <li className="hover:text-zinc-300 cursor-pointer transition-colors">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-zinc-300 cursor-pointer transition-colors">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="text-zinc-600 cursor-not-allowed">
                Careers (Soon)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-zinc-100 mb-4 uppercase tracking-widest border-l-2 border-zinc-700 pl-2">
              Legal
            </h3>
            <ul className="space-y-3 text-zinc-500 text-sm">
              <li className="hover:text-zinc-300 cursor-pointer transition-colors">
                <Link href="/privacy">Privacy</Link>
              </li>
              <li className="hover:text-zinc-300 cursor-pointer transition-colors">
                <Link href="/terms">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-zinc-700 text-xs">
          <p>Built for the future from Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
}
