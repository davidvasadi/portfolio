import { Link } from 'react-router-dom';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/images/backgrounds/profile.jpg';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="px-10 sm:px-12 md:mx-20 lg:mx-24 py-12 dark:bg-zinc-800 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start lg:justify-items-center">
        {/* Kép blokk */}
        <motion.div
          className="lg:order-2 flex flex-col items-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#0a0a08] sm:w-64 h-64 lg:w-[375px] lg:h-[375px] aspect-square rotate-3 rounded-2xl overflow-hidden">
            <img className="w-90 h-full object-contain" src={aboutImage} alt="David Vasadi" />
          </div>
          {/* Desktop linkek */}
          <div className="hidden lg:block mt-8 space-y-4 items-start">
            <Link
              to="https://github.com/davidvasadi"
              target="_blank"
              className="group flex items-center space-x-2 text-sm dark:text-zinc-100 text-zinc-600 hover:text-teal-400"
            >
              <FaGithub className="w-5 h-5 group-hover:text-teal-400" />
              <span className="group-hover:text-teal-400">
                {t('about.github')}
              </span>
            </Link>
            <Link
              to="mailto:david.vasadi@icloud.com"
              className="group flex items-center space-x-2 text-sm dark:text-zinc-100 text-zinc-600 hover:text-teal-400"
            >
              <EnvelopeIcon className="w-5 h-5 group-hover:text-teal-400" />
              <span className="group-hover:text-teal-400">
                david.vasadi@icloud.com
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Szöveges tartalom */}
        <motion.div
          className="lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tight dark:text-zinc-100 text-zinc-800 sm:text-5xl">
            {t('about.intro')}
          </h1>
          <p className="py-2 mt-6 space-y-7 text-base dark:text-zinc-400 text-zinc-600">
            {t('about.p1')}
          </p>
          <p className="py-2 mt-6 space-y-7 text-base dark:text-zinc-400 text-zinc-600">
            {t('about.p2')}
          </p>
          <p className="py-2 mt-6 space-y-7 text-base dark:text-zinc-400 text-zinc-600">
            {t('about.p3')}
          </p>
          <p className="py-2 mt-6 space-y-7 text-base dark:text-zinc-400 text-zinc-600">
            {t('about.p4')}
          </p>
        </motion.div>
      </div>

      {/* Mobil linkek */}
      <div className="mt-12 space-y-4 lg:hidden flex flex-col items-start text-zinc-500 dark:text-zinc-100">
        <Link
          to="https://github.com/davidvasadi"
          target="_blank"
          className="flex items-center space-x-2 text-sm hover:text-teal-400"
        >
          <FaGithub className="w-5 h-5" />
          <span>{t('about.github')}</span>
        </Link>
        <Link
          to="mailto:david.vasadi@icloud.com"
          className="flex items-center space-x-2 text-sm hover:text-teal-400"
        >
          <EnvelopeIcon className="w-5 h-5" />
          <span>david.vasadi@icloud.com</span>
        </Link>
      </div>
    </section>
  );
};

export default About;