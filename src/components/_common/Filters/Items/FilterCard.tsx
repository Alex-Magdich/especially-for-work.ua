import React from 'react';
import { useIntl } from 'react-intl';
import { TFilterCard } from '../types';
import FilterItem from './FilterItem';

const FilterCard: React.FC<TFilterCard> = ({ nameKey, filters, onClick }) => {
    const { formatMessage } = useIntl();
    const name = formatMessage({ id: nameKey });

    return (
        <div className="filter-card">
            <p className="text-gray-500 mb-2 font-bold">{name}</p>
            {filters.map(item => (
                <FilterItem key={item.name} isActive={item.isActive} nameKey={item.name} onClick={onClick}/>
            ))}
        </div>
    );
};

export default FilterCard;
