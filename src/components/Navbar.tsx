import { Home } from "lucide-react";
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
      </div>
    </nav>
  );
};

export default Navbar;
