import React from 'react';
import { useIntl } from 'react-intl';
import { TTabButton } from '../types';

const TabButton: React.FC<TTabButton> = ({
    index,
    tabName,
    isActive,
    onClick,
    additional,
}) => {
    const { formatMessage } = useIntl();
    const name = formatMessage({ id: tabName });

    const checkIsActive = isActive
        ? 'bg-white border border-neutral-300 border-b-0'
        : 'bg-neutral-300 border border-transparent cursor-pointer active:shadow-tabButtonActive';

    const handleClick = () => onClick(index);

    return (
        <div className={`select-none py-2.5 px-8 flex ${checkIsActive}`} onClick={handleClick}>
            <span>{name}</span>
            {!!additional && (
                <span className={`ml-1 ${isActive ? '' : 'pointer-events-none'} `}>{additional}</span>
            )}
        </div>
    );
};

export default TabButton;
