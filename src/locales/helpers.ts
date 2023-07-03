import { createIntl, createIntlCache } from 'react-intl';

let cache: ReturnType<typeof createIntlCache>;
let intl: ReturnType<typeof createIntl>;

/**
 * Generate IntlShape object
 * @param {Object} props
 * @param {String} props.locale - User specified language
 * @param {Object} props.messages - Messages
 * @returns {Object}
 */
const generateIntl = (props: { locale: string; messages: Record<string, string> }) => {
    if (cache) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        cache = null;
    }

    cache = createIntlCache();

    intl = createIntl(props, cache);

    return intl;
};

export { generateIntl, intl };
