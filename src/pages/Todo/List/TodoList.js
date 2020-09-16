import React, {useRef} from 'react'
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HyperLink from '../../../components/HyperLink/HyperLink';
import BrowserURL from '../../../util/BrowserURL';
import ComponentValidator from '../../../auth/Components/Validator';
import InformationDialog, { Type } from '../../../components/InformationDialog/InformationDialog'

export default function TodoList() {
  const dialogRef = useRef(null);
  const history = useHistory();
  const openInformationDialog = () => {
    dialogRef.current.open()
  };

  return (
    <>
      <Helmet title="List - TodoList App" />
      <HyperLink onClick={() => history.push('/dontexist')} text="Test NotFound Page" />
      <br />
      <HyperLink onClick={() => history.push(BrowserURL.BUGGY)} text="Test Error Page" />
      <br />
      <ComponentValidator allowedAuthorities={['canAccessDropApplication']} authorityKey="permissions">
        <HyperLink text="Drop Application (this is a restricted text and you should not see unless you have access)" />
      </ComponentValidator>
      <br />
      <HyperLink
        onClick={openInformationDialog}
        text='Open Information Dialog' />
      <InformationDialog
        avoidEscapeClose
        dialogRef={dialogRef}
        type={Type.Warning}
        headerText={'Header text'}
        closeButtonText={'Close'}
        innerText={'Inner text'} />
    </>
  );
}
