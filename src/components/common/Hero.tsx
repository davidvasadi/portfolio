import React, { useEffect } from 'react';
import { FaGithub, FaPhone } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import profilePic from '../../assets/images/backgrounds/profile2.jpeg';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  return (
    <section className="flex flex-col items-start justify-center py-8 px-5 sm:px-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mt-6 sm:mt-4"
      >
        <div className="w-16 h-16 mb-4 overflow-hidden rounded-full border-2 border-zinc-300 dark:border-zinc-700">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-contain scale-150 translate-y-3 translate-x-0.5"
          />
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-5xl py-4">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-800 dark:text-zinc-100">
            {t('hero.intro')}
          </h2>
          <p className="mt-7 text-lg font-thin text-zinc-600 dark:text-zinc-400">
            {t('hero.description')}
          </p>
          <div className="mt-6 flex space-x-6">
            <a href="https://github.com/davidvasadi" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition duration-200" />
            </a>
            <Link to="mailto:david.vasadi@icloud.com" className="group flex items-center space-x-2">
              <EnvelopeIcon className="w-6 h-6 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition duration-200" />
            </Link>
            <a href="tel:+36303628377">
              <FaPhone className="w-5 h-5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition duration-200" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;