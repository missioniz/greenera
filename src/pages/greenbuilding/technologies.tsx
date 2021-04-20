import Head from 'next/head';

import Layout from '../../components/layout';

export const siteTitle = 'GreenEra | Технології управління будівлями';

export const Technologies = (): JSX.Element => {
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
                                        className="text-primary-200"
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
                                Технології управління будівлями
                            </span>
                        </h1>
                    </div>
                    <div className="mt-6 prose prose-green prose-lg text-gray-500 mx-auto">
                        <p>
                            Від будівельній галузі очікують формування нових стандартів і правил, що
                            відповідають вимогам екобезпеки в епоху пандемічних загроз. Конкурентну
                            перевагу отримають ті компанії, які змогли своєчасно адаптуватись і
                            запропонували інноваційні проекти у відповідності до нових цінностей і
                            потреб. Прогресивні інженерно-технічні рішення та міжнародні екологічні
                            стандарти зеленого будівництва мають значний потенціал застосування
                            практично в усіх секторах міського розвитку м. Київ.
                        </p>
                        <p>
                            Пандемія COVID-19 переконливо продемонструвала необхідність перегляду
                            стратегій проектування та теорій планування урбаністичних територій та
                            будівель. Уроки отримані під час пандемії переконують в необхідності
                            створення здорового та стійкого побудованого середовища на підґрунті
                            стандартів зеленого будівництва.
                        </p>
                        <p>
                            Зелене будівництво є ефективним інструментом для трансформації
                            урбанізованого середовища у відповідності до екобезпеки нового способу
                            існування людей в умовах пандемії і у постпандемічний період.
                        </p>
                        <p>
                            Прогресивні інженерно-технічні рішення та міжнародні екологічні
                            стандарти зеленого будівництва мають значний потенціал застосування
                            практично в усіх секторах міського розвитку м. Києва. Цей підхід
                            дозволить значно посилити розвиток таких секторів міського розвитку, як
                            розбудова міста і земельні відносини, публічний простір,
                            житлово-комунальне господарство, транспорт та міська мобільність,
                            екополітика та охорона довкілля, охорона здоров&#39;я та здоровий спосіб
                            життя, безпека та цивільний захист.
                        </p>
                        <p>До технологій управління будівлями можна віднести:</p>
                        <ul>
                            <li>
                                он-лайн моніторинг забудови з відображенням в соціальних мережах
                                поточного стану та динаміки розвитку інфраструктури;
                            </li>
                            <li>3-D моделювання містобудівної ситуації;</li>
                            <li>
                                створення систем дистанційного моніторингу та управління
                                енергоспоживанням
                            </li>
                            <li>комплекс систем життєзабезпечення ;</li>
                            <li>комплекс систем безпеки;</li>
                            <li>комплекс систем інформатизації.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Technologies;
