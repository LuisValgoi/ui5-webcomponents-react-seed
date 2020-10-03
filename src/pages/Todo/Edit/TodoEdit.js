import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import { useGet } from '../../../hooks/useRequest';
import { Spinner } from '@ui5/webcomponents-react';
import NavBack from '../../../components/NavBack/NavBack';
import CenteredContent from '../../../components/Layout/CenteredContent';
import TodoEditForm from './TodoEditForm';
import Constants from '../../../util/Constants';
import APIProvider from '../../../util/api/url/APIProvider';

export default function TodoEdit({ match }) {
  const { t } = useTranslation();

  const { data, status } = useGet(Constants.REACT_QUERY.KEYS.GET_TODO_BY_ID, APIProvider.getUrl('GET_TODO_BY_ID', [{ value: match.params.id }]));

  const onSubmitEditForm = (values, actions) => {
    actions.setSubmitting(true);
    alert(JSON.stringify(values, null, 2));
    actions.resetForm(true);
    actions.setSubmitting(false);
  };

  return (
    <>
      <Helmet title="Edit - TodoList App" />
      <NavBack text={t('components.navback.text')} />
      <CenteredContent>
        {status === Constants.REACT_QUERY.CODES.LOADING && <Spinner />}
        {status === Constants.REACT_QUERY.CODES.SUCCESS && <TodoEditForm data={data.data.todos} onSumitHandler={onSubmitEditForm} />}
      </CenteredContent>
    </>
  );
}
