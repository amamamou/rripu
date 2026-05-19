import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Stats from '@/components/stats';
import About from '@/components/about';
import Dates from '@/components/dates';
import Papers from '@/components/papers';
import PastEdition from '@/components/past-edition';
import Speakers from '@/components/speakers';
import Program from '@/components/program';
import Venue from '@/components/venue';
import Sponsors from '@/components/sponsors';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Dates />
      <Papers />
  <PastEdition />
      <Speakers />
      <Program />
      <Venue />
      <Sponsors />
      <Contact />
      <Footer />
    </main>
  );
}
