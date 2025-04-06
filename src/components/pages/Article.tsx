import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { LinkIcon } from '@heroicons/react/24/outline';

interface ArticleProps {
  works: {
    id: string;
    title: string;
    date: string;
    content: string;
    description: string;
    timeline: string;
    company: string;
    position: string;
    imageUrl: string;
    imageUrl2?: string;
  }[];
}

const Article: React.FC<ArticleProps> = ({ works }) => {
  const { id } = useParams();
  const { t } = useTranslation();

  const article = works.find(work => work.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return <div>Article not found</div>;
  }

  // Dinamikus link a projekthez
  const projectLink = t(`projects.project${id}.link`, { defaultValue: "" });

  return (
    <section className="bg-white dark:bg-zinc-800 px-10 sm:px-12 md:mx-20 lg:mx-24 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Vissza gomb */}
        <div className="mb-6 flex justify-start">
          <Link
            to="/articles"
            className="text-zinc-400 bg-zinc-50 dark:bg-zinc-700 rounded-full p-3 hover:bg-zinc-200 dark:hover:bg-zinc-600 border-2 border-zinc-100 dark:border-zinc-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>
        {/* Cikk cím és dátum */}
        <div className="text-left">
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
            <p className="text-sm text-zinc-400 dark:text-zinc-400">
              <span className="font-extrabold mr-2">|</span>
              {t(`contentSection.work${article.id}.date`, { defaultValue: article.date })}
            </p>
            <span className="mt-4 sm:mt-0 sm:ml-10 flex flex-wrap gap-2">
              {(t(`contentSection.work${article.id}.workflow`, { returnObjects: true }) as string[]).map((item, index) => (
                <span key={index} className="bg-zinc-200 dark:bg-zinc-600 rounded-full px-3 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-100 mr-1">
                  {item}
                </span>
              ))}
            </span>
          </div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-zinc-800 dark:text-zinc-100">
            {t(`contentSection.work${article.id}.title`, { defaultValue: article.title })}
          </h1>
        </div>
        <p className="text-md text-zinc-500 dark:text-zinc-400 mt-4">
          {t(`contentSection.work${article.id}.description`, { defaultValue: article.description })}
        </p>
        <p className="text-md text-zinc-500 dark:text-zinc-400 mt-4">
          {t(`contentSection.work${article.id}.description2`, { defaultValue: article.description })}
        </p>
        <img
          src={t(`contentSection.work${article.id}.imageUrl`, { defaultValue: article.imageUrl })}
          alt="Article Image"
          className="rounded-xl w-full mt-8"
        />
        <div className="mt-8 text-md text-zinc-500 dark:text-zinc-400">
          <p>{t(`contentSection.work${article.id}.content`, { defaultValue: article.content })}</p>
        </div>
        <img
          src={t(`contentSection.work${article.id}.imageUrl2`, { defaultValue: article.imageUrl2 || article.imageUrl })}
          alt="Article Image"
          className="rounded-xl w-full mt-8"
        />
        <div className="mt-8 text-md text-zinc-500 dark:text-zinc-400">
          <p>{t(`contentSection.work${article.id}.content2`, { defaultValue: article.content })}</p>
        </div>
      <div className="flex mt-10">
        <Link
          to="/articles"
          className="text-zinc-400 bg-zinc-100 dark:bg-zinc-700 rounded-lg px-4 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-600 flex items-center mr-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <a
          href={projectLink}
          rel="noopener noreferrer"
          className="text-zinc-400 bg-zinc-100 dark:bg-zinc-700 rounded-lg px-4 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-600 flex items-center"
        >
          <LinkIcon className="w-4 h-4" />
        </a>
      </div>
      </div>
    </section>
  );
};

export default Article;
