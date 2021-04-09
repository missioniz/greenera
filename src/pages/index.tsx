import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import Layout from '../components/layout';
import HomeHero from '../sections/homeHero';
import HomeIntro from '../sections/homeIntro';
export const siteTitle = 'GreenEra';

export const Home = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = useTranslation();
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <HomeIntro />
        </Layout>
    );
};

export default Home;
