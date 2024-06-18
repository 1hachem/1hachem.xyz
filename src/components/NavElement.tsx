import Link from "next/link";

type ElementProps = {
  name: string;
  icon: any;
  link?: string;
};

const NavElement = ({ name, icon, link }: ElementProps) => {
  return (
    <Link
      className="hover:text-slate-600"
      href={link!}
      data-te-toggle="tooltip"
      title={name}
    >
      {icon}
    </Link>
  );
};

export default NavElement;
