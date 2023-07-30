"use client";

import { cn } from "@/utils";
import React from "react";
import ReactDOM from "react-dom";
import { Variants, motion } from "framer-motion";

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

type Props = React.PropsWithChildren<{
  onClose: () => void;
  className?: string;
}>;

const Overlay = ({ children, onClose, className }: Props) => {
  return ReactDOM.createPortal(
    <motion.div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-black/80",
        className,
      )}
      onClick={onClose}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>,
    document.querySelector("body")!,
  );
};

export default Overlay;
