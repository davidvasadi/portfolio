import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  toggleLanguage: () => void;
  currentLanguage: string;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleLanguage,
  currentLanguage,
  toggleDarkMode,
}) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const isActive = (path: string) => location.pathname === path;

  // Csak akkor állítsuk be, hogy a profilkép látszódjon, ha nem a főoldalon vagyunk.
  useEffect(() => {
    if (location.pathname === '/') {
      setShowProfile(false);
    } else {
      setShowProfile(true);
    }
  }, [location.pathname]);

  return (
    <nav
      className={`${darkMode ? 'bg-zinc-800 text-white' : 'bg-white text-zinc-800'} flex justify-between items-center py-4 sm:px-12 pr-2 md:mx-20 lg:mx-24 mx-auto relative`}
    >
      {/* Profilkép csak akkor jelenjen meg, ha nem a főoldalon vagyunk */}
      {location.pathname !== '/' && (
        <div className={`
            absolute left-11 top-1/2 transform -translate-y-1/2
            w-11 h-11 overflow-hidden rounded-full border-2
            border-zinc-300 dark:border-zinc-700
            transition-all duration-500 ease-in-out
            ${showProfile ? 'opacity-100 animate-fade-in' : 'opacity-0'}
          `}>
          <img
            src="https://davelopment.hu/assets/profile2-CtcR8s0t.jpeg"
            alt="Profile"
            className="w-full h-full object-contain scale-150 translate-y-2 translate-x-0.5"
          />
        </div>
      )}

      {/* Navigáció közép */}
      <div className="flex justify-between items-center w-full max-w-[392px] mx-auto relative">
        <div
          className={`hidden md:flex space-x-6 justify-center w-auto mx-auto rounded-full px-6 py-3 text-sm font-medium shadow-md ring-1 backdrop-blur 
          ${darkMode ? 'bg-zinc-800/90 text-zinc-200 ring-white/10' : 'bg-white/90 text-zinc-800 ring-zinc-900/5'}`}
        >
          <a href="/" className={`hover:text-teal-500 ${isActive('/') ? 'text-teal-500' : ''}`}>{t('navbar.home')}</a>
          <a href="/articles" className={`hover:text-teal-500 ${isActive('/articles') ? 'text-teal-500' : ''}`}>{t('navbar.Articles')}</a>
          <a href="/about" className={`hover:text-teal-500 ${isActive('/about') ? 'text-teal-500' : ''}`}>{t('navbar.about')}</a>
          <a href="/projects" className={`hover:text-teal-500 ${isActive('/projects') ? 'text-teal-500' : ''}`}>{t('navbar.projects')}</a>
          <a href="/services" className={`hover:text-teal-500 flex items-center ${isActive('/services') ? 'text-teal-500' : ''}`}>{t('navbar.services')}</a>
        </div>
      </div>

      {/* Jobb oldali vezérlők */}
      <div className="flex items-center space-x-3 ml-4">
        <button onClick={toggleLanguage} className="text-sm p-2 rounded-full">
          {currentLanguage === 'en' ? 'EN' : 'HU'}
        </button>

        <button
          onClick={toggleDarkMode}
          className={`group rounded-full px-3 py-2 shadow-sm ring-1 ring-zinc-900/5 backdrop-blur 
            ${darkMode ? 'bg-zinc-800/90 ring-zinc-500/60 hover:ring-zinc-400/60' : 'bg-white/90 hover:ring-zinc-200'}`}
        >
          <SunIcon className={`${darkMode ? 'hidden' : 'block'} h-5 w-5 text-teal-500`} />
          <MoonIcon className={`${darkMode ? 'block' : 'hidden'} h-5 w-5 text-zinc-400`} />
        </button>

        <button
          onClick={toggleMenu}
          className={`group flex items-center shadow-md ring-2 backdrop-blur rounded-full px-4 py-2 text-sm font-medium md:hidden
          ${darkMode ? 'bg-zinc-800/90 text-zinc-200 ring-white/10 hover:ring-white/20' : 'bg-white/90 text-zinc-800 ring-zinc-900/5 hover:ring-zinc-800/20'}`}
        >
          {t('navbar.Menu')}
          <ChevronDownIcon className="ml-3 h-2 w-2" />
        </button>
      </div>

      {/* Mobilmenü animációval */}
      {isMenuOpen && (
        <>
          <div
            className={`fixed inset-0 z-10 ${darkMode ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-25'} backdrop-blur-md`}
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className={`fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8 transition-all duration-500 ease-in-out transform animate-slide-up
              ${darkMode ? 'bg-zinc-900 ring-zinc-800' : 'bg-white ring-zinc-900/5'} ring-1`}
          >
            <div className="flex flex-col space-y-4 text-zinc-800 dark:text-zinc-300">
              <h2 className="flex flex-row items-center justify-between text-sm font-bold text-zinc-500 dark:text-zinc-400">
                {t('navbar.Navigation')}
                <button onClick={() => setIsMenuOpen(false)} className="h-10 w-10 absolute top-4 right-4 text-zinc-500 dark:text-zinc-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 11-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </h2>
              <ul className={`-my-2 divide-y ${darkMode ? 'divide-zinc-800' : 'divide-zinc-200'} space-y-3`}>
                <li><a href="/" className="font-medium text-zinc-800 dark:text-zinc-200">{t('navbar.home')}</a></li>
                <li><a href="/articles" className="font-medium text-zinc-800 dark:text-zinc-200">{t('navbar.Articles')}</a></li>
                <li><a href="/about" className="font-medium text-zinc-800 dark:text-zinc-200">{t('navbar.about')}</a></li>
                <li><a href="/projects" className="font-medium text-zinc-800 dark:text-zinc-200">{t('navbar.projects')}</a></li>
                <li><a href="/services" className="font-medium text-zinc-800 dark:text-zinc-200">{t('navbar.services')}</a></li>
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
