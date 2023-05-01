import { ArrowUpRight } from "lucide-react";
import useSound from "use-sound";

const sound = "/sounds/hover.mp3";

type BlockProps = {
  name: string;
  date?: string;
  description?: string;
  link?: string;
  className?: string;
  dummy?: boolean;
};

const Block = ({
  name,
  date,
  description,
  link,
  className,
  dummy,
}: BlockProps) => {
  const [play] = useSound(sound, { volume: 0.25 });
  return (
    <a
      href={link}
      className={`${className} hover:scale-105 rounded-3xl bg-opacity-50 dark:bg-opacity-70 backdrop-blur-3xl dark:backdrop-blur-3xl`}
      onMouseEnter={() => {
        play();
      }}
    >
      <div className="relative py-6 px-9 min-h-[35vh]">
        <ArrowUpRight className="absolute top-2 right-2" />
        <h1 className="text-5xl">{name}</h1>
        <br />
        <p className="text-2xl">{description}</p>
        <p className="text-xl absolute right-5 bottom-5">{date}</p>
      </div>
    </a>
  );
};

export default Block;
