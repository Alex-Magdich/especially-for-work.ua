import React, { FocusEvent } from 'react';
import {TFilters} from "./types";
import FilterCard from "./items/FilterCard";
import FilterIcon from "./items/FilterIcon";

const Filters:React.FC<TFilters> = ({name, filters}) => {
    const [state, setState] = React.useState(filters);
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeFilter, setActiveFilter] = React.useState(filters[0]);

    const handleToggleIsOpen = () => setIsOpen(!isOpen);

    const setActive = (name: string) => {
        setState(state.map(item => ({
            ...item, isActive: item.name === name
        })))
        setActiveFilter(state.find(item=> item.name === name) || state[0]);
        setIsOpen(false);
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        const currentTarget = e.currentTarget;
        setTimeout(() => {
            if (!currentTarget.contains(document.activeElement)) setIsOpen(false);
        }, 0);
    };

    return (
        <div className='relative' onBlur={handleBlur} tabIndex={0}>
            <div className='filter-button' onClick={handleToggleIsOpen}>
                <span>{activeFilter.name}</span>
                <FilterIcon isOpen={isOpen}/>
            </div>
            {isOpen && <FilterCard name={name} filters={state} onClick={setActive}/>}
        </div>
    );
};

export default Filters;