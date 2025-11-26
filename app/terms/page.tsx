import RetroCard from "@/components/RetroCard";

export default function Terms() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12">
      <div className="border-b border-zinc-800 pb-6 mb-8">
        <h1 className="text-3xl font-bold text-zinc-100">Terms of Service</h1>
        <p className="text-zinc-500 font-mono text-sm mt-2">
          PROTOCOL_V1.0 {`// ACCESS_GRANTED`}
        </p>
      </div>

      <div className="space-y-6">
        <RetroCard>
          <h2 className="text-zinc-200 font-bold text-lg mb-3 uppercase border-l-2 border-zinc-700 pl-3">
            1. Acceptance
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            By accessing DuckLabs websites or using our bots (GooseAI), you
            agree to these terms. If you do not agree, please disconnect from
            the mainframe immediately.
          </p>
        </RetroCard>

        <RetroCard>
          <h2 className="text-zinc-200 font-bold text-lg mb-3 uppercase border-l-2 border-zinc-700 pl-3">
            2. Usage
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            You agree not to misuse our services. This includes attempting to
            crash our bots, spamming, or using our tools for illegal activities.
            Play nice with the ducks.
          </p>
        </RetroCard>

        <RetroCard>
          <h2 className="text-zinc-200 font-bold text-lg mb-3 uppercase border-l-2 border-zinc-700 pl-3">
            3. Disclaimer
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            All tools are provided "as is". DuckLabs is not responsible for any
            data loss, downtime, or sentient AI takeovers.
          </p>
        </RetroCard>
      </div>
    </div>
  );
}
