import About from "../../components/About/About";
import PortfolioList from "../../components/PortfolioList/PortfolioList";

const Home = () => {
    return (
        <main id="container" className="mainPage">
            {/* about */}
            <About />
            {/* portfolio */}
            <article className="portfolio">
                <h2 className="section__title">portfolio</h2>
                <PortfolioList />
            </article>
        </main>
    );
};

export default Home;
