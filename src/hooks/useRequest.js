import { useMutation, usePaginatedQuery, useQuery } from 'react-query';

import Request from '../util/api/engine/Request';

const REQUEST_TYPE = {
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
};

const _fetchData = (url, dataParam, config) => {
  return async () => {
    const res = await Request.get(url, dataParam, config);
    return res.data;
  };
};

const _performRequest = ({ operation, url, dataParam, requestConfig }) => {
  return Request[operation](url, dataParam, requestConfig);
};

const _useOperation = (reactQueryKey, url, config) => {
  return useQuery(reactQueryKey, _fetchData(url, null, config));
};

const _useMutation = ({ operation, url, requestConfig, mutationOptions }) => {
  return useMutation((dataParam) => {
    _performRequest({
      operation,
      url,
      dataParam,
      requestConfig,
    });
  }, mutationOptions);
};

const _usePaginatedOperation = (reactQueryKey, pageDependency, url, config) => {
  const parameters = {
    params: {
      page: pageDependency,
    },
  };
  return usePaginatedQuery([reactQueryKey, pageDependency], _fetchData(url, parameters, config));
};

export function useGet(reactQueryKey, url, config) {
  return _useOperation(reactQueryKey, url, config);
}

export function usePaginatedGet(reactQueryKey, pageDependency, url, config) {
  return _usePaginatedOperation(reactQueryKey, pageDependency, url, config);
}

export function usePost({ url, requestConfig, mutationOptions }) {
  return _useMutation({
    operation: REQUEST_TYPE.POST,
    url,
    requestConfig,
    mutationOptions,
  });
}

export function usePut({ url, requestConfig, mutationOptions }) {
  return _useMutation({
    operation: REQUEST_TYPE.PUT,
    url,
    requestConfig,
    mutationOptions,
  });
}

export function usePatch({ url, requestConfig, mutationOptions }) {
  return _useMutation({
    operation: REQUEST_TYPE.PATCH,
    url,
    requestConfig,
    mutationOptions,
  });
}

export function useDelete({ url, requestConfig, mutationOptions }) {
  return _useMutation({
    operation: REQUEST_TYPE.DELETE,
    url,
    requestConfig,
    mutationOptions,
  });
}
