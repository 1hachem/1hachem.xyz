import Block from "@/components/Block";
import Loop from "@/components/Loop";
import { motion } from "framer-motion";

export default function Grid() {
  return (
    <motion.div className="p-5 grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-5">
      <Loop />
      <Block
        name="About me"
        description="I am Hachem Betrouni a tech-generalist who loves reading books and solving complex problems."
        link="content/about"
        position="md:row-span-2 md:col-span-2"
        className="bg-black text-white"
      />

      <Block
        name="Projects"
        description="cool projects I am working on"
        link=""
        position="md:col-span-2"
        className="bg-gray-300 dark:text-black"
      />

      <Block
        name="Blogs"
        description="click here Mom !"
        link="content"
        position=""
        className="bg-purple-300 dark:text-black"
      />

      <Block
        name="Get in touch"
        description="not on phone though, I never owned one."
        link="content/contact"
        position=""
        className="bg-green-300 dark:text-black"
      />

      <Block
        name="Learn more"
        description="about how I can help you, pricing and business ideas !"
        link="content/learnmore"
        position="md:col-span-2"
        className="bg-yellow-300 dark:text-black"
      />
    </motion.div>
  );
}
