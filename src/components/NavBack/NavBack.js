import React from 'react';

import { Button, ButtonDesign, FlexBox } from '@ui5/webcomponents-react';
import { useHistory } from 'react-router-dom';
import { spacing } from '@ui5/webcomponents-react-base';

import i18n from '../../util/i18n';

export default function NavBack({ text = i18n.t('components.navback.text'), icon = 'nav-back', design = ButtonDesign.Transparent, disabled = false }) {
  const history = useHistory();

  return (
    <FlexBox style={spacing.sapUiTinyMargin}>
      <Button data-testid="navback-wrapper" design={design} disabled={disabled} icon={icon} iconEnd={false} onClick={() => history.goBack()} submits={false}>
        {text}
      </Button>
    </FlexBox>
  );
}

export const NavBackIcon = {
  NONE: '',
};
