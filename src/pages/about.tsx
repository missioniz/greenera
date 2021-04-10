import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import Layout from '../components/layout';

export const siteTitle = 'GreenEra | Загальна інформація';

export const About = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = useTranslation();
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">
                            Науково обґрунтовані рішення для
                        </span>{' '}
                        <span className="block text-primary-600 xl:inline">зміни клімату, енергетичні та екологічні проблеми</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Ми – це спільнота експеров в екологічному менеджменті, які зацікавлені
                        робити нашу навколишнє середовище безпечної.
                    </p>
                </div>
            </main>

            <div className="relative bg-white overflow-hidden">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="max-w-max lg:max-w-7xl mx-auto">
                        <div className="relative">
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

                            <div className="bg-white">
                                <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                                    <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                                        <div className="space-y-5 sm:space-y-4">
                                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                                Про GreenEra
                                            </h2>
                                            <p className="text-xl text-gray-500">
                                                Освітньо-інформаційна он-лайн платформа призначена
                                                для узагальнення даних щодо функціонування людей в
                                                урбанізованих середовищах в умовах пандемії, для
                                                обміну і поширення інформації серед широкого кола
                                                всіх зацікавлених осіб і організацій, для
                                                запобігання поширенню пандемії та збереження
                                                морально-фізичного стану здоров’я людей в
                                                урбанізованих системах, для продуктивного
                                                співробітництва державних та місцевих органів влади
                                                з громадськістю, бізнесом, науковими установами та
                                                міжнародними організаціями.
                                            </p>

                                            <p className="text-xl text-gray-500">
                                                Nulla quam felis, enim faucibus proin velit, ornare
                                                id pretium. Augue ultrices sed arcu condimentum
                                                vestibulum suspendisse. Volutpat eu faucibus vivamus
                                                eget bibendum cras.
                                            </p>

                                            <p className="text-xl text-gray-500">
                                                Nulla quam felis, enim faucibus proin velit, ornare
                                                id pretium. Augue ultrices sed arcu condimentum
                                                vestibulum suspendisse. Volutpat eu faucibus vivamus
                                                eget bibendum cras.
                                            </p>
                                            <p className="text-sm italic text-gray-500">
                                                Цей проект є частиною дисертаційного дослідження:
                                                "Варавін Д.В. Оцінка екологічної безпеки міського
                                                середовища в умовах пандемічних загроз на прикладі
                                                Києва".
                                            </p>
                                        </div>
                                        <div className="lg:col-span-2">
                                            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                                                <li className="sm:py-8">
                                                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                                                        <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                                            <img
                                                                className="object-cover shadow-lg rounded-lg"
                                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=ghr3qnI88h&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                                                alt=""></img>
                                                        </div>
                                                        <div className="sm:col-span-2">
                                                            <div className="space-y-4">
                                                                <div className="text-lg leading-6 font-medium space-y-1">
                                                                    <h3>Leslie Alexander</h3>
                                                                    <p className="text-primary-600">
                                                                        Co-Founder / CEO
                                                                    </p>
                                                                </div>
                                                                <div className="text-lg">
                                                                    <p className="text-gray-500">
                                                                        Ultricies massa malesuada
                                                                        viverra cras lobortis.
                                                                        Tempor orci hac ligula
                                                                        dapibus mauris sit ut eu.
                                                                        Eget turpis urna maecenas
                                                                        cras. Nisl dictum.
                                                                    </p>
                                                                </div>
                                                                <ul className="flex space-x-5">
                                                                    <li>
                                                                        <a
                                                                            href="#"
                                                                            className="text-gray-400 hover:text-gray-500">
                                                                            <span className="sr-only">
                                                                                Twitter
                                                                            </span>
                                                                            <svg
                                                                                className="w-5 h-5"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 20 20"
                                                                                aria-hidden="true">
                                                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                                            </svg>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="#"
                                                                            className="text-gray-400 hover:text-gray-500">
                                                                            <span className="sr-only">
                                                                                LinkedIn
                                                                            </span>
                                                                            <svg
                                                                                className="w-5 h-5"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 20 20"
                                                                                aria-hidden="true">
                                                                                <path
                                                                                    fillRule="evenodd"
                                                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                                                    clipRule="evenodd"
                                                                                />
                                                                            </svg>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="sm:py-8">
                                                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                                                        <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                                            <img
                                                                className="object-cover shadow-lg rounded-lg"
                                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=ghr3qnI88h&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                                                alt=""></img>
                                                        </div>
                                                        <div className="sm:col-span-2">
                                                            <div className="space-y-4">
                                                                <div className="text-lg leading-6 font-medium space-y-1">
                                                                    <h3>Leslie Alexander</h3>
                                                                    <p className="text-primary-600">
                                                                        Co-Founder / CEO
                                                                    </p>
                                                                </div>
                                                                <div className="text-lg">
                                                                    <p className="text-gray-500">
                                                                        Ultricies massa malesuada
                                                                        viverra cras lobortis.
                                                                        Tempor orci hac ligula
                                                                        dapibus mauris sit ut eu.
                                                                        Eget turpis urna maecenas
                                                                        cras. Nisl dictum.
                                                                    </p>
                                                                </div>
                                                                <ul className="flex space-x-5">
                                                                    <li>
                                                                        <a
                                                                            href="#"
                                                                            className="text-gray-400 hover:text-gray-500">
                                                                            <span className="sr-only">
                                                                                Twitter
                                                                            </span>
                                                                            <svg
                                                                                className="w-5 h-5"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 20 20"
                                                                                aria-hidden="true">
                                                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                                            </svg>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="#"
                                                                            className="text-gray-400 hover:text-gray-500">
                                                                            <span className="sr-only">
                                                                                LinkedIn
                                                                            </span>
                                                                            <svg
                                                                                className="w-5 h-5"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 20 20"
                                                                                aria-hidden="true">
                                                                                <path
                                                                                    fillRule="evenodd"
                                                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                                                    clipRule="evenodd"
                                                                                />
                                                                            </svg>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="sm:py-8">
                                                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                                                        <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                                            <img
                                                                className="object-cover shadow-lg rounded-lg"
                                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=ghr3qnI88h&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                                                alt=""></img>
                                                        </div>
                                                        <div className="sm:col-span-2">
                                                            <div className="space-y-4">
                                                                <div className="text-lg leading-6 font-medium space-y-1">
                                                                    <h3>Leslie Alexander</h3>
                                                                    <p className="text-primary-600">
                                                                        Co-Founder / CEO
                                                                    </p>
                                                                </div>
                                                                <div className="text-lg">
                                                                    <p className="text-gray-500">
                                                                        Ultricies massa malesuada
                                                                        viverra cras lobortis.
                                                                        Tempor orci hac ligula
                                                                        dapibus mauris sit ut eu.
                                                                        Eget turpis urna maecenas
                                                                        cras. Nisl dictum.
                                                                    </p>
                                                                </div>
                                                                <ul className="flex space-x-5">
                                                                    <li>
                                                                        <a
                                                                            href="#"
                                                                            className="text-gray-400 hover:text-gray-500">
                                                                            <span className="sr-only">
                                                                                Twitter
                                                                            </span>
                                                                            <svg
                                                                                className="w-5 h-5"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 20 20"
                                                                                aria-hidden="true">
                                                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                                            </svg>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="#"
                                                                            className="text-gray-400 hover:text-gray-500">
                                                                            <span className="sr-only">
                                                                                LinkedIn
                                                                            </span>
                                                                            <svg
                                                                                className="w-5 h-5"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 20 20"
                                                                                aria-hidden="true">
                                                                                <path
                                                                                    fillRule="evenodd"
                                                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                                                    clipRule="evenodd"
                                                                                />
                                                                            </svg>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
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

export default About;
