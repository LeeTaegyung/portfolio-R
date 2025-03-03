import CareerList from "../../components/CareerList/CareerList";
import SkillList from "../../components/SkillList/SkillList";
import { FaPerson } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import classNames from "classnames";

const About = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const aboutHandleClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <button
                className="about__btn"
                onClick={() => {
                    aboutHandleClick();
                }}
            >
                {isOpen ? <IoClose /> : <FaPerson />}
                <span hidden>정보 보기</span>
            </button>

            {/* about */}
            <article className={classNames("about", { open: isOpen })}>
                <div className="about__scrollArea">
                    {/* profile */}
                    <section className="profile__sec">
                        <h2 className="about__title">profile</h2>
                        <div className="profile__cont">
                            <dl>
                                <dt>이름</dt>
                                <dd>이태경</dd>
                            </dl>
                            <dl>
                                <dt>주소</dt>
                                <dd>서울특별시 강서구</dd>
                            </dl>
                            <dl>
                                <dt>이메일</dt>
                                <dd>taegyung.e@gmail.com</dd>
                            </dl>
                        </div>
                    </section>
                    {/* career */}
                    <section className="career__sec">
                        <h2 className="about__title">career</h2>
                        <CareerList />
                    </section>
                    {/* skill */}
                    <section className="skill__sec">
                        <h2 className="about__title">skill</h2>
                        <SkillList />
                    </section>
                </div>
            </article>
        </>
    );
};

export default About;
