import { Link } from "lucide-react";

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
  },
  {
    name: "WalAdLink",
    platforms: ["web"],
    description: "A platform to share your crypto wallets addresses with ease.",
    status: false,
  },
  {
    name: "MiniGames",
    platforms: ["discord"],
    description: "A discord bot to play small games like counting to infinite and more...",
    status: false,
  },
];

export default function Projects() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {projects.map((project) => (
          <div key={project.name} className="bg-stone-900/70 p-2 ring-1 ring-stone-600 ">
            <div className="flex gap-2">
              <h2 className="font-bold">{project.name}</h2>
              <div className={`size-2 ${project.status ? "bg-green-300" : "bg-red-400"}`} />
            </div>
            <p className="text-sm">{project.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1 mt-2">
                {project.platforms.map((platform) => (
                  <div
                    key={platform}
                    className={`text-xs ring-1 ring-offset-0 p-1 ${platform === "web" ? "bg-green-600 ring-green-500" : platform === "telegram" ? "bg-sky-500 ring-sky-400" : "bg-indigo-700 ring-indigo-600"}`}
                  >
                    {platform}
                  </div>
                ))}
              </div>
              <div className="flex">
                {project.links?.map((link) => (
                  <a href={link} key={link}>
                    <Link className="size-5" />
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
