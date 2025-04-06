import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import cvMapping from '../../utils/cvMapping';

interface Work {
  id: string;
  title: string;
  company: string;
  position: string;
  date: string;
  description: string;
  timeline: string;
  content: string;
  imageUrl: string;
}

interface ContentSectionProps {
  works: Work[];
  currentLanguage: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ works, currentLanguage }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Bal oldali tartalom: cikkek listája */}
      <div className="space-y-12 text-sm">
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
            <div className="relative py-3">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                <p className="text-sm text-zinc-400 dark:text-zinc-400">
                  <span className="font-extrabold mr-2">|</span>
                  {t(`contentSection.work${work.id}.date`, { defaultValue: work.date })}
                </p>
                <span className="mt-4 sm:mt-0 sm:ml-10 flex flex-wrap gap-2">
                  {Array.isArray(t(`contentSection.work${work.id}.workflow`, { returnObjects: true }))
                    ? (t(`contentSection.work${work.id}.workflow`, { returnObjects: true }) as string[]).map((item, index) => (
                        <span
                          key={index}
                          className="bg-zinc-200 dark:bg-zinc-600 rounded-full px-3 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-100 mr-1"
                        >
                          {item}
                        </span>
                      ))
                    : null}
                </span>
              </div>
              <h2 className="mt-2 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {t(`contentSection.work${work.id}.title`, { defaultValue: work.title })}
              </h2>
              <p className="mt-4 text-md text-zinc-400 dark:text-zinc-300">
                {t(`contentSection.work${work.id}.description`, { defaultValue: work.description })}
              </p>
              <button className="group flex items-center mt-6 py-2 text-sm text-teal-400">
                {t('contentSection.readArticle')}
                <ArrowRightIcon className="ml-3 h-3 w-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Jobb oldali tartalom: CTA és munkatapasztalatok */}
      <div className="space-y-12 flex flex-col">
        {/* Email CTA */}
        <motion.div
          className="relative flex flex-col items-start p-4 border rounded-xl border-zinc-300 dark:border-zinc-600 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-zinc-50 opacity-0 transition-all group-hover:opacity-10 group-hover:bg-zinc-300 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50 dark:group-hover:bg-zinc-700"></div>
          <div className="relative">
            <h3 className="mb-4 font-semibold text-zinc-600 dark:text-zinc-100">
              {t('contentSection.emailTitle')}
            </h3>
            <p className="text-sm font-normal text-zinc-500 dark:text-zinc-300">
              {t('contentSection.callMe')}
            </p>
            <button
              className="mt-4 px-6 py-2 text-white bg-zinc-700 rounded-lg hover:bg-zinc-500 transition duration-300"
              onClick={() => (window.location.href = 'mailto:david.vasadi@icloud.com')}
            >
              {t('contentSection.call')}
            </button>
          </div>
        </motion.div>

        {/* Munkatapasztalatok rész */}
        <motion.div
          className="relative border border-zinc-300 rounded-xl p-4 dark:border-zinc-600 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-zinc-50 opacity-0 transition-all group-hover:opacity-10 group-hover:bg-zinc-300 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50 dark:group-hover:bg-zinc-700"></div>
          <div className="relative">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
              {t('contentSection.work')}
            </h3>
            <div className="mt-6">
              {works.slice(0, 2).map(work => (
                <div key={work.id} className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-4">
                    {work.id !== '4' && (
                      <>
                        <img
                          src={work.imageUrl}
                          alt={`${work.company} Logo`}
                          className="rounded-full border-2 border-zinc-100 dark:border-zinc-700 w-10 h-10 object-contain bg-white"
                        />
                        <div>
                          <p className="font-semibold text-sm py-3 text-zinc-800 dark:text-zinc-100">
                            {t(`contentSection.work${work.id}.company`)}
                          </p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {t(`contentSection.work${work.id}.position`)}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                  {work.id !== '4' && (
                    <span className="text-sm text-zinc-400 dark:text-zinc-500">
                      {t(`contentSection.work${work.id}.timeline`)}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-12 text-center text-sm">
              <a
                href={cvMapping[currentLanguage]}
                download={`CV_${currentLanguage}`}
                className="group flex items-center justify-center w-full px-6 py-3 text-zinc-500 bg-zinc-100 rounded-full hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-zinc-300"
              >
                {t('contentSection.downloadCV')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentSection;
