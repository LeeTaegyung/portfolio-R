type DetailBase = {
    subTitle?: string;
    description: string;
};

type CodeType = DetailBase & {
    type: "CODE";
    code: string;
};

type ImageType = DetailBase & {
    type?: "IMG";
    imgUrl: string;
};

export type PortfolioDetailType = CodeType | ImageType;

type ContributionType = {
    text: string;
    percent: number;
};

type Link = {
    text: string;
    url: string;
};

export type PortfolioItemType = {
    name: string;
    date: string;
    job: string;
    contribution: ContributionType[];
    links?: Link[];
    skills?: string[];
    thumbnail: string;
    detail: PortfolioDetailType[];
};

export type PortfolioListType = {
    company: string;
    projects: PortfolioItemType[];
};
