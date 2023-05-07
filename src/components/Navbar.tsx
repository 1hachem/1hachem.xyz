import { Github, Linkedin, Home } from "lucide-react";
import GoBack from "./GoBack";
import ThemeToggle from "./ThemeToggle";
import NavElement from "./NavElement";
import Profile from "./Profile";

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
            name="my linkedin"
            icon={<Linkedin />}
            link="https://www.linkedin.com/in/hachem-betrouni/"
          />
          <NavElement
            name="my github"
            icon={<Github />}
            link="https://github.com/1hachem"
          />
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
