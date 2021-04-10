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
            <main>
                {children}
                <Footer />
            </main>
        </>
    );
};

export default Layout;
