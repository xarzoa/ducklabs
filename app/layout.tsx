import type { Metadata } from "next";
import { JetBrains_Mono, DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/globals.css";
import Script from "next/script";

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jb_mono",
});

const dmSans = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmsans",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "DuckLabs - We build for the future.",
  description: "Generative AI is the future. We are building for the future.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://collect.ducklabs.xyz/script.js" data-website-id={process.env.WEBSITE_ID} />
      <body className={`${jbMono.className} selection:bg-stone-100 selection:text-stone-900 min-h-screen`}>
        <ThemeProvider forcedTheme="dark" attribute="class" defaultTheme="dark">
          <Header />
          <div className="flex items-center justify-center">
            <div className="md:w-[75%] w-full px-2 md:p-0">{children}</div>
          </div>
          <Toaster
            theme="dark"
            position="bottom-center"
            expand
            toastOptions={{
              className: "rounded-none backdrop-blur-sm bg-stone-950/75",
            }}
          />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
