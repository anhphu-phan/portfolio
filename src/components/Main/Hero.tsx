import Image from "next/image";
import { rufina } from "@/fonts";
import background from "@public/images/background.jpg";
import clsx from "clsx";

export default function Hero() {
  return (
    <section className="relative -z-50 min-h-[95vh] scroll-mt-16">
      <Image
        src={background}
        alt="Hero background"
        className="absolute bg-top object-cover"
        sizes="100vw"
        placeholder="blur"
        quality={100}
        fill
      />
      <div
        className={clsx(
          rufina.className,
          "absolute left-[10%] top-1/2 -translate-y-1/2 space-y-12",
        )}
      >
        <div
          className={clsx(rufina.className, "space-y-8 font-semibold text-[#002d5b] text-4xl sm:text-5xl md:text-6xl")}
        >
          <p>Hi, my name is Anh Phu Phan. </p>
          <p>I&apos;m a web developer, </p>
        </div>
        <p>I build things for the web.</p>
      </div>
    </section>
  );
}
