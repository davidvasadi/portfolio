import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Services = () => {
    const { t } = useTranslation();

    const services = ['service1', 'service2', 'service3', 'service4'].map((key) => ({
        id: key,
        title: t(`services.${key}.title`),
        label: t(`services.${key}.label`),
        description: t(`services.${key}.description`),
        workflow1: t(`services.${key}.workflow1`),
        workflow2: t(`services.${key}.workflow2`),
        workflow3: t(`services.${key}.workflow3`),
    }));

    return (
        <section className="bg-white dark:bg-zinc-800 px-10 sm:px-12 md:mx-20 lg:mx-24 py-12">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-6 text-zinc-800 dark:text-zinc-100"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {t('services.title')}
                </motion.h2>

                <motion.p
                    className="text-lg text-zinc-600 dark:text-zinc-400 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {t('services.description')}
                </motion.p>

                <div className="">
                    <div className="cursor-pointer relative">
                        {/* Fő timeline vonal */}
                        <motion.div
                            className="absolute top-0 left-4 w-1 h-full bg-gray-300 dark:bg-gray-700"
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        ></motion.div>

                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className="relative group flex flex-col items-start mb-10"
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                {/* Pontok */}
                                <div className="absolute w-3 h-3 ms-3 bg-gray-200 rounded-full mt-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 transition-transform duration-300 group-hover:scale-125 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-600"></div>

                                {/* Szöveges tartalom */}
                                <div className="ms-8 px-6 hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:rounded-lg">
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        {service.title}
                                    </time>
                                    <h3 className="mt-2 mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                                        {service.label}
                                    </h3>
                                    <p className="pb-4 mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap pb-2">
                                        <p className="bg-zinc-200 dark:bg-zinc-600 rounded-full px-3 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-100 mr-2 mb-2">
                                            {service.workflow1}
                                        </p>
                                        <p className="bg-zinc-200 dark:bg-zinc-600 rounded-full px-3 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-100 mr-2 mb-2">
                                            {service.workflow2}
                                        </p>
                                        <p className="bg-zinc-200 dark:bg-zinc-600 rounded-full px-3 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-100 mb-2">
                                            {service.workflow3}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Vissza a cikkekhez gomb */}
                    <div className="mb-6 flex justify-start">
                        <Link to="/articles" className="text-zinc-400 bg-zinc-50 dark:bg-zinc-700 rounded-full p-3 hover:bg-zinc-200 dark:hover:bg-zinc-600 border-2 border-zinc-100 dark:border-zinc-700">
                            <svg className="w-3 h-3 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
