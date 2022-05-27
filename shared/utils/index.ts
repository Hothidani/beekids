import queryString from 'query-string';

function camelToSnake(value: string) {
  return value.replace(/[\w]([A-Z])/g, m => `${m[0]}_${m[1]}`).toLowerCase();
}

const stringifyParams = (data: any) => {
  const { params, option } = data;
  return queryString.stringify(params, {
    arrayFormat: 'comma',
    encode: false,
    skipNull: true,
    skipEmptyString: true,
    ...option,
  });
};

function getCurrentDomain() {
  const parts = window.location.hostname;
  return parts;
}

function getUrlRoot(pathname?: string) {
  return pathname ? pathname.split('/')[1] : '';
}

function getParamsFromUrl(param: string, url: string) {
  const urlStr = !url ? window.location.href : url;
  const urlParam = param.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regexS = `[\\?&]${urlParam}=([^&#]*)`;
  const regex = new RegExp(regexS);
  const results = regex.exec(urlStr);
  return results == null ? null : results[1];
}

export { stringifyParams, camelToSnake, getCurrentDomain, getUrlRoot, getParamsFromUrl };
