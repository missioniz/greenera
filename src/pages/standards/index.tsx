import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import Layout from '../../components/layout';

export const siteTitle = 'GreenEra | Стандарти зеленого будівництва';

const posts = [
    {
        title: 'Екобезпека',
        href: '/standards/ecosafety',
        description:
            'Сьогодні вже очевидно, що внаслідок пандемії COVID-19 світ змінився назавжди і всі подальші плани мають бути узгоджені з особливими вимогами та заходами по запобіганню поширенню захворювання. Пандемія вплинула на всі сфери людського життя, що потребує докорінних змін у способах взаємодії та середовища існування людей. '
    },
    {
        title: 'Аналіз потенціалу застосування екологічних стандартів',
        href: '/standards/analysis',
        description:
            'Прогресивні інженерно-технічні рішення та міжнародні екологічні стандарти зеленого будівництва мають значний потенціал застосування практично в усіх секторах міського розвитку м. Київ для реалізації цілей, заявлених у Стратегії.'
    },
    {
        title: 'Короткострокові і довгострокові заходи та рекомендації',
        href: '/standards/measures',
        description:
            'Пандемія COVID-19 та карантин також змусили компанії перебудувати офісну діяльність для ефективної роботи в кризових умовах. При цьому зелені стандарти виступають у ролі орієнтира для рекомендацій по реорганізації офісної роботи.'
    },
    {
        title: 'Думки експертів',
        href: '/standards/opinions',
        description:
            'Згідно Стратегії основна мета довгострокового розвитку міста Києва – це підвищення якості життя мешканців, що визначається економічним добробутом і комфортом життя у місті з багатою історичною традицією. '
    }
];

export const Standards = (): JSX.Element => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {/*Page title*/}
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Стандарти</span>{' '}
                        <span className="block text-primary-600 xl:inline">зеленого</span>{' '}
                        <span className="block xl:inline">будівництва</span>{' '}
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        є найбільш ефективним інструментом трансформації урбанізованого середовища у
                        відповідності до екобезпеки нового способу існування людей.
                    </p>
                </div>
            </div>

            <div className="bg-white">
                <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <div className="max-w-max lg:max-w-7xl mx-auto">
                        <div className="relative">
                            <svg
                                className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true">
                                <defs>
                                    <pattern
                                        id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse">
                                        <rect
                                            x={0}
                                            y={0}
                                            width={4}
                                            height={4}
                                            className="text-primary-200"
                                            fill="currentColor"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width={404}
                                    height={384}
                                    fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
                                />
                            </svg>
                            <svg
                                className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true">
                                <defs>
                                    <pattern
                                        id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse">
                                        <rect
                                            x={0}
                                            y={0}
                                            width={4}
                                            height={4}
                                            className="text-primary-200"
                                            fill="currentColor"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width={404}
                                    height={384}
                                    fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
                                />
                            </svg>
                            <div className="relative md:bg-white md:p-6">
                                <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                                    <div className="prose prose-green prose-lg text-gray-500 lg:max-w-none">
                                        <p>
                                            Актуальними стають високі критерії якості параметрів
                                            будівель, які застосовуються у зеленому будівництві.
                                            Адже в концепції зеленого будівництва передбачено не
                                            тільки мінімізацію впливу будівельної галузі на
                                            навколишнє середовище, але й акцентовано увагу на
                                            збереженні здоров&#39;я людей на всіх етапах життєвого
                                            будівель.
                                        </p>
                                        <p>
                                            Суттєвими факторами є висока якість повітря, поліпшення
                                            вентиляції, збільшення природного освітлення, усунення
                                            небезпечних чинників, використання природних матеріалів,
                                            оздоровче озеленення приміщень. Зелене будівництво є
                                            ефективним інструментом для трансформації будівель та
                                            інфраструктури у відповідності до екобезпеки нового
                                            способу існування людей в умовах пандемії і у
                                            постпандемічний період.
                                        </p>
                                        <p>
                                            Україна переживає складний переломний момент, від якого
                                            залежить не тільки подальший історичний шлях розвитку
                                            країни, але й стабільність Європи та загальна політична
                                            ситуація у світі. Центром політичної, економічної та
                                            соціальної активності держави є Київ, тому надзвичайно
                                            важливо, щоб столиця не тільки викликала гордість та
                                            відчуття впевненості у майбутньому у всіх громадян
                                            України, стала гідним прикладом для інших регіонів нашої
                                            країни, але й зайняла достойне місце серед найвидатніших
                                            міст світу.
                                        </p>
                                    </div>
                                    <div className="mt-6 prose prose-green prose-lg text-gray-500 lg:mt-0">
                                        <p>
                                            Важливим кроком на шляху досягнення цих амбіційних
                                            намірів стала «Стратегія розвитку міста Києва до 2025
                                            року» (далі «Стратегія»), яку було затверджено рішенням
                                            Київської міської ради № 824/7060 від 15 грудня 2011
                                            року та вдосконалено у новій редакції в 2016 р. у
                                            зв’язку із суттєвими змінами соціально-економічного
                                            становища в країні та для узгодження з новими
                                            законодавчими документами: Закону України «Про засади
                                            державної регіональної політики», Порядку розроблення
                                            регіональних стратегій розвитку і планів заходів з їх
                                            реалізації, а також проведення моніторингу та оцінки
                                            результативності реалізації зазначених регіональних
                                            стратегій і планів заходів, Стратегії сталого розвитку
                                            «Україна – 2020», Державної стратегії регіонального
                                            розвитку на період до 2020 року.
                                        </p>
                                        <p>
                                            Згідно Стратегії основна мета довгострокового розвитку
                                            міста Києва – це підвищення якості життя мешканців, що
                                            визначається економічним добробутом і комфортом життя у
                                            місті з багатою історичною традицією. Особлива увага
                                            приділяється розбудові та реконструкції міста,
                                            покращенню його інфраструктури та охороні довкілля, що
                                            ідеально корелює з основними принципами зеленого
                                            будівництва.
                                        </p>
                                        <Link href={'/standards/green'}>
                                            <a>
                                                <span className="hover:text-gray-900">
                                                    Читати повністю
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-10 pb-20 px-4 sm:px-6 lg:pt-10 lg:pb-28 lg:px-8">
                    <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                        <div>
                            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                                Об’єктивне висвітлення стандартів зеленого будівництва
                            </h2>
                        </div>
                        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                            {posts.map((post) => (
                                <div key={post.title}>
                                    <a href="/#" className="mt-2 block">
                                        <p className="text-xl font-semibold text-gray-900">
                                            {post.title}
                                        </p>
                                        <p className="mt-3 text-base text-gray-500">
                                            {post.description}
                                        </p>
                                    </a>
                                    <div className="mt-3">
                                        <a
                                            href={post.href}
                                            className="text-base font-semibold text-primary-600 hover:text-primary-500">
                                            Читати повністю
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Standards;
