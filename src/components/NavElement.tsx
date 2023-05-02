import useSound from "use-sound";
const sound = "/sounds/home.mp3";

type ElementProps = {
  name: any;
  link?: string;
  className?: string;
};

const NavElement = ({ name, link, className }: ElementProps) => {
  const [play] = useSound(sound, { volume: 0.5 });
  return (
    <a
      className={`${className} hover:text-slate-600`}
      href={link}
      onClick={() => {
        play();
      }}
    >
      {name}
    </a>
  );
};

export default NavElement;
