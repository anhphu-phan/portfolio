import cn from "@/utils/cn";
import { ContactForm } from "./ContactForm";

import { rufina } from "@/fonts";

export default function Footer() {
  return (
    <div className="mt-auto flex flex-col gap-12 bg-slate-300 px-20 py-12 sm:flex-row">
      <div
        className={cn(
          "flex grow items-center justify-center text-center text-[length:calc(2rem+0.50625vw)] font-semibold",
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
