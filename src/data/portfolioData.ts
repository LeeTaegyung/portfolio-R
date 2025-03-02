import { PortfolioListType } from "../types/type";

const portfolioData: PortfolioListType[] = [
    {
        company: "엘루오씨앤씨",
        projects: [
            {
                name: "프로젝트 이름31",
                date: "2025.06 ~ 2025.02",
                job: "프론트엔드",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                thumbnail: "/images/portfolio_thumbnail/smilegate_pf.jpg",
                detail: [
                    {
                        type: "IMG",
                        subTitle: "스마일게이트 소셜임팩트 리뉴얼",
                        imgUrl: "/images/portfolio_details/smilegate_detail.jpg",
                        description: `메인비쥬얼에 들어가는 동영상의 크기가 커서 로드 되기 전에 애니메이션이 실행되고 동영상 영역에 공백이 생기는 문제점이 있었습니다.
                        video태그의 poster 옵션과 loadeddata 이벤트를 이용하여 대응 하였습니다.`,
                    },
                    {
                        type: "IMG",
                        imgUrl: "/images/portfolio_details/smilegate_detail2.jpg",
                        description: "설명2",
                    },
                    {
                        type: "CODE",
                        code: `var aniDiv = document.querySelectorAll(".ani_div");
var aniDivArry = new Array();
Array.prototype.forEach.call(aniDiv, function (ele) {
    aniDivArry.push(ele);
});

$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop(),
        windowH = $(window).height() / 3 * 2;

    for (var i = 0; i < aniDivArry.length; i++) {
        if ($(aniDivArry[i]).offset().top < scrollTop + windowH) {
            $(aniDivArry[i]).addClass('on');

            aniDivArry.splice(i, 1); // on class 붙으면 요소 삭제
        }
    }

});`,
                        description: "설명2",
                    },
                    {
                        subTitle: "설명3",
                        type: "IMG",
                        imgUrl: "/images/portfolio_details/smilegate_detail3.jpg",
                        description: "설명3",
                    },
                ],
            },
            {
                name: "프로젝트 이름1",
                date: "2025.03 ~ 2025.06",
                job: "퍼블리셔",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                thumbnail: "/images/portfolio_thumbnail/smilegate_pf.jpg",
                detail: [
                    {
                        type: "IMG",
                        imgUrl: "/images/portfolio_details/smilegate_detail.jpg",
                        description: "설명1",
                    },
                    {
                        type: "IMG",
                        imgUrl: "/images/portfolio_details/smilegate_detail2.jpg",
                        description: "설명2",
                    },
                    {
                        type: "IMG",
                        imgUrl: "/images/portfolio_details/smilegate_detail3.jpg",
                        description: "설명3",
                    },
                ],
            },
            {
                name: "프로젝트 이름2",
                date: "2025.03 ~ 2025.04",
                job: "퍼블리셔",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 50,
                    },
                ],
                thumbnail: "/images/portfolio_thumbnail/novita_pf.jpg",
                detail: [
                    {
                        type: "IMG",
                        imgUrl: "/images/portfolio_details/novita_detail.jpg",
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
                job: "퍼블리셔",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                thumbnail: "/images/portfolio_thumbnail/sutagroup.jpg",
                detail: [
                    {
                        type: "IMG",
                        imgUrl: "/images/portfolio_details/sutagroup_main.jpg",
                        description: "설명dsfdsfdsfdsds sdfdsfdsdsf",
                    },
                    {
                        type: "IMG",
                        imgUrl: "/images/portfolio_details/sutagroup_detail01.jpg",
                        description: "설sdfsfdfsfsdds명",
                    },
                ],
            },

            {
                name: "프로젝트 이름31",
                date: "2025.06 ~ 2025.02",
                job: "프론트엔드",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                thumbnail: "/images/portfolio_thumbnail/smilegate_pf.jpg",
                detail: [
                    {
                        type: "IMG",
                        imgUrl: "/images/portfolio_details/smilegate_detail.jpg",
                        description: "설명1",
                    },
                    {
                        type: "IMG",
                        imgUrl: "/images/portfolio_details/smilegate_detail2.jpg",
                        description: "설명2",
                    },
                    {
                        type: "IMG",
                        imgUrl: "/images/portfolio_details/smilegate_detail3.jpg",
                        description: "설명3",
                    },
                ],
            },
        ],
    },
];
export default portfolioData;
