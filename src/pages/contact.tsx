import Block from "@/components/Block";
import Copy from "@/components/Copy";
import Offer from "@/components/Offer";
import ContentLayout from "@/components/layouts/ContentLayout";

const meta = {
  author: "Hachem Betrouni",
  title: "Get in touch",
  description: "my contacts",
};

const contact = () => {
  return (
    <ContentLayout meta={meta}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
        <Block
          name="Email"
          description="I am very responsive on email !"
          className="bg-black text-white md:col-span-1"
          link="mailto:hachem.betrouni@g.enp.edu.dz"
        />
        <Block
          name="Linkedin"
          description="Updates on my projects, events and articles"
          className="bg-blue-500 text-white md:col-span-1"
          link="https://www.linkedin.com/in/hachem-betrouni/"
        />
        <Block
          name="Github"
          description="Add me and lets build something together !"
          className="bg-slate-500 text-white md:col-span-1"
          link="https://github.com/1hachem"
        />
        <Offer
          name="Discord"
          description={<Copy text="Hachem#7888" />}
          className="bg-zinc-300 text-black md:col-span-1"
        />

        <Block
          name="Twitter"
          description="I don't tweet much but I visit twitter weekly"
          className="bg-sky-200 text-black md:col-span-1"
          link="https://twitter.com/HachemBetrouni"
        />
      </div>
    </ContentLayout>
  );
};

export default contact;
