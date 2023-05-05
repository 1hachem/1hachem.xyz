import Block from "@/components/Block";
import { motion } from "framer-motion";

export default function Grid() {
  return (
    <motion.div className="p-5 grid grid-cols-1 md:grid-cols-5  gap-x-8 gap-y-5">
      <Block
        name="welcome to hachem.xyz"
        description="more than a portfolio, this is my internet presence !"
        link=""
        dummy={true}
        className="dark:text-white text-black md:col-span-5 border-dotted"
      />
      <Block
        name="About me"
        description="I am Hachem Betrouni a tech-generalist who loves reading books and solving complex problems."
        link="content/about"
        className="bg-zinc-600 dark:bg-white text-white dark:text-black md:row-span-2 md:col-span-2"
      />

      <Block
        name="Projects"
        description="cool projects I worked on during hackathons, freelance jobs and in my free-time"
        link=""
        className="bg-gray-300 dark:bg-zinc-500 md:col-span-2"
      />

      <Block
        name="Blogs"
        description="click here Mom !"
        link="content/blogs"
        className="bg-purple-300 dark:bg-sky-600"
      />

      <Block
        name="Get in touch"
        description="not on phone though, I never owned one."
        link=""
        className="bg-green-300 dark:bg-green-800 "
      />

      <Block
        name="Learn more"
        description="about how I can help you, pricing and business ideas !"
        link=""
        className="bg-yellow-300 dark:bg-yellow-500 md:col-span-2"
      />
    </motion.div>
  );
}
