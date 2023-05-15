import Block from "@/components/Block";
export default function Blogs() {
  return (
    <div className="p-5 grid md:grid-cols-3 gap-x-8 gap-y-5 ">
      <Block
        name="1 million reasons"
        description="why I never owned a smartphone"
        link="/blogs/smartphone"
        className="bg-slate-400 text-white"
      />

      {/* <Block
        name="automatic prototyping"
        description="blog for indabaX algeria 2023 poster"
        link="/blogs/autoprototype"
        className="bg-slate-400 text-white "
      /> */}
    </div>
  );
}
