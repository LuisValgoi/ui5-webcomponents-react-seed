import React from 'react';

import { Button, ButtonDesign, FlexBox } from '@ui5/webcomponents-react';
import { useHistory } from 'react-router-dom';
import { spacing } from '@ui5/webcomponents-react-base';

export default function NavBack({ text = 'Back' }) {
  const history = useHistory();

  return (
    <FlexBox style={spacing.sapUiTinyMargin}>
      <Button data-testid="navback-wrapper" design={ButtonDesign.Transparent} disabled={false} icon="nav-back" iconEnd={false} onClick={() => history.goBack()} submits={false}>
        {text}
      </Button>
    </FlexBox>
  );
}
