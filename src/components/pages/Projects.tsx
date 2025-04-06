import { Link } from 'react-router-dom';
import { LinkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = ['project1', 'project2', 'project3', 'project4'].map(key => ({
    id: key,
    title: t(`projects.${key}.title`),
    label: t(`projects.${key}.label`),
    description: t(`projects.${key}.description`),
    link: t(`projects.${key}.link`),
    imageUrl: t(`projects.${key}.imageUrl`),
    imageTitle: t(`projects.${key}.imageTitle`)
  }));

  return (
    <section className="bg-white dark:bg-zinc-800 px-10 sm:px-12 md:mx-20 lg:mx-24 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-zinc-800 dark:text-zinc-100">
          {t('projects.title')}
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          {t('projects.description')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group flex flex-col items-start bg-white dark:bg-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={project.link} className="flex items-center space-x-2 text-sm w-full">
                <img
                  src={project.imageUrl}
                  alt={project.imageTitle}
                  className="w-14 h-14 rounded-full object-cover border-4 border-zinc-50 dark:border-zinc-800 absolute top-5 left-6"
                />
                <div className="p-6 pt-24 text-left w-full">
                  <h3 className="text-md font-semibold text-zinc-800 dark:text-zinc-100 mb-4">
                    {project.label}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <LinkIcon className="w-4 h-4 text-zinc-400 group-hover:text-teal-400" />
                    <span className="text-zinc-400 group-hover:text-teal-400 dark:group-hover:text-teal-400 font-base cursor-pointer">
                      {t(project.link)}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;