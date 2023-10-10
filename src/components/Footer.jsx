function Footer() {
    return (
        <div>
        <div id="filler" className="row"></div>
        <div id="pageFeet" className="row justify-content-center">
            <div className="col-6">
                <div className="row justify-content-center text-center ">
                    <div id="foot-col" className="col-6 col-md-3 col-lg-2 text-center align-items-center">
                        <a id="foot-link" href="https://github.com/J-D-garwood">
                            <img id="foot-link-svg" src="..\..\assets\github-mark.svg" height="50" width="50"></img>
                        </a>
                    </div>
                    <div id="foot-col" className="col-6 col-md-3 col-lg-2 text-center align-items-center">
                        <a id="foot-link" href="https://www.linkedin.com/in/james-g-16412624b/">
                            <img id="foot-link-svg" src="..\..\assets\LinkedIn_icon_circle.svg" height="50" width="50"></img>
                        </a>
                    </div>
                    <div id="foot-col" className="col-6 col-md-3 col-lg-2 text-center align-items-center">
                        <a id="foot-link" href="https://j-d-garwood.github.io/ComingSoon/">
                            <img id="foot-link-svg" src="..\..\assets\OFIcon.svg" height="50" width="50"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Footer;