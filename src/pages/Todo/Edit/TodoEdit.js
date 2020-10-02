import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import CenteredContent from '../../../components/Layout/CenteredContent';
import NavBack from '../../../components/NavBack/NavBack';

export default function TodoEdit() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title="List - TodoList App" />
      <NavBack text={t('components.navback.text')} />
      <CenteredContent>
        <p>hue</p>
      </CenteredContent>
    </>
  );
}
