import React from 'react';

type TProps = {
    isOpen: boolean;
};

const FilterIcon: React.FC<TProps> = ({ isOpen }) => {
    const isRotated = isOpen ? 'rotate-180' : '';

    return (
        <svg
            className={`w-4 h-4 ${isRotated}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default FilterIcon;
