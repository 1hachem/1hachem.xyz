import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Blob from "@/components/Blob";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Blob className="top-10 left-16 bg-purple-300 dark:bg-blue-400" />
      <Blob className="top-10 right-16 bg-yellow-300 dark:bg-green-400 animation-delay-2000" />
      <Blob className="bottom-10 left-16 bg-green-300 dark:bg-purple-400 animation-delay-4000" />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
