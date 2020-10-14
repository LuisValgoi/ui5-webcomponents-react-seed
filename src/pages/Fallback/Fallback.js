import React from 'react';
import { useTranslation } from 'react-i18next';

import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';

import BrowserProvider from '../../util/browser/BrowserProvider';

const style = {
  wrapper: {
    width: '100%',
  },
  image: {
    width: '30%',
  },
  reloadButton: {
    cursor: 'pointer',
  },
};

const Fallback = ({ image, altImage, text, reload }) => {
  const { t } = useTranslation();

  return (
    <FlexBox style={style.wrapper} direction={FlexBoxDirection.Column} justifyContent={FlexBoxJustifyContent.Center} alignItems={FlexBoxAlignItems.Center}>
      <img src={image} style={style.image} alt={altImage} />
      <h3 className="text-center">{text}</h3>
      {reload && (
        <a style={style.reloadButton} href={BrowserProvider.getUrl('HOME')} target="_self">
          {t('page.fallback.reload.text')}
        </a>
      )}
    </FlexBox>
  );
};

export default Fallback;
