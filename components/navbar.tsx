import Link from "next/link";
import NavbarActions from "./navbar-actions";
import { Fira_Code } from "next/font/google";

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
    <div className="pt-5 z-50 fixed bg-gradient-to-b from-background to-background/5 w-full flex items-center justify-center">
      <div className="w-[90%] flex justify-between">
        <div className="h-12 w-12 rounded-full relative">
          <h1
            className={`${sourceCodePro.className} text-primary tracking-wider font-[700] text-2xl`}
          >
            <Link href="/">{"<binaya/>"}</Link>
          </h1>
        </div>
        <NavbarActions routes={links} />
      </div>
    </div>
  );
};

export default Navbar;
