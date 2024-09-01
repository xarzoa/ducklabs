const ENV = ["RESEND_KEY", "LEMIN_KEY"] as const;
const optional = new Set([""]);

type Env = Record<(typeof ENV)[number], string>;

export const env: Env = Object.fromEntries(
  ENV.map((name) => {
    const value = process.env[name];
    if (!value && !optional.has(name)) {
      throw new Error(`Env ${name} is not set!`);
    }
    return [name, value];
  }),
) as Env;
