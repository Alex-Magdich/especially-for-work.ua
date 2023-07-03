import React from 'react';
import { useIntl } from 'react-intl';

type TProps = {
    textKey: string;
    disabled: boolean;
};

const Button: React.FC<TProps> = ({ textKey, disabled }) => {
    const { formatMessage } = useIntl();
    const text = formatMessage({ id: textKey });

    return (
        <button
            className="ml-2 bg-primary px-3.5 py-2 text-white rounded-filterBoxRadius disabled:opacity-75"
            disabled={disabled}
            type="submit"
        >
            {text}
        </button>
    );
};

export default Button;
