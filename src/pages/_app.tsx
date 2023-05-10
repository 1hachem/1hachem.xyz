import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <div className="flex flex-col min-h-screen select-none">
          <Navbar />
          <div className="flex-1">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
      <Analytics />
    </SessionProvider>
  );
}
