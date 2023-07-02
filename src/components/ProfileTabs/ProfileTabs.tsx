import React from 'react';
import Tabs from "../_common/Tabs";
import {TTabsData} from "../_common/Tabs/types";
import FilterProfileEvents from "../FilterProfileEvents";
import TabEvents from "./TabEvents";

const MockContainer = ({children}:{children: string}) => (
    <div className='flex items-center justify-center h-full text-4xl'>{children}</div>
)

const TABS: TTabsData = [
    {
        name: 'Резюме та відгуки',
        content: <MockContainer>Резюме та відгуки...</MockContainer>
    },
    {
        name: 'Події',
        content: <TabEvents/>,
        additional: <FilterProfileEvents/>
    },
    {
        name: 'Ще проходить',
        content: <MockContainer>Ще проходить...</MockContainer>
    },
];

const ProfileTabs = () => <Tabs tabs={TABS}/>

export default ProfileTabs;