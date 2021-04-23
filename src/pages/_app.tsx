import '../styles/globalStyles/global.css';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import * as ga from '../lib/ga';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url);
        };
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange);

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return <Component {...pageProps} />;
};

export default App;
