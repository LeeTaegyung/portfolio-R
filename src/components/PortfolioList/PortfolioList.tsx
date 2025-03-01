import { Link } from "react-router-dom";
import portfolioData from "../../data/portfolioData";

const PortfolioItem = ({
    name,
    position,
    thumbnail,
}: {
    name: string;
    position: string;
    thumbnail: string;
}) => {
    return (
        <li>
            <Link to="/">
                <figure>
                    <img src={thumbnail} alt="게임24시 썸네일" />
                </figure>
                <strong className="portfolio__name">{name}</strong>
                <span className="portfolio__position">{position}</span>
            </Link>
        </li>
    );
};

const PortfolioList = () => {
    return (
        <>
            <div className="portfolio__area">
                <div className="portfolio__filter">
                    <button>All</button>
                    <button>퍼블리셔</button>
                    <button>프론트엔드</button>
                </div>
                <div className="portfolio__content">
                    {portfolioData.map((item, index) => {
                        return (
                            <div className="portfolio__listBox" key={index}>
                                <h3 className="portfolio__company">
                                    {item.company}
                                </h3>
                                <ul className="portfolio__list">
                                    {item.projects.map((item, index) => (
                                        <PortfolioItem key={index} {...item} />
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default PortfolioList;
