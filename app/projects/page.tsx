import { SquareArrowOutUpRight } from "lucide-react";

const projects = [
  {
    name: "GooseAI",
    platforms: ["telegram", "discord"],
    description: "A discord and telegram both with rich AI features, including image generation and text generation.",
    status: true,
    links: ["https://t.me/gooseaibot", "https://top.gg/bot/1221930833854595172"],
  },
  {
    name: "Whisp",
    platforms: ["web"],
    description: "A stanger chat app, like omegle. Made using supabase and shadcnUI",
    status: false,
    links: ["https://github.com/xarzoa/whisp"],
  },
  {
    name: "WalAdLink",
    platforms: ["web"],
    description: "A platform to share your crypto wallets addresses with ease.",
    status: false,
    links: ["https://github.com/xarzoa/waladlink"],
  },
  {
    name: "MiniGames",
    platforms: ["discord"],
    description: "A discord bot to play small games like counting to infinite and more...",
    status: false,
    links: ["https://github.com/labsduck/minigames"],
  },
];

export default function Projects() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 m-2 md:m-0">
        {projects.map((project) => (
          <div key={project.name} className="bg-stone-900/70 p-2 ring-1 ring-stone-600 ">
            <div className="flex gap-2">
              <h2 className="font-bold">{project.name}</h2>
              <div
                className={`h-4 px-[2px] text-xs ring-1 ring-offset-0 ${project.status ? "bg-stone-50 ring-white text-stone-900" : "bg-stone-400 ring-stone-300"}`}
              >
                {project.status ? "Online" : "Offline"}
              </div>
            </div>
            <p className="text-sm">{project.description}</p>
            <div className="flex items-end justify-between">
              <div className="flex flex-wrap gap-1 mt-2">
                {project.platforms.map((platform) => (
                  <div
                    key={platform}
                    className={`text-xs ring-1 ring-offset-0 p-1 ${platform === "web" ? "bg-stone-600 ring-stone-500" : platform === "telegram" ? "bg-stone-500 ring-stone-400" : "bg-stone-700 ring-stone-600"}`}
                  >
                    {platform}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 items-center">
                {project.links?.map((link) => (
                  <a href={link} key={link}>
                    <SquareArrowOutUpRight className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
