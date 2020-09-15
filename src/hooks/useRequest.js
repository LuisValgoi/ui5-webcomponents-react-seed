import { useQuery } from 'react-query';

import UrlProvider from '../util/URLProvider';
import Request from '../util/Request';

const FIVE_MINUTES_IN_MILLISECONDS = 1000 * 60 * 5;
const REQUEST = {
  GET: 'get',
  POST: 'get',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
};

function useOperation(reactQueryKey, operation, urlKey, dataParam, config) {
  const { data, status } = useQuery(
    reactQueryKey,
    async () => {
      const url = UrlProvider.getUrl(urlKey);
      const res = await Request[operation](url, dataParam, config);
      return res.data;
    },
    {
      staleTime: Constants.REACT_QUERY.STALE_TIME,
    },
  );

  return { data, status };
}

export function useGet(reactQueryKey, urlKey, config) {
  return useOperation(reactQueryKey, REQUEST.GET, urlKey, null, config ? config : null);
}

export function usePost(reactQueryKey, urlKey, dataParam, config) {
  return useOperation(reactQueryKey, REQUEST.POST, urlKey, dataParam ? dataParam : null, config ? config : null);
}

export function usePut(reactQueryKey, urlKey, dataParam, config) {
  return useOperation(reactQueryKey, REQUEST.PUT, urlKey, dataParam ? dataParam : null, config ? config : null);
}

export function usePatch(reactQueryKey, urlKey, dataParam, config) {
  return useOperation(reactQueryKey, REQUEST.PATCH, urlKey, dataParam ? dataParam : null, config ? config : null);
}

export function useDelete(reactQueryKey, urlKey, config) {
  return useOperation(reactQueryKey, REQUEST.DELETE, urlKey, null, config ? config : null);
}
