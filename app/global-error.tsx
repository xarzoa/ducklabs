"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error);
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen w-full grid place-items-center">
          <div>
            <h2 className="text-2xl">Something went wrong!</h2>
            <button
              onClick={() => reset()}
              type="button"
              className="p-2 ml-1 bg-stone-800 ring-1 ring-offset-0 focus:ring-stone-100 ring-stone-600 min-w-[110px] h-10 grid place-items-center"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
