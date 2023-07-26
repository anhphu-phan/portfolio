import React from "react";

import { rufina } from "@/fonts";
import clsx from "clsx";
import cn from "@/utils/cn";

interface Props {
  children: React.ReactNode;
  name: string;
  className?: string;
}

export default function Section({ name, className, children }: Props) {
  return (
    <section
      id={name.toLowerCase()}
      className={cn("scroll-mt-16", className)}
    >
      <h2
        className={clsx(
          rufina.className,
          "text-3xl font-bold underline decoration-primary-500 underline-offset-8 sm:text-4xl",
        )}
      >
        {name[0].toUpperCase() + name.slice(1)}
      </h2>
      {children}
    </section>
  );
}
