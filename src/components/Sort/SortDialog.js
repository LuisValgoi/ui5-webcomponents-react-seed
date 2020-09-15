import React, { useEffect, useRef, useState } from 'react';
import { Button, ButtonDesign, Dialog, FlexBox, FlexBoxJustifyContent, List, StandardListItem } from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';
import { useTranslation } from 'react-i18next';

export default function SortDialog({open}) {
  const dialogRef = useRef(null);
  const listData = ["1", "3", "abc"];
  const [openDialog, setOpenDialog] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setOpenDialog(open);
  }, [open]);

  useEffect(() => {
    openDialog ? dialogRef.current.open() : dialogRef.current.close();
  }, [openDialog]);

  const onCloseSortDialog = () => {
    setOpenDialog(false);
    return;
  }

  const onApplySort = () => {
    setOpenDialog(false);
    return;
  }

  const getFooter = () => {
    return (
      <FlexBox
        justifyContent={FlexBoxJustifyContent.End}
        style={{ ...spacing.sapUiTinyMargin, width: '100%' }}
      >
        <Button
          design={ButtonDesign.Transparent}
          onClick={onCloseSortDialog}
        >
          {t('sort.dialog.close')}
        </Button>
        <Button
          design="Emphasized"
          onClick={onApplySort}
        >
          {t('sort.dialog.apply')}
        </Button>
      </FlexBox>
    );
  };

  return (
    <Dialog
      ref={dialogRef}
      headerText={t('sort.dialog.title')}
      footer={getFooter()}>
      <List>
        {listData.map((item) => (
          <StandardListItem key={item} info={item}>{item}</StandardListItem>
        ))}
      </List>

      {/* <div
        style={{
          width: '15rem',
          maxWidth: '100%',
          padding: '1rem'
        }}
      >
        <FlexBoxColumnWrapper style={{ width: '100%' }}>
          <TitleWrapper level={TitleLevel.H4} style={{ fontWeight: 'bold' }}>
            {t('sortDialog.sortDirection')}
          </TitleWrapper>
          {SortDialogModel.getOrders().map((orderProperty, index) => (
            <LabelAndRadioButtonWrapper
              key={`OrderGroup${orderProperty}`}
              name='OrderGroup'
              value={orderProperty}
              checked={orderProperty === order}
              onChange={e => setOrder(e.target.value)}
              text={SortDialogModel.getOrdersText()[index]} />
          ))}
        </FlexBoxColumnWrapper>

        <FlexBoxColumnWrapper style={{ width: '100%' }}>
          <TitleWrapper
            level={TitleLevel.H4}
            style={{
              fontWeight: 'bold',
              marginTop: '1rem'
            }}
          >
            {t('sortDialog.sortBy')}
          </TitleWrapper>
          {sortProperties.map((sortProperty, index) => (
            <LabelAndRadioButtonWrapper
              key={`PropertiesGroup${sortProperty}`}
              name='PropertiesGroup'
              value={sortProperty}
              checked={sortProperty === property}
              onChange={e => setProperty(e.target.value)}
              text={sortText[index]} />
          ))}
        </FlexBoxColumnWrapper>
      </div> */}

    </Dialog>
  );
}
