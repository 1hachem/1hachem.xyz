import Offers from "@/components/Offers";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";

export default function Grid() {
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
          Algeria, we are building useful AI tools :
          <a className="text-blue-400 underline" href="https://hyko.ai/">
            {" "}
            Hyko
          </a>{" "}
          &
          <a className="text-blue-400 underline" href="https://yourscrib.ai/">
            {" "}
            Yourscrib
          </a>
          , and we are always looking for special humans and talented engineers
          to join our mission in showing excellence from Africa to ourselves and
          to the world.
        </div>
        <h1 className="text-3xl">Hiring</h1>
        <Offers />
        <h1 className="text-3xl">About me</h1>
        <div className="text-xl py-1">
          CTO or AI engineer are not who I am. Let me properly introduce my self
          again. My real name is Abduallah, I am a seeker of wisedom, I live and
          travel in order to comprehand the divine words god put in his book;
          the quran. I am a husband, a reader, and an amature mycologist, I want
          to become a farmer, a biologist, and a mathematician.
        </div>
        <Button className="w-1/2 place-self-center" asChild>
          <Link href="/content/about">Learn more</Link>
        </Button>
        <h1 className="text-3xl">Blogs</h1>
        <div className="text-xl py-1">
          I write about ideas, thoughts, and findings. I also sometimes write
          about my projects.
        </div>
        <Button className="w-1/2 place-self-center" asChild>
          <Link href="/content/">Find them here</Link>
        </Button>
      </div>
    </>
  );
}
