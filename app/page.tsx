import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Stats from '@/components/stats';
import About from '@/components/about';
import Dates from '@/components/dates';
import Papers from '@/components/papers';
import PastEdition from '@/components/past-edition';
import Testimonials from '@/components/testimonials';
import Speakers from '@/components/speakers';
import Program from '@/components/program';
import Venue from '@/components/venue';
import Sponsors from '@/components/sponsors';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Papers />
      <Speakers />
        <PastEdition />
          <Testimonials />
      <Contact />

      <Footer />
    </main>
  );
}
