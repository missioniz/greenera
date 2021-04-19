import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { useRef, useState } from 'react';

import Layout from '../components/layout';

export const siteTitle = 'GreenEra';

export const Home = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = useTranslation();

    // 1. Create a reference to the input so we can fetch/clear it's value.
    const inputEl = useRef(null);
    // 2. Hold a message in state to handle the response from our API.
    const [message, setMessage] = useState('');

    const subscribe = async (e) => {
        e.preventDefault();

        // 3. Send a request to our API with the user's email address.
        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: inputEl.current.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const { error } = await res.json();

        if (error) {
            // 4. If there was an error, update the message in state.
            setMessage('Ви вже підписані на нашу розсилку!');

            return;
        }

        // 5. Clear the input value and show a success message.
        inputEl.current.value = '';
        setMessage('Успішно! 🎉 Тепер ви підписалися на розсилку новин.');
    };

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
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
                                    <span className="block xl:inline">
                                        Освітньо-інформаційна платформа
                                    </span>
                                    <span className="block text-primary-600 xl:inline">
                                        {' '}
                                        GreenEra
                                    </span>
                                </h1>
                                <p className="mt-3 text-lg text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    просуває інноваційні політичні рішення, які спрямовують нас на
                                    більш чистий, безпечний та стійкий енергетичний шлях.
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
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-20 xl:py-28 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img
                                className="h-12"
                                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                                alt="Tuple"></img>
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img
                                className="h-12"
                                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                                alt="Mirage"></img>
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img
                                className="h-12"
                                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                alt="StaticKit"></img>
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                            <img
                                className="h-12"
                                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                alt="Transistor"></img>
                        </div>
                        <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                            <img
                                className="h-12"
                                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                alt="Workcation"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-white overflow-hidden">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="max-w-max lg:max-w-7xl mx-auto">
                        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                            <div className="text-base max-w-prose lg:max-w-none">
                                <h2 className="leading-6 text-primary-600 font-semibold tracking-wide uppercase">
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
                                    <div className="prose prose-primary prose-lg text-gray-500 lg:max-w-none">
                                        <p>
                                            Ultrices ultricies a in odio consequat egestas rutrum.
                                            Ut vitae aliquam in ipsum. Duis nullam placerat cursus
                                            risus ultrices nisi, vitae tellus in. Qui non fugiat aut
                                            minus aut rerum. Perspiciatis iusto mollitia iste minima
                                            soluta id.
                                        </p>
                                        <p>
                                            Erat pellentesque dictumst ligula porttitor risus eget
                                            et eget. Ultricies tellus felis id dignissim eget. Est
                                            augue <a href="/#">maecenas</a> risus nulla ultrices
                                            congue nunc tortor. Eu leo risus porta integer
                                            suspendisse sed sit ligula elit.
                                        </p>
                                        <ol>
                                            <li>
                                                Integer varius imperdiet sed interdum felis cras in
                                                nec nunc.
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
                                            Erat pellentesque dictumst ligula porttitor risus eget
                                            et eget. Ultricies tellus felis id dignissim eget. Est
                                            augue maecenas risus nulla ultrices congue nunc tortor.
                                        </p>
                                        <p>
                                            Eu leo risus porta integer suspendisse sed sit elit.
                                            Elit egestas lacinia sagittis pellentesque neque
                                            dignissim vulputate sodales. Diam sed mauris felis
                                            risus, ultricies mauris netus tincidunt. Mauris sit eu
                                            ac tellus nibh non eget sed accumsan. Viverra ac sed
                                            venenatis pulvinar elit. Cras diam quis tincidunt
                                            lectus. Non mi vitae, scelerisque felis nisi, netus amet
                                            nisl.
                                        </p>
                                        <p>
                                            Eu eu mauris bibendum scelerisque adipiscing et. Justo,
                                            elementum consectetur morbi eros, posuere ipsum tortor.
                                            Eget cursus massa sed velit feugiat sed ut. Faucibus
                                            eros mauris morbi aliquam nullam. Scelerisque elementum
                                            sit magna ullamcorper dignissim pretium.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white pt-16 lg:py-24">
                <div className="pb-16 bg-primary-600 lg:pb-0 lg:z-10 lg:relative">
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="relative lg:-my-8">
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                            />
                            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                                <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                    <img
                                        className="object-cover lg:h-full lg:w-full"
                                        src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixqx=ghr3qnI88h&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                                        alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                                <blockquote>
                                    <div>
                                        <svg
                                            className="h-12 w-12 text-white opacity-25"
                                            fill="currentColor"
                                            viewBox="0 0 32 32"
                                            aria-hidden="true">
                                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                        </svg>
                                        <p className="mt-6 text-2xl font-medium text-white">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Sed urna nulla vitae laoreet augue. Amet feugiat est
                                            integer dolor auctor adipiscing nunc urna, sit.
                                        </p>
                                    </div>
                                    <footer className="mt-6">
                                        <p className="text-base font-medium text-white">
                                            Judith Black
                                        </p>
                                        <p className="text-base font-medium text-indigo-100">
                                            CEO at PureInsights
                                        </p>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center">
                    <div className="lg:w-0 lg:flex-1">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Підпишіться на нашу розсилку новин
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            Будьте у курсі останніх новин GreenEra. Дізнавайтеся про наші найближчі
                            події, новини та інші цікавинки.
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:ml-8">
                        <form onSubmit={subscribe} className="sm:flex">
                            <label htmlFor="email-input" className="sr-only">
                                {'Email Address'}
                            </label>
                            <input
                                id="email-input"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                ref={inputEl}
                                className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs rounded-md"
                                placeholder="Електронна адреса"></input>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                                    {message ? 'Відправлено' : 'Надіслати'}
                                </button>
                            </div>
                        </form>
                        <p className="mt-3 text-sm text-gray-500">
                            {message
                                ? message
                                : `Ми надсилатимемо електронні листи лише тоді, коли буде опубліковано новий вміст.`}
                        </p>
                        <p className="mt-3 text-sm text-gray-500">
                            Ми дбаємо про захист ваших даних. Прочитайте нашу{' '}
                            <a
                                href="/privacy"
                                className="text-sm text-gray-500 hover:text-gray-900 underline">
                                Політику конфіденційності.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
