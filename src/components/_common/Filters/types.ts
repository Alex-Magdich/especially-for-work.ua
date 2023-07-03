
export type TFilterItem = {
    name: string;
    isActive: boolean;
};

export type TFilterData = Array<TFilterItem>;

export type TFilters = {
    nameKey: string;
    filtersData: Array<TFilterItem>;
};

export type TFilterCard = {
    nameKey: string;
    filters: TFilterData;
    onClick: (name: string) => void;
};
