import RetroCard from "@/components/RetroCard";

export default function Privacy() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12">
      <div className="border-b border-zinc-800 pb-6 mb-8">
        <h1 className="text-3xl font-bold text-zinc-100">Privacy Policy</h1>
        <p className="text-zinc-500 font-mono text-sm mt-2">
          LAST_UPDATED: 2024 {"// DUCKLABS SECURE"}
        </p>
      </div>

      <div className="space-y-6">
        <RetroCard>
          <h2 className="text-zinc-200 font-bold text-lg mb-3 uppercase border-l-2 border-green-900 pl-3">
            1. Data Collection
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            DuckLabs respects your privacy. We collect minimal data necessary
            for the operation of our services (GooseAI, Whisp, etc.). We do not
            sell your data to third parties. Your secrets are safe with the
            ducks.
          </p>
        </RetroCard>

        <RetroCard>
          <h2 className="text-zinc-200 font-bold text-lg mb-3 uppercase border-l-2 border-green-900 pl-3">
            2. User Content
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Conversations with GooseAI may be processed by AI models to generate
            responses. Do not share sensitive personal identification
            information (PII) in chats.
          </p>
        </RetroCard>

        <RetroCard>
          <h2 className="text-zinc-200 font-bold text-lg mb-3 uppercase border-l-2 border-green-900 pl-3">
            3. Third Party Services
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Some of our tools integrate with platforms like Discord and
            Telegram. Your usage of those platforms is subject to their
            respective privacy policies.
          </p>
        </RetroCard>

        <div className="p-6 border border-zinc-800 bg-zinc-950 text-center">
          <p className="text-zinc-500 text-xs uppercase tracking-widest">
            For privacy concerns, contact us via our social channels.
          </p>
        </div>
      </div>
    </div>
  );
}
