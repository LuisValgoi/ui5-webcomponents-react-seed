import { Button, List, StandardListItem } from '@ui5/webcomponents-react';
import React, { useState } from 'react';
import SortDialog from './SortDialog';

export default function SortList() {
  const listData = ["1", "3", "abc"];
  const [ openSort, setOpenSort ] = useState(false);

  const handleOpenDialog = () => {
    setOpenSort(false);
    setOpenSort(true);
  }

  return (
    <div>
      <Button onClick={() => handleOpenDialog()}>Sort</Button>
      <SortDialog open={openSort} />
      <List>
        {listData.map((item) => (
          <StandardListItem key={item} info={item}>{item}</StandardListItem>
        ))}
      </List>
    </div>
  );
}


