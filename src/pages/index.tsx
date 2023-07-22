import Block from "@/components/Block";
import Loop from "@/components/Loop";
import { motion } from "framer-motion";

export default function Grid() {
  return (
    <motion.div className="p-5 grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-5">
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
        name="Reading list"
        description="Books I read, am reading or I will read"
        link="content/readinglist"
        position=""
        className="bg-gray-300 dark:text-black"
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

      <Block
        name="Projects"
        description="under construction 🚧"
        link=""
        position="md:col-span-1"
        className="bg-orange-300 dark:text-black"
      />

      <Block
        name="Memories"
        description="under construction 🚧"
        link=""
        position="md:col-span-2"
        className="bg-slate-300 dark:text-black"
      />
    </motion.div>
  );
}
