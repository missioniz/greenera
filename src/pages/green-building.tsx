import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Date from '../components/date'; // comment it if you will use other option for date localization. Also, use the same way in [id].tsx
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
export const siteTitle = 'GreenEra | Зелене будівництво';

export const GreenBuilding = ({
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
            <div
                className="relative h-full py-16 bg-white overflow-hidden max-w-prose mx-auto"
                aria-hidden="true">
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
            </div>
        </Layout>
    );
};

export default GreenBuilding;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const allPostsData = getSortedPostsData(locale);
    return {
        props: {
            allPostsData
        }
    };
};
