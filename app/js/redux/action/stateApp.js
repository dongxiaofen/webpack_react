import * as ActionTypes from '../constants/stateApp';
// export default changePageNum(item) {
//   return dispatch => {
//     dispatch({
//       type: ActionTypes.CHANGE_NAV_ITME,
//       data: item
//     });
//   };
// }

// export function changePageNum(num) {
//   return function(dispatch) {
//     // interceptor(params, dispatch);
//     dispatch({
//       type: ActionTypes.CHANGE_NAV_ITME,
//       data: num
//     });
//   };
// }

export function changePageNum(num) {
  return {
    type: ActionTypes.CHANGE_NAV_ITME,
    data: num
  };
}
export function addTodo(text) {
  return { type: ADD_TODO, text }
}
