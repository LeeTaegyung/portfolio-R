import { PortfolioListType } from "../types/type";

const portfolioData: PortfolioListType[] = [
    {
        company: "엘루오씨앤씨",
        projects: [
            {
                name: "스마일게이트 그룹사 운영",
                date: "2022.03 ~ 2024.08",
                job: "퍼블리셔",
                thumbnail: "/images/portfolio_thumbnail/smilegate_pf.jpg",
                mainDesc: [
                    "스마일게이트 대내외 그룹사이트 운영을 하였습니다.",
                    "주로 인트라넷의 유지운영을 맡았습니다.",
                ],
                details: [
                    {
                        detailType: "IMG",
                        imgUrls: [
                            "/images/portfolio_details/smilegate_detail2.jpg",
                            "/images/portfolio_details/smilegate_detail3.jpg",
                            "/images/portfolio_details/smilegate_detail4.jpg",
                        ],
                    },
                    {
                        detailType: "DESC",
                        subTitle: "스마일게이트 소셜임팩트 사이트 리뉴얼",
                        subLink: {
                            text: "스마일게이트 소셜임팩트 바로가기",
                            url: "https://www.smilegatefoundation.org/",
                        },
                        img: "/images/portfolio_details/smilegate_detail.jpg",
                        imgSize: "long",
                        text: [
                            "스마일게이트 희망스튜디오 리뉴얼 작업을 진행하였습니다.",
                            "웹접근성 마크를 취득해야할 수도 있어서 웹접근성을 고려하여 작업하였습니다.",
                            "작업완료후 W3C Validator와 Open-WAX를 이용하여 간략하게 검사를 진행 했습니다.",
                        ],
                    },
                ],
            },
            {
                name: "아모레퍼시픽 아모레몰",
                thumbnail: "/images/portfolio_thumbnail/amore_pf.png",
                job: "퍼블리셔",
                date: "2023.06 ~ 2024.08",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                projectType: "이미지 코딩(반응형)",
                mainDesc: [
                    "매주 월요일마다 오픈하는 기획전 작업을 담당하였습니다.",
                    "이미지 코딩과 카드뽑기, 룰렛돌리기와 같은 모션을 적용하는 작업을 하였습니다.",
                ],
                details: [
                    {
                        subTitle: "기획전 페이지",
                        detailType: "IMG",
                        imgUrls: ["/images/portfolio_details/amore_detail.jpg"],
                    },
                ],
            },
            {
                name: "노비타",
                job: "퍼블리셔",
                date: "2022.03 ~ 2022.03",
                thumbnail: "/images/portfolio_thumbnail/novita_pf.jpg",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 10,
                    },
                ],
                projectType: "구축 프로젝트(고정형)",
                links: [
                    {
                        text: "작업 페이지 바로가기",
                        url: "https://novita.co.kr/novita/innovation",
                    },
                ],
                mainDesc: [
                    "각 섹션마다 스크롤 애니메이션이 적용 되었습니다.",
                    "구축프로젝트의 마무리 단계에 투입되어 추가수정을 담당하였습니다.",
                ],
                details: [
                    {
                        detailType: "IMG",
                        imgUrls: [
                            "/images/portfolio_details/novita_detail.png",
                        ],
                    },
                ],
            },
        ],
    },
    {
        company: "유월커뮤니케이션",
        projects: [
            {
                name: "인피닉",
                thumbnail: "/images/portfolio_thumbnail/data-hub.jpg",
                job: "퍼블리셔",
                date: "2021.12 (3일)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                projectType: "랜딩페이지(반응형)",
                mainDesc: ["각 섹션마다 스크롤 애니메이션이 적용 되었습니다."],
                details: [
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/infiniq_detail01.jpg",
                        text: [
                            "메인비쥬얼에 들어가는 동영상의 크기가 커서 로드 되기 전에 애니메이션이 실행되고 동영상 영역에 공백이 생기는 문제점이 있었습니다.",
                            "video태그의 poster 옵션과 loadeddata 이벤트를 이용하여 대응 하였습니다.",
                        ],
                    },
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/infiniq_detail02.jpg",
                        text: [
                            "메인비쥬얼에 캔버스를 이용한 도넛차트 애니메이션을 적용하였습니다.",
                            "초월홍삼 랜딩페이지 작업때 만들었던 도넛차트를 활용했는데, 차트의 반지름 길이가 달라서 캔버스를 겹쳐서 배치하고 시간차를 줘서 작업하였습니다.",
                        ],
                    },

                    {
                        detailType: "IMG",
                        imgUrls: ["/images/portfolio_details/infiniq_main.jpg"],
                    },
                ],
            },
            {
                name: "에이블",
                thumbnail: "/images/portfolio_thumbnail/ablelaw.jpg",
                job: "퍼블리셔",
                date: "2021.12 (약 1주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                projectType: "기업소개형 랜딩페이지(반응형)",
                links: [
                    {
                        text: "사이트 바로가기",
                        url: "https://ablelaw.cafe24.com/",
                    },
                ],
                mainDesc: [
                    "메인페이지는 각 섹션마다 스크롤 애니메이션이 적용 되었습니다.",
                ],
                details: [
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/ablelaw_detail01.jpg",
                        text: [
                            "전문가소개 페이지는 리스트중 전문가를 클릭하면",
                        ],
                    },
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/ablelaw_detail02.jpg",
                        text: [
                            "클릭한 전문가에 대한 소개가 적힌 팝업창이 열리게 되어 있습니다.",
                        ],
                    },
                    {
                        detailType: "CODE",
                        code: `var personInfo = {
    1: {
        img: '../img/pop_pro_img01.jpg',
        imgMo: '../img/pop_pro_img01_mo.jpg',
        name: '여명준',
        job: '대표변호사',
        edu: [
            '1997 서울대학교 전기공학부 졸업',
        ],
        career: [
            '전) 삼성전자 통신연구소',
            '2009 제51회 사법시험 합격',
            '2012 사법연수원 수료(41기)',
            '전) 서울지방변호사회 소비자금융특위위원',
            '전) 국가인권위원회 전문상담위원',
            '전) 법률사무소 명솔 ',
            '현) 당곡중학교 자문변호사',
            '현) 국토교통인재개발원 출강',
            '현) 행정안전부 공기업평가원 출강',
            '현) 세곡중학교 자문변호사',
            '현) 법무법인 에이블 대표변호사',
        ],
        index: 1,
    },
    2: { ... },
    3: { ... },
    4: { ... },
    5: { ... },
    6: { ... },
    7: { ... },
    8: { ... },
    9: { ... },
}

$('.pro_pop_btn').on('click', function() {
    var idx = $(this).parents('li').index();
    personPop(personInfo[idx+1]);
    $('.pro_pop').show();
    $('html').addClass('overflow');
})

$('.pro_pop .close, .pro_pop .dim').on('click', function() {
    $('.pro_pop').hide();
    $('html').removeClass('overflow');
})

$('.pro_pop .next').on('click', function() {
    var nowIdx = $('.pro_pop .pop_box').attr('data-idx');
    if(nowIdx == 9) {
        nowIdx = 1;
    } else {
        nowIdx++;
    }
    personPop(personInfo[nowIdx]);
})


$('.pro_pop .prev').on('click', function() {
    var nowIdx = $('.pro_pop .pop_box').attr('data-idx');
    if(nowIdx == 1) {
        nowIdx = 9;
    } else {
        nowIdx--;
    }
    personPop(personInfo[nowIdx]);
})

function personPop(option) {
    var img = option.img;
    var imgMo = option.imgMo;
    var name = option.name;
    var job = option.job;
    var edu = option.edu;
    var career = option.career;
    var category = option.category;
    var business = option.business;
    var personIdx = option.index;


    $('.pro_pop .img_box img.only_web').attr('src', img);
    $('.pro_pop .img_box img.only_mo').attr('src', imgMo);
    $('.pro_pop .person .name').text(name);
    $('.pro_pop .person .job').text(job);


    $('.pro_pop .bottom').html('');


    if(!(edu == undefined)) {
        $('.pro_pop .bottom').append(
                    '<div class="info_box">'
                        +'<strong class="info_ttl">학력사항</strong>'
                        +'<ul class="info_list edu_list"></ul>'
                    + '</div>')
        for(var i = 0; i < edu.length; i++) {
            $('.pro_pop .edu_list').append('<li>'+edu[i]+'</li>');
        }
    }

    if(!(career == undefined)) {
        $('.pro_pop .bottom').append(
                '<div class="info_box">'
                    +'<strong class="info_ttl">경력</strong>'
                    +'<ul class="info_list career_list"></ul>'
                +'</div>')
                
        for(var i = 0; i < career.length; i++) {
            $('.pro_pop .career_list').append('<li>'+career[i]+'</li>');
        }
    }

    if(!(category == undefined)) {
        $('.pro_pop .bottom').append(
                '<div class="info_box">'
                    +'<strong class="info_ttl">업무 분야</strong>'
                    +'<ul class="info_list category_list"></ul>'
                +'</div>')
                
        for(var i = 0; i < category.length; i++) {
            $('.pro_pop .category_list').append('<li>'+category[i]+'</li>');
        }
    }

    if(!(business == undefined)) {
        $('.pro_pop .bottom').append(
                '<div class="info_box">'
                    +'<strong class="info_ttl">주요 업무</strong>'
                    +'<ul class="info_list business_list"></ul>'
                +'</div>')
                
        for(var i = 0; i < business.length; i++) {
            $('.pro_pop .business_list').append('<li>'+business[i]+'</li>');
        }
    }

    $('.pro_pop .pop_box').attr('data-idx', personIdx);

    
}
                        `,
                        text: [
                            "개발이 들어가는 부분이 아니었기에 객체와 함수를 이용하여 작업하였고 next/prev 버튼을 클릭했을때 index값을 전달받아 팝업내에서 컨텐츠가 바뀌도록 작업하였습니다.",
                        ],
                    },
                    {
                        detailType: "IMG",
                        imgUrls: ["/images/portfolio_details/ablelaw_main.jpg"],
                    },
                ],
            },
            {
                name: "코리아퓨처스",
                thumbnail: "/images/portfolio_thumbnail/koreafutures.jpg",
                job: "퍼블리셔",
                date: "2021.11 (약 1주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                projectType: "기업형 홈페이지(반응형)",
                mainDesc: ["각 섹션마다 스크롤 애니메이션이 적용 되었습니다."],
                details: [
                    {
                        detailType: "IMG",
                        imgUrls: [
                            "/images/portfolio_details/koreafutures_main.jpg",
                        ],
                    },
                ],
            },
            {
                name: "랜드빌더",
                thumbnail: "/images/portfolio_thumbnail/landbuildercnd.jpg",
                job: "퍼블리셔",
                date: "2021.10 (약 1주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                projectType: "기업형 홈페이지(반응형)",
                mainDesc: [
                    "공통된 부분을 파악하여 모듈화 하여 빠르게 작업하였습니다.",
                ],
                details: [
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/landbuildercnd_detail.jpg",
                        text: [
                            "메인페이지의 주요 프로젝트 섹션은 다단 CSS를 사용하여 레이아웃을 구성하였습니다.",
                        ],
                    },
                    {
                        detailType: "IMG",
                        imgUrls: [
                            "/images/portfolio_details/landbuildercnd_main.jpg",
                        ],
                    },
                ],
            },
            {
                name: "고려여행사",
                thumbnail: "/images/portfolio_thumbnail/golyeo.jpg",
                job: "퍼블리셔",
                date: "2021.09 (약 2주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 80,
                    },
                ],
                projectType: "여행예약 쇼핑몰(반응형)",
                mainDesc: [
                    "내부 템플릿을 이용하여 작업한 사이트입니다.",
                    "결제시스템은 삭제 되고 기존 마이페이지는 유지되도록 주의하며 작업하였습니다.",
                ],
                details: [
                    {
                        detailType: "IMG",
                        imgUrls: ["/images/portfolio_details/golyeo_main.jpg"],
                    },
                ],
            },
            {
                name: "온오프",
                thumbnail: "/images/portfolio_thumbnail/onoff_landing.jpg",
                job: "퍼블리셔",
                date: "2021.09 (2일)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                projectType: "랜딩페이지(반응형)",
                mainDesc: ["각 섹션마다 스크롤 애니메이션이 적용 되었습니다."],
                details: [
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/onoff_detail01.jpg",
                        text: [
                            "메인비쥬얼 카운터업 플러그인을 사용 하였습니다.",
                        ],
                    },
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/onoff_detail02.jpg",
                        text: ["바 차트 애니메이션이 적용 되었습니다."],
                    },
                    {
                        detailType: "IMG",
                        imgUrls: ["/images/portfolio_details/onoff_main.jpg"],
                    },
                ],
            },
            {
                name: "슈퍼탈렌트",
                thumbnail: "/images/portfolio_thumbnail/sutagroup.jpg",
                job: "퍼블리셔",
                date: "2021.08 (약 1주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                projectType: "기업형 홈페이지(반응형)",
                mainDesc: [
                    "스크롤매직 플러그인을 이용한 스크롤 애니메이션을 메인페이지에 적용하였습니다.",
                ],
                details: [
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/sutagroup_detail01.jpg",
                        text: [
                            "그리드 버튼을 누르면 버튼에 따라 리스트의 배열이 3, 6, 9로 바뀌게 스크립트를 작성하였습니다.",
                            "그에 따른 인물의 썸네일은 비율이 유지되도록 padding-top과 background로 작업하였습니다.",
                        ],
                    },
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/sutagroup_detail02.jpg",
                        text: [
                            "인물의 썸네일 위에 마우스 커서를 올리면 자동으로 슬라이더가 돌아가도록 슬릭 슬라이더를 이용하여 작업하였습니다.",
                        ],
                    },
                    {
                        detailType: "IMG",
                        imgUrls: [
                            "/images/portfolio_details/sutagroup_main.jpg",
                        ],
                    },
                ],
            },
            {
                name: "한사랑우리",
                thumbnail: "/images/portfolio_thumbnail/hansarangwoori.jpg",
                job: "퍼블리셔",
                date: "2021.06 (약 2주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 80,
                    },
                ],
                projectType: "여행예약 쇼핑몰(반응형)",
                mainDesc: [
                    "내부 템플릿을 이용하여 작업한 사이트입니다.",
                    "상품상세페이지, 결제페이지, 마이페이지의 레이아웃은 큰 변화가 없어 주의하며 작업하였습니다.",
                ],
                details: [
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/hansarangwoori_detail.jpg",
                        text: [
                            "대한민국 지도 svg를 이용하여 버튼이나 svg내에 호버시 해당 도시의 버튼과 svg와 라벨이 동시에 표시되도록 작업하였습니다.",
                        ],
                    },
                    {
                        detailType: "IMG",
                        imgUrls: [
                            "/images/portfolio_details/hansarangwoori_main.jpg",
                        ],
                    },
                ],
            },
            {
                name: "초월홍삼",
                thumbnail: "/images/portfolio_thumbnail/naturalhc_landing.jpg",
                job: "퍼블리셔",
                date: "2021-04 (약 1주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                projectType: "랜딩페이지(반응형)",
                links: [
                    {
                        text: "사이트 바로가기",
                        url: "http://naturalhc.uwal.co.kr/",
                    },
                ],
                mainDesc: [
                    "각 섹션마다 스크롤 애니메이션이 적용 되었습니다.",
                    "차트가 다양하게 들어가 있어서 모든 차트에 애니메이션이 적용 되도록 작업하였습니다.",
                ],
                details: [
                    {
                        detailType: "CODE",
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
                        text: [
                            "애니메이션도 많이 들어가고, 스크롤 애니메이션이 시작되는 분기점도 조금씩 달라서, 애니메이션이 필요한 부분에 ani_div라는 클래스명을 추가하고 배열로 받아서 스크롤 이벤트 내에 for문을 사용하여 매칭이 되면 on클래스를 추가하고 배열의 요소를 삭제되도록 스크립트를 작성하였습니다.",
                        ],
                    },
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/naturalhc_detail01.jpg",
                        text: [
                            "도넛차트는 캔버스를 이용하여 애니메이션을 적용하였습니다.",
                        ],
                        subLink: {
                            text: "포스팅 보러가기",
                            url: "https://tassi.tistory.com/8",
                        },
                    },
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/naturalhc_detail02.jpg",
                        text: [
                            "라인 차트는 반응형이기 때문에 선의 길이와 각도가 차트 영역이 변함에 따라서 값이 유동적으로 바뀌어야 했기에 스크립트를 사용하여 작업하였습니다.",
                        ],
                        subLink: {
                            text: "포스팅 보러가기",
                            url: "https://tassi.tistory.com/9",
                        },
                    },
                    {
                        detailType: "IMG",
                        imgUrls: [
                            "/images/portfolio_details/naturalhc_main.jpg",
                        ],
                    },
                ],
            },
            {
                name: "한국경제투자TV",
                thumbnail: "/images/portfolio_thumbnail/keibtv_landing.jpg",
                job: "퍼블리셔",
                date: "2021.04 (2일)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                projectType: "랜딩페이지(반응형)",
                links: [
                    {
                        text: "사이트 바로가기",
                        url: "http://keibtv.uwal.co.kr/",
                    },
                ],
                mainDesc: ["각 섹션마다 스크롤 애니메이션이 적용 되었습니다."],
                details: [
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/keibtv_detail01.jpg",
                        text: ["핸드폰 섹션의 중간, 클릭버튼을 클릭하면,"],
                    },
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/keibtv_detail02.jpg",
                        text: ["이미지가 바뀌도록 작업되었습니다."],
                    },
                    {
                        detailType: "IMG",
                        imgUrls: ["/images/portfolio_details/keibtv_main.jpg"],
                    },
                ],
            },
            {
                name: "쿠쿠 렌탈몰",
                thumbnail: "/images/portfolio_thumbnail/cuckoo.jpg",
                job: "퍼블리셔",
                date: "2021.02 (약 1주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 80,
                    },
                ],
                projectType: "쇼핑몰 홈페이지(반응형)",
                links: [
                    {
                        text: "사이트 바로가기",
                        url: "https://cuckoo6.cafe24.com/main/main.php",
                    },
                ],
                mainDesc: ["내부 템플릿을 이용하여 작업한 사이트입니다."],
                details: [
                    {
                        detailType: "IMG",
                        imgUrls: ["/images/portfolio_details/cuckoo_main.jpg"],
                    },
                ],
            },
            {
                name: "도야 쇼핑몰",
                thumbnail: "/images/portfolio_thumbnail/doya.jpg",
                job: "퍼블리셔",
                date: "2021.01 (약 1주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 80,
                    },
                ],
                projectType: "쇼핑몰 홈페이지(반응형)",
                mainDesc: ["내부 템플릿을 이용하여 작업한 사이트입니다."],
                details: [
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/doya_detail01.jpg",
                        text: [
                            "메인페이지 Our Service 섹션의 왼쪽 리스트에 따라 오른쪽 이미지가 바뀌게 작업되었습니다.",
                            "flex를 사용 못하던 때라 table-cell 속성을 이용하였는데 익스에서 높이값이 안잡히는 문제가 있어 스크립트로 높이값을 구해 적용하였습니다.",
                        ],
                    },
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/doya_detail02.jpg",
                        text: [
                            "포트폴리오 페이지는 masonry 플러그인을 이용하여 작업하였습니다.",
                        ],
                    },
                    {
                        detailType: "IMG",
                        imgUrls: ["/images/portfolio_details/doya_main.jpg"],
                    },
                ],
            },
            {
                name: "서로안전캠페인",
                thumbnail: "/images/portfolio_thumbnail/greenroad.jpg",
                job: "퍼블리셔",
                date: "2020.10 (약 1주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                projectType: "이벤트형 랜딩페이지(반응형)",
                details: [
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/greenroad_detail01.jpg",
                        text: [
                            "스크롤을 업/다운을 할때마다 메인페이지 약속고리 섹션의 이미지에 애니메이션이 들어가도록 작업하였습니다.",
                        ],
                    },
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/greenroad_detail02.jpg",
                        text: [
                            "메인페이지 약속고리 섹션의 썸네일이 웹에서는 hover시 약속고리 영역에 상세이미지가 보이도록, 모바일에서는 click시 약속고리 영역에 상세이미지가 슬라이더가 되도록 작업하였습니다.",
                        ],
                    },
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/greenroad_detail03.jpg",
                        text: [
                            "약속하기 버튼을 누르고 로딩애니메이션이 완료된 후 결과페이지로 이동되도록 작업하였습니다.",
                        ],
                    },
                    {
                        detailType: "IMG",
                        imgUrls: [
                            "/images/portfolio_details/greenroad_main.jpg",
                        ],
                    },
                ],
            },
            {
                name: "에어이츠",
                thumbnail: "/images/portfolio_thumbnail/aireats01.jpg",
                job: "퍼블리셔",
                date: "2020.09 ~ 2020.10 (약 2달)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                projectType: "쇼핑몰 홈페이지(고정형)",
                details: [
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/aireats_detail.jpg",
                        text: [
                            "리스트 부분의 필터 박스에 라디오나 체크박스로 선택을 하면, 선택한 결과창에 표시가 되고, 결과창에서 삭제를 하거나 필터박스에서 선택해제를 하면 똑같이 삭제/선택해제가 되도록 스크립트를 구현하였습니다.",
                        ],
                    },
                    {
                        detailType: "IMG",
                        imgUrls: ["/images/portfolio_details/aireats_main.jpg"],
                    },
                ],
            },
            {
                name: "GBITHUB",
                thumbnail: "/images/portfolio_thumbnail/gbithub01.jpg",
                job: "퍼블리셔",
                date: "2020.09 (약 2주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                projectType: "암호화폐 거래소 플랫폼(반응형)",
                details: [
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/gbithub_detail01.jpg",
                        text: [
                            "풀페이지로 작업된 차트페이지는 가변길이에 대응하며 작업하였습니다.",
                            "버튼을 클릭하여 메뉴가 열리거나 영역의 범위가 바뀌는 등 무언가가 변화할때 부드럽게 변화되도록 작업하였습니다.",
                        ],
                    },
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/gbithub_detail02.jpg",
                        text: [
                            "테이블의 제목이 고정되고 body영역이 스크롤 되도록, mCustomScrollbar 플러그인을 이용하여 스크롤 커스텀이 적용되게 작업하였습니다.",
                        ],
                    },
                    {
                        detailType: "IMG",
                        imgUrls: ["/images/portfolio_details/gbithub_main.jpg"],
                    },
                ],
            },
            {
                name: "마마커뮤니케이션즈",
                thumbnail: "/images/portfolio_thumbnail/mamacomm01.jpg",
                job: "퍼블리셔",
                date: "2020.08 (약 1주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 80,
                    },
                ],
                projectType: "기업형 홈페이지(반응형)",
                mainDesc: ["내부 템플릿을 이용하여 작업한 사이트입니다."],
                details: [
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/mamacomm_detail01.jpg",
                        text: ["메인비쥬얼 애니메이션이 적용되었습니다."],
                    },
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/mamacomm_detail02.jpg",
                        text: [
                            "메인비쥬얼 다음 섹션을 처음에 background-attachment: fixed를 사용했다가 ios에서 제대로 적용이 되지 않는 문제가 있어 fixed로 css를 수정하여 작업하였습니다.",
                        ],
                    },
                    {
                        detailType: "IMG",
                        imgUrls: [
                            "/images/portfolio_details/mamacomm_main.jpg",
                        ],
                    },
                ],
            },
            {
                name: "7WISTED",
                thumbnail: "/images/portfolio_thumbnail/7wisted01.jpg",
                job: "퍼블리셔",
                date: "2020.08 (약 1주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 80,
                    },
                ],
                projectType: "기업형 홈페이지(반응형)",
                mainDesc: [
                    "내부 템플릿을 이용하여 작업한 사이트입니다.",
                    "메인페이지 각 섹션마다 스크롤 애니메이션이 적용 되었습니다.",
                ],
                details: [
                    {
                        detailType: "IMG",
                        imgUrls: [
                            "/images/portfolio_details/twisted7_main.jpg",
                        ],
                    },
                ],
            },
            {
                name: "런타이어",
                thumbnail: "/images/portfolio_thumbnail/runtire01.jpg",
                job: "퍼블리셔",
                date: "2020.07 (약 2주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 80,
                    },
                ],
                projectType: "쇼핑몰 홈페이지(반응형)",
                links: [
                    {
                        text: "사이트 바로가기",
                        url: "https://www.runtire.co.kr/main/main.php",
                    },
                ],
                mainDesc: [
                    "내부 템플릿을 이용하여 작업한 사이트입니다.",
                    "개발되어 있는 부분을 그대로 유지해야 했기 때문에 개발코드를 분석하면서 작업하였습니다.",
                ],
                details: [
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/runtire_detail.jpg",
                        text: [
                            "장착점찾기 페이지의 지도는 img와 map으로 작업하였습니다.",
                        ],
                    },
                    {
                        detailType: "IMG",
                        imgUrls: ["/images/portfolio_details/runtire_main.jpg"],
                    },
                ],
            },
            {
                name: "핑거트립스",
                thumbnail: "/images/portfolio_thumbnail/fingertrips01.jpg",
                job: "퍼블리셔",
                date: "2020.06 (약 2주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 80,
                    },
                ],
                projectType: "여행예약 쇼핑몰(반응형)",
                mainDesc: [
                    "내부 템플릿을 이용하여 작업한 사이트입니다.",
                    "공통된 부분을 파악하여 모듈화 하여 작업하였습니다.",
                ],
                details: [
                    {
                        detailType: "IMG",
                        imgUrls: [
                            "/images/portfolio_details/fingertrips_main.jpg",
                        ],
                    },
                ],
            },
            {
                name: "KBS미디어 청년취업 아카데미",
                thumbnail: "/images/portfolio_thumbnail/kbs_landing.jpg",
                job: "퍼블리셔",
                date: "2020.05 (3일)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                projectType: "랜딩페이지(반응형)",
                links: [
                    {
                        text: "사이트 바로가기",
                        url: "http://kmjobedu.uwal.co.kr/",
                    },
                ],
                mainDesc: [
                    "웹접근성 작업은 아니었지만, 작업 완료 후 웹접근성과 웹표준 검사를 간략하게 해달라는 요청을 받은 사이트입니다.",
                    "작업완료후 W3C Validator와 Open-WAX를 이용하여 간략하게 검사를 진행 했습니다.",
                ],
                details: [
                    {
                        detailType: "IMG",
                        imgUrls: ["/images/portfolio_details/kbs_main.jpg"],
                    },
                ],
            },
            {
                name: "게임24시",
                thumbnail: "/images/portfolio_thumbnail/game24.jpg",
                job: "퍼블리셔",
                date: "2020.05 (약 2주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 80,
                    },
                ],
                projectType: "쇼핑몰 홈페이지(반응형)",
                mainDesc: ["내부 템플릿을 이용하여 작업한 사이트입니다."],
                details: [
                    {
                        detailType: "DESC",
                        img: "/images/portfolio_details/agame24_detail.jpg",
                        text: [
                            "타임 세일부분의 카운트다운 스크립트로 구현하였습니다.",
                        ],
                    },
                    {
                        detailType: "IMG",
                        imgUrls: ["/images/portfolio_details/agame24_main.jpg"],
                    },
                ],
            },
            {
                name: "어벤더치",
                thumbnail: "/images/portfolio_thumbnail/avendutch.jpg",
                job: "퍼블리셔",
                date: "2020.03 (약 1주)",
                contribution: [
                    {
                        text: "퍼블리싱",
                        percent: 100,
                    },
                ],
                projectType: "프랜차이즈 홈페이지(반응형)",
                links: [
                    {
                        text: "사이트 바로가기",
                        url: "http://avendutch.com/",
                    },
                ],
                mainDesc: [
                    "공통된 부분을 파악하여 모듈화 하여 작업하였습니다.",
                    "슬릭 슬라이더 페이저를 커스텀하였습니다.",
                ],
                details: [
                    {
                        detailType: "IMG",
                        imgUrls: [
                            "/images/portfolio_details/avendutch_main.jpg",
                        ],
                    },
                ],
            },
        ],
    },
];
export default portfolioData;
