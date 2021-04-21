import { GlobeAltIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import Layout from '../../components/layout';

export const siteTitle = 'GreenEra | Інтерактивні карти';

const features = [
    {
        name: 'Викиди забруднюючих речовин',
        description:
            'Викиди забруднюючих речовин в атмосферне повітря від стаціонарних джерел забруднення по районах.',
        url: '/maps/pollutants',
        icon: GlobeAltIcon
    },
    {
        name: 'Розподіл населення',
        description:
            'Кількість народжених та померлих, природний приріст та скорочення, по районах м.Києва (осіб).',
        url: '/maps/population',
        icon: GlobeAltIcon
    },
    {
        name: 'Житловий фонд',
        description:
            'Загальна площа житлових будівель, прийнятих в експлуатацію, та утворення відходів по районах м.Києва.',
        url: '/maps/buildings',
        icon: GlobeAltIcon
    }
];

export const Maps = (): JSX.Element => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className="overflow-hidden">
                <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white">
                    <svg
                        className="hidden md:block absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
                        width={404}
                        height={784}
                        fill="none"
                        viewBox="0 0 404 784"
                        aria-hidden="true">
                        <defs>
                            <pattern
                                id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
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
                            height={784}
                            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
                        />
                    </svg>

                    <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Інтерактивні карти
                            </h2>
                            <div className="md:bg-white md:p-6 prose-lg">
                                <p className="text-gray-500">
                                    Інтерактивні карти міста Київ створені на основі технології
                                    ArcGIS дозволяють обробляти просторові дані і управляти ними.
                                    Дані карти дозволяє обмінюватися даними між учасниками, які
                                    виробляють дослідження і виробляти їх аналіз. Це «Розумні
                                    карти», що пропонують безліч функцій.
                                </p>
                            </div>
                        </div>
                        <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <dt>
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                                            <Link href={feature.url}>
                                                <a className="text-gray-900 hover:text-gray-500">
                                                    {feature.name}
                                                </a>
                                            </Link>
                                        </p>
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Maps;
