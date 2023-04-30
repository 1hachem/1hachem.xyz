type ElementProps = {
  name: string;
  link: string;
};

const NavElement = ({ name, link }: ElementProps) => {
  return (
    <li>
      <a className="hover:text-slate-600" href={link}>
        {name}
      </a>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="py-6 px-6 text-xl">
      <ul className="flex gap-5">
        <NavElement name="Home" link="" />
        <NavElement name="About me" link="" />
        <NavElement name="Projects" link="" />
        <NavElement name="Blogs" link="" />
      </ul>
    </nav>
  );
};

export default Navbar;
