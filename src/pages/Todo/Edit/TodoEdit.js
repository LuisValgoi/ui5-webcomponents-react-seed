import React from 'react';
import { Helmet } from 'react-helmet';

import { useGet } from '../../../hooks/useRequest';
import { Spinner } from '@ui5/webcomponents-react';
import NavBack from '../../../components/NavBack/NavBack';
import CenteredContent from '../../../components/Layout/CenteredContent';
import TodoEditForm from './TodoEditForm';
import Constants from '../../../util/Constants';
import APIProvider from '../../../util/api/url/APIProvider';

export default function TodoEdit({ match }) {
  const { data, isLoading, isSuccess } = useGet(Constants.REACT_QUERY.KEYS.GET_TODO_BY_ID, APIProvider.getUrl('GET_TODO_BY_ID', [{ value: match.params.id }]));

  return (
    <>
      <Helmet title="Edit - TodoList App" />
      <NavBack />
      <CenteredContent>
        {isLoading && <Spinner />}
        {isSuccess && <TodoEditForm data={data} />}
      </CenteredContent>
    </>
  );
}
