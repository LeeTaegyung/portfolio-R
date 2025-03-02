type PortfolioDetailType = {
    imgUrl: string;
    description: string;
};

type ContributionType = {
    text: string;
    percent: number;
};

export type PortfolioItemType = {
    name: string;
    date: string;
    job: string;
    contribution: ContributionType[];
    thumbnail: string;
    detail: PortfolioDetailType[];
};

export type PortfolioListType = {
    company: string | null;
    projects: PortfolioItemType[];
};
