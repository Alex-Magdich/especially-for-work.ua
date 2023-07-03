import React, { FocusEvent } from 'react';
import { useIntl } from 'react-intl';
import { TFilters } from './types';
import FilterCard from './Items/FilterCard';
import FilterButton from './Items/FilterButton';

const ZERO_TIME = 0;

const Filters: React.FC<TFilters> = ({ nameKey, filtersData }) => {
    const [state, setState] = React.useState({
        filters: filtersData,
        isOpen: false,
        activeFilter: filtersData[0],
    });

    const { formatMessage } = useIntl();
    const { filters, isOpen, activeFilter } = state;

    const activeFilterName = formatMessage({ id: activeFilter.name });

    const handleToggleIsOpen = () => setState({ ...state, isOpen: !isOpen });

    const setActive = (name: string) => {
        const activeFilter = filters.find(item => item.name === name) || filters[0];

        setState({
            ...state,
            filters: filters.map(item => ({ ...item, isActive: item.name === name })),
            activeFilter,
            isOpen: false,
        });
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        const currentTarget = e.currentTarget;

        setTimeout(() => {
            if (!currentTarget.contains(document.activeElement)) setState({ ...state, isOpen: false });
        }, ZERO_TIME);
    };

    return (
        <div className="relative" onBlur={handleBlur} role="button" tabIndex={0}>
            <FilterButton isOpen={isOpen} name={activeFilterName} onClick={handleToggleIsOpen}/>
            {isOpen && <FilterCard filters={filters} nameKey={nameKey} onClick={setActive}/>}
        </div>
    );
};

export default Filters;
