import React from 'react';
import FilterIcon from './FilterIcon';

type TProps = {
    name: string;
    onClick: () => void;
    isOpen: boolean;
};

const FilterButton: React.FC<TProps> = ({ name, onClick, isOpen }) => {
    return (
        <div className="filter-button" onClick={onClick}>
            <span>{name}</span>
            <FilterIcon isOpen={isOpen}/>
        </div>
    );
};

export default FilterButton;
