import Link from "next/link";
import useSound from "use-sound";

const sound = "/sounds/hover.mp3";

type ElementProps = {
  name: string;
  icon: any;
  link?: string;
  className?: string;
};

const NavElement = ({ name, icon, link, className }: ElementProps) => {
  const [play] = useSound(sound, { volume: 0.5 });
  return (
    <Link
      className={`${className} hover:text-slate-600`}
      href={link!}
      data-te-toggle="tooltip"
      title={name}
      onClick={() => {
        play();
      }}
    >
      {icon}
    </Link>
  );
};

export default NavElement;
