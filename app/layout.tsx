import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/globals.css";

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jb_mono",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "DuckLabs - We innovate.",
  description: "Generative AI is the future. We are building the future.",
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
      <body className={`${jbMono.className} selection:bg-stone-100 selection:text-stone-900 min-h-screen`}>
        <ThemeProvider forcedTheme="dark" attribute="class" defaultTheme="dark">
          <Header />
          <div className="flex items-center justify-center">
            <div className="md:w-[75%] w-full">{children}</div>
          </div>
          <Toaster
            theme="dark"
            position="bottom-center"
            expand
            toastOptions={{
              className: "rounded-none backdrop-blur-sm bg-stone-950/75",
            }}
          />
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
