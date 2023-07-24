import clsx from "clsx";
import { rubik } from "@/fonts";
import NavItem from "./NavItem";
import { NavItem as NavItemType } from "@/types";
import "@styles/globals.css";

interface Props {
  navItems: NavItemType[];
  className?: string;
}

export default function Nav({ className, navItems }: Props) {
  return (
    <nav className={className}>
      <ul className={clsx("flex flex-row", rubik.className)}>
        {navItems.map((item) => (
          <NavItem
            key={item.name}
            name={item.name}
            href={item.path}
            className="flex items-center justify-center px-8 py-4 text-xl font-semibold text-slate-700 transition-[color] group-hover:text-primary-500"
          />
        ))}
      </ul>
    </nav>
  );
}
