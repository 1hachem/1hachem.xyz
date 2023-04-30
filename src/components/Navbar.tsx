import { Github, Linkedin, SunMoon } from "lucide-react";

type ElementProps = {
  name: any;
  link?: string;
  className?: string;
};

const NavElement = ({ name, link, className }: ElementProps) => {
  return (
    <a className={`${className} hover:text-slate-600`} href={link}>
      {name}
    </a>
  );
};

const Navbar = () => {
  return (
    <nav className="py-6 px-6 text-xl">
      <div className="flex gap-5">
        <NavElement name="Home" link="/" />
        <NavElement name={<SunMoon />} />
        <NavElement
          name={<Linkedin />}
          link="https://www.linkedin.com/in/hachem-betrouni/"
          className="justify-end"
        />
        <NavElement
          name={<Github />}
          link="https://github.com/1hachem"
          className="justify-end"
        />
      </div>
    </nav>
  );
};

export default Navbar;
