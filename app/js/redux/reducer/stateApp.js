import * as ActionTypes from '../constants/stateApp';
// import { fromJS } from 'immutable';

const initState = {
  currentNavItem: 0,
};

export default function myApp(state = initState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_NAV_ITME:
      return {
        currentNavItem: action.data
      }
    default:
      return state;
  }
}
