import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <h1 className="logo">
                <Link to="/" className="word">
                    <span className="word__top">
                        <span className="letter first">t</span>
                        <span className="word__in">
                            <span className="letter">a</span>
                            <span className="letter">e</span>
                            <span className="letter">g</span>
                            <span className="letter">y</span>
                            <span className="letter">u</span>
                            <span className="letter">n</span>
                            <span className="letter">g</span>
                        </span>
                    </span>
                    {/* <span className="word__bottom">portfolio</span> */}
                </Link>
            </h1>
        </header>
    );
};

export default Header;
