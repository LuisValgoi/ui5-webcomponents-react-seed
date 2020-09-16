import React, { useEffect, useState, useRef } from 'react';
import InformationDialog, { Type } from '../InformationDialog/InformationDialog';
import i18n from '../../util/i18n';

const SESSION = {
  TIMEOUT_INTERVAL: 60000,
  REFRESH_LIMIT: 4,
  REFRESH_WARNING: 2,
};

const TIMEOUT_MODE = {
  type: Type.Error,
  headerText: i18n.t('session.expired'),
  closeButtonText: i18n.t('session.expired.button.reload'),
  innerText: i18n.t('session.expired.text'),
  onClose: () => window.location.reload(),
};

const WARNING_MODE = {
  type: Type.Warning,
  headerText: i18n.t('session.warning.expired'),
  closeButtonText: i18n.t('session.expired.button.close'),
  innerText: i18n.t('session.warning.expired.text'),
  onClose: null,
};

const SessionTimeoutDialog = () => {
  const dialogRef = useRef(null);
  const ACTIVITY_EVENTS = ['click', 'focus', 'blur', 'keyup', 'keydown', 'mousemove', 'scroll'];
  const [sessionIntervalCount, setSessionIntervalCount] = useState(1);
  const [options, setOptions] = useState(TIMEOUT_MODE);
  let sessionIntervalFinder = null;

  useEffect(() => {
    handleUserActivity();
  });

  useEffect(() => {
    sessionIntervalFinder = setInterval(() => {
      if (sessionIntervalCount >= SESSION.REFRESH_WARNING && sessionIntervalCount < SESSION.REFRESH_LIMIT) {
        setOptions(WARNING_MODE);
        dialogRef.current.open();
      } else if (sessionIntervalCount >= SESSION.REFRESH_LIMIT) {
        setOptions(TIMEOUT_MODE);
        dialogRef.current.open();
      }

      setSessionIntervalCount(sessionIntervalCount + 1);
    }, SESSION.TIMEOUT_INTERVAL);
  });

  const handleUserActivity = () => {
    ACTIVITY_EVENTS.forEach((EVENT) => {
      window.addEventListener(EVENT, () => {
        setSessionIntervalCount(0);
        clearInterval(sessionIntervalFinder);
      });
    });
  };

  return (
    <InformationDialog
      avoidEscapeClose
      dialogRef={dialogRef}
      type={options.type}
      onClose={options.onClose}
      headerText={options.headerText}
      closeButtonText={options.closeButtonText}
      innerText={options.innerText}
    />
  );
};

export default SessionTimeoutDialog;
