import { Link, useParams } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import {
    CodeType,
    ImageDescType,
    OnlyImagesType,
    PortfolioDetailType,
    PortfolioItemType,
} from "../../types/type";
import ViewCode from "../../components/ViewCode/ViewCode";
import MarkText from "../../components/MarkText/MarkText";
import { useEffect, useRef, useState } from "react";
import portfolioData from "../../data/portfolioData";
import BackBtn from "../../components/BackBtn/BackBtn";
import Loading from "../../components/Loading/Loading";

const isCodeType = (data: PortfolioDetailType): data is CodeType =>
    data.detailType === "CODE";
const isDescType = (data: PortfolioDetailType): data is ImageDescType =>
    data.detailType === "DESC";
const isOnlyImagesType = (data: PortfolioDetailType): data is OnlyImagesType =>
    data.detailType === "IMG";

const DetailContent = ({ data }: { data: PortfolioDetailType }) => {
    // 코드타입
    if (isCodeType(data)) {
        return (
            <>
                <div className="project__detail-top">
                    <div className="project__detail-top">
                        <ViewCode codeString={data.code} />
                    </div>
                </div>
                <div className="project__detail-bottom">
                    {<DetailDescList list={data.text} />}
                    {data.subLink && (
                        <Link
                            to={data.subLink.url}
                            className="linkItem"
                            target="_blank"
                        >
                            <FaLink />
                            {data.subLink.text}
                        </Link>
                    )}
                </div>
            </>
        );
    }

    // 이미지+설명 타입
    if (isDescType(data)) {
        // 이미지가 긴 이미지일때 설명을 위로
        if (data.imgSize === "long") {
            return (
                <>
                    <div className="project__detail-top">
                        {<DetailDescList list={data.text} />}
                        {data.subLink && (
                            <Link
                                to={data.subLink.url}
                                className="linkItem"
                                target="_blank"
                            >
                                <FaLink />
                                {data.subLink.text}
                            </Link>
                        )}
                    </div>
                    <div className="project__detail-bottom">
                        <figure className="project__detail-image">
                            <img src={data.img} alt="" />
                        </figure>
                    </div>
                </>
            );
        }
        return (
            <>
                <div className="project__detail-top">
                    <figure className="project__detail-image">
                        <img src={data.img} alt="" />
                    </figure>
                </div>
                <div className="project__detail-bottom">
                    {<DetailDescList list={data.text} />}
                    {data.subLink && (
                        <Link
                            to={data.subLink.url}
                            className="linkItem"
                            target="_blank"
                        >
                            <FaLink />
                            {data.subLink.text}
                        </Link>
                    )}
                </div>
            </>
        );
    }

    // 이미지만 타입
    if (isOnlyImagesType(data)) {
        return (
            <>
                {data.imgUrls.map((img, index) => (
                    <figure key={index} className="project__detail-image">
                        <img src={img} alt="" />
                    </figure>
                ))}
            </>
        );
    }

    return null;
};

const DetailDescList = ({ list }: { list: string[] }) => {
    return (
        <ul className="detailPage__descList">
            {list.map((data, index) => (
                <li key={index}>{data}</li>
            ))}
        </ul>
    );
};

const DetailItem = ({ data }: { data: PortfolioDetailType }) => {
    const { subTitle } = data;

    return (
        <div className="project__detail">
            {subTitle && (
                <h3 className="project__detail-subTitle">{subTitle}</h3>
            )}

            {/* content */}
            <div className={"project__detail-content"}>
                <DetailContent data={data} />
            </div>
        </div>
    );
};

const Detail = () => {
    const { depth, index } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const findDepth = portfolioData.find((el) => el.company === depth);
    const findDetail = findDepth?.projects[Number(index)];
    const ImagesRef = useRef<HTMLElement>(null);

    useEffect(() => {
        window.scrollTo({ top: 0 });

        // 이미지 로딩 완료 확인
        const imagesAll = ImagesRef.current?.querySelectorAll("img");
        if (imagesAll?.length) {
            imagesAll[0].addEventListener(
                "load",
                () => {
                    setIsLoading(true);
                },
                { once: true }
            );
        } else {
            setIsLoading(true);
        }
    }, []);

    if (!findDepth || !findDetail) {
        throw Error("데이터를 찾을 수 없습니다.");
    }

    const {
        name,
        date,
        contribution,
        projectType,
        links,
        skills,
        mainDesc,
        details,
    }: PortfolioItemType = findDetail;

    return (
        <>
            <Loading isLoading={isLoading} />
            <main id="container" className="detailPage" ref={ImagesRef}>
                <div className="inner">
                    {/* detailPage__header */}
                    <div className="detailPage__header">
                        {/* 프로젝트 이름 */}
                        <h2 className="project__name">
                            {<MarkText text={name} />}
                        </h2>
                        <div className="project__info">
                            {/* 기간 */}
                            <dl className="project__infoData">
                                <dt>기간</dt>
                                <dd>{date}</dd>
                            </dl>

                            {/* 기여도 */}
                            {contribution && (
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
                            )}

                            {projectType && (
                                <dl className="project__infoData">
                                    <dt>타입</dt>
                                    <dd>{projectType}</dd>
                                </dl>
                            )}

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
                                                    className="linkItem"
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

                            {/* mainDesc */}
                            {mainDesc && (
                                <div className="project__infoData block">
                                    <DetailDescList list={mainDesc} />
                                </div>
                            )}
                        </div>
                    </div>
                    {/* detailPage__body */}
                    <div className="detailPage__body">
                        {details.map((data, index) => (
                            <DetailItem data={data} key={index} />
                        ))}

                        <BackBtn text="다른 포트폴리오 보러 가기" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Detail;
