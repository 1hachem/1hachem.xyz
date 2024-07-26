import Head from "next/head";

interface LayoutProps {
	children: React.ReactNode;
	meta: {
		title: string;
		description: string;
		image_url?: string;
		language?: string;
	};
}

const ContentLayout = ({ children, meta }: LayoutProps) => {
	// Check if the content language is Arabic
	const isArabic = meta.language === "ar";

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="description" content={meta.description} />
				<meta name="author" content="Hachem Betrouni" />
				<meta name="title" content={meta.title} />

				<meta name="og:title" content={meta.title} />
				<meta name="og:description" content={meta.description} />
				<meta name="og:image" content={meta.image_url} />
			</Head>
			<div
				className={`w-[90%] mx-auto p-2 select-text ${isArabic ? "text-right" : ""}`}
			>
				<h1 className="text-5xl py-4">{meta.title}</h1>
				{meta.description ? (
					<h2 className="text-3xl">
						{meta.description}
						<br />
					</h2>
				) : null}
				<br />
				{children}
				<br />
			</div>
		</>
	);
};

export default ContentLayout;
