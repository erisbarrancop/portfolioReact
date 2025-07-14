import { Hero } from '../sections/Hero';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Contact } from '../sections/Contact';

export default function Home() {
  return (
    <>
      <main className="bg-gray-900 text-white">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}