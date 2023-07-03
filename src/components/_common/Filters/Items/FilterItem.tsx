import React from 'react';
import { useIntl } from 'react-intl';

export type TProps = {
    nameKey: string;
    onClick: (name: string) => void;
    isActive: boolean;
};

const FilterItem: React.FC<TProps> = ({ nameKey, onClick, isActive }) => {
    const handleClick = () => onClick(nameKey);
    const { formatMessage } = useIntl();
    const name = formatMessage({ id: nameKey });
    
    return (
        <div className="flex items-center cursor-pointer" onClick={handleClick}>
            <input checked={isActive} className="w-4 h-4 mr-1.5 cursor-pointer" readOnly type="radio"/>
            <span>{name}</span>
        </div>
    );
};

export default FilterItem;
