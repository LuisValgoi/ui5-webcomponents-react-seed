import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ReactQueryCacheProvider, QueryCache } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import ErrorBoundary from './pages/Fallback/ErrorBoundary';
import Shell from './components/Shell/Shell';
import Routes from './routes/Routes';

import './App.css';

const queryCache = new QueryCache();

function App() {
  const { t } = useTranslation();

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
        <Helmet title={t('helmet.title.app')} />
        <Shell title={t('shell.title')} />
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </BrowserRouter>
    </ReactQueryCacheProvider>
  );
}

export default App;
