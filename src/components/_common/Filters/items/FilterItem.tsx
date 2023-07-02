import React from 'react';

export type TProps = {
    name: string;
    onClick: (name: string) => void;
    isActive: boolean;
}

const FilterItem:React.FC<TProps> = ({name, onClick, isActive}) => {
    const handleClick = () => onClick(name);

    return (
        <label className='flex items-center cursor-pointer' onClick={handleClick}>
            <input checked={isActive} type="radio" className="w-4 h-4 mr-1.5 cursor-pointer" readOnly/>
            <span>{name}</span>
        </label>
    );
};

export default FilterItem;