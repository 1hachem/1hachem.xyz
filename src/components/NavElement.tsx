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

export default NavElement;
