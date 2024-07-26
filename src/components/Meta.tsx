import Head from "next/head";

interface MetaProps {
	title: string;
	description: string;
}

const Meta = ({ title, description }: MetaProps) => (
	<Head>
		<title>{title}</title>
		<meta name="description" content={description} />
		<meta name="og:title" content="Hachem Betrouni" />
		<meta name="og:description" content={description} />
	</Head>
);

export default Meta;
