import Provider from '../Provider';

const URLs = {
  GET_USER_LOGGED: '/v1/user/logged',
  GET_TODO_BY_ID: '/v1/todo/:id',
  GET_TODO_LIST: '/v1/todo/all',
};

export default {
  getUrl(key, replaceOptions) {
    return Provider.getUrl(URLs, key, replaceOptions);
  },
};
