import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, screen, serverCustom } from '../../util/TestSetup';
import ComponentValidator from './Validator';
import Constants from '../../util/Constants';
import ApiURL from '../../util/ApiURL';

const GET_USER_LOGGED_RESPONSE = {
  "user":
  {
    "id": "UG9rZW1vbjowMDE=",
    "name": "testeeeeeeeeeeeeeeeee",
    "permissions": [
      'canAccessTodoListPage',
      'canAccessTodoEditPage',
      'canAccessDropApplication'
    ]
  }
};

const server = serverCustom(ApiURL.GET_USER_LOGGED, GET_USER_LOGGED_RESPONSE, Constants.REACT_QUERY.CODES.SUCCESS);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('should appear in the document', async () => {
  render(
    <ComponentValidator
      allowedAuthorities={['canAccessDropApplication']}
      authorityKey='permissions'>
      <p>inner text</p>
    </ComponentValidator>, { route: '/todo/list' });
  const validator = await waitFor(() => screen.getByTestId('validator-component'));

  expect(validator).toBeInTheDocument();
});

test('should not appear in the document', async () => {
  render(
    <ComponentValidator
      allowedAuthorities={['BLABALBLA']}
      authorityKey='permissions'>
      <p>inner text</p>
    </ComponentValidator>, { route: '/todo/list' });
  const validator = await waitFor(() => screen.queryByTestId('validator-component'));

  expect(validator).toBeNull();
});

