"use client";

import { SVGMotionProps, motion } from "framer-motion";
import React from "react";

type PathProps = SVGMotionProps<SVGPathElement>;

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="rgba(0,0,0,0.4)"
    strokeLinecap="round"
    {...props}
  />
);

interface Props {
  onToggle: () => void;
  open: boolean;
  className?: string;
}

const MenuButton = ({ open, onToggle: handleToggle, className }: Props) => {
  return (
    <button className={className} onClick={handleToggle}>
      <motion.svg
        initial={false}
        animate={open ? "open" : "closed"}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 22 2.5" },
            open: { d: "M 2 2.5 L 22 22" },
          }}
        />
        <Path
          d="M 2 12.5 L 22 12.5"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 22 L 22 22" },
            open: { d: "M 2 22 L 22 2.5" },
          }}
        />
      </motion.svg>
    </button>
  );
};

export default MenuButton;
