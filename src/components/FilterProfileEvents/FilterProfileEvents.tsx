import React from 'react';
import Filters from "../_common/Filters";
import {TFilterData} from "../_common/Filters/types";

const FILTERS: TFilterData = [
    { name: 'Всі', isActive: true },
    { name: 'Коментарі', isActive: false }
]

const FILTER_NAME = 'Фільтри подій';

const FilterProfileEvents = () => <Filters name={FILTER_NAME} filters={FILTERS}/>

export default FilterProfileEvents;