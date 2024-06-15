import { Github, Home, Linkedin, Mail, Twitter } from "lucide-react";
import GoBack from "./GoBack";
import NavElement from "./NavElement";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="py-6 px-6 text-xl">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <NavElement name="Home" icon={<Home />} link="/" />
          <ThemeToggle />
          <GoBack />
        </div>
        <div className="flex gap-5">
          <NavElement
            name="Github"
            icon={<Github />}
            link="https://github.com/1hachem"
          />
          <NavElement
            name="linkedin"
            icon={<Linkedin />}
            link="https://www.linkedin.com/in/hachem-betrouni/"
          />
          <NavElement
            name="email"
            icon={<Mail />}
            link="mailto:hachem.betrouni@g.enp.edu.dz"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
