import { NavItem as NavItemType } from "@/types";
import NavItem from "./NavItem";
import clsx from "clsx";
import { rubik } from "@/fonts";

interface Props {
  className?: string;
  navItems: NavItemType[];
  onToggle: () => void;
}

export default function MobileNavMenu({
  className,
  navItems,
  onToggle,
}: Props) {
  return (
    <nav className={className} onClick={onToggle}>
      <ul className={clsx("flex flex-col", rubik.className)}>
        {navItems.map((item) => (
          <NavItem
            key={item.name}
            name={item.name}
            href={item.path}
            className="w-full text-center inline-block px-8 py-4 text-xl font-semibold text-slate-700 transition-[color] group-hover:text-red-500"
          />
        ))}
      </ul>
    </nav>
  );
}
