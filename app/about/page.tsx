import { MapPin } from "lucide-react";
import RetroCard from "@/components/RetroCard";

export default function About() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="flex items-center justify-between mb-12 border-b border-zinc-800 pb-6">
        <div>
          <h1 className="text-4xl font-bold text-zinc-100 mb-2">
            About_Us<span className="animate-pulse">_</span>
          </h1>
        </div>
      </div>

      <div className="space-y-8">
        <RetroCard title="Who are we?">
          <p className="mb-4">
            DuckLabs is a digital collective based in{" "}
            <span className="text-white font-bold">Sri Lanka</span>. We are
            builders, makers, and tinkerers.
          </p>
          <p>
            We are not a suit-and-tie corporation. We are a lab where ideas are
            hatched. From advanced AI bots like GooseAI to helping locals with
            Maps By DuckLabs, we build what we find cool and useful.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest">
            <MapPin className="w-3 h-3" />
            Operating from Sri Lanka
          </div>
        </RetroCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-zinc-800 bg-zinc-900/50 relative overflow-hidden">
            <div className="absolute inset-0 scanlines opacity-10"></div>
            <h3 className="text-zinc-200 font-bold mb-2 uppercase tracking-widest text-sm z-10 relative">
              Origin Story
            </h3>
            <p className="text-zinc-500 text-sm z-10 relative leading-relaxed">
              Founded in Sri Lanka, fueled by coffee and code. We manage GooseAI
              and help people share their crypto addresses via WalAdLink.
            </p>
          </div>
          <div className="p-6 border border-zinc-800 bg-zinc-900/50 relative overflow-hidden">
            <div className="absolute inset-0 scanlines opacity-10"></div>
            <h3 className="text-zinc-200 font-bold mb-2 uppercase tracking-widest text-sm z-10 relative">
              The Duck Philosophy
            </h3>
            <p className="text-zinc-500 text-sm z-10 relative leading-relaxed">
              "AI is not the future, It's just a piece!" We believe technology
              should be fun, retro, and functional.
            </p>
          </div>
        </div>

        <RetroCard title="Our Ecosystem">
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">01.</span>
              <div>
                <span className="text-zinc-200 font-bold">GooseAI</span>
                <p className="text-xs mt-1">
                  Our flagship AI bot living in Telegram and Discord.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">02.</span>
              <div>
                <span className="text-zinc-200 font-bold">
                  Maps By DuckLabs
                </span>
                <p className="text-xs mt-1">
                  Helping people to add their locations to the map.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">03.</span>
              <div>
                <span className="text-zinc-200 font-bold">cool.duck_</span>
                <p className="text-xs mt-1">
                  A side project electronics store. We sell components.
                </p>
              </div>
            </li>
          </ul>
        </RetroCard>
      </div>
    </div>
  );
}
