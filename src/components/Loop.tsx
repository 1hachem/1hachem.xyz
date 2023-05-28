import { motion } from "framer-motion";

const Loop = () => {
  return (
    <motion.h1
      className="relative py-6 px-9 min-h-[25vh] col-span-1 md:col-span-5 md:text-8xl text-4xl "
      whileTap={{ scale: 0.9 }}
    >
      Welcome to 1hachem.xyz
      <br />
      <span className="text-blue-300">my online space</span>
    </motion.h1>
  );
};

export default Loop;
