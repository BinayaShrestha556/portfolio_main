import Link from "next/link";
import NavbarActions from "./navbar-actions";
import { Fira_Code } from "next/font/google";

import { MdPermPhoneMsg } from "react-icons/md";

// ✅ Move font initialization outside of the component
const sourceCodePro = Fira_Code({
  subsets: ["greek"],
  weight: ["400", "500", "600", "700"],
});

const Navbar = () => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About me", href: "#aboutme" },
    { label: "Tech Stacks", href: "#tech_stacks" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <nav className="lg:pt-5 pt-2 z-50 p-3 pb-0 fixed backdrop-blur-[2px] bg-gradient-to-b from-background to-background/5 w-full flex items-center  justify-center">
      <div className="lg:w-[90%] w-full justify-between mt-2.5 flex items-center">
        {/* Logo on the left */}
        <div className="h-12  w-12 rounded-full">
          <h1
            className={`${sourceCodePro.className} text-primary tracking-wider font-[700] text-2xl`}
          >
            <Link href="/">{"<binaya/>"}</Link>
          </h1>
        </div>

        {/* Centered Navbar Actions */}
        <div className="flex absolute top-16 left-1/2 right-1/2 lg:static   justify-center flex-1">
          <NavbarActions routes={links} />
        </div>

        {/* Placeholder div for equal spacing (Optional) */}
        <div className=" flex justify-end items-center">
          <Link
            href="#footer"
            className=" hover:text-primary hover:underline transition text-white  underline-offset-2 "
          >
            <MdPermPhoneMsg size={25} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
