import careerData from "../../data/careerData";
import MarkText from "../MarkText/MarkText";

type CareerItemType = {
    name: string;
    job: string;
    category: string;
    period: string;
    position: string;
    detail: string[];
};

const CareerItem = ({
    name,
    job,
    category,
    period,
    position,
    detail,
}: CareerItemType) => {
    return (
        <li className="companyItem">
            <h3 className="companyItem__title">
                <MarkText text={name} />
                <span className="companyItem__category">{category}</span>
            </h3>
            <div className="companyItem__row">
                <span className="companyItem__job">{job}</span>
                <span className="companyItem__period">{period}</span>
            </div>
            {detail && (
                <ul className="companyItem__detail">
                    {detail.map((item, i) => (
                        <li className="companyItem__detailItem" key={i}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

const CareerList = () => {
    return (
        <ul className="career__list">
            {careerData.map((data, i) => (
                <CareerItem {...data} key={i} />
            ))}
        </ul>
    );
};

export default CareerList;
