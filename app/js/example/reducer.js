const CHANGE_TEXT = 'CHANGE_TEXT';
const BUTTON_CLICK = 'BUTTON_CLICK';

const initialState = {
    text: 'Hello'
}
export default function myApp(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text:state.text=='Hello'?'Stark':'Hello'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'You just click button'
            }
        default:
          return {
            text:'Hello'
        };
    }
}
