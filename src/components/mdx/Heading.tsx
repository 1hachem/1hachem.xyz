import { motion } from "framer-motion";
const Heading = {
  H1: ({ children }: any) => (
    <>
      <br />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-5xl"
      >
        {children}
      </motion.div>
    </>
  ),
  H2: ({ children }: any) => (
    <>
      <br />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl"
      >
        {children}
      </motion.div>
    </>
  ),
};

export default Heading;
