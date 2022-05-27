import Cookies from 'universal-cookie';
import { addMonths } from 'date-fns';
import { getCurrentDomain } from 'shared/utils';

const cookies = new Cookies();
export const CookiesStorage = {
  getCookieData(key: string) {
    return cookies.get(key);
  },
  setCookieData(key: string, data: string) {
    const domain = getCurrentDomain();
    const currentTime = new Date();
    const expires = addMonths(currentTime, 1);
    cookies.set(key, data, { domain, expires, path: '/' });
  },
  clearCookieData(key: string) {
    const domain = getCurrentDomain();
    cookies.remove(key, { domain, path: '/' });
  },
  getAccessToken() {
    return cookies.get('accessToken');
  },
};
