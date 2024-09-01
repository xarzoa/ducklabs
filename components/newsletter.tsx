"use client";

import { newsLetter } from "@/actions";
import Captcha from "@/components/lemin";
import Spinner from "@/components/loader";
import { toast } from "sonner";
import { useState, useTransition } from "react";

export function NewsLetter() {
  type ToastType = "info" | "success" | "error" | "warning";
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  async function addEmail(formData: FormData) {
    startTransition(async () => {
      const res = await newsLetter(formData);
      console.log(res);
      const toastType = (res.type as ToastType) || "info";
      toast[toastType](`${res.message}`);
    });
  }
  return (
    <div className="my-4">
      <form action={addEmail} className="grid place-items-center">
        <div className="flex items-center flex-wrap justify-center m-1">
          <input
            type="email"
            required
            placeholder="news@letter.com"
            name="email"
            className="outline-none ring-1 ring-offset-0 focus:ring-stone-100 bg-inherit ring-stone-600 p-2 duration-300 w-44 sm:w-auto h-10 "
          />
          <button
            type="submit"
            className="p-2 ml-1 bg-stone-800 ring-1 ring-offset-0 focus:ring-stone-100 ring-stone-600 min-w-[110px] h-10 grid place-items-center"
          >
            {isPending ? <Spinner /> : "Subscribe"}
          </button>
        </div>
        <div className="w-56 h-12 text-stone-900 mb-2">
          <Captcha />
        </div>
      </form>
    </div>
  );
}
