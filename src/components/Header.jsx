/*header sect*/
function Header({ thisPage, nextPageHandling }) {
    return (
    <div>
    <h1>jdgarwood</h1>
    <u1 className="nav nav-tabs">
        <li className="nav-item">
            <a
                href="#aboutme"
                onClick={() => nextPageHandling('AboutMe')}
                className={thisPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                id = {thisPage === 'AboutMe' ? 'Navbar_further_styling' : ''}
            >
            About Me
            </a>
        </li>
        <li className="nav-item">
            <a
                href="#portfolio"
                onClick={() => nextPageHandling('Portfolio')}
                className={thisPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                id = {thisPage === 'Portfolio' ? 'Navbar_further_styling' : ''}
            >
            Portfolio
            </a>
        </li>
        <li className="nav-item">
            <a
                href="#resume"
                onClick={() => nextPageHandling('Resume')}
                className={thisPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                id = {thisPage === 'Resume' ? 'Navbar_further_styling' : ''}
            >
            Resume
            </a>
        </li>
        <li className="nav-item">
            <a
                href="#contactme"
                onClick={() => nextPageHandling('ContactMe')}
                className={thisPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
                id = {thisPage === 'ContactMe' ? 'Navbar_further_styling' : ''}
            >
            Contact Me
            </a>
        </li>
    </u1>
    </div>
    );
}

export default Header;