import IframeResizer from 'iframe-resizer-react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import Layout from '../../components/layout';

export const siteTitle = 'GreenEra | Викиди діоксиду азоту';

export const Maps = (): JSX.Element => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="overflow-hidden bg-white">
                <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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
                                    Викиди діоксиду азоту в атмосферне повітря від стаціонарних
                                    джерел забруднення по районах (тис.тон).
                                </p>
                                <div className="mt-8 flex">
                                    <div className="inline-flex rounded-md shadow">
                                        <Link href={'/maps'}>
                                            <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
                                                Каталог
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="ml-3 inline-flex">
                                        <Link
                                            href={
                                                'https://hhra-missioniz.hub.arcgis.com/app/ac690a04c1364ae0a26ad89d54426064'
                                            }>
                                            <a
                                                target={'_blank'}
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200">
                                                ArcGis
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                            <div className="relative md:bg-white md:p-6">
                                <IframeResizer
                                    log
                                    src="//missioniz.maps.arcgis.com/apps/Embed/index.html?webmap=06b40c45819540e2be635fccf26361d8&extent=30.0955,50.1788,31.0156,50.6901&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
                                    style={{
                                        minWidth: '100%',
                                        height: '600px'
                                    }}
                                />
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Maps;
