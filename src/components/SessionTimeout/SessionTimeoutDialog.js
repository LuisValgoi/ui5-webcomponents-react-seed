import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import InformationDialog, { Type } from '../InformationDialog/InformationDialog';

const SESSION = {
  TIMEOUT_INTERVAL: 1000,
  REFRESH_LIMIT: 15,
  REFRESH_WARNING: 13,
};

const SessionTimeoutDialog = () => {
  const dialogRef = useRef(null);

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
      if (sessionIntervalCount >= SESSION.REFRESH_WARNING && sessionIntervalCount < SESSION.REFRESH_LIMIT) {
        setOptions(WARNING_MODE);
        dialogRef.current.open();

      } else if (sessionIntervalCount >= SESSION.REFRESH_LIMIT) {
        clearInterval(sessionIntervalFinder);
        setOptions(TIMEOUT_MODE);
        dialogRef.current.open();
      }

      sessionIntervalCount++;
    }, SESSION.TIMEOUT_INTERVAL);
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
