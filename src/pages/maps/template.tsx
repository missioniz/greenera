import IframeResizer from 'iframe-resizer-react';
import Head from 'next/head';
import React from 'react';

import Layout from '../../components/layout';

export const siteTitle = 'GreenEra | Maps Template';

export const MapsTempate = (): JSX.Element => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {/*Page title*/}
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 bg-white">
                <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Технології</span>{' '}
                        <span className="block text-primary-600 xl:inline">зеленого</span>{' '}
                        <span className="block xl:inline">будівництва</span>{' '}
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        является актуальной для всех секторов городского развития и допомагає у
                        збереженні навколишнього середовища та екосистеми.
                    </p>
                </div>
            </div>

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
                                <IframeResizer
                                    log
                                    src="//missioniz.maps.arcgis.com/apps/Embed/index.html?webmap=06b40c45819540e2be635fccf26361d8&extent=30.307,50.3519,30.7853,50.6072&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
                                    style={{
                                        minWidth: '100%',
                                        height: '600px'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default MapsTempate;
