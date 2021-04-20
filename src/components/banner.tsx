import { Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const Banner = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const router = useRouter();
    const [isClose, setIsClose] = useState(true);
    return (
        <div className="relative bg-primary-600">
            <Transition
                appear={true}
                show={isClose}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    <div className="pr-16 sm:text-center sm:px-16">
                        <p className="font-medium text-white">
                            <span className="md:hidden">Портал працює в тестовому режимі.</span>
                            <span className="hidden md:inline">
                                Портал працює в тестовому режимі. Якщо ви маєте зауваження або
                                пропозиції, будь ласка,
                            </span>
                            <span className="block sm:ml-2 sm:inline-block">
                                <a href="/contact" className="text-white font-bold underline">
                                    {' '}
                                    напишіть нам <span aria-hidden="true">&rarr;</span>
                                </a>
                            </span>
                        </p>
                    </div>
                    <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
                        <button
                            onClick={() => setIsClose(!isClose)}
                            type="button"
                            className="flex p-2 rounded-md hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-white">
                            <span className="sr-only">Dismiss</span>
                            <svg
                                className="h-6 w-6 text-white"
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
            </Transition>
        </div>
    );
};
export default Banner;
