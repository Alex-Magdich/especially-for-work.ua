import React from 'react';
import Tabs from "../_common/Tabs";
import {TTabsData} from "../_common/Tabs/types";
import FilterProfileEvents from "../FilterProfileEvents";
import TabEvents from "./TabEvents";

const TABS: TTabsData = [
    {
        name: 'Резюме та відгуки',
        content: <div>Резюме та відгуки</div>
    },
    {
        name: 'Події',
        content: <TabEvents/>,
        additional: <FilterProfileEvents/>
    },
    {
        name: 'Ще проходить',
        content: <div>Ще проходить</div>
    },
];

const ProfileTabs = () => <Tabs tabs={TABS}/>

export default ProfileTabs;