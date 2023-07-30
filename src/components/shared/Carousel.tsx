import React, { useRef } from "react";
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const transition: AnimationProps["transition"] = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

type Props = React.PropsWithChildren<{}>;

const Carousel = ({ children }: Props) => {
  const [index, setIndex] = React.useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const n = React.Children.count(children);

  const handleNext = () => {
    if (index < n - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div ref={containerRef} className="relative flex flex-col items-center gap-4 overflow-hidden">
      <Button
        className="absolute left-0 top-1/2 z-[50] aspect-[2/3] h-4 -translate-y-1/2 rounded-e-sm rounded-l-none rounded-r-sm rounded-s-none border bg-slate-600 px-1 text-white opacity-50 shadow hover:bg-slate-600 hover:opacity-100 disabled:opacity-30 xs:h-8 sm:h-12"
        disabled={index === 0}
        onClick={handlePrev}
      >
        <ChevronLeft />
      </Button>
      <Button
        className="absolute right-0 top-1/2 z-[50] aspect-[2/3] h-4 -translate-y-1/2 rounded-e-none rounded-l-sm rounded-r-none rounded-s-sm border bg-slate-600 px-1 text-white opacity-50 shadow hover:bg-slate-600 hover:opacity-100 disabled:opacity-30 xs:h-8 sm:h-12"
        disabled={index === n - 1}
        onClick={handleNext}
      >
        <ChevronRight />
      </Button>
      <motion.div
        className="flex"
        initial={false}
        animate={{
          x: `-${index * (containerRef.current?.offsetWidth || 0)}px`,
        }}
        transition={transition}
      >
        {children}
      </motion.div>
      <div className="flex justify-between gap-4 sm:gap-6 md:gap-8 overflow-y-hidden">
        {[...Array(n).keys()].map((_, i) => (
          <button key={i} className="p-[7px]" onClick={() => setIndex(i)}>
            <div className="aspect-square w-[6px] cursor-pointer rounded-full bg-transparent/50">
              <AnimatePresence>
                {i === index && (
                  <motion.div
                    className="block h-full rounded-[inherit] bg-black"
                    layoutId="dot"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={transition}
                  ></motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
