import CookieConsent from 'react-cookie-consent';

import Banner from './banner';
import Footer from './footer';
import HeadComponent from './head';
import Header from './header';

export const Layout = ({
    children,
    contact
}: {
    children: React.ReactNode;
    contact?: boolean;
}): JSX.Element => {
    return (
        <>
            <HeadComponent />
            <Header />
            {!contact && <Banner />}
            <main className="bg-white">
                {children}
                <Footer />
            </main>
            <CookieConsent
                debug={false}
                onAccept={() => {
                    alert('Дякую за розуміння!');
                }}
                location="bottom"
                buttonText="Прийняти всі куки"
                cookieName="myAwesomeCookieName2"
                style={{ background: '#2B373B' }}
                buttonStyle={{ color: '#4e503b', fontSize: '14px' }}
                expires={150}>
                <span style={{ fontSize: '14px' }}>
                    Ми використовуємо як власні кукі-файли, так і сторонні куки, аби персоналізувати
                    веб-контент, аналізувати відвідування наших веб-сайтів і адаптувати рекламу. цих
                    куків необхідні для роботи веб-сайту, а інші вимагають вашої згоди.{' '}
                </span>
            </CookieConsent>
        </>
    );
};

export default Layout;
