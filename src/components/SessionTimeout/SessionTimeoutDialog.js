import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InformationDialog, { Type } from '../InformationDialog/InformationDialog';
import Constants from '../../util/Constants';

const SessionTimeoutDialog = ({ dialogRef }) => {
  const { t } = useTranslation();
  const TIMEOUT_MODE = {
    type: Type.Error,
    headerText: t('session.expired'),
    closeButtonText: t('session.expired.button.reload'),
    innerText: t('session.expired.text'),
    onClose: () => window.location.reload()
  };
  const WARNING_MODE = {
    type: Type.Warning,
    headerText: t('session.warning.expired'),
    closeButtonText: t('session.expired.button.close'),
    innerText: t('session.warning.expired.text'),
    onClose: null
  };
  const [options, setOptions] = useState(TIMEOUT_MODE);
  const ACTIVITY_EVENTS = ['click', 'focus', 'blur', 'keyup', 'keydown', 'mousemove', 'scroll'];
  let sessionIntervalCount = 1;

  useEffect(() => {
    handleUserActivity();
  });

  useEffect(() => {
    const sessionIntervalFinder = setInterval(() => {
      if (sessionIntervalCount >= Constants.SESSION.REFRESH_WARNING && sessionIntervalCount < Constants.SESSION.REFRESH_LIMIT) {
        setOptions(WARNING_MODE);
        dialogRef.current.open();

      } else if (sessionIntervalCount >= Constants.SESSION.REFRESH_LIMIT) {
        clearInterval(sessionIntervalFinder);
        setOptions(TIMEOUT_MODE);
        dialogRef.current.open();
      }

      sessionIntervalCount++;
    }, Constants.SESSION.TIMEOUT_INTERVAL);
  });

  const handleUserActivity = () => {
    ACTIVITY_EVENTS.forEach(EVENT => {
      window.addEventListener(EVENT, () => {
        sessionIntervalCount = 0;
      });
    })
  };

  return (
    <InformationDialog
      avoidEscapeClose
      dialogRef={dialogRef}
      type={options.type}
      onClose={options.onClose}
      headerText={options.headerText}
      closeButtonText={options.closeButtonText}
      innerText={options.innerText} />
  );
};

export default SessionTimeoutDialog;
