import React, { useEffect, useRef } from 'react';
import { Dialog, List, StandardListItem } from '@ui5/webcomponents-react';

export default function SortDialog({open}) {
  const dialogRef = useRef(null);
  const listData = ["1", "3", "abc"];

  useEffect(() => {
    open ? dialogRef.current.open() : dialogRef.current.close();
  }, [open]);

  return (
    <Dialog
      ref={dialogRef}>
      <List>
        {listData.map((item) => (
          <StandardListItem key={item} info={item}>{item}</StandardListItem>
        ))}
      </List>
    </Dialog>
  );
}
