"use client";

import Section from "../Section";
import { motion } from "framer-motion";
import { skills } from "@/data";
import Tech from "./Tech";
import cn from "@/utils/cn";

interface Props {
  className?: string;
}

export default function Skills({ className }: Props) {
  const deltas = Array.from({ length: skills.length }, () => [
    Math.random() * 2001 - 1000,
    Math.random() * 2001 - 1000,
  ]);
  
  return (
    <Section name="skills" className={cn(className)}>
      <div className="flex flex-col items-center gap-20 py-12">
        <h3 className="text-3xl font-semibold">
          I&apos;m familiar with these technologies:
        </h3>
        <motion.div
          className="grid w-4/5 grid-cols-[repeat(auto-fit,minmax(clamp(4rem,10vw,10rem),1fr))] gap-8 overflow-hidden"
          initial="outside"
          whileInView="inside"
          viewport={{ amount: "some" }}
        >
          {skills.map((tech, i) => (
            <motion.div
              key={tech}
              className="relative aspect-square"
              variants={{
                outside: {
                  x: deltas[i][0],
                  y: deltas[i][1],
                  opacity: 0,
                },
                inside: { x: 0, y: 0, opacity: 1 },
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 20,
                stiffness: 100,
              }}
            >
              <Tech key={tech} name={tech} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
