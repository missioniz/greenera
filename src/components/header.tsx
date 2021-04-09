import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const Header = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header>
            <div className="relative bg-white">
                <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href={'/#'}>
                            <a>
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-10 w-auto sm:h-14"
                                    src="https://greenera.s3.amazonaws.com/LOGO_ai_rgb.svg"
                                    alt="logo GreenEra"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            aria-expanded="false">
                            <span className="sr-only">Open menu</span>
                            {/*<!-- Heroicon name: outline/menu -->*/}
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        <a
                            href="/#"
                            className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Загальна інформація
                        </a>
                        <a
                            href="/#"
                            className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Зелене Будівництво
                        </a>
                        <a
                            href="/#"
                            className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Нормативи
                        </a>
                        <a
                            href="/#"
                            className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Інновації
                        </a>
                        <Link href={'/contact'}>
                            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Контакти
                            </a>
                        </Link>
                    </nav>
                    {/*<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>*/}
                </div>

                {/*<!--
                  Mobile menu, show/hide based on mobile menu state.

                  Entering: "duration-200 ease-out"
                    From: "opacity-0 scale-95"
                    To: "opacity-100 scale-100"
                  Leaving: "duration-100 ease-in"
                    From: "opacity-100 scale-100"
                    To: "opacity-0 scale-95"
                -->*/}
                <Transition
                    show={isOpen}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95">
                    <div className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-12 w-auto"
                                            src="https://greenera.s3.amazonaws.com/LOGO_ai_rgb.svg"
                                            alt="logo GreenEra"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            {/*<!-- Heroicon name: outline/x -->*/}
                                            <svg
                                                className="h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 px-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <a
                                        href="/#"
                                        className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Загальна інформація
                                    </a>
                                    <a
                                        href="/#"
                                        className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Зелене Будівництво
                                    </a>
                                    <a
                                        href="/#"
                                        className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Нормативи
                                    </a>

                                    <a
                                        href="/#"
                                        className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Інновації
                                    </a>

                                    <a
                                        href="/#"
                                        className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Контакти
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </header>
    );
};
export default Header;
