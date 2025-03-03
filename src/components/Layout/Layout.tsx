import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import { useState } from "react";

const Layout = () => {
    const [isIntro, setIsIntro] = useState<boolean>(() => {
        return sessionStorage.getItem("introSeen") !== "true";
    });

    return (
        <div id="wrap">
            {isIntro && <Intro setIsIntro={setIsIntro} />}
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
