type DetailBase = {
    subTitle?: string;
    subLink?: Link;
};

export type OnlyImagesType = DetailBase & {
    detailType: "IMG";
    imgUrls: string[];
};

export type CodeType = DetailBase & {
    detailType: "CODE";
    code: string;
    text: string[];
};

export type ImageDescType = DetailBase & {
    detailType: "DESC";
    img: string;
    imgSize?: "long";
    text: string[];
};

export type PortfolioDetailType = CodeType | ImageDescType | OnlyImagesType;

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
    thumbnail: string;
    job: string;
    date: string;
    contribution?: ContributionType[];
    projectType?: string;
    links?: Link[];
    skills?: string[];
    mainDesc?: string[];
    details: PortfolioDetailType[];
};

export type PortfolioListType = {
    company: string;
    projects: PortfolioItemType[];
};
