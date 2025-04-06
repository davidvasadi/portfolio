import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 px-10 md:mx-20 lg:mx-24 dark:bg-zinc-800 dark:text-white">
      <div className="border-t border-zinc-200 dark:border-zinc-600 mb-16"></div>
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start sm:space-x-8">
        <div className="flex space-x-6 text-xs text-zinc-600 dark:text-zinc-200 mb-6 sm:mb-0">
          <a href="/" className="hover:text-teal-500">{t('footer.home')}</a>
          <a href="/articles" className="hover:text-teal-500">{t('footer.Articles')}</a>
          <a href="/about" className="hover:text-teal-500">{t('footer.about')}</a>
          <a href="/projects" className="hover:text-teal-500">{t('footer.projects')}</a>
          <a href="/services" className="hover:text-teal-500">{t('footer.services')}</a>
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-200 text-center sm:text-right m-2">
          <p>&copy; {currentYear} <span className="font-semibold">Dávid Vasadi</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
