import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import useSound from "use-sound";
import Link from "next/link";

const sound = "/sounds/hover.mp3";

type BlockProps = {
  name: string;
  description?: string;
  link?: string;
  className?: string;
};

const BlockText = ({ name, description, date }: BlockProps) => {
  return (
    <div className="relative py-6 px-9 min-h-[25vh]">
      <h1 className="text-5xl">{name}</h1>
      <br />
      <p className="text-2xl">{description}</p>
    </div>
  );
};

const Block = ({ name, description, link, className }: BlockProps) => {
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
      className={`${className} col-span-1 row-span-1 rounded-3xl backdrop-blur-3xl dark:backdrop-blur-3xl border-2 border-black dark:border-white`}
    >
      <Link href={link!}>
        <ArrowUpRight className="bg-white text-black dark:bg-black dark:text-white border-black dark:border-white border-2 w-10 h-8 rounded-xl absolute bottom-2 right-2" />
        <BlockText name={name} description={description} />
      </Link>
    </motion.div>
  );
};

export default Block;
