import React from 'react';
import { motion } from 'framer-motion';
import heroImage1 from '../../assets/images/backgrounds/hero1.webp';
import heroImage2 from '../../assets/images/backgrounds/hero2.webp';
import heroImage3 from '../../assets/images/backgrounds/hero3.webp';
import heroImage4 from '../../assets/images/backgrounds/hero4.webp';
import heroImage5 from '../../assets/images/backgrounds/hero5.webp';

interface HeroImage {
  src: string;
  alt: string;
  rotate: string;
}

const images: HeroImage[] = [
  { src: heroImage1, alt: 'daHero Image 1', rotate: '-rotate-2' },
  { src: heroImage2, alt: 'veHero Image 2', rotate: 'rotate-1' },
  { src: heroImage3, alt: 'lopHero Image 3', rotate: '-rotate-3' },
  { src: heroImage4, alt: 'meHero Image 4', rotate: 'rotate-5' },
  { src: heroImage5, alt: 'ntHero Image 5', rotate: '-rotate-6' }
];

const HeroSlide: React.FC = () => {
  return (
    <section className="py-3 bg-white dark:bg-zinc-800 md:mx-20 lg:mx-24">
      <div className="flex justify-center gap-5 py-4 px-0 md:gap-7 sm:gap-8 relative">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${img.rotate}`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlide;
