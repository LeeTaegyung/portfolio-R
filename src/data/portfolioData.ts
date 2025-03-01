type PortfolioDetail = {
    imgUrl: string;
    description: string;
};

export type PortfolioItem = {
    name: string;
    date: string;
    position: string;
    contribution: number;
    thumbnail: string;
    detail: PortfolioDetail[];
};

export type PortfolioListType = {
    company: string;
    projects: PortfolioItem[];
};

const portfolioData = [
    {
        company: "엘루오씨앤씨씨",
        projects: [
            {
                name: "프로젝트 이름1",
                date: "기간",
                position: "퍼블리싱",
                contribution: 100,
                thumbnail:
                    "/assets/images/portfolio_thumbnail/smilegate_pf.jpg",
                detail: [
                    // 이렇게 했을떄 코드는 어떻게 보여주는 것이 좋은가....?
                    // 실행하는 것에 대해서는 어떻게? => 코드 샌드 박스
                    {
                        imgUrl: "/assets/images/portfolio_details/smilegate_detail.jpg",
                        description: "설명1",
                    },
                    {
                        imgUrl: "/assets/images/portfolio_details/smilegate_detail2.jpg",
                        description: "설명2",
                    },
                    {
                        imgUrl: "/assets/images/portfolio_details/smilegate_detail3.jpg",
                        description: "설명3",
                    },
                ],
            },
            {
                name: "프로젝트 이름2",
                date: "2025.03 ~ 2025.04",
                position: "퍼블리싱",
                contribution: 50,
                thumbnail: "/assets/images/portfolio_thumbnail/novita_pf.jpg",
                detail: [
                    {
                        imgUrl: "/assets/images/portfolio_details/novita_detail.jpg",
                        description: "설명3 dsfdsjfkldjkljdkjsflkjk",
                    },
                ],
            },
        ],
    },
    {
        company: "유월커뮤니케이션",
        projects: [
            {
                name: "프로젝트 이름2",
                date: "기간",
                position: "퍼블리싱",
                contribution: 100,
                thumbnail: "/assets/images/portfolio_thumbnail/sutagroup.jpg",
                detail: [
                    // 이렇게 했을떄 코드는 어떻게 보여주는 것이 좋은가....?
                    // 실행하는 것에 대해서는 어떻게? => 코드 샌드 박스
                    {
                        imgUrl: "/assets/images/portfolio_details/sutagroup_main.jpg",
                        description: "설명dsfdsfdsfdsds sdfdsfdsdsf",
                    },
                    {
                        imgUrl: "/assets/images/portfolio_details/sutagroup_detail01.jpg",
                        description: "설sdfsfdfsfsdds명",
                    },
                ],
            },
        ],
    },
];
export default portfolioData;
