import Link from "next/link";

export default function Header() {
  const socials = [
    { title: "Instagram", link: "https://instagram.com/labsduck" },
    { title: "Github", link: "https://github.com/labsduck" },
    { title: "Telegram", link: "https://t.me/ducklabs" },
    { title: "X", link: "https://x.com/labsduck" },
  ];
  const company = [
    { title: "About", path: "/about" },
    { title: "Privacy", path: "/legal/privacy" },
    { title: "Terms", path: "/legal/terms" },
  ];
  return (
    <div className="flex justify-center mx-2 md:m-0">
      <footer className="px-3 py-2 bg-stone-900 md:w-[75%] w-full duration-300 ring-1 ring-stone-600 mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">DuckLabs.</div> <div>©MMXXIV</div>
        </div>
        <div className="h-[1px] w-full bg-stone-600" />
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-lg font-bold">Socials</h2>
            <ul className="text-sm">
              {socials.map((social) => (
                <li key={social.title}>
                  <a href={social.link}>{social.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Company</h2>
            <ul className="text-sm">
              {company.map((item) => (
                <li key={item.title}>
                  <Link href={item.title}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
