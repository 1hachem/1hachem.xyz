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
			<div className="flex flex-col select-none antialiased max-w-4xl mx-4 mt-4 lg:mx-auto">
				<Navbar />
				<Component {...pageProps} />
			</div>
			<Footer />
			<Analytics />
		</ThemeProvider>
	);
}
