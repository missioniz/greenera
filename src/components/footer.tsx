import Link from 'next/link';
import { useRouter } from 'next/router';
export const Footer = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const router = useRouter();
    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div className="px-5 py-2">
                        <a href="/about" className="text-base text-gray-500 hover:text-gray-900">
                            Загальна інформація
                        </a>
                    </div>

                    <div className="px-5 py-2">
                        <a href="/green-building" className="text-base text-gray-500 hover:text-gray-900">
                            Зелене будівництво
                        </a>
                    </div>

                    <div className="px-5 py-2">
                        <a href="/#" className="text-base text-gray-500 hover:text-gray-900">
                            Нормативи
                        </a>
                    </div>

                    <div className="px-5 py-2">
                        <a href="/#" className="text-base text-gray-500 hover:text-gray-900">
                            Інновації
                        </a>
                    </div>

                    <div className="px-5 py-2">
                        <Link href={'/blog'}>
                            <a className="text-base text-gray-500 hover:text-gray-900">
                                Блог
                            </a>
                        </Link>
                    </div>

                    <div className="px-5 py-2">
                        <Link href={'/contact'}>
                            <a className="text-base text-gray-500 hover:text-gray-900">
                                Контакти
                            </a>
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
                    Розробник порталу -{' '}
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
                    <Link href={'https://creativecommons.org/licenses/by/4.0/deed.uk'}><a
                            className="text-sm text-gray-500 hover:text-gray-900"
                            target={'_blank'}
                            rel="noreferrer">
                            {' '}
                            Creative Commons Attribution 4.0 International license
                        </a>
                    </Link>
                    , якщо не зазначено інше.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
