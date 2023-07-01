import {ReactNode} from "react";

export type TTabButton = {
    tabName: string;
    isActive: boolean;
    onClick: () => void;
    additional?: ReactNode;
}

export type TTabItem = {
    name: string;
    content: ReactNode;
    additional?: ReactNode;
}

export type TTabsData = Array<TTabItem>;

export type TTabs = {
    tabs: TTabsData
}