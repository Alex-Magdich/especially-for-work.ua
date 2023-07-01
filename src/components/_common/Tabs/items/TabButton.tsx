import React from 'react';
import {TTabButton} from "../types";

const TabButton:React.FC<TTabButton> = ({
    tabName,
    isActive,
    onClick,
    additional
}) => {
    const checkIsActive = isActive
        ? 'bg-white border border-neutral-300 border-b-0'
        : 'bg-neutral-300 border border-transparent cursor-pointer active:shadow-tabButtonActive';

    return (
        <div className={`select-none py-2.5 px-8 flex ${checkIsActive}`} onClick={onClick}>
            <span>{tabName}</span>
            {!!additional && (
                <span className={`ml-1 ${isActive ? '' : 'pointer-events-none'} `}>{additional}</span>
            )}
        </div>
    );
};

export default TabButton;