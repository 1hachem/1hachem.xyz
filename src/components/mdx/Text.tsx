import { motion } from "framer-motion";
import type { ReactNode } from "react";

const PulseAnimation = {
	opacity: [1, 0.7, 1],
	transition: {
		duration: 1,
		repeat: Number.POSITIVE_INFINITY,
		ease: "easeInOut",
	},
};

interface TextProps {
	children: ReactNode;
	href?: string;
}

const Text = {
	p: ({ children }: TextProps) => {
		return (
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				className="my-4 text-xl"
			>
				{children}
			</motion.p>
		);
	},
	a: ({ children, href }: TextProps) => {
		return (
			<motion.a
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				whileHover={PulseAnimation}
				className="text-xl text-sky-700 dark:text-sky-300 hover:underline"
				href={href}
			>
				{children}
			</motion.a>
		);
	},
	li: ({ children }: TextProps) => {
		return (
			<motion.li
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				className="list-disc text-xl mx-4"
			>
				{children}
			</motion.li>
		);
	},
};

export default Text;
export type { TextProps };
