import { ReactNode } from 'react';

export type TTabButton = {
    index: number;
    tabName: string;
    isActive: boolean;
    onClick: (index: number) => void;
    additional?: ReactNode;
};

export type TTabItem = {
    name: string;
    content: ReactNode;
    additional?: ReactNode;
};

export type TTabsData = Array<TTabItem>;

export type TTabs = {
    tabs: TTabsData;
};
