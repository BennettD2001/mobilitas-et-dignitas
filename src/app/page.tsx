import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Featured from '@/components/sections/Featured';
import Testimonials from '@/components/sections/Testimonials';
import Newsletter from '@/components/sections/Newsletter';

export const metadata: Metadata = {
  title: 'Mobilitas et dignitas | Home',
  description: 'Welcome. Independent creator focused on mobility, dignity, and intentional living.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Testimonials />
      <Newsletter />
    </>
  );
}
