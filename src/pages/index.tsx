import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Date from '../components/date'; // comment it if you will use other option for date localization. Also, use the same way in [id].tsx
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import HomeHero from "../sections/homeHero";
import HomeIntro from "../sections/homeIntro";
export const siteTitle = 'missionIZ | Home';

export const Home = ({
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
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <HomeHero />
            <HomeIntro />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <section>
                    <div>
                        <div>
                            <p>Current locale: {locale}</p>
                            <p>Default locale: {defaultLocale}</p>
                            <p>Configured locales: {JSON.stringify(locales)}</p>
                        </div>
                    </div>
                    <h2 className={utilStyles.headingLg}>{t('common:greeting')}</h2>
                    <p>[Your Self Introduction]</p>
                    <p className="pt-5">
                        (This is a sample website - you’ll be building a site like this in{' '}
                        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                    </p>
                </section>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>{t('common:blog')}</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, date, title, description }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <br />
                                {/*
                            // Comment below if you will use other option of data localization
                            */}
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} locale={locale} />
                                </small>
                                {/* uncomment it for other option data localization
                            <small>
                                <time>
                                    {new Date(date).toLocaleDateString (locale, dateOptions)}
                                </time>
                            </small>
                            */}
                                <p className="prose-sm">{description}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </Layout>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const allPostsData = getSortedPostsData(locale);
    return {
        props: {
            allPostsData
        }
    };
};
