import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import Layout from '../../components/Layout';

export const siteTitle = 'GreenEra | Політика конфіденційності';

export const Renewal = (): JSX.Element => {
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
                                        className="text-primary-200"
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
                                        className="text-primary-200"
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
                                Зелене відновлення міст
                            </span>
                        </h1>
                    </div>
                    <div className="mt-6 prose prose-green prose-lg text-gray-500 mx-auto">
                        <p>
                            Протипандемічні заходи в різних країнах світу свідчать про загальну
                            міжнародну тенденцію «зеленого відновлення міст». В цьому контексті
                            найбільш ефективним інструментом трансформації урбанізованого середовища
                            у відповідності до екобезпеки нового способу існування людей стають
                            стандарти зеленого будівництва.
                        </p>
                        <p>
                            Основні переваги зеленого будівництва для будівельної галузі можна
                            сформулювати у наступних тезах:
                        </p>
                        <ul>
                            <li>
                                зниження сукупного негативного впливу будівельної діяльності на
                                навколишнє середовище та здоров’я людей;
                            </li>
                            <li>ниження витрат на утримання будівель нового будівництва;</li>
                            <li>
                                використання екологічно сертифікованих матеріалів в будівництві та
                                при оздобленні будівель;
                            </li>
                            <li>
                                підвищення енергоефективності будівлі, використання альтернативних
                                джерел енергії;
                            </li>
                            <li>
                                зниження енергоспоживання, а відповідно і навантаження на
                                електромережі та підвищення надійності їх роботи;
                            </li>
                            <li>
                                розробка нових технологій і створення сучасних промислових
                                продуктів;
                            </li>
                            <li>
                                створення нових робочих місць в інтелектуальній сфері виробництва;
                            </li>
                            <li>
                                комплексне скорочення витрат на будівництво та утримання будинків.
                            </li>
                        </ul>
                        <p>
                            Для ефективного впровадження зелених проектів консультуються зі
                            спеціалістами по екологічній стійкості будівництва, починаючи зі стадій
                            проектування та техніко-економічного обґрунтування і закінчуючи стадією
                            моніторингу об’єктів в експлуатації на відповідність вимогам зеленого
                            будівництва.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Renewal;
