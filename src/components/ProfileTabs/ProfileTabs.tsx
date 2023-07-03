import React from 'react';
import { useIntl } from 'react-intl';
import Tabs from '../_common/Tabs';
import { TTabsData } from '../_common/Tabs/types';
import FilterProfileEvents from '../FilterProfileEvents/FilterProfileEvents';
import TabEvents from './TabEvents/TabEvents';

const MockContainer = ({ textKey }: { textKey: string }) => {
    const { formatMessage } = useIntl();
    const text = formatMessage({ id: textKey });

    return (
        <div className="flex items-center justify-center h-full text-4xl">{`${text}...`}</div>
    );
};

const TABS: TTabsData = [
    {
        name: 'cvsAndFeedbacks',
        content: <MockContainer textKey="cvsAndFeedbacks"/>,
    },
    {
        name: 'events',
        content: <TabEvents/>,
        additional: <FilterProfileEvents/>,
    },
    {
        name: 'running',
        content: <MockContainer textKey="running"/>,
    },
];

const ProfileTabs = () => <Tabs tabs={TABS}/>;

export default ProfileTabs;
