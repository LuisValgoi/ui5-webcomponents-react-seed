import { Button, List, StandardListItem } from '@ui5/webcomponents-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SortDialog from './SortDialog';

export default function SortList() {
  const listData = ['1', '3', 'abc'];
  const [openSort, setOpenSort] = useState(false);
  const { t } = useTranslation();

  const handleOpenDialog = () => {
    setOpenSort(false);
    setOpenSort(true);
    return;
  };

  return (
    <div>
      <Button onClick={handleOpenDialog}>{t('sort.button.title')}</Button>
      <SortDialog open={openSort} />
      <List>
        {listData.map((item) => (
          <StandardListItem key={item} info={item}>
            {item}
          </StandardListItem>
        ))}
      </List>
    </div>
  );
}
