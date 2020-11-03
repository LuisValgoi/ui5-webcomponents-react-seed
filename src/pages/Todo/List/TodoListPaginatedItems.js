import React, { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { usePaginatedGet } from '../../../hooks/useRequest';

import { Spinner, Button, FlexBox, FlexBoxAlignItems, Dialog, StandardListItem, List } from '@ui5/webcomponents-react';
import { Pagination } from '../../../components/Pagination/Pagination';

import Constants from '../../../util/Constants';
import BrowserProvider from '../../../util/browser/BrowserProvider';
import APIProvider from '../../../util/api/url/APIProvider';
import AddTodoForm from '../Add/AddTodoForm';

export default function TodoListPaginatedItems() {
  const history = useHistory();
  const [page, setPage] = useState(0);
  const dialogRef = useRef();
  const { resolvedData, isLoading } = usePaginatedGet(Constants.REACT_QUERY.KEYS.RQ_GET_TODO_LIST, page, APIProvider.getUrl('GET_TODO_LIST'));
  const onOpenDialogClick = useCallback(() => {
    dialogRef.current.open();
  }, [dialogRef]);
  const closeDialog = useCallback(() => {
    dialogRef.current.close();
  }, [dialogRef]);

  const redirectToEditPage = (e) => {
    history.push(BrowserProvider.getUrl('TODO_EDIT', [{ value: e.detail.item.dataset.id }]));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <FlexBox alignItems={FlexBoxAlignItems.Center}>
        <h3>{`Records (${resolvedData.numberOfElements} / ${resolvedData.totalElements})`}</h3>
        <Button icon="add" style={{ marginLeft: '10px' }} onClick={onOpenDialogClick} />
      </FlexBox>

      <List onItemClick={(e) => redirectToEditPage(e)}>
        {resolvedData.content.map((todo, index) => (
          <StandardListItem data-id={todo.id} key={index} iconEnd={false} info={todo.description} infoState="None" selected={false}>
            {todo.name}
          </StandardListItem>
        ))}
      </List>
      <Pagination numberOfElements={resolvedData.numberOfElements} totalPages={resolvedData.totalPages} selectedPage={resolvedData.number} setPage={(params) => setPage(params)} />
      <Dialog ref={dialogRef} headerText="Add">
        <AddTodoForm dialogClose={closeDialog} />
      </Dialog>
    </>
  );
}
