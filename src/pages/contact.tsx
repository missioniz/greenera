import Head from 'next/head';
import React, { useState } from 'react';

import Layout from '../components/layout';
export const siteTitle = 'GreenEra | Контакти';

export const Contact = (): JSX.Element => {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });

    const [inputs, setInputs] = useState({
        email: '',
        message: '',
        firstName: '',
        lastName: '',
        companyName: '',
        phone: ''
    });

    const handleResponse = (status, msg) => {
        {
            /*FIXME: Warning:(23, 29) 'status' is already declared in the upper scope.*/
        }
        if (status === 200) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg }
            });
            setInputs({
                email: '',
                message: '',
                firstName: '',
                lastName: '',
                companyName: '',
                phone: ''
            });
        } else {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: msg }
            });
        }
    };

    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        const res = await fetch('/api/sendgrid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        });
        const text = await res.text();
        handleResponse(res.status, text);
    };

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
                            alt=""
                        />
                    </div>
                </div>
                <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
                    <div className="lg:pr-8">
                        <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                Зворотній зв&#39;язок
                            </h2>
                            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                                Ви можете запитати консультації, домовитися про зустріч з нами або
                                задати нам будь-яке Ваше запитання. Ми будемо раді відповісти
                                найближчим часом.
                            </p>
                            <form
                                onSubmit={handleOnSubmit}
                                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-medium text-gray-700">
                                        Им&#39;я
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            onChange={handleOnChange}
                                            value={inputs.firstName}
                                            required
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            autoComplete="given-name"
                                            className="block w-full shadow-sm sm:text-sm focus:ring-primary-600 focus:border-primary-600 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm font-medium text-gray-700">
                                        Прізвище
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            onChange={handleOnChange}
                                            value={inputs.lastName}
                                            required
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            autoComplete="family-name"
                                            className="block w-full shadow-sm sm:text-sm focus:ring-primary-600 focus:border-primary-600 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700">
                                        Електронна адреса
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            onChange={handleOnChange}
                                            value={inputs.email}
                                            required
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full shadow-sm sm:text-sm focus:ring-primary-600 focus:border-primary-600 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label
                                            htmlFor="companyName"
                                            className="block text-sm font-medium text-gray-700">
                                            Назва компанії
                                        </label>
                                        <span
                                            id="companyName_description"
                                            className="text-sm text-gray-500">
                                            Необов&#39;язково
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            onChange={handleOnChange}
                                            value={inputs.companyName}
                                            type="text"
                                            name="companyName"
                                            id="companyName"
                                            autoComplete="organization"
                                            className="block w-full shadow-sm sm:text-sm focus:ring-primary-600 focus:border-primary-600 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-700">
                                            Телефон
                                        </label>
                                        <span
                                            id="phone_description"
                                            className="text-sm text-gray-500">
                                            Необов&#39;язково
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            onChange={handleOnChange}
                                            value={inputs.phone}
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            aria-describedby="phone_description"
                                            className="block w-full shadow-sm sm:text-sm focus:ring-primary-600 focus:border-primary-600 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700">
                                            Текст повідомлення
                                        </label>
                                        <span
                                            id="how_can_we_help_description"
                                            className="text-sm text-gray-500">
                                            Максимум 500 символів
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <textarea
                                            onChange={handleOnChange}
                                            required
                                            value={inputs.message}
                                            id="message"
                                            name="message"
                                            aria-describedby="how_can_we_help_description"
                                            rows={4}
                                            className="block w-full shadow-sm sm:text-sm focus:ring-primary-600 focus:border-primary-600 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="text-right sm:col-span-2">
                                    <button
                                        type="submit"
                                        disabled={status.submitting}
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600">
                                        {!status.submitting
                                            ? !status.submitted
                                                ? 'Надіслати'
                                                : 'Відправлено'
                                            : 'Submitting...'}
                                    </button>
                                </div>
                            </form>
                            <span className="text-red-800 text-base">
                                {status.info.error && (
                                    <div className="error">Error: {status.info.msg}</div>
                                )}
                            </span>
                            <span className="text-green-800 text-base">
                                {!status.info.error && status.info.msg && (
                                    <div className="success">{status.info.msg}</div>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
