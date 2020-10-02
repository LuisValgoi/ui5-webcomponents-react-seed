import '@testing-library/jest-dom/extend-expect';

import APIProvider from './APIProvider';

describe('APIProvider.js Test Suite', () => {
  test('should return URL when passed correct key', () => {
    const key = 'GET_USER_LOGGED';

    const output = APIProvider.getUrl(key);

    expect(output).toEqual('/v1/user/logged');
  });

  test('should throw error when passed wrong key', () => {
    const key = 'DOES_NOT_EXIST';
    const errorMessage = 'Url defined: ' + key + ' not found';

    const getUrl = () => APIProvider.getUrl(key);

    expect(getUrl).toThrowError(errorMessage);
  });

  test('should correctly replace key when passed correct replaceValue', () => {
    const key = 'GET_TODO_BY_ID';

    const output = APIProvider.getUrl(key, [{ value: 1 }]);

    expect(output).toEqual('/v1/todo/1');
  });

  test('should erroneously replace key when passed correct replaceValue', () => {
    const key = 'GET_TODO_BY_ID';

    const replaceUrl = () => APIProvider.getUrl(key, [{ value: 1, search: ':not_id' }]);

    expect(replaceUrl()).toEqual('/v1/todo/:id');
  });
});
