import Hero from "./Hero";
import Section from "./Section";
import { Skills } from "./Skills";

export default function Main() {
  return (
    <main className="space-y-40 pt-16">
      <Hero />
      <article className="container">
        <Skills />
        <Section name="about">About</Section>
        <Section name="projects">Projects</Section>
        <Section name="Contact">Contact</Section>
      </article>
    </main>
  );
}
