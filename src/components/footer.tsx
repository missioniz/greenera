import Link from 'next/link';

const Vercel = ({ height = 18 }) => (
    <svg height={height} viewBox="0 0 283 64" fill="none">
        <path
            fill="currentColor"
            d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
        />
    </svg>
);

export const Footer = (): JSX.Element => {
    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div className="px-5 py-2">
                        <Link href={'/about'}>
                            <a className="text-base text-gray-500 hover:text-gray-900">
                                Загальна інформація
                            </a>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href={'/greenbuilding'}>
                            <a className="text-base text-gray-500 hover:text-gray-900">
                                Зелене будівництво
                            </a>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href={'/standards'}>
                            <a className="text-base text-gray-500 hover:text-gray-900">Нормативи</a>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href={'/maps'}>
                            <a className="text-base text-gray-500 hover:text-gray-900">
                                Інтерактивні карти
                            </a>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href={'/sources'}>
                            <a className="text-base text-gray-500 hover:text-gray-900">Джерела</a>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href={'/contact'}>
                            <a className="text-base text-gray-500 hover:text-gray-900">Контакти</a>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href={'/privacy'}>
                            <a className="text-base text-gray-500 hover:text-gray-900">
                                Політика конфіденційності
                            </a>
                        </Link>
                    </div>
                </nav>
                <p className="mt-8 text-center text-base text-gray-400">
                    2021 GreenEra{' '}
                    <a
                        className="text-base text-gray-500 hover:text-gray-900"
                        href={'https://github.com/missioniz/greenera/blob/master/LICENSE'}
                        target={'_blank'}
                        rel="noreferrer">
                        Open Access
                    </a>{' '}
                    Project. doi:{' '}
                    <a
                        className="text-base text-gray-500 hover:text-gray-900"
                        href={'https://doi.org/10.5281/zenodo.4673541'}
                        target={'_blank'}
                        rel="noreferrer">
                        10.5281/zenodo.4673541
                    </a>{' '}
                    Розробник -{' '}
                    <a
                        className="text-base text-gray-500 hover:text-gray-900"
                        href={'https://www.missioniz.com'}
                        target={'_blank'}
                        rel="noreferrer">
                        missionIZ
                    </a>
                </p>
                <p className="mt-2 text-center text-sm text-gray-400">
                    Весь контент доступний за ліцензією
                    <Link href={'https://creativecommons.org/licenses/by/4.0/deed.uk'}>
                        <a
                            className="text-sm text-gray-500 hover:text-gray-900"
                            target={'_blank'}
                            rel="noreferrer">
                            {' '}
                            Creative Commons Attribution 4.0 International license
                        </a>
                    </Link>
                    , якщо не зазначено інше. Усі торгові марки та логотипи є власністю відповідних
                    власників і використовуються на цьому веб-сайті лише для ідентифікації. Проект
                    реалізується за допомогою{' '}
                    <Link href={'http://www.knuba.edu.ua'}>
                        <a className={'text-gray-500'} target={'_blank'} rel={'noreferrer'}>
                            Київського Національного Університету Будівництва та Архітектури
                        </a>
                    </Link>
                </p>
                <div className="text-gray-700 text-sm grid justify-items-end mt-2">
                    <Link href={'https://vercel.com?utm_source=uaecs&utm_campaign=oss'}>
                        <a className={'text-gray-500'} target={'_blank'} rel={'noreferrer'}>
                            <span className="mr-1">Powered by</span>
                            <span>
                                <Vercel />
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
