"use server";

import { Resend } from "resend";
import { z } from "zod";
import { env } from "@/lib/env";

const resend = new Resend(env.RESEND_KEY);

const Schema = z.object({
  email: z.string().email(),
  challenge_id: z.string().uuid(),
  answer: z.string(),
});

interface Error {
  message: string;
}

export const newsLetter = async (formData: FormData) => {
  const email = formData.get("email");
  const challenge_id = formData.get("lemin_challenge_id");
  const answer = formData.get("lemin_answer");

  const validatedFields = Schema.safeParse({ email, challenge_id, answer });
  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;
    const errorMessages = Object.entries(errors)
      .map(([field, messages]) => {
        const capitalizedField = field.charAt(0).toUpperCase() + field.slice(1);
        return `${capitalizedField}: ${messages?.join(", ")}`;
      })
      .join("; ");
    return {
      message: errorMessages,
      type: "error",
    };
  }
  const res = await fetch("https://api.leminnow.com/captcha/v1/cropped/validate", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      private_key: env.LEMIN_KEY,
      challenge_id,
      answer,
    }),
  });
  const captcha = await res.json();
  if (!captcha) {
    return {
      message: "Captcha failed! Try again.",
      type: "error",
    };
  }
  try {
    await resend.contacts.create({
      email: email as string,
      unsubscribed: false,
      audienceId: "d059155a-362d-42d7-96fd-c9110267e7df",
    });
  } catch (e) {
    const error = e as Error;
    return {
      message: error.message,
      type: "error",
    };
  }
  return {
    message: "You're onboard our list. Pet duck's goin busy.",
    type: "success",
  };
};
