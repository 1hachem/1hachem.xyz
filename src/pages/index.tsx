import Block from "@/components/Block";
import Head from "next/head";

export default function Grid() {
  return (
    <>
      <Head>
        <title>Hachem Betrouni</title>
        <meta
          name="description"
          content="welcome to hachem.xyz, my personal space !"
        />
        <meta name="og:title" content="Hachem Betrouni" />
        <meta
          name="og:description"
          content="welcome to hachem.xyz, my personal website !"
        />
      </Head>
      <div className="flex-grow p-5 grid md:grid-rows-3 grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-5">
        <Block
          name="About me"
          description="I am Hachem Betrouni an AI engineer and hobbyist mycologist. I am into reading books and solving complex problems."
          link="content/about"
          position="md:row-span-2 md:col-span-2"
          className="bg-black text-white"
        />

        <Block
          name="Blogs"
          description="click here Mom !"
          link="content"
          position="md:col-span-2"
          className="bg-purple-300 dark:text-black"
        />

        <Block
          name="Get in touch"
          description=""
          link="/contact"
          position=""
          className="bg-green-300 dark:text-black"
        />

        <Block
          name="Freelance"
          description="learn more about how I can help you !"
          link="content/learnmore"
          position="md:col-span-2"
          className="bg-yellow-300 dark:text-black"
        />
      </div>
    </>
  );
}
