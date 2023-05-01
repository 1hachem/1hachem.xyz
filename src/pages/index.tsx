import Block from "@/components/Block";
export default function Grid() {
  return (
    <div className="p-5 grid lg:grid-cols-5 sm:grid-cols-2 gap-x-8 gap-y-5">
      <Block
        name="About me"
        description="I am Hachem Betrouni, I love AI "
        link="about"
        className="bg-zinc-900 dark:bg-zinc-200 text-white dark:text-black row-span-2 col-span-2"
      />

      <Block
        name="Projects"
        description="Check out my projects"
        link="projects"
        className="bg-gray-300 dark:bg-zinc-500 col-span-2"
      />

      <Block
        name="Blogs"
        description="My blogs"
        link="blogs"
        className="bg-purple-300 dark:bg-stone-600 col-span-1"
      />

      <Block
        name="Contact me"
        description=""
        link="contact"
        className="bg-green-300 dark:bg-green-900 col-span-1"
      />

      <Block
        name="How can I help you ?"
        description="services, pricing, reviews and more !"
        link=""
        className="bg-yellow-300 dark:bg-sky-900 col-span-2"
      />
    </div>
  );
}
