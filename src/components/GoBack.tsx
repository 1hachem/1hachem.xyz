import { ArrowBigLeftDash } from "lucide-react";
import useSound from "use-sound";
import { useRouter } from "next/router";

const sound = "/sounds/hover.mp3";

const GoBack = () => {
  const [play] = useSound(sound, { volume: 0.5 });
  const router = useRouter();

  return (
    <ArrowBigLeftDash
      className="hover:hover:text-slate-600"
      onClick={() => {
        router.back();
        play();
      }}
    />
  );
};

export default GoBack;
