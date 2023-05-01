import Block from "@/components/Block";
export default function Blogs() {
  return (
    <div className="p-5 grid md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-5 ">
      <Block
        name="1 million reasons"
        description="why I never owned a smartphone"
        date="12/12/2023"
        link="/blogs/blog1"
        className="bg-slate-400 dark:bg-zinc-200 text-white dark:text-black row-span-1 col-span-1"
      />
      <Block
        name="Definitive guide"
        description="for wining freelance bids"
        date="12/12/2023"
        link="/blogs/blog1"
        className="bg-purple-300 dark:bg-purple-900  row-span-1 col-span-1"
      />
      <Block
        name="I wish I used linux"
        description="from the day I was born"
        date="12/12/2023"
        link="/blogs/blog1"
        className="bg-yellow-300 dark:bg-zinc-500  row-span-1 col-span-1"
      />
      <Block
        name="Seek problems success will come chasing you"
        description="how to solve domain specific"
        date="12/12/2023"
        link="/blogs/blog1"
        className="bg-green-300 dark:bg-green-900  row-span-1 col-span-2"
      />
    </div>
  );
}
