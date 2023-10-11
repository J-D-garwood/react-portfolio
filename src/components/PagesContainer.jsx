import { useState } from 'react';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio'; 
import Resume from './pages/Resume';
/*pages container*/

export default function PagesContainer() {
    const [thisPage, setPage] = useState('AboutMe');

    const renderPage = () => {
        if (thisPage === "AboutMe") {
            return <AboutMe />;
        }
        if (thisPage === "ContactMe") {
            return <ContactMe />;
        }
        if (thisPage === "Portfolio") {
            return <Portfolio />;
        }
        if (thisPage === "Resume") {
            return <Resume />;
        }
        return <ContactMe />;
    };

    const nextPageHandling = (page) => setPage(page);

    return (
        <div>
            {}
            <Header thisPage={thisPage} nextPageHandling={nextPageHandling} />
            {}
            <main className="mx-3">{renderPage()}</main>
        </div>
    );
}