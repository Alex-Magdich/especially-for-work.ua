import React from 'react';
import {TFilterCard} from "../types";

const FilterCard:React.FC<TFilterCard> = ({name, filters, onClick}) => {
    return (
        <div className="filter-card">
            <p className='text-gray-500 mb-2 font-bold'>{name}</p>
            {filters.map(item => {
                const handleClick = () => onClick(item.name);
                return (
                    <label key={item.name} className='flex items-center cursor-pointer' onClick={handleClick}>
                        <input checked={item.isActive} type="radio"
                               className="w-4 h-4 mr-1.5 cursor-pointer" readOnly/>
                        <span>{item.name}</span>
                    </label>
                )
            })}
        </div>
    );
};

export default FilterCard;