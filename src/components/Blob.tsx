import { motion } from "framer-motion";

type BlobProps = {
  className: string;
};

function random_position() {
  return Math.random() * 50 * (Math.round(Math.random()) ? 1 : -1);
}

const Blob = ({ className }: BlobProps) => {
  const x_0 = random_position();
  const y_0 = random_position();
  return (
    <motion.div
      animate={{
        scale: [1, 0.8, 1],
        translateX: [x_0, random_position(), x_0],
        translateY: [y_0, random_position(), y_0],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        delay: Math.random(),
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
      }}
      className={`${className} absolute w-72 h-72  rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10`}
    ></motion.div>
  );
};

export default Blob;
