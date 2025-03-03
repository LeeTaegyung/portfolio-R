import { Link, useLocation } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { PortfolioDetailType, PortfolioItemType } from "../../types/type";
import ViewCode from "../../components/ViewCode/ViewCode";
import MarkText from "../../components/MarkText/MarkText";

const DetailItem = ({ data }: { data: PortfolioDetailType }) => {
    const { subTitle, type, description } = data;

    return (
        <div className="project__detail">
            {/* subTitle */}
            {subTitle && (
                <h3 className="project__detail-subTitle">{subTitle}</h3>
            )}
            {/* content */}
            <div className={"project__detail-content"}>
                {/* left */}
                <div className="project__detail-left">
                    {type === "CODE" ? (
                        <ViewCode codeString={data.code} />
                    ) : (
                        <figure className="project__detail-image">
                            <img src={data.imgUrl} alt="" />
                        </figure>
                    )}
                </div>
                {/* right */}
                <div className="project__detail-right">
                    {/* description */}
                    {description.split("\n").map((text, index) => (
                        <p key={index} className="project__detail-desc">
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Detail = () => {
    const location = useLocation();
    const {
        name,
        date,
        contribution,
        links,
        skills,
        detail,
    }: PortfolioItemType = location.state.data;

    return (
        <main id="container" className="detailPage">
            <div className="inner">
                {/* detailPage__header */}
                <div className="detailPage__header">
                    {/* 프로젝트 이름 */}
                    <h2 className="project__name">
                        {<MarkText text={name} />}
                    </h2>
                    <div className="project__info">
                        {/* 작업 기간 */}
                        <dl className="project__infoData">
                            <dt>작업 기간</dt>
                            <dd>{date}</dd>
                        </dl>

                        {/* 기여도 */}
                        <dl className="project__infoData">
                            <dt>기여도</dt>
                            <dd>
                                {contribution.map((text, index) => (
                                    <span key={index}>
                                        {text.text} {text.percent + "%"}
                                    </span>
                                ))}
                            </dd>
                        </dl>

                        {/* 스킬 */}
                        {skills && (
                            <dl className="project__infoData block">
                                <dt>스킬</dt>
                                <dd>
                                    <div className="project__infoData-skillList">
                                        {skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="skillList__skillItem"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </dd>
                            </dl>
                        )}

                        {/* 링크 */}
                        {links && (
                            <dl className="project__infoData block">
                                <dt>링크</dt>
                                <dd>
                                    <div className="project__infoData-linkList">
                                        {links.map((link, index) => (
                                            <Link
                                                key={index}
                                                to={link.url}
                                                className="linkList__linkItem"
                                                target="_blank"
                                            >
                                                <FaLink />
                                                {link.text}
                                            </Link>
                                        ))}
                                    </div>
                                </dd>
                            </dl>
                        )}
                    </div>
                </div>
                {/* detailPage__body */}
                <div className="detailPage__body">
                    {detail.map((cont, index) => (
                        <DetailItem data={cont} key={index} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Detail;
