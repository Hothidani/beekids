import axios from 'axios';
import i18next from 'i18next';
import { camelizeKeys, decamelizeKeys } from 'humps';
import { isNil, mergeWith } from 'lodash';

import { stringifyParams } from 'shared/utils';
import { CookiesStorage } from './cookie';
import { API_URL } from './setting';

i18next.loadNamespaces('error_message');

const customizer = (objValue: any, srcValue: any, key: string) => {
  if (key === 'Accept-Language') {
    return objValue;
  }
  return null;
};

const defaultOptions = {};

export const generateToken = () => ({
  Authorization: `Bearer ${CookiesStorage.getAccessToken()}`,
});

function getNotAuthApi(path: string, options: any = {}, apiURL?: string) {
  return axios.get(`${apiURL || API_URL}/${path.replace(/^\//, '')}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
    },
  });
}

function getApi(path: string, options: any = {}, apiURL?: string) {
  return axios.get(`${apiURL || API_URL}/${path.replace(/^\//, '')}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      ...generateToken(),
    },
  });
}

function postApi(path: string, data: any, options: any = {}) {
  return axios.post(`${API_URL}/${path.replace(/^\//, '')}`, data, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      ...generateToken(),
    },
  });
}

function putApi(path: string, data: any, options: any = {}) {
  return axios.put(`${API_URL}/${path.replace(/^\//, '')}`, data, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      ...generateToken(),
    },
  });
}

function patchApi(path: string, data: any, options: any = {}) {
  return axios.patch(`${API_URL}/${path.replace(/^\//, '')}`, data, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      ...generateToken(),
    },
  });
}

function deleteApi(path: string, options: any = {}) {
  return axios.delete(`${API_URL}/${path.replace(/^\//, '')}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      ...generateToken(),
    },
  });
}

function handleErrorStatus(error: any) {
  switch (error) {
    default:
      return error;
  }
}

axios.interceptors.response.use(
  response => {
    let data = response?.data;
    if (data) {
      data = camelizeKeys(data);
    }
    return handleErrorStatus({ ...response, data });
  },
  error => {
    const errorResponse = error?.response;

    return Promise.reject(handleErrorStatus(errorResponse));
  }
);

axios.interceptors.request.use(
  config => {
    const newConfig = { ...config };
    if (newConfig.headers['Content-Type'] === 'multipart/form-data') return newConfig;
    if (config.params) {
      newConfig.params = decamelizeKeys(config.params);
    }
    if (config.data) {
      newConfig.data = decamelizeKeys(config.data);
    }
    return newConfig;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.defaults.paramsSerializer = params =>
  stringifyParams({
    params: decamelizeKeys({ ...params }),
    option: {
      encode: !isNil(params?.tags) || false,
    },
  });

const Api = {
  get: getApi,
  post: postApi,
  put: putApi,
  delete: deleteApi,
  patch: patchApi,
  getNotAuth: getNotAuthApi,
};

export default Api;
