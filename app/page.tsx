import { NewsLetter } from "@/components/newsletter";

export default function Home() {
  return (
    <main>
      <div className="grid place-items-center relative bg-grid min-h-[50vh]">
        <div className="w-4 h-36 absolute bg-white blur-2xl -z-20 rotate-45" />
        <div className="w-4 h-36 absolute bg-white blur-2xl -z-20 rotate-[22deg] left-11" />
        <div className="w-4 h-36 absolute bg-white blur-2xl -z-20 -bottom-16 right-36 -rotate-[35deg]" />
        <div className="text-center">
          <div className="text-2xl font-bold my-24 mx-8">
            Generative models are the future. So we help you to get started.
          </div>
          <NewsLetter />
        </div>
      </div>
      {/* <div className="grid text-center">
        We make apps, websites, bots and train AI. Also we love kubernetes and docker.
      </div> */}
    </main>
  );
}
