import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = () => {
    return (
        <>
            <header id="header">
                <h1 className="logo">
                    <Link to="/" className="word">
                        <Logo />
                    </Link>
                </h1>
            </header>
        </>
    );
};

export default Header;
