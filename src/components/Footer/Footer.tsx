import { cn } from "@/utils";
import { ContactForm } from "./ContactForm";

import { rufina } from "@/fonts";

export default function Footer() {
  return (
    <div className="mt-auto flex gap-12 bg-slate-300 px-20 py-12">
      <div
        className={cn(
          "flex grow-[3] items-center justify-center text-[length:calc(2rem+0.50625vw)] font-semibold",
          rufina.className,
        )}
      >
        Have a message for me?
      </div>
      <div className="max-w-xl grow-[2]" id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
