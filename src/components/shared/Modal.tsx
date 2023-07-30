"use client";

import React from "react";
import Overlay from "./Overlay";
import { X } from "lucide-react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { cn } from "@/utils";

const variants: Variants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.3,
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

type ModalProps = React.PropsWithChildren<{
  show: boolean;
  className?: string;
  onClose: () => void;
}>;

type ModalHeaderProps = React.PropsWithChildren<{
  children?: React.ReactNode;
  className?: string;
}>;

type ModalBodyProps = React.PropsWithChildren<{
  children?: React.ReactNode;
  className?: string;
}>;

type ModalFooterProps = React.PropsWithChildren<{
  children?: React.ReactNode;
  className?: string;
}>;

const ModalContent = ({ children, className }: ModalHeaderProps) => {
  return <div className={cn("px-4 space-y-4 sm:px-12", className)}>{children}</div>;
};

const ModalHeader = ({ children, className }: ModalHeaderProps) => {
  return <div className={className}>{children}</div>;
};

const ModalBody = ({ children, className }: ModalBodyProps) => {
  return <div className={className}>{children}</div>;
};

const ModalFooter = ({ children, className }: ModalFooterProps) => {
  return <div className={className}>{children}</div>;
};

const Modal = ({ children, className, onClose, show }: ModalProps) => {
  return (
    <AnimatePresence>
      {show && (
        <Overlay onClose={onClose}>
          <motion.div
            className={cn(
              "z-[10000] m-auto mt-4 rounded-lg bg-white pb-12 shadow-lg",
              className,
            )}
            onClick={(event) => event.stopPropagation()}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <div className="flex w-full items-center px-4 py-4">
              <X onClick={onClose} className="ml-auto cursor-pointer" />
            </div>
            {children}
          </motion.div>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;
export { ModalHeader, ModalBody, ModalFooter, ModalContent };
