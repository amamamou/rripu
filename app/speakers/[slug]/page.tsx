import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import { getSpeakerBySlug } from '@/lib/speakers';

type Props = {
  params: { slug: string };
};

export default function SpeakerProfile({ params }: Props) {
  const speaker = getSpeakerBySlug(params.slug);

  if (!speaker) {
    return (
      <main className="w-full min-h-screen bg-white">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-40">
          <h2 className="text-2xl font-light text-black">Speaker not found</h2>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="relative w-full h-60 md:h-80 bg-gray-100 rounded overflow-hidden">
              <Image src={speaker.photo} alt={speaker.name} fill className="object-cover" />
            </div>
            <div className="md:col-span-2">
              <h1 className="text-3xl font-light text-black mb-2">{speaker.name}</h1>
              <div className="text-sm font-light text-gray-600 mb-4">{speaker.affiliation} • {speaker.country}</div>
              <div className="text-sm font-light text-gray-700 leading-relaxed">{speaker.bio}</div>

              <div className="mt-8">
                <h4 className="text-sm font-medium text-black mb-2">Areas of expertise</h4>
                <div className="text-xs font-light text-gray-600">{speaker.specialty}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
