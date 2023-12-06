import Block from "@/components/Block";
import Layout from "@/components/layouts/ContentLayout";
import Heading from "@/components/mdx/Heading";
import Text from "@/components/mdx/Text";
import { getContent, getContentBySlug } from "@/utils/getContent";
import { GetStaticPropsContext } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import type { MDXRemoteSerializeResult } from "next-mdx-remote";

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  p: Text.p,
  a: Text.a,
  li: Text.li,
  Block: Block,
};

interface ContentProps {
  meta: { author: string; title: string; description: string };
  content: MDXRemoteSerializeResult;
}

export default function Content({ meta, content }: ContentProps) {
  return (
    <Layout meta={meta}>
      <MDXRemote {...content} components={components} />
    </Layout>
  );
}

export const getStaticPaths = () => {
  const content = getContent();
  return {
    paths: content.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const slug = ctx.params?.slug;
  const { meta, content } = getContentBySlug(slug as string);
  return {
    props: {
      meta,
      content: await serialize(content),
    },
  };
};
