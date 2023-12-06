import Link from "next/link";

type ElementProps = {
  name: string;
  icon: any;
  link?: string;
  className?: string;
};

const NavElement = ({ name, icon, link, className }: ElementProps) => {
  return (
    <Link
      className={`${className} hover:text-slate-600`}
      href={link!}
      data-te-toggle="tooltip"
      title={name}
    >
      {icon}
    </Link>
  );
};

export default NavElement;
