import Head from 'next/head';
import { useRouter } from 'next/router';

export const siteTitle = 'GreenEra';

export const HeadComponent = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const router = useRouter();

    return (
        <Head>
            <title>{siteTitle}</title>
            <meta name="description" content="Освітньо-інформаційна платформа GreenEra" />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            {/*favocin*/}
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/static/favicon/apple-touch-icon.png"></link>
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/static/favicon/favicon-32x32.png"></link>
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/static/favicon/favicon-16x16.png"></link>
            <link rel="manifest" href="/static/favicon/site.webmanifest"></link>
            <link
                rel="mask-icon"
                href="/static/favicon/safari-pinned-tab.svg"
                color="#064E3B"></link>
            <meta name="msapplication-TileColor" content="#da532c"></meta>
            <meta name="theme-color" content="#ffffff"></meta>
        </Head>
    );
};

export default HeadComponent;
