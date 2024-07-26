import Link from "next/link";
import { Button } from "./ui/button";

const About = () => (
	<>
		<h1 className="text-3xl">About me</h1>
		<div className="text-xl py-1">
			CTO or AI engineer are not who I am. Let me properly introduce my self
			again. I am muslim. I live and travel in order to comprehend the divine
			words god put in his book; the quran and to practice what I understood. I
			am a husband, a reader, and an amature mycologist, I want to learn to
			become a generalist tech-head, a better farmer, an experienced biologist,
			and a thoughtful mathematician.
		</div>
		<Button className="w-1/2 place-self-center" asChild>
			<Link href="/content/about">Learn more</Link>
		</Button>
	</>
);

export default About;
