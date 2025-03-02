import CareerList from "../../components/CareerList/CareerList";
import SkillList from "../../components/SkillList/SkillList";
import PortfolioList from "../../components/PortfolioList/PortfolioList";

const Home = () => {
    console.log("home");
    return (
        <main id="container" className="main">
            {/* about */}
            <article className="about">
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
                <section className="skill__sec">
                    <h2 className="about__title">skill</h2>
                    <SkillList />
                </section>
            </article>
            {/* portfolio */}
            <article className="portfolio">
                <h2 className="section__title">portfolio</h2>
                <PortfolioList />
            </article>
        </main>
    );
};

export default Home;
