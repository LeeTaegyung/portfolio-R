import classNames from "classnames";

const Loading = ({ isLoading }: { isLoading: boolean }) => {
    return (
        <div className={classNames("loading", { completed: isLoading })}>
            <div className="loading__in">
                <div className="loading__spinner"></div>
            </div>
        </div>
    );
};

export default Loading;
