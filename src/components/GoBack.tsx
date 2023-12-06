import { ArrowBigLeftDash } from "lucide-react";
import { useRouter } from "next/router";
import useSound from "use-sound";

const sound = "/sounds/hover.mp3";

const GoBack = () => {
  const [play] = useSound(sound, { volume: 0.5 });
  const router = useRouter();

  return (
    <ArrowBigLeftDash
      className="hover:hover:text-slate-600 hidden lg:block"
      onClick={() => {
        router.back();
        play();
      }}
    />
  );
};

export default GoBack;
