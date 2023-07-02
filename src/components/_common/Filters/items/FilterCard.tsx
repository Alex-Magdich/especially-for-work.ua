import React from 'react';
import {TFilterCard} from "../types";
import FilterItem from "./FilterItem";

const FilterCard:React.FC<TFilterCard> = ({name, filters, onClick}) => (
    <div className="filter-card">
        <p className='text-gray-500 mb-2 font-bold'>{name}</p>
        {filters.map(item => (
            <FilterItem name={item.name} onClick={onClick} isActive={item.isActive}/>
        ))}
    </div>
)

export default FilterCard;