import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';

import ErrorBoundary from './pages/Fallback/ErrorBoundary';
import Shell from './components/Shell/Shell';
import Routes from './routes/Routes';

import './App.css';
import CenteredContent from './components/Layout/CenteredContent';
import SessionTimeoutDialog from './components/SessionTimeout/SessionTimeoutDialog';

function App() {
  const { t } = useTranslation();
  const sessionDialogRef = useRef(null);

  return (
    <BrowserRouter>
      <Helmet title={t('helmet.title.app')} />
      <Shell title={t('shell.title')} />
      <div style={{ paddingTop: '44px' }} />
      <ErrorBoundary>
        <CenteredContent>
          <Routes />
        </CenteredContent>
        <SessionTimeoutDialog dialogRef={sessionDialogRef} />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
