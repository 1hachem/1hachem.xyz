import { motion } from "framer-motion";

const PulseAnimation = {
  opacity: [1, 0.7, 1],
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Text = {
  p: ({ children }: any) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="my-4 text-xl"
      >
        {children}
      </motion.div>
    );
  },
  a: ({ children, href }: any) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={PulseAnimation}
        className="text-xl text-sky-700 dark:text-sky-300 hover:underline"
      >
        <a href={href}>{children}</a>
      </motion.div>
    );
  },
};

export default Text;
