import { Link } from "react-router-dom";
import portfolioData from "../../data/portfolioData";
import classNames from "classnames";
import { PortfolioItemType, PortfolioListType } from "../../types/type";
import { useCallback, useEffect, useState } from "react";

const filterData: string[] = ["All", "퍼블리셔", "프론트엔드"];

const PortfolioItem = ({
    data,
    index,
    depth,
}: {
    data: PortfolioItemType;
    index: number;
    depth: string;
}) => {
    const { thumbnail, name, job } = data;
    return (
        <li className="portfolio__item">
            <Link to={`/detail/${encodeURI(depth)}/${index}`}>
                <figure className="portfolio__item-images">
                    <img src={thumbnail} alt="게임24시 썸네일" />
                </figure>
                <strong className="portfolio__item-name">{name}</strong>
                <span className="portfolio__item-job">{job}</span>
            </Link>
        </li>
    );
};

const PortfolioList = () => {
    const [filter, setFilter] = useState("All");
    const [filterPortfolio, setFilterPortfolio] = useState<PortfolioListType[]>(
        []
    );

    // 포트폴리오 리스트 필터링
    const getFilterPortfolio = useCallback(() => {
        if (filter === "All") return portfolioData;

        return portfolioData.map((item) => {
            return {
                ...item,
                projects: item.projects.filter(
                    (project) => project.job === filter
                ),
            };
        });
    }, [filter]);

    useEffect(() => {
        const data = getFilterPortfolio();
        setFilterPortfolio(data);
    }, [filter, getFilterPortfolio]);

    return (
        <>
            <div className="portfolio__main">
                <ul className="portfolioMain__filter">
                    {filterData.map((text, idx) => (
                        <li key={idx}>
                            <button
                                className={classNames(
                                    "portfolioMain__filter-btn",
                                    { active: filter === text }
                                )}
                                onClick={() => {
                                    setFilter(text);
                                }}
                            >
                                {text}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="portfolioMain__content">
                    {filterPortfolio.map((item, parentIndex) => {
                        return (
                            <div
                                className="portfolioMain__listBox"
                                key={parentIndex}
                            >
                                <h3 className="portfolioMain__listBox-company">
                                    {item.company}
                                </h3>
                                <ul className="portfolioMain__listBox-list">
                                    {item.projects.map(
                                        (data, childrenIndex) => (
                                            <PortfolioItem
                                                key={childrenIndex}
                                                data={data}
                                                depth={item.company}
                                                index={childrenIndex}
                                            />
                                        )
                                    )}
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
