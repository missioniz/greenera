import Head from 'next/head';
import React from 'react';

import Layout from '../../components/layout';

export const siteTitle = 'GreenEra | Загальна інформація';

const posts = [
    {
        title: 'Зелене відновлення міст',
        href: '/greenbuilding/renewal',
        description:
            'Від будівельній галузі очікують формування нових стандартів і правил, що відповідають вимогам екобезпеки в епоху пандемічних загроз.'
    },
    {
        title: 'Технології управління будівлями',
        href: '/greenbuilding/technologies',
        description:
            'Сьогодні вже очевидно, що внаслідок пандемії COVID-19 світ змінився назавжди і всі подальші плани мають бути узгоджені з особливими вимогами та заходами по запобіганню поширенню захворювання. '
    }
];

export const GreenBuilding = (): JSX.Element => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {/*Page title*/}
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 bg-white">
                <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Технології</span>{' '}
                        <span className="block text-primary-600 xl:inline">зеленого</span>{' '}
                        <span className="block xl:inline">будівництва</span>{' '}
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        является актуальной для всех секторов городского развития и допомагає у
                        збереженні навколишнього середовища та екосистеми.
                    </p>
                </div>
            </div>

            <div className="bg-white">
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
                                <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                                    <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                                        <p>
                                            Концепція зеленого будівництва виникла у 1970-х роках як
                                            реакція на кризу у використанні природних ресурсів і
                                            зростаючу стурбованість населення погіршенням стану
                                            навколишнього середовища.
                                        </p>
                                        <p>
                                            Зелене будівництво – це сучасна практика будівництва,
                                            реконструкції та експлуатації будівель, в якій
                                            застосовуються оптимальні архітектурні рішення, передові
                                            інженерні системи та матеріали для зниження рівня
                                            споживання енергетичних і матеріальних ресурсів,
                                            підвищення якості споруд та комфорту їх внутрішнього
                                            середовища, покращення впливу будівель на стан здоров’я
                                            її користувачів з мінімізацією впливу на оточуюче
                                            середовище на всіх етапах життєвого циклу будівельних
                                            споруд.
                                        </p>
                                        <p>
                                            Застосування технологій зеленого будівництва актуально в
                                            першу чергу для таких секторів міського розвитку, як
                                            розбудова міста, земельні відносини, житлово-комунальне
                                            господарство, транспорт та міська мобільність, публічний
                                            простір, енергозбереження, управління ресурсами та
                                            поводження з відходами, охорона довкілля та екополітика.
                                        </p>
                                        <p>
                                            Стадії зелених будівельних проектів відповідають стадіям
                                            життєвого циклу міського середовища, починаючи з
                                            генерального планування та розробки загальної концепції
                                            проекту, яка повинна гармонічно інтегруватись у наявну
                                            інфраструктуру з урахуванням мінімізації негативного
                                            впливу на довкілля та потреб місцевих громад. Проектна
                                            стадія базується на інформаційних технологіях
                                            проектування (BIM).{' '}
                                        </p>
                                    </div>
                                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                                        <p>
                                            Оцінюється інклюзивний і доступний дизайн будівельних
                                            проектів та надійність будівельних конструкцій
                                            (Considerate Constructors Scheme). Розроблено окремі
                                            сертифікаційні схеми для етапів планування,
                                            проектування, будівництва і здачі в експлуатацію,
                                            експлуатаційного періоду будівлі, робіт по ремонту та
                                            реконструкції, закінчення строку служби будівлі з
                                            подальшою її рециклізацією та утилізацією. Категорія
                                            «Управління» (Management category) у сертифікаційній
                                            схемі зеленого будівництва BREEAM складається з оцінки
                                            п’яти аспектів, а саме:
                                        </p>
                                        <p>
                                            <ol>
                                                <li>
                                                    концепція завдання і проектування, що забезпечує
                                                    процес інтегрованого проектування та оптимізує
                                                    будівельні роботи;
                                                </li>
                                                <li>
                                                    попередні розрахунки витрат в ході експлуатації
                                                    та обслуговування будівель, що передбачає
                                                    збільшення прибутковості інвестицій та
                                                    забезпечує економічну ефективність;
                                                </li>
                                                <li>
                                                    відповідальні практики в будівництві, зокрема
                                                    управління будівельним майданчиком з дотриманням
                                                    вимог мінімізації впливу на довкілля та безпеки
                                                    людей;
                                                </li>
                                                <li>
                                                    введення і здача в експлуатацію об’єкту з
                                                    урахуванням потреб користувачів будівлі;
                                                </li>
                                                <li>
                                                    моніторинг після введення в експлуатацію для
                                                    підтвердження відповідності функціонування
                                                    будівля проектним завданням та вимогам.
                                                </li>
                                            </ol>
                                        </p>
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
                                Об’єктивне висвітлення зеленого будівництва
                            </h2>
                        </div>
                        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                            {posts.map((post) => (
                                <div key={post.title}>
                                    <a href={post.href} className="mt-2 block">
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
export default GreenBuilding;
