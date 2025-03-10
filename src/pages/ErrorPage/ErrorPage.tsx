import { useRouteError } from "react-router-dom";
import BackBtn from "../../components/BackBtn/BackBtn";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div id="wrap">
            <Header />
            <main id="container" className="errorPage">
                <p className="errorPage__text">
                    ⚠️ {error instanceof Error && error.message}
                </p>
                <BackBtn isBack={false} text="메인으로 돌아가기" />
            </main>
            <Footer />
        </div>
    );
};

export default ErrorPage;
