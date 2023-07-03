import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RawIntlProvider } from 'react-intl';
import App from './App';
import { generateIntl } from './locales/helpers';
import ua from './locales/ua';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

const intl = generateIntl({ locale: 'uk-UA', messages: ua.messages });

root.render(
    <RawIntlProvider value={intl}>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </RawIntlProvider>,
);
