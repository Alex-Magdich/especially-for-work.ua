import React from 'react';
import {TTabs} from "./types";
import TabButton from "./items/TabButton";

const Tabs:React.FC<TTabs> = ({tabs}) => {
    const [currentTabIndex, setCurrentTabIndex] = React.useState(1);
    const currentTabContent = tabs[currentTabIndex].content;

    return (
        <div className='h-full flex flex-col'>
            <div className='flex relative mb-[-1px]'>
                {tabs.map((item, index) => {
                    const handleChangeTab = () => setCurrentTabIndex(index);

                    return (
                        <TabButton
                            key={item.name}
                            tabName={item.name}
                            isActive={index === currentTabIndex}
                            onClick={handleChangeTab}
                            additional={item.additional}
                        />
                    )
                })}
            </div>
            <div className='h-full overflow-hidden border border-neutral-300'>
                {currentTabContent}
            </div>
        </div>
    );
};

export default Tabs;