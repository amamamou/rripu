import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Stats from '@/components/stats';
import Papers from '@/components/papers';
import Speakers from '@/components/speakers';
import Program from '@/components/program';
import Committee from '@/components/committee';
import Venue from '@/components/venue';
import Registration from '@/components/registration';
import Publications from '@/components/publications';

export default function RIPU26Page() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Papers />
      <Speakers />
      <Program />
      <Committee />
      <Venue />
      <Registration />
      <Publications />
      <Footer />
    </main>
  );
}
