import Block from "@/components/Block";

export default function Home() {
  return (
    <>
      <div className="p-10 grid grid-cols-4 gap-x-8 gap-y-5">
        <div className="bg-zinc-900 rounded-3xl text-white row-span-2 col-span-2 hover:scale-105">
          {/* bg-[url('../../public/images/1.jpg')] bg-contain bg-no-repeat bg-right-bottom > */}
          <Block
            name="About me"
            content="I am Hachem Betrouni, I love AI "
            link=""
          />
        </div>
        <div className="bg-gray-300 rounded-3xl text-black col-span-2 hover:scale-105">
          <Block name="Projects" content="Check out my projects" link="" />
        </div>
        <div className="bg-purple-300 rounded-3xl text-black col-span-1 hover:scale-105">
          <Block name="Blogs" content="about me" link="" />
        </div>
        <div className="bg-green-300 rounded-3xl text-black col-span-1 hover:scale-105">
          <Block name="Contact me" content="" link="" />
        </div>
      </div>
    </>
  );
}
