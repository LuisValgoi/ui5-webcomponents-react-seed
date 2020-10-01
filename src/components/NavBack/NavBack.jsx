import { Button, FlexBox } from '@ui5/webcomponents-react';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function NavBack() {
  const history = useHistory();

  return (
    <FlexBox style={{ marginRight: '6px', marginTop: '6px', marginBottom: '6px', marginLeft: '6px' }}>
      <Button style={{ width: '100px' }} design="Default" disabled={false} icon="nav-back" iconEnd={false} onClick={() => history.goBack()} submits={false}>
        Back
      </Button>
    </FlexBox>
  );
}
