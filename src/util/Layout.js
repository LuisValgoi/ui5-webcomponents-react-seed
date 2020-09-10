import React from 'react';
import { Text } from '@ui5/webcomponents-react/lib/Text';

export const TextWrapper = ({ children, isOnHeader, style }) => {
  return (
    <Text
      tooltip={children}
      wrapping
      className={isOnHeader && 'text-header-color'}
      style={{ ...style, lineHeight: '20px' }}
    >
      {children}
    </Text>
  );
};
