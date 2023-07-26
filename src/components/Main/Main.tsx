import { Container } from "../shared";
import Hero from "./Hero";
import { Projects } from "./Projects";
import Section from "./Section";
import { Skills } from "./Skills";

export default function Main() {
  return (
    <main className="space-y-40 pt-16">
      <Hero />
      <Container component="article" className="space-y-12">
        <Skills />
        <Projects />
        <Section name="Contact">Contact</Section>
      </Container>
    </main>
  );
}
