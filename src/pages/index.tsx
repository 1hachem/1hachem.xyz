import Blogs from "@/components/Blogs";
import Offers from "@/components/Offers";
import { Button } from "@/components/ui/button";
import { getContentWithMeta } from "@/utils/getContent";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = () => {
  const { slugs, contentMeta } = getContentWithMeta();
  return {
    props: {
      slugs,
      contentMeta,
    },
  };
};

export default function Grid({
  slugs,
  contentMeta,
}: {
  slugs: string[];
  contentMeta: {
    title: string;
    description: string;
    publish: boolean;
  }[];
}) {
  return (
    <>
      <Head>
        <title>1hachem</title>
        <meta
          name="description"
          content="welcome to 1hachem.xyz, my online space !"
        />
        <meta name="og:title" content="Hachem Betrouni" />
        <meta
          name="og:description"
          content="welcome to 1hachem.xyz, my online space !"
        />
      </Head>
      <div className="grid gap-y-10">
        <div className="text-3xl py-10">
          As-salamu alaykum 👋🏽, I am Hachem Betrouni and I stand with 🇵🇸
        </div>
        <div className="text-xl">
          I am currently working as CTO and AI engineer at BIGmama technology in
          Algeria, and we are building useful AI tools that will go brrrrr inchalah
          <a className="text-blue-400 underline" href="https://hyko.ai/">
            {" "}
            Hyko
          </a>{" "}
          &
          <a className="text-blue-400 underline" href="https://yourscrib.ai/">
            {" "}
            Yourscrib
          </a>
          , and we are always looking for special humans and talented engineers to join our 
          mission in proving to ourselves "Africans" and to the rest of the world that we can build world class 
          technology by Africans in Africa. 🌍
        </div>
        {/* <Figures /> */}
        <h1 className="text-3xl">Hiring</h1>
        <Offers />
        <h1 className="text-3xl">About me</h1>
        <div className="text-xl py-1">
          CTO or AI engineer are not who I am. Let me properly introduce my self
          again. I am muslim, but for me being a muslim is not about wearing certain cloths or practicing certain rituals. 
          I live and travel in order to comprehand the divine words god put in his book;
          the quran. I am a husband, a reader, and an amature mycologist, I am learning
          to become a farmer, a biologist, and a mathematician.
        </div>
        <Button className="w-1/2 place-self-center" asChild>
          <Link href="/content/about">Learn more</Link>
        </Button>
        <h1 className="text-3xl">Drafts</h1>
        <div className="text-xl py-1">
          Sometime when the moon strikes I write my random thoughts 
        </div>
        <Blogs slugs={slugs} contentMeta={contentMeta} />
      </div>
    </>
  );
}
