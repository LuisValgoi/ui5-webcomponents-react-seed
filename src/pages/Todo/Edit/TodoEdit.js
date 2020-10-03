import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import { useGet } from '../../../hooks/useRequest';
import { ButtonDesign, FlexBox, FlexBoxAlignItems, FlexBoxDirection, Spinner } from '@ui5/webcomponents-react';
import { Button } from '@ui5/webcomponents-react';
import NavBack, { NavBackIcon } from '../../../components/NavBack/NavBack';
import CenteredContent from '../../../components/Layout/CenteredContent';
import TodoEditForm from './TodoEditForm';
import Constants from '../../../util/Constants';
import APIProvider from '../../../util/api/url/APIProvider';

export default function TodoEdit({ match }) {
  const { data, status } = useGet(Constants.REACT_QUERY.KEYS.GET_TODO_BY_ID, APIProvider.getUrl('GET_TODO_BY_ID', [{ value: match.params.id }]));
  const { t } = useTranslation();

  return (
    <>
      <Helmet title="Edit - TodoList App" />
      <NavBack text={t('components.navback.text')} />
      <CenteredContent>
        {status === Constants.REACT_QUERY.CODES.LOADING ? (
          <Spinner />
        ) : (
          <TodoEditForm data={data.data.todos}>
            <FlexBox direction={FlexBoxDirection.RowReverse} alignItems={FlexBoxAlignItems.Center}>
              <Button design={ButtonDesign.Emphasized} icon="paper-plane">
                Submit
              </Button>
              <NavBack text="Cancel" icon={NavBackIcon.NONE} />
            </FlexBox>
          </TodoEditForm>
        )}
      </CenteredContent>
    </>
  );
}
