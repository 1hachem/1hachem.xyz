import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import Heading from "../mdx/Heading";
import Text from "../mdx/Text";

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  p: Text.p,
  a: Text.a,
  li: Text.li,
};

interface LayoutProps {
  children: React.ReactNode;
  meta: { author: string; title: string; slug: string };
}

const Layout = ({ children, meta }: LayoutProps) => {
  return (
    <MDXProvider components={components}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.title} />
      </Head>
      <div className="w-[90%] mx-auto p-2 select-text">
        <h1 className="text-5xl py-4 font-stora">{meta.title}</h1>
        {meta.slug ? (
          <>
            <h2 className="text-3xl font-stora">{meta.slug}</h2> <br />
          </>
        ) : null}

        {meta.author ? (
          <>
            <p className="text-md">by {meta.author}</p>{" "}
          </>
        ) : null}
        <br />
        <br />
        {children}
        <br />
      </div>
    </MDXProvider>
  );
};

export default Layout;
