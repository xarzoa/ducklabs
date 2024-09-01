"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const newPath = path !== "/";
  return (
    <div className="flex justify-center sticky top-1 z-50 mb-2">
      <header className="m-2 backdrop-blur-sm bg-stone-900/70 px-3 py-2 md:w-[75%] w-full duration-300 ring-1 ring-stone-600">
        <div className="flex items-center justify-between gap-6">
          <h2 className="font-bold text-xl">DuckLabs</h2>
          <div className="flex items-center gap-2">
            <nav>
              <Link href={newPath ? "/" : "/projects"}>{newPath ? "Home" : "Projects"}</Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
