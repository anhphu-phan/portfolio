import { techs } from "@/data";
import cn from "@/utils/cn";
import Image from "next/image";

interface Props {
  className?: string;
  name: string;
}

export default function Tech({ className, name }: Props) {
  const tech = techs[name.toLowerCase()];

  return (
    <Image
      src={tech.icon || tech.iconUrl || ""}
      alt={tech.name}
      title={tech.name}
      className={cn("z-0", className)}
      fill
    />
  );
}
