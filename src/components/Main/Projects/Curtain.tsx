"use client";

import React from "react";

type Props = React.PropsWithChildren<{}>;

export default function Curtain({ children }: Props) {
  return (
    <>
      <div className="absolute inset-0 flex -translate-y-1/2 select-none items-center justify-center bg-black/50 transition-transform duration-300 ease-out [clip-path:polygon(0_0,100%_0,100%_50%,0_50%)] group-hover:translate-y-0">
        {children}
      </div>

      <div className="absolute inset-0 flex translate-y-1/2 select-none items-center justify-center bg-black/50 transition-transform duration-300 ease-out [clip-path:polygon(0_50%,100%_50%,100%_100%,0%_100%)] group-hover:translate-y-0">
        {children}
      </div>
    </>
  );
}
