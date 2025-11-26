"use client";
import { Bot, Check, Cpu, Globe, MapPin, Zap } from "lucide-react";
import { useState } from "react";
import RetroCard from "@/components/RetroCard";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isHuman, setIsHuman] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center w-full max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-12 space-y-24">
        <div className="text-center space-y-8 mt-10 md:mt-20 relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4">
            We build for the{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-zinc-800/50 skew-y-3 blur-xl opacity-50"></span>
              <span className="relative text-zinc-500">future.</span>
            </span>
          </h1>
          <p className="text-zinc-500 font-mono text-sm md:text-base uppercase tracking-[0.2em] max-w-2xl mx-auto">
            AI is not the future, It's just a piece of it.
            <span className="animate-pulse">_</span>
          </p>
        </div>
        {/*<div className="w-full max-w-md mx-auto space-y-8 relative z-10">
          <div className="flex bg-zinc-900/30 p-1 border border-zinc-800/50">
            <input
              type="email"
              placeholder="news@letter.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent p-4 text-zinc-300 placeholder:text-zinc-700 focus:outline-none font-mono text-sm"
            />
            <button
              className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-6 border-l border-zinc-800/50 font-mono uppercase text-xs tracking-wider transition-all cursor-pointer"
              type="button"
            >
              Subscribe
            </button>
          </div>
          <button
            type="button"
            className="bg-white text-black p-4 flex items-center justify-between gap-4 cursor-pointer select-none w-fit mx-auto shadow-[4px_4px_0px_0px_rgba(30,30,30,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all border border-zinc-800 min-w-[200px]"
            onClick={() => setIsHuman(!isHuman)}
          >
            <div
              className={`w-6 h-6 border-2 border-black flex items-center justify-center transition-colors ${isHuman ? "bg-black" : "bg-transparent"}`}
            >
              {isHuman && <Check className="w-4 h-4 text-white" />}
            </div>
            <span className="font-bold font-mono uppercase tracking-tight flex-1 text-center">
              I'm Human
            </span>
            <Bot className="w-6 h-6 stroke-1" />
          </button>
        </div>*/}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12">
          <RetroCard title="Our Mission">
            <p>We build apps, bots, and tools for web and you!</p>
            <p className="mt-4 text-zinc-500 text-sm border-t border-zinc-800 pt-4">
              Born in the digital age, we craft software that respects the user
              and empowers the creator. No bloat, just code.
            </p>
          </RetroCard>

          <RetroCard title="The Team">
            <p>Yes, We love ducks. And of course, we pet ducks too.</p>
            <div className="flex items-center gap-2 mt-4 text-zinc-400 text-sm font-bold uppercase bg-zinc-900/50 p-2 border border-zinc-800 w-full">
              <MapPin className="w-4 h-4" />
              Based in Sri Lanka
            </div>
          </RetroCard>

          <RetroCard title="Real Talk">
            <p>
              Did you know? AI is just a fancy phrase and we still isn't there
              yet.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-zinc-500 text-xs italic">
                But we're not working on it.
              </p>
            </div>
          </RetroCard>

          <RetroCard title="Flagship: GooseAI">
            <p>One of the most advanced AI telegram bots available.</p>
            <div className="mt-4 flex gap-2">
              <div className="px-2 py-1 border border-zinc-700 text-xs text-zinc-500 bg-zinc-900 hover:text-zinc-300 cursor-default">
                Telegram
              </div>
              <div className="px-2 py-1 border border-zinc-700 text-xs text-zinc-500 bg-zinc-900 hover:text-zinc-300 cursor-default">
                Discord
              </div>
            </div>
          </RetroCard>
        </div>

        <div className="w-full border-t border-zinc-800 pt-12">
          <div className="flex items-center mb-8">
            <div className="w-4 h-4 bg-zinc-800 mr-4"></div>
            <h2 className="text-2xl font-bold text-zinc-100 uppercase tracking-widest">
              Expanded Universe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RetroCard className="bg-zinc-900/30">
              <div className="mb-6 text-zinc-400 group-hover:text-white transition-colors flex justify-between items-start">
                <Globe className="w-10 h-10" />
                <span className="text-xs border border-zinc-700 px-2 py-1 text-zinc-500">
                  SERVICE
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-200 mb-2">
                Maps By DuckLabs
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                A service that helps people to add their locations to the map.
                Accurate, fast, and reliable geolocation services for Sri Lanka.
              </p>
            </RetroCard>

            <RetroCard className="bg-zinc-900/30">
              <div className="mb-6 text-zinc-400 group-hover:text-white transition-colors flex justify-between items-start">
                <div className="flex gap-2">
                  <Cpu className="w-10 h-10" />
                  <Zap className="w-10 h-10" />
                </div>
                <span className="text-xs border border-zinc-700 px-2 py-1 text-zinc-500">
                  STORE
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-200 mb-2">
                cool.duck_
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                Our online electronics store. It is a side project where we sell
                electronics. Not powered by a big ecom engine, just powered by
                DuckLabs.
              </p>
            </RetroCard>
          </div>
        </div>
      </main>
    </div>
  );
}
