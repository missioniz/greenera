import Head from 'next/head';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import Layout from '../components/Layout';

export const siteTitle = 'GreenEra | Загальна інформація';

const people = [
    {
        name: 'Тетяна Кривомаз',
        role: '',
        imageUrl: 'https://hhra.s3.amazonaws.com/greenera/krivomaz.jpg',
        bio:
            'Ідеолог розвитку зеленого будівництва в Україні, співпрацює з Building Research Establishment, BREEAM та BRE Academy. Професор Київського національного університету будівництва і архітектури доктор технічних наук та кандидат біологічних наук. Керівник та учасник міжнародних екологічних проектів і наукових експедицій в Бельгії, Бразилії, Великій Британії, Голландії, Італії, Казахстані, Китаї, Мексиці, Німеччині, ОАЕ, Польщі, США, Туреччині, Франції, Швеції, Японії, а також на островах Корсика, Куба, Мальдіви, Мартініка, Реюньон, Сейшели. Керівник комітету в Комісії з виживання видів Міжнародного союзу охорони природи (IUCN).'
    },
    {
        name: 'Дмитро Варавін',
        role: '',
        imageUrl: 'https://hhra.s3.amazonaws.com/greenera/varavin.jpg',
        bio:
            'Акредитований Радою зеленого будівництва США LEED-професіонал із сертифікатом проектування та будівництва будівель, інженер з охорони навколишнього середовища та менеджер проектів з міжнародними сертифікатами в галузі будівництва та дизайну зелених будівель та галузі екологічних знань з більш ніж 10-річним досвідом у сфері нерухомості, контролю за забрудненням навколишнього середовища та дизайну в галузі очищення стічних вод, опалення, вентиляції, спеціаліст з питань глобальних кліматичних змін. Експертний радник, який має високу кваліфікацію у розробці процедурних рекомендацій, спрямованих на вдосконалення контролю за промисловим забрудненням, зменшення енергоспоживання, використання води та впровадження зеленої енергії.'
    }
    // More people...
];

export const About = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = useTranslation();
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {/*Page title*/}
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Науково обґрунтовані рішення для</span>{' '}
                        <span className="block text-primary-600 xl:inline">
                            зміни клімату, енергетичні та екологічні проблеми
                        </span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Ми – це спільнота експеров в екологічному менеджменті, які зацікавлені
                        робити нашу навколишнє середовище безпечної.
                    </p>
                </div>
            </div>

            <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
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
                            <div className="mx-auto py-5 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-5">
                                <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                                    <div className="space-y-5 sm:space-y-4">
                                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                            Про нас
                                        </h2>
                                        <p className="text-xl text-gray-500">
                                            Освітньо-інформаційна он-лайн платформа призначена для
                                            узагальнення даних щодо функціонування людей в
                                            урбанізованих середовищах в умовах обміну і поширення
                                            інформації серед широкого кола всіх зацікавлених осіб і
                                            організацій, для запобігання поширенню пандемії та
                                            збереження морально-фізичного стану здоров’я людей в
                                            урбанізованих системах, співробітництва державних та
                                            місцевих органів влади з громадськістю, бізнесом,
                                            науковими установами та міжнародними організаціями.
                                        </p>
                                        <p className="text-xl text-gray-500">
                                            Дана платформа це місце де в процесі відкритих дискусій
                                            і досліджень народжується істина, а її учасники вносять
                                            свій внесок у створення безпечного місця для проживання
                                            і &quot;зеленої&quot; трансформації середовища
                                            проживання.
                                        </p>
                                        <p className="text-xl text-gray-500">
                                            Якщо ви бажаєте взяти участь в цьому проекті -{' '}
                                            <Link href="/contact">
                                                <a>
                                                    <span className="text-primary-600 hover:text-gray-900 hover:no-underline">
                                                        долучайтеся
                                                    </span>
                                                </a>
                                            </Link>{' '}
                                            до професійної екологічної спільноти!
                                        </p>
                                    </div>
                                    <div className="lg:col-span-2">
                                        <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                                            {people.map((person) => (
                                                <li key={person.name} className="sm:py-8">
                                                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                                                        <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                                            <img
                                                                className="object-cover shadow-lg rounded-lg"
                                                                src={person.imageUrl}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="sm:col-span-2">
                                                            <div className="space-y-4">
                                                                <div className="text-lg leading-6 font-medium space-y-1">
                                                                    <h3>{person.name}</h3>
                                                                    <p className="text-primary-600">
                                                                        {person.role}
                                                                    </p>
                                                                </div>
                                                                <div className="text-lg">
                                                                    <p className="text-gray-500">
                                                                        {person.bio}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
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
export default About;
