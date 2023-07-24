interface Props {
  href: string;
  name: string;
  className?: string;
}

export default function NavItem({ href, name, className }: Props) {
  return (
    <li className="group">
      <a href={href} className={className}>
        {name}
      </a>
    </li>
  );
}
