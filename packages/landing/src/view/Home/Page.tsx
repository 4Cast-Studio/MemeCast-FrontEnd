import { About } from './About';
import { Driven } from './Driven';
import { Features } from './Features';
import { Footer } from './Footer';
import { Intro } from './Intro';
import { Roadmap } from './Roadmap';
import { Solution } from './Solution';

export function HomePage() {
  return (
    <div>
      <Intro />
      <div id="AboutUs">
        <About />
      </div>
      <Driven />
      <div id="Features">
        <Features />
      </div>
      <div id="Solution">
        <Solution />
      </div>
      <div id="Roadmap">
        <Roadmap />
      </div>
      <Footer />
    </div>
  );
}
