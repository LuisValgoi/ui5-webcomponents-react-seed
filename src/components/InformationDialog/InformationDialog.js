// lifecycle & hooks
import React, { useEffect} from 'react';
import { useTranslation } from 'react-i18next';

// styling
import { spacing } from '@ui5/webcomponents-react-base';

// helpers, variables & components
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';

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
        color: 'var(--sapUiFieldWarningColor)'
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
        color: 'var(--sapUiButtonRejectActiveBackground)'
      }}
    />
  );
};

const _getHeaderInfoIcon = () => {
  return (
    <Icon
      name="message-information"
      style={{
        width: '1.5rem',
        height: '1.5rem',
        color: 'var(--sapTextColor)'
      }}
    />
  );
};

const _handleAvoidEscapeClosing = (avoidEscapeClose) => {

  const escapeKey = 27;

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === escapeKey && avoidEscapeClose) {
      e.stopPropagation();
    }
  }, true);
};

// component
const InformationDialog = ({ dialogRef, avoidEscapeClose, headerText, innerText, closeButtonText, children, onClose, type }) => {
  const { t } = useTranslation();

  useEffect(() => {
    _handleAvoidEscapeClosing(avoidEscapeClose);
  }, [avoidEscapeClose]);

  const _onClose = () => {
    onClose && onClose();
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const _getFooter = () => {
    return (
      <FlexBox
        direction={FlexBoxDirection.RowReverse}
        alignItems={FlexBoxAlignItems.Center}
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
        direction={FlexBoxDirection.Row}
      >
        {_getHeaderIcon(type)}
        <Text
          tooltip={headerText}
          wrapping
          style={spacing.sapUiTinyMarginBegin}
        >
          {headerText}
        </Text>
      </FlexBox>
    );
  };

  return (
    <Dialog
      ref={dialogRef}
      slot="header"
      header={_getHeader()}
      footer={_getFooter()}
      onAfterClose={_onClose}
    >
      <div style={{ ...spacing.sapUiContentPadding }}>
        <FlexBox direction={FlexBoxDirection.Column} >
          {innerText ? <Text wrapping >{innerText}</Text> : children}
        </FlexBox>
      </div>
    </Dialog>
  );
};

// export component
export default InformationDialog;

// export type
export const Type = {
  Warning: 'WARNING',
  Error: 'ERROR',
  Info: 'INFO'
};
