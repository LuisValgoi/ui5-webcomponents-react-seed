import React from 'react';
import { useGet } from '../../../hooks/useRequest';

import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { Spinner } from '@ui5/webcomponents-react';
import Constants from '../../../util/Constants';

export default function TodoListPagination() {
  const { data, status } = useGet(Constants.REACT_QUERY.KEYS.RQ_GET_TODO_LIST, 'GET_TODO_LIST', null);
  return (
    <div>
      {status === Constants.REACT_QUERY.CODES.LOADING ? (
        <Spinner />
      ) : (
        <List
          busy={false}
          footerText={undefined}
          header={null}
          headerText={undefined}
          infiniteScroll={false}
          inset={false}
          mode="None"
          noDataText={undefined}
          onItemClick={function noRefCheck() {}}
          onItemDelete={function noRefCheck() {}}
          onLoadMore={function noRefCheck() {}}
          onSelectionChange={function noRefCheck() {}}
          separators="All"
        >
          {data.data.todos.map((todo, index) => (
            <StandardListItem key={index} iconEnd={false} info={todo.number} infoState="None" selected={false}>
              {todo.name}
            </StandardListItem>
          ))}
        </List>
      )}
    </div>
  );
}
