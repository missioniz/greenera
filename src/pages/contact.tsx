import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

import Layout from '../components/layout';
export const siteTitle = 'GreenEra | Контакти';

export const Contact = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = useTranslation();
    return (
        <Layout contact>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="relative bg-white">
                <div className="lg:absolute lg:inset-0">
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img
                            className="h-56 w-full object-cover lg:absolute lg:h-full"
                            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixqx=ghr3qnI88h&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                            alt=""></img>
                    </div>
                </div>
                <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
                    <div className="lg:pr-8">
                        <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                Зворотній зв&#39;язок
                            </h2>
                            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                                Ви можете запитати консультації, домовитися про зустріч з нами або задати нам будь-яке Ваше запитання.
                                Ми будемо раді відповісти найближчим часом.
                            </p>
                            <form
                                action="#"
                                method="POST"
                                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                <div>
                                    <label
                                        form="first_name"
                                        className="block text-sm font-medium text-gray-700">
                                        Им'я
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            autoComplete="given-name"
                                            className="block w-full shadow-sm sm:text-sm focus:ring-primary-600 focus:border-primary-600 border-gray-300 rounded-md"></input>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        form="last_name"
                                        className="block text-sm font-medium text-gray-700">
                                        Прізвище
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            autoComplete="family-name"
                                            className="block w-full shadow-sm sm:text-sm focus:ring-primary-600 focus:border-primary-600 border-gray-300 rounded-md"></input>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        form="email"
                                        className="block text-sm font-medium text-gray-700">
                                        Електронна адреса
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full shadow-sm sm:text-sm focus:ring-primary-600 focus:border-primary-600 border-gray-300 rounded-md"></input>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        form="company"
                                        className="block text-sm font-medium text-gray-700">
                                        Назва компанії
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            autoComplete="organization"
                                            className="block w-full shadow-sm sm:text-sm focus:ring-primary-600 focus:border-primary-600 border-gray-300 rounded-md"></input>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label
                                            form="phone"
                                            className="block text-sm font-medium text-gray-700">
                                            Телефон
                                        </label>
                                        <span
                                            id="phone_description"
                                            className="text-sm text-gray-500">
                                            Optional
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            aria-describedby="phone_description"
                                            className="block w-full shadow-sm sm:text-sm focus:ring-primary-600 focus:border-primary-600 border-gray-300 rounded-md"></input>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label
                                            form="how_can_we_help"
                                            className="block text-sm font-medium text-gray-700">
                                            Текст повідомлення
                                        </label>
                                        <span
                                            id="how_can_we_help_description"
                                            className="text-sm text-gray-500">
                                            Max. 500 characters
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <textarea
                                            id="how_can_we_help"
                                            name="how_can_we_help"
                                            aria-describedby="how_can_we_help_description"
                                            rows={4}
                                            className="block w-full shadow-sm sm:text-sm focus:ring-primary-600 focus:border-primary-600 border-gray-300 rounded-md"></textarea>
                                    </div>
                                </div>
                                <div className="text-right sm:col-span-2">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600">
                                        Надіслати
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
