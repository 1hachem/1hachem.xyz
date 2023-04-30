import { ArrowUpRight } from "lucide-react";

type BlockProps = {
  name: string;
  content: string;
  link: string;
  className?: string;
};

const Block = ({ name, content, link }: BlockProps) => {
  return (
    <a href={link}>
      <div className="relative py-6 px-9 min-h-[35vh] rounded-3xl">
        <ArrowUpRight className="absolute top-2 right-2" />
        <h1 className="text-5xl">{name}</h1>
        <br />
        <p className="text-2xl max-w-[50%]">{content}</p>
      </div>
    </a>
  );
};

export default Block;
