import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
      <ThemeProvider attribute="class">
        <div className="flex flex-col min-h-screen select-none">
          <Navbar />
          <div className="flex-col flex-grow">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
        <Analytics />
      </ThemeProvider>
  );
}
