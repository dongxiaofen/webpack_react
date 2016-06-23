const CHANGE_TEXT = 'CHANGE_TEXT';
const BUTTON_CLICK = 'BUTTON_CLICK';
export function changeText(){
    return {
        type:'CHANGE_TEXT'
    }
}

export function buttonClick(){
    return {
        type:'BUTTON_CLICK'
    }
}
