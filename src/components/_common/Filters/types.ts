
export type TFilterItem = {
    name: string,
    isActive: boolean,
}

export type TFilterData = Array<TFilterItem>;

export type TFilters = {
    name: string;
    filters: Array<TFilterItem>;
};

export type TFilterCard = {
    name: string;
    filters: TFilterData;
    onClick: (name: string) => void;
}
