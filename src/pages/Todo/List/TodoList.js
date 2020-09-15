import React from 'react'
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HyperLink from '../../../components/HyperLink/HyperLink';
import BrowserURL from '../../../util/BrowserURL';
import ComponentValidator from '../../../auth/Components/Validator';
import { List, StandardListItem } from '@ui5/webcomponents-react';
import SortButton from '../../../components/Sort/SortButton';

export default function TodoList() {
  const history = useHistory();
  const listData = ["1", "3", "abc"];

  return (
    <>
      <Helmet title='List - TodoList App' />
      <HyperLink
        onClick={() => history.push('/dontexist')}
        text='Test NotFound Page' />
      <br />
      <HyperLink
        onClick={() => history.push(BrowserURL.BUGGY)}
        text='Test Error Page' />
      <br />
      <ComponentValidator
        allowedAuthorities={['canAccessDropApplication']}
        authorityKey='permissions'>
        <HyperLink
          text='Drop Application (this is a restricted text and you should not see unless you have access)' />
      </ComponentValidator>
      <div>
        <SortButton/>
        <List>
          {listData.map((item) => (
            <StandardListItem key={item} info={item}>{item}</StandardListItem>
          ))}
        </List>
      </div>
    </>
  )
}
