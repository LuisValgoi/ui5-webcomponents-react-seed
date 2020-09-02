import React from 'react';
import { useGet } from '../../hooks/useRequest';

import Constants from '../../util/Constants';

const ComponentValidator = ({ allowedAuthorities, authorityKey, children }) => {
  const { data, status } = useGet(Constants.REACT_QUERY.KEYS.GET_USER_LOGGED, 'GET_USER_LOGGED', null);

  if (status !== Constants.REACT_QUERY.CODES.SUCCESS) {
    return null;
  }

  const hasAccess = data.data.user[authorityKey].some(permission => allowedAuthorities.includes(permission));
  if (!hasAccess) {
    return null;
  }

  return <div data-testid="validator-component">{children}</div>
}


export default ComponentValidator;
