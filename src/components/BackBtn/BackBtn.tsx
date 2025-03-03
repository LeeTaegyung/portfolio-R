import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const BackBtn = ({
    isBack = true,
    text,
}: {
    isBack?: boolean;
    text: string;
}) => {
    const nav = useNavigate();

    const backHandleClick = () => {
        nav("/", { replace: !isBack });
    };

    return (
        <button
            onClick={() => {
                backHandleClick();
            }}
            className="backBtn"
        >
            <IoMdArrowRoundBack />
            <span>{text}</span>
        </button>
    );
};

export default BackBtn;
