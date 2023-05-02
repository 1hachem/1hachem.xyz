import Block from "@/components/Block";
export default function Grid() {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-5  gap-x-8 gap-y-5">
      <Block
        name="About me"
        description="Salam alaykum 👋 
        my name is Hachem Betrouni 
        I am a tech-generalist who loves reading books and solving complex problems. 
        welcome to my online space ✨"
        link="about"
        className="bg-zinc-900 dark:bg-zinc-200 text-white dark:text-black md:row-span-2 md:col-span-2"
      />

      <Block
        name="Projects"
        description="cool projects I worked on during hackathons, freelance jobs and in my free-time"
        link="projects"
        className="bg-gray-300 dark:bg-zinc-500 md:col-span-2"
      />

      <Block
        name="Blogs"
        description="click here Mom !"
        link="blogs"
        className="bg-purple-300 dark:bg-sky-600"
      />

      <Block
        name="Get in touch"
        description=""
        link="contact"
        className="bg-green-300 dark:bg-green-400"
      />

      <Block
        name="Learn more"
        description="about how I can help you, pricing and business ideas !"
        link=""
        className="bg-yellow-300 dark:bg-teal-400 md:col-span-2"
      />
    </div>
  );
}
