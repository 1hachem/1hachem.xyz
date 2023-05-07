import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import useSound from "use-sound";
import Link from "next/link";

const sound = "/sounds/hover.mp3";

type BlockProps = {
  name: string;
  date?: string;
  description?: string;
  link?: string;
  className?: string;
  dummy?: boolean;
};
const BlockText = ({ name, description, date }: BlockProps) => {
  return (
    <div className="relative py-6 px-9 min-h-[25vh]">
      <h1 className="text-5xl">{name}</h1>
      <br />
      <p className="text-2xl">{description}</p>
      <p className="text-xl absolute right-5 bottom-5">{date}</p>
    </div>
  );
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
  if (dummy) {
    return (
      <div
        className={`${className} col-span-1 row-span-1 rounded-3xl backdrop-blur-3xl dark:backdrop-blur-3xl border-2 border-black dark:border-white`}
      >
        <BlockText name={name} description={description} date={date} />
      </div>
    );
  } else {
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
          <ArrowUpRight className="absolute top-2 right-2" />
          <BlockText name={name} description={description} date={date} />
        </Link>
      </motion.div>
    );
  }
};

export default Block;
