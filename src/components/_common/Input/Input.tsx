import React, { SyntheticEvent } from 'react';
import { useIntl } from 'react-intl';

type TProps = {
    value: string;
    onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
    placeholderKey: string;
};

const Input: React.FC<TProps> = ({ value, onChange, placeholderKey }) => {
    const { formatMessage } = useIntl();
    const placeholder = formatMessage({ id: placeholderKey });

    return (
        <input
            className="border border-gray-500 h-10 px-2 py-1 flex-1"
            onChange={onChange}
            placeholder={placeholder}
            type="text"
            value={value}
        />
    );
};

export default Input;
