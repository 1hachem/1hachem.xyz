import { motion } from "framer-motion";
import type { TextProps } from "./Text";

const Heading = {
	H1: ({ children }: TextProps) => (
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
	H2: ({ children }: TextProps) => (
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
