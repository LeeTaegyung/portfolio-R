import classNames from "classnames";

const Loading = () => {
    return (
        <div className={classNames("loading")}>
            <div className="loading__in">
                <div className="loading__spinner"></div>
            </div>
        </div>
    );
};

export default Loading;
