import { useEffect, useRef } from "react";
import Logo from "../Logo/Logo";

const Intro = ({
    setIsIntro,
}: {
    setIsIntro: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const introRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const introIO = new IntersectionObserver(
            (entries) => {
                if (!entries[0].isIntersecting) {
                    document.body.style.overflow = "auto";
                    setIsIntro(false);
                }
            },
            { threshold: 0 }
        );

        if (!introRef.current) return;
        introIO.observe(introRef.current);
    }, [setIsIntro]);

    return (
        <div className="intro" ref={introRef}>
            <div className="intro__textBox">
                <Logo />
                <span className="intro__subText">portfolio</span>
            </div>
        </div>
    );
};

export default Intro;
