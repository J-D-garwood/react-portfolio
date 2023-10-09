function NavTabs({ thisPage, nextPageHandling }) {
    return (
    <u1 className="nav nav-tabs">
        <li className="nav-item">
            <a
                href="#aboutme"
                onClick={() => nextPageHandling('AboutMe')}
                className={thisPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
            >
            About Me
            </a>
        </li>
        <li className="nav-item">
            <a
                href="#portfolio"
                onClick={() => nextPageHandling('Portfolio')}
                className={thisPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
            Portfolio
            </a>
        </li>
        <li className="nav-item">
            <a
                href="#resume"
                onClick={() => nextPageHandling('Resume')}
                className={thisPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
            Resume
            </a>
        </li>
        <li className="nav-item">
            <a
                href="#contactme"
                onClick={() => nextPageHandling('ContactMe')}
                className={thisPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
            >
            Contact Me
            </a>
        </li>
    </u1>
    );
}

export default NavTabs;