import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Intro from "../Intro/Intro";
import { useState } from "react";

const Header = () => {
    const [isIntro, setIsIntro] = useState<boolean>(true);

    return (
        <>
            {isIntro && <Intro setIsIntro={setIsIntro} />}
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
