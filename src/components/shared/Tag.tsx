import cn from "@/utils/cn";
import React from "react";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export default function Tag({ className, children }: Props) {
  return (
    <span className={cn("inline-block rounded bg-slate-300 py-1 px-2 font-semibold", className)}>
      {children}
    </span>
  );
}
