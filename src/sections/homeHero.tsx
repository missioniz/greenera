import { useRouter } from 'next/router';

export const HomeHero = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const router = useRouter();
    return (
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

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Data to enrich your</span>
                                <span className="block text-indigo-600 xl:inline">
                                    online business
                                </span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                                fugiat aliqua.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                                    <div className="sm:flex">
                                        <div className="min-w-0 flex-1">
                                            <label htmlFor="email" className="sr-only">
                                                Email address
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                className="block w-full px-4 py-3 rounded-md border border-primary-300 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 focus:ring-offset-primary-900"></input>
                                        </div>
                                        <div className="mt-3 sm:mt-0 sm:ml-3">
                                            <button
                                                type="submit"
                                                className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 focus:ring-offset-primary-900">
                                                free trial
                                            </button>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                                        Start your free 14-day trial, no credit card necessary. By
                                        providing your email, you agree to our
                                        <a href="/#" className="font-medium text-white">
                                            terms or service
                                        </a>
                                        .
                                    </p>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixqx=ghr3qnI88h&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    alt=""></img>
            </div>
        </div>
    );
};

export default HomeHero;
