import { Action } from 'types/action';
import { REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  isLoading: false,
  type: '',
  isError: false,
  statusTracker: {},
};

const reducer = (state = initialState, action: Action) => {
  const { payload } = action;
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
