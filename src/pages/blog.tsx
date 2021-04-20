import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Date from '../components/Date'; // comment it if you will use other option for date localization. Also, use the same way in [id].tsx
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
export const siteTitle = 'GreenEra | Blog';

export const Blog = ({
    allPostsData
}: {
    allPostsData: {
        date: string;
        title: string;
        id: string;
        description: string;
    }[];
}): JSX.Element => {
    const { t } = useTranslation();
    const router = useRouter();
    const { locale, locales, defaultLocale } = router;

    /* Date localization other option
const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
*/
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="relative py-16 bg-white overflow-hidden">
                <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                    <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                        <svg
                            className="absolute top-12 left-full transform translate-x-32"
                            width="404"
                            height="384"
                            fill="none"
                            viewBox="0 0 404 384">
                            <defs>
                                <pattern
                                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                    x="0"
                                    y="0"
                                    width="20"
                                    height="20"
                                    patternUnits="userSpaceOnUse">
                                    <rect
                                        x="0"
                                        y="0"
                                        width="4"
                                        height="4"
                                        className="text-gray-200"
                                        fill="currentColor"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width="404"
                                height="384"
                                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                            />
                        </svg>
                        <svg
                            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                            width="404"
                            height="384"
                            fill="none"
                            viewBox="0 0 404 384">
                            <defs>
                                <pattern
                                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                    x="0"
                                    y="0"
                                    width="20"
                                    height="20"
                                    patternUnits="userSpaceOnUse">
                                    <rect
                                        x="0"
                                        y="0"
                                        width="4"
                                        height="4"
                                        className="text-gray-200"
                                        fill="currentColor"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width="404"
                                height="384"
                                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                            />
                        </svg>
                    </div>
                </div>

                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="mt-6 prose prose-green prose-lg text-gray-500 mx-auto">
                        <h2 className={''}>{t('common:blog')}</h2>
                        <ul>
                            {allPostsData.map(({ id, date, title, description }) => (
                                <li key={id}>
                                    <Link href={`/posts/${id}`}>
                                        <a>{title}</a>
                                    </Link>
                                    <br />
                                    {/*
                            // Comment below if you will use other option of data localization
                            */}
                                    <small className={'prose-sm text-gray-500'}>
                                        <Date dateString={date} locale={locale} />
                                    </small>
                                    {/* uncomment it for other option data localization
                            <small>
                                <time>
                                    {new Date(date).toLocaleDateString (locale, dateOptions)}
                                </time>
                            </small>
                            */}
                                    <p className="prose text-gray-500">{description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Blog;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const allPostsData = getSortedPostsData(locale);
    return {
        props: {
            allPostsData
        }
    };
};
