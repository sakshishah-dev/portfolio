import { Hero } from '../sections/Hero';
import { JobMatch } from '../sections/JobMatch';
import { Work } from '../sections/Work';
import { HowIWork } from '../sections/HowIWork';
import { Experience } from '../sections/Experience';
import { Skills } from '../sections/Skills';
import { QuickAnswers } from '../sections/QuickAnswers';
import { Contact } from '../sections/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <JobMatch />
      <Work />
      <HowIWork />
      <Experience />
      <Skills />
      <QuickAnswers />
      <Contact />
    </>
  );
}
