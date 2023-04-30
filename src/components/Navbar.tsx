import { Github, Linkedin, SunMoon, Home } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import NavElement from "./NavElement";

const Navbar = () => {
  return (
    <nav className="py-6 px-6 text-xl">
      <div className="flex gap-5">
        <NavElement name={<Home />} link="/" />
        <ThemeToggle />
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
