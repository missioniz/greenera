import Head from 'next/head';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import Layout from '../components/layout';

export const siteTitle = 'GreenEra | Політика конфіденційності';

export const Privacy = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = useTranslation();
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
                        <svg
                            className="absolute bottom-12 left-full transform translate-x-32"
                            width="404"
                            height="384"
                            fill="none"
                            viewBox="0 0 404 384">
                            <defs>
                                <pattern
                                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                            />
                        </svg>
                    </div>
                </div>
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Політика конфіденційності
                            </span>
                        </h1>
                        <p className="mt-8 text-xl text-gray-500 leading-8">
                            GreenEra is an Open Access Project (GreenEra).
                        </p>
                        <p className="mt-8 text-xl text-gray-500 leading-8">
                            Website operator: This website is operated by missionIZ.
                        </p>
                    </div>
                    <div className="mt-6 prose prose-green prose-lg text-gray-500 mx-auto">
                        <p>
                            GreenEra is committed to protecting confidential information&#39;s
                            privacy and accuracy to the and accuracy to the extent possible, subject
                            to to state and federal law provisions. Other than as required by laws
                            that guarantee public access to certain types of information or in
                            response response to subpoenas or other other legal instruments that
                            authorize personal information is not actively shared. In particular, we
                            do not re-distribute or sell personal information collected on our web
                            servers.
                        </p>
                        <p>
                            Although many applications and websites collect information and other
                            statistics about their statistics about their users, we DO NOT collect
                            any personal information about you when visiting this website.
                        </p>
                        <h3>Information collected</h3>
                        <p>GreenEra servers collect the following analytics:</p>
                        <ul>
                            <li>Internet Protocol (IP) address of computer being used</li>
                            <li>web pages requested</li>
                            <li>referring web page</li>
                            <li>browser used</li>
                            <li>date and time</li>
                        </ul>
                        <p>
                            GreenEra does not associate this data with individual user identities.
                        </p>
                        <h3>Cookies</h3>
                        <p>
                            GreenEra may use &#34;cookies&#34; to deliver web content specific to
                            individual users&#39; interests or keep track of online purchasing
                            transactions. Sensitive personal information is not stored within
                            cookies.
                        </p>
                        <h3>Webforms</h3>
                        <p>
                            GreenEra use webforms forms on this website. These forms require users
                            to give contact information (name, email address, phone number). Contact
                            information from the registration form is used only to send material
                            relating to the purpose for which it was collected and will not be sold
                            to another party.
                        </p>
                        <h3>Use of collected information:</h3>
                        <p>GreenEra servers uses the collected data for the following purposes:</p>
                        <ul>
                            <li>
                                GreenEra will only use personal information collected from this site
                                site to communicate back to individuals who contact us via the site.
                            </li>
                            <li>
                                GreenEra uses browser-IP-address information and anonymous-browser
                                history to report information about site accesses and for profiling
                                purposes. This information is used to improve Web presentation and
                                utilization. IP address information may also be used for
                                troubleshooting purposes.
                            </li>
                        </ul>
                        <h3>Distribution of collected information</h3>
                        <p>
                            GreenEra servers distribute the collected data for the following terms:
                        </p>
                        <ul>
                            <li>
                                GreenEra will not disclose, without your consent, personal
                                information collected about you, except for certain explicit
                                circumstances in which disclosure is required by law.
                            </li>
                            <li>
                                GreenEra will not distribute or sell personal information to
                                third-party organizations.
                            </li>
                        </ul>
                        <h3>Privacy Statement Revisions</h3>
                        <p>
                            This Privacy Statement was last revised on 04/02/2021. We may change
                            this Privacy Statement at any time and for any reason. We encourage you
                            to review this Privacy Statement each time you visit the website
                            www.greenera.info. If we make a significant change to our Privacy
                            Statement, we will post a notice on our website&#39;s homepage for some
                            after the change is made.
                        </p>
                        <h3>Responsibility for External Sites</h3>
                        <p>
                            This website www.greenera.info, may contain links to other websites.
                            Some of those websites may be operated by third parties. We provide the
                            links for your convenience, but we do not review, control, or monitor
                            the privacy practices of websites operated by others.
                        </p>
                        <p>
                            We are not responsible for the performance of websites operated by third
                            parties or for your business dealings with them. Therefore, whenever you
                            leave this website, we recommend that you review each website&#39;s
                            privacy practices and make your conclusions regarding these
                            practices&#39; adequacy.
                        </p>
                        <h3>How to contact us</h3>
                        <p>
                            If you have questions or comments about this Privacy Statement, please
                            use the{' '}
                            <Link href="/contact">
                                <a className="hover:text-gray-900">
                                    Contact Form
                                </a>
                            </Link>{' '}
                            on this website.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Privacy;
