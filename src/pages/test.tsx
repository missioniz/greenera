import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import Layout from '../components/layout';
export const siteTitle = 'GreenEra | Test';

export const Test = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = useTranslation();
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="bg-white">
                <div className="relative bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                            <svg
                                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                                fill="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                aria-hidden="true">
                                <polygon points="50,0 100,0 50,100 0,100" />
                            </svg>
                            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                        <span className="block xl:inline">Data to enrich your</span>
                                        <span className="block text-indigo-600 xl:inline">
                                            online business
                                        </span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                                        qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                                        occaecat fugiat aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixqx=ghr3qnI88h&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                            alt=""></img>
                    </div>
                </div>

                <div className="relative bg-white overflow-hidden">
                    <div className="py-16 xl:py-28 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-max lg:max-w-7xl mx-auto">
                            <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                                <div className="text-base max-w-prose lg:max-w-none">
                                    <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                                        Transactions
                                    </h2>
                                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                        A better way to send money
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <svg
                                    className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
                                    width="404"
                                    height="384"
                                    fill="none"
                                    viewBox="0 0 404 384"
                                    aria-hidden="true">
                                    <defs>
                                        <pattern
                                            id="95e8f2de-6d30-4b7e-8159-f791729db21b"
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
                                        fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
                                    />
                                </svg>
                                <svg
                                    className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
                                    width="404"
                                    height="384"
                                    fill="none"
                                    viewBox="0 0 404 384"
                                    aria-hidden="true">
                                    <defs>
                                        <pattern
                                            id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
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
                                        fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
                                    />
                                </svg>
                                <div className="relative md:bg-white md:p-6">
                                    <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                                        <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                                            <p>
                                                Ultrices ultricies a in odio consequat egestas
                                                rutrum. Ut vitae aliquam in ipsum. Duis nullam
                                                placerat cursus risus ultrices nisi, vitae tellus
                                                in. Qui non fugiat aut minus aut rerum. Perspiciatis
                                                iusto mollitia iste minima soluta id.
                                            </p>
                                            <p>
                                                Erat pellentesque dictumst ligula porttitor risus
                                                eget et eget. Ultricies tellus felis id dignissim
                                                eget. Est augue <a href="#">maecenas</a> risus nulla
                                                ultrices congue nunc tortor. Eu leo risus porta
                                                integer suspendisse sed sit ligula elit.
                                            </p>
                                            <ol>
                                                <li>
                                                    Integer varius imperdiet sed interdum felis cras
                                                    in nec nunc.
                                                </li>
                                                <li>
                                                    Quam malesuada odio ut sit egestas. Elementum at
                                                    porta vitae.
                                                </li>
                                            </ol>
                                            <p>
                                                Amet, eu nulla id molestie quis tortor. Auctor erat
                                                justo, sed pellentesque scelerisque interdum blandit
                                                lectus. Nec viverra amet ac facilisis vestibulum.
                                                Vestibulum purus nibh ac ultricies congue.
                                            </p>
                                        </div>
                                        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                                            <p>
                                                Erat pellentesque dictumst ligula porttitor risus
                                                eget et eget. Ultricies tellus felis id dignissim
                                                eget. Est augue maecenas risus nulla ultrices congue
                                                nunc tortor.
                                            </p>
                                            <p>
                                                Eu leo risus porta integer suspendisse sed sit
                                                ligula elit. Elit egestas lacinia sagittis
                                                pellentesque neque dignissim vulputate sodales. Diam
                                                sed mauris felis risus, ultricies mauris netus
                                                tincidunt. Mauris sit eu ac tellus nibh non eget sed
                                                accumsan. Viverra ac sed venenatis pulvinar elit.
                                                Cras diam quis tincidunt lectus. Non mi vitae,
                                                scelerisque felis nisi, netus amet nisl.
                                            </p>
                                            <p>
                                                Eu eu mauris bibendum scelerisque adipiscing et.
                                                Justo, elementum consectetur morbi eros, posuere
                                                ipsum tortor. Eget cursus massa sed velit feugiat
                                                sed ut. Faucibus eros mauris morbi aliquam nullam.
                                                Scelerisque elementum sit magna ullamcorper
                                                dignissim pretium.
                                            </p>
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

export default Test;
