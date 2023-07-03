import React from 'react';
import Filters from '../_common/Filters';
import { TFilterData } from '../_common/Filters/types';

const FILTERS: TFilterData = [
    { name: 'all', isActive: true },
    { name: 'comments', isActive: false },
];

const FilterProfileEvents = () => <Filters filtersData={FILTERS} nameKey="filtersEvents"/>;

export default FilterProfileEvents;
