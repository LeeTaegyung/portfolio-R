import { useNavigate } from "react-router-dom";

const BackBtn = () => {
    const nav = useNavigate();

    const backHandleClick = () => {
        nav("/", { replace: true });
    };

    return (
        <button
            style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "black",
                padding: "5px",
                borderRadius: "3px",
            }}
            onClick={() => {
                backHandleClick();
            }}
        >
            돌아가기
        </button>
    );
};

export default BackBtn;
