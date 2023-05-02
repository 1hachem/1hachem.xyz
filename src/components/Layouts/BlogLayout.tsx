import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import Heading from "../mdx/Heading";
import Para from "../mdx/Para";

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  p: Para,
};

interface LayoutProps {
  children: React.ReactNode;
  meta: { author: string; title: string; slug: string; topics: string[] };
}

const Layout = ({ children, meta }: LayoutProps) => {
  return (
    <MDXProvider components={components}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.title} />
      </Head>
      <div className="w-[90%] mx-auto p-4 bg-zinc-50 bg-opacity-20 bg-blur-3xl rounded-xl">
        {children}
      </div>
    </MDXProvider>
  );
};

export default Layout;
