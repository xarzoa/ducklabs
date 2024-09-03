import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center">
      <footer className="px-3 py-2 bg-stone-900 md:w-[75%] w-full duration-300 ring-1 ring-stone-600 mt-4">
        <div className="flex items-center justify-between gap-6">
          <div className="text-2xl font-bold">DuckLabs.</div> <div>©MMXXIV</div>
        </div>
        <div className="grid grid-cols-3 mt-3">
          <div>
            <h2 className="text-lg font-bold">Socials</h2>
            <ul className="text-sm">
              <li>
                <a href="https://instagram.com/labsduck">Instagram</a>
              </li>
              <li>
                <a href="https://x.com/labsduck">X</a>
              </li>
              <li>
                <a href="https://github.com/labsduck">Github</a>
              </li>
              <li>
                <a href="https://t.me/ducklabs">Telegram</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Company</h2>
            <ul className="text-sm">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <a href="/terms">Terms</a>
              </li>
              <li>
                <a href="/privacy">Privacy</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Resources</h2>
            <ul className="text-sm">
              <li>Nothing...</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
