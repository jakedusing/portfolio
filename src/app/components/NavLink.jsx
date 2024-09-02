//import Link from "next/link";
import { Link } from "react-scroll";

const NavLink = ({ href, title, to }) => {
  return (
    <Link
      //href={href}
      to={to}
      smooth={true}
      duration={500}
      offset={-100}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white hover:cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default NavLink;
