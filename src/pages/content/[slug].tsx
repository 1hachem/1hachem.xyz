import { getBlogBySlug, getBlogs } from "@/utils/getBlogs";
import { GetStaticPropsContext } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Layout from "@/components/layouts/BlogLayout";
import Heading from "@/components/mdx/Heading";
import Text from "@/components/mdx/Text";
import Block from "@/components/Block";
import Offer from "@/components/Offer";
import Copy from "@/components/Copy";

import type { MDXRemoteSerializeResult } from "next-mdx-remote";

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  p: Text.p,
  a: Text.a,
  li: Text.li,
  Block: Block,
  Offer: Offer,
  Copy: Copy,
};

interface BlogProps {
  meta: { author: string; title: string; description: string };
  content: MDXRemoteSerializeResult;
}

export default function Blog({ meta, content }: BlogProps) {
  return (
    <Layout meta={meta}>
      <MDXRemote {...content} components={components} />
    </Layout>
  );
}

export const getStaticPaths = () => {
  const blogs = getBlogs();
  return {
    paths: blogs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const slug = ctx.params?.slug;
  const { meta, content } = getBlogBySlug(slug as string);
  return {
    props: {
      meta,
      content: await serialize(content),
    },
  };
};
