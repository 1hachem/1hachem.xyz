import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import useSound from "use-sound";

const sound = "/sounds/hover.mp3";

type BlockProps = {
  name: string;
  date?: string;
  description?: string;
  link?: string;
  className?: string;
};

const Block = ({ name, date, description, link, className }: BlockProps) => {
  const [play] = useSound(sound, { volume: 0.25 });
  return (
    <motion.div
      onClick={() => {
        play();
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      whileHover={{
        scale: [1, 1.05],
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.95 }}
      className={`${className} col-span-1 row-span-1 rounded-3xl bg-opacity-50 dark:bg-opacity-70 backdrop-blur-3xl dark:backdrop-blur-3xl`}
    >
      <a href={link}>
        <div className="relative py-6 px-9 min-h-[35vh]">
          <ArrowUpRight className="absolute top-2 right-2" />
          <h1 className="text-5xl">{name}</h1>
          <br />
          <p className="text-2xl">{description}</p>
          <p className="text-xl absolute right-5 bottom-5">{date}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default Block;
