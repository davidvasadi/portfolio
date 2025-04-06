import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface WorkSummary {
  id: string;
  title: string;
  date: string;
  description: string;
}

interface ArticlesProps {
  works: WorkSummary[];
}

const Articles: React.FC<ArticlesProps> = ({ works }) => {
  const [darkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    window.scrollTo(0, 0);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="bg-white dark:bg-zinc-800 px-10 sm:px-12 md:mx-20 lg:mx-24 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 text-start mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('contentSection.title')}
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              className="relative flex flex-col items-start cursor-pointer group"
              onClick={() => navigate(`/article/${work.id}`)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-zinc-50 opacity-0 transition-all group-hover:opacity-10 group-hover:bg-zinc-300 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50 dark:group-hover:bg-zinc-700"></div>
              <div className="relative py-5">
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                  <p className="text-sm text-zinc-400 dark:text-zinc-400">
                    <span className="font-extrabold mr-2">|</span>
                    {t(`contentSection.work${work.id}.date`)}
                  </p>
                  <span className="mt-4 sm:mt-0 sm:ml-10 flex flex-wrap gap-2">
                    {(t(`contentSection.work${work.id}.workflow`, { returnObjects: true }) as string[]).map(
                      (item, index) => (
                        <span
                          key={index}
                          className="bg-zinc-200 dark:bg-zinc-600 rounded-full px-3 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-100 mr-1"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </span>
                </div>
                <h2 className="mt-2 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  {t(`contentSection.work${work.id}.title`, { defaultValue: work.title })}
                </h2>
                <p className="mt-4 text-md text-zinc-400 dark:text-zinc-300">
                  {t(`contentSection.work${work.id}.description`, { defaultValue: work.description })}
                </p>
                <button onClick={() => navigate(`/article/${work.id}`)} className="group flex items-center mt-6 py-2 text-sm text-teal-400">
                  {t('contentSection.readArticle')}
                  <ArrowRightIcon className="ml-3 h-3 w-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
