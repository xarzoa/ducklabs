import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[70vh] grid place-items-center">
      <div className="relative">
        <div className="h-10 w-5 bg-white blur-xl absolute -z-10" />
        <div className="text-center bg-stone-800/50 backdrop-blur-sm p-2 border border-stone-600">
          <h2 className="text-2xl font-bold">Page Not Found!</h2>
          <p className="text-stone-300">Could not find requested resource.</p>
          <Link
            href="/"
            className="p-2 mt-2 bg-stone-800 ring-1 ring-offset-0 focus:ring-stone-100 ring-stone-600 grid place-items-center"
          >
            Return Home
          </Link>
        </div>
        <div className="h-10 w-5 bg-white blur-xl absolute -z-10 right-0 bottom-2" />
      </div>
    </div>
  );
}
