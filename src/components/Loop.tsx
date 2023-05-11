import { motion } from "framer-motion";

const Loop = () => {
  return (
    <motion.div
      className="relative py-6 px-9 min-h-[25vh] col-span-1 md:col-span-5 font-stora"
      whileTap={{ scale: 0.9 }}
    >
      <motion.h1 className="text-4xl md:text-8xl" whileTap={{ scale: 0.8 }}>
        Welcome to hachem.xyz
      </motion.h1>
      <motion.h2 className="text-xl md:text-5xl" whileTap={{ scale: 0.8 }}>
        more than a portfolio this is my online space.
      </motion.h2>
      <br />
    </motion.div>
  );
};

export default Loop;
