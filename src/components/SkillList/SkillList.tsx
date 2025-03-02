import skillData from "../../data/skillData";
import MarkText from "../MarkText/MarkText";

const SkillItem = ({
    name,
    // imgUrl,
    text,
}: {
    name: string;
    // imgUrl: string;
    text: string[];
}) => {
    return (
        <li className="skillItem">
            <MarkText text={name} />
            {text && (
                <ul className="skillItem__detail">
                    {text.map((t, i) => (
                        <li key={i}>{t}</li>
                    ))}
                </ul>
            )}
        </li>
    );
};

const SkillList = () => {
    return (
        <ul className="skill__list">
            {skillData.map((item, i) => (
                <SkillItem key={i} {...item} />
            ))}
        </ul>
    );
};

export default SkillList;
