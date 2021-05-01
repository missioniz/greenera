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
            <meta property="og:url" content="https://www.greenera.info" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Освітньо-інформаційна платформа GreenEra" />
            <meta
                property="og:description"
                content="GreenEra - просуває інноваційні рішення, які спрямовують нас на більш чистий, безпечний та стійкий енергетичний шлях."
            />
            <meta
                property="og:image"
                content={'https://hhra.s3.amazonaws.com/greenera/Screen-Shot-GreenEra.png'}
            />
            {/*Twitter*/}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://www.greenera.info" />
            <meta name="twitter:title" content="Освітньо-інформаційна платформа GreenEra" />
            <meta
                name="twitter:description"
                content="GreenEra - просуває інноваційні рішення, які спрямовують нас на більш чистий, безпечний та стійкий енергетичний шлях."
            />
            <meta
                name="twitter:image"
                content="https://hhra.s3.amazonaws.com/greenera/Screen-Shot-GreenEra.png"
            />
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
