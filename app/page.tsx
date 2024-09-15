import { NewsLetter } from "@/components/newsletter";

export default function Home() {
  return (
    <main>
      <div className="grid place-items-center relative bg-grid min-h-[50vh]">
        <div className="w-4 h-36 absolute bg-white blur-2xl -z-20 rotate-45" />
        <div className="w-4 h-36 absolute bg-white blur-2xl -z-20 rotate-[22deg] left-11" />
        <div className="w-4 h-36 absolute bg-white blur-2xl -z-20 -bottom-16 right-36 -rotate-[35deg]" />
        <div className="text-center">
          <div className="my-24 mx-8">
            <div className="text-3xl font-bold backdrop-blur-sm p-2">We build for the future.</div>
            <div className="text-stone-300">AI is not the future, It's a piece of it!</div>
          </div>
          <NewsLetter />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 m-2 p-2 gap-6">
        <div className="backdrop-blur-sm p-2 bg-stone-900/50">We build apps, bots, and tools for web and you!</div>
        <div className="backdrop-blur-sm p-2 bg-stone-900/50">
          Yes, We love ducks. And yes course, we pet ducks too.
        </div>
        <div className="backdrop-blur-sm p-2 bg-stone-900/50">
          Did you know? AI is just a fancy pharse and we still isn't there yet.
        </div>
        <div className="backdrop-blur-sm p-2 bg-stone-900/50">
          Did you know? We made the GooseAI. One of the most advanced AI telegram bots.
        </div>
      </div>
    </main>
  );
}
