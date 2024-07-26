import { ArrowBigLeftDash } from "lucide-react";
import { useRouter } from "next/router";

const GoBack = () => {
	const router = useRouter();

	return (
		<ArrowBigLeftDash
			className="hover:text-slate-600 hidden lg:block hover:cursor-pointer"
			onClick={() => {
				router.back();
			}}
		/>
	);
};

export default GoBack;
