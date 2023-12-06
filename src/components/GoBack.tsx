import { ArrowBigLeftDash } from "lucide-react";
import { useRouter } from "next/router";

const GoBack = () => {
  const router = useRouter();

  return (
    <ArrowBigLeftDash
      className="hover:hover:text-slate-600 hidden lg:block"
      onClick={() => {
        router.back();
      }}
    />
  );
};

export default GoBack;
