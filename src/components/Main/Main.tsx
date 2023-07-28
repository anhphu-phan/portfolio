import { Container } from "../shared";
import Hero from "./Hero";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export default function Main() {
  return (
    <>
      <Hero />
      <Container component="article" className="space-y-12">
        <Skills />
        <Projects />
      </Container>
    </>
  );
}
