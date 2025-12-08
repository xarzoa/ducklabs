import { ExternalLink, Terminal } from "lucide-react";
import RetroCard from "@/components/RetroCard";

const projectsData = [
  {
    id: "1",
    name: "GooseAI",
    status: "Online",
    description:
      "A discord and telegram bot with rich AI features, including image generation and text generation. Powered by advanced models like Gemini and LLama.",
    tags: ["telegram", "discord", "AI"],
    link: "https://t.me/GooseAIBot",
  },
  {
    id: "2",
    name: "Whisp",
    status: "Offline",
    description:
      "A stranger chat app, like omegle. Made using supabase and shadcnUI. Connect anonymously.",
    tags: ["web", "realtime"],
    link: "https://github.com/xarzoa/whisp",
  },
  {
    id: "3",
    name: "WalAdLink",
    status: "Offline",
    description:
      "A platform to share your crypto wallets addresses with ease. Secure and simple link sharing.",
    tags: ["web", "crypto"],
    link: "https://github.com/xarzoa/waladlink",
  },
  {
    id: "5",
    name: "Maps By DuckLabs",
    status: "Online",
    description:
      "We help people to add their locations to the map. A service improving local navigation data in Sri Lanka.",
    tags: ["service", "maps"],
    link: "https://maps.ducklabs.xyz",
  },
  {
    id: "6",
    name: "cool.duck_",
    status: "Online",
    description:
      "An electronics store side project. We sell electronics, components, and sensors. Not powered by standard e-commerce engines.",
    tags: ["store", "electronics"],
    link: "https://instagram.com/cool.duck_",
  },
];

export default function Projects() {
  const getBadgeColor = (status: string) => {
    switch (status) {
      case "Online":
        return "green";
      case "Development":
        return "yellow";
      default:
        return "gray";
    }
  };
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12">
      <div className="flex items-center justify-between mb-12 border-b border-zinc-800 pb-6">
        <div>
          <h1 className="text-4xl font-bold text-zinc-100 mb-2">
            Projects<span className="animate-pulse">_</span>
          </h1>
          <p className="text-zinc-500 text-sm font-mono">
            INDEX OF WORKS {`// DUCKLABS REPOSITORY`}
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-zinc-600">
          <Terminal className="w-4 h-4" />
          <span className="font-mono text-sm">
            {projectsData.length} RECORDS FOUND
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <RetroCard
            key={project.id}
            title={project.name}
            badge={project.status}
            badgeColor={getBadgeColor(project.status)}
            action={
              <div className="flex justify-between items-end">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-zinc-900 text-zinc-500 border border-zinc-800 px-2 py-1 text-[10px] uppercase tracking-wider hover:text-zinc-300 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-800 border border-transparent hover:border-zinc-700"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            }
          >
            {project.description}
          </RetroCard>
        ))}
      </div>
    </div>
  );
}
