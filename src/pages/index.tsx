import Block from "@/components/Block";

export default function Grid() {
  return (
    <div>
      <div className="p-10 grid grid-cols-5 gap-x-8 gap-y-5">
        {/* bg-[url('../../public/images/1.jpg')] bg-contain bg-no-repeat bg-right-bottom > */}
        <Block
          name="About me"
          content="I am Hachem Betrouni, I love AI "
          link="about"
          className="bg-zinc-900 text-white row-span-2 col-span-2"
        />

        <Block
          name="Projects"
          content="Check out my projects"
          link="projects"
          className="bg-gray-300 col-span-2"
        />

        <Block
          name="Blogs"
          content="My blogs"
          link="blogs"
          className="bg-purple-300 col-span-1"
        />

        <Block
          name="Contact me"
          content=""
          link="contact"
          className="bg-green-300 col-span-1"
        />

        <Block
          name="How can I help you ?"
          content="my services, pricing, reviews and more !"
          link=""
          className="bg-yellow-200 col-span-2"
        />
      </div>
    </div>
  );
}
