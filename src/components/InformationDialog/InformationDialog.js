import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { spacing } from '@ui5/webcomponents-react-base';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { TextWrapper } from '../../util/Layout'
import Constants from '../../util/Constants';

const _getHeaderIcon = type => {
  switch (type) {
    case Type.Warning:
      return _getHeaderWarningIcon();
    case Type.Error:
      return _getHeaderErrorIcon();
    default:
      return _getHeaderInfoIcon();
  }
};

const _getHeaderWarningIcon = () => {
  return (
    <Icon
      name="message-warning"
      style={{
        width: '1.5rem',
        height: '1.5rem',
        color: '#feb60a'
      }}
    />
  );
};

const _getHeaderErrorIcon = () => {
  return (
    <Icon
      name="message-error"
      style={{
        width: '1.5rem',
        height: '1.5rem',
        color: '#ff5254'
      }}
    />
  );
};

const _getHeaderInfoIcon = () => {
  return (
    <Icon
      data-testid="message-information"
      name="message-information"
      style={{
        width: '1.5rem',
        height: '1.5rem',
        color: 'black'
      }}
    />
  );
};

const _handleAvoidEscapeClosing = (avoidEscapeClose) => {
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === Constants.KEYBOARD_KEYS.ESCAPE && avoidEscapeClose) {
      e.stopPropagation();
    }
  }, true);
};

const InformationDialog = ({ dialogRef, avoidEscapeClose, headerText, innerText, closeButtonText, children, onClose, type }) => {
  const { t } = useTranslation();

  useEffect(() => {
    _handleAvoidEscapeClosing(avoidEscapeClose);
  }, []);

  const _onClose = () => {
    onClose && onClose();
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const _getFooter = () => {
    return (
      <FlexBox
        alignItems={FlexBoxAlignItems.Center}
        direction={FlexBoxDirection.RowReverse}
        style={spacing.sapUiTinyMargin}
      >
        <Button design={ButtonDesign.Transparent} onClick={_onClose}>
          {closeButtonText ? closeButtonText : t('app.generics.close')}
        </Button>
      </FlexBox>
    );
  };

  const _getHeader = () => {
    return (
      <FlexBox
        alignItems={FlexBoxAlignItems.Center}
        justifyContent={FlexBoxJustifyContent.Center}
        style={spacing.sapUiContentPadding}
      >
        {_getHeaderIcon(type)}
        <TextWrapper style={spacing.sapUiTinyMarginBegin}>
          {headerText}
        </TextWrapper>
      </FlexBox>
    );
  };

  return (
    <Dialog
      ref={dialogRef}
      data-testid="information-dialog"
      slot="header"
      header={_getHeader()}
      footer={_getFooter()}
      onAfterClose={_onClose}
    >
      <div style={{ ...spacing.sapUiContentPadding }}>
        <FlexBox direction={FlexBoxDirection.Column}>
          {innerText ? <TextWrapper>{innerText}</TextWrapper> : children}
        </FlexBox>
      </div>
    </Dialog>
  );
};

export default InformationDialog;

export const Type = {
  Warning: 'WARNING',
  Error: 'ERROR',
  Info: 'INFO'
};
