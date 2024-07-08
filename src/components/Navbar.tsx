import React from "react";
import Image from "next/image";
import Dropdown from "./DropDown";
import { NavButton } from "./NavButton";

interface NavItemProps {
    href: string;
    children: React.ReactNode;
  }
  
  const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
    <a href={href} className="text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg ease-in-out">
      {children}
    </a>
  );
  
 
const Navbar = () => {
    const dropdownItems = [
        { label: "English", href: "#" },
        { label: "Mongolia", href: "#" }
      ];
  return (
    <nav className="bg-white px-40 ">
      <div className="max-w-screen flex items-center justify-between p-4 mt-1">
        <a href="#">
          <Image
            src="/logo.webp"
            alt="Lambda Logo"
            className="dark:invert"
            width={140}
            height={24}
            priority
          />
        </a>
        <div className="flex">
          <NavItem href="#">Home</NavItem>
          <NavItem href="#">Our approach</NavItem>
          <NavItem href="#">Screening</NavItem>
          <NavItem href="#">Why Lambda</NavItem>
        </div>
        <div className="flex gap-8">
          <div className="flex gap-4">
            <NavButton href="#" variant="primary">
              Talent
            </NavButton>
            <NavButton href="#" variant="secondary">
              Recruiter
            </NavButton>
          </div>
          <Dropdown buttonLabel="Languages" items={dropdownItems} />
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
