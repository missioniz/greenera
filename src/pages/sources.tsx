import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import Layout from '../components/layout';

export const siteTitle = 'GreenEra | Джерела';

const posts = [
    {
        title:
            'Applying of green building standards for implementation of the city development strategies in Kyiv.',
        author: 'Kryvomaz, T. and Varavin, D.',
        date: '2019'
    },
    {
        title:
            'Шляхи підвищення екобезпеки урбанізованого середовища у зв’язку з пандемією Covid-19.',
        author:
            'Кривомаз, Т.І., Варавін, Д.В., Екологічна безпека та природокористування, 36(4), pp.41-55.',
        date: '2020'
    },
    {
        title:
            'Оцінка екологічної безпеки урбанізованого середовища в умовах пандемічних загроз на прикладі м. Києва',
        author: 'Варавін Д.В., дис. 221 с. ',
        date: '2021'
    },
    {
        title:
            'Ways to improve the environmental safety of the urbanized environment in connection with the COVID-19.',
        author: 'Kryvomaz, Т.I. and Varavin, D.V.',
        date: '2020'
    }
];

export const Sources = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = useTranslation();
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className="bg-white">
                <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
                    <div className="max-w-max lg:max-w-7xl mx-auto">
                        <div className="relative">
                            <svg
                                className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true">
                                <defs>
                                    <pattern
                                        id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse">
                                        <rect
                                            x={0}
                                            y={0}
                                            width={4}
                                            height={4}
                                            className="text-primary-200"
                                            fill="currentColor"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width={404}
                                    height={384}
                                    fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
                                />
                            </svg>
                            <svg
                                className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true">
                                <defs>
                                    <pattern
                                        id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse">
                                        <rect
                                            x={0}
                                            y={0}
                                            width={4}
                                            height={4}
                                            className="text-primary-200"
                                            fill="currentColor"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width={404}
                                    height={384}
                                    fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
                                />
                            </svg>
                            <div className="relative md:bg-white md:p-6">
                                <div className="pt-10 pb-20 px-4 sm:px-6 lg:pt-10 lg:pb-28 lg:px-8">
                                    <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                                        <div>
                                            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                                                Для оформлення та доповнення інформації на платформі
                                                GreenEra використовувались наступні роботи:
                                            </h2>
                                        </div>
                                        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                                            {posts.map((post) => (
                                                <div key={post.title}>
                                                    <div className="mt-2 block">
                                                        <p className="text-lg font-medium text-gray-900">
                                                            {post.title}
                                                        </p>
                                                        <p className="mt-3 text-base text-gray-500">
                                                            {post.author}, {post.date}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Sources;
