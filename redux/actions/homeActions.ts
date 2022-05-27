import { REQUEST } from 'redux/constants';
import { Payload } from 'types/action';
import { homeConstants } from 'redux/constants/home';

export const infoSubscription = (payload?: Payload) => ({
  type: REQUEST(homeConstants.GET_DATA_INFO_SUBSCRIPTION),
  payload,
});
