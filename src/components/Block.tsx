import { ArrowUpRight } from "lucide-react";
import useSound from "use-sound";

const sound = "/sounds/hover.mp3";

type BlockProps = {
  name: string;
  content: string;
  link: string;
  className?: string;
};

const Block = ({ name, content, link, className }: BlockProps) => {
  const [play] = useSound(sound);
  return (
    <a
      href={link}
      className={`${className} hover:scale-105 rounded-3xl`}
      onMouseEnter={() => {
        play();
      }}
    >
      <div className="relative py-6 px-9 min-h-[35vh]">
        <ArrowUpRight className="absolute top-2 right-2" />
        <h1 className="text-5xl">{name}</h1>
        <br />
        <p className="text-2xl max-w-[50%]">{content}</p>
      </div>
    </a>
  );
};

export default Block;
