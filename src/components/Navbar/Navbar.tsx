"use client";

import { NavItem as NavItemType } from "@/types";
import DesktopNavMenu from "./DesktopNavMenu";
import MenuButton from "./MenuButton";
import { useState } from "react";
import clsx from "clsx";
import MobileNavMenu from "./MobileNavMenu";

const navItems: NavItemType[] = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Skills",
    path: "#skills",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

export default function Navbar() {
  const [show, toggle] = useState(false);

  function handleToggle() {
    toggle((show) => !show);
  }

  return (
    <header className="bg-white/65 fixed top-0 z-[9999] flex h-16 w-screen items-center justify-center border-b shadow-md backdrop-blur">
      {/** Desktop navigation menu */}
      <DesktopNavMenu
        className="hidden sm:relative sm:top-0 sm:block"
        navItems={navItems}
      />

      {/** Mobile navigation menu */}
      <MobileNavMenu
        className={clsx(
          "close fixed top-16 w-screen rounded-xl border bg-indigo-300 shadow-lg transition-all duration-500 xs:w-4/5 sm:hidden",
          {
            "nav-open": show,
            "nav-close": !show,
          },
        )}
        navItems={navItems}
        onToggle={handleToggle}
      />

      <MenuButton
        open={show}
        onToggle={handleToggle}
        className="absolute right-4 sm:hidden"
      />
    </header>
  );
}
