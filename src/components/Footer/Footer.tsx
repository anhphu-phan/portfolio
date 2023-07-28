import { cn } from "@/utils";
import { ContactForm } from "./ContactForm";

import { rufina } from "@/fonts";

export default function Footer() {
  return (
    <div className="mt-auto flex flex-col sm:flex-row gap-12 bg-slate-300 px-20 py-12">
      <div
        className={cn(
          "flex items-center grow justify-center text-[length:calc(2rem+0.50625vw)] font-semibold text-center",
          rufina.className,
        )}
      >
        Have a message for me?
      </div>
      <div className="w-full max-w-[36rem]" id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
