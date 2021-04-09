import Banner from './banner';
import Footer from './footer';
import HeadComponent from './head';
import Header from './header';
export const siteTitle = 'GreenEra';

export const Layout = ({
    children,
    home,
    contact
}: {
    children: React.ReactNode;
    home?: boolean;
    contact?: boolean;
}): JSX.Element => {
    return (
        <div className="bg-white">
            <HeadComponent />
            <Header />
            {!contact && <Banner />}
            <main>
                {children}
                <Footer />
            </main>
        </div>
    );
};

export default Layout;
