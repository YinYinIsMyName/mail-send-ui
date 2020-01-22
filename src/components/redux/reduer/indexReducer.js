import {
    ChangeInputName,
    ChangeInputNumber,
    ChangeInputEmail,
    ChangeInputDate,
    ChangeInputMessage,
    ReturnMessage
} from '../actionTypes'
const initalState = {
    MessageSenderLists: [],
    Name: "",
    Date: "",
    Email: "",
    Phone: "",
    Message: "",
    ReturnMessage : ""
}

const indexReducer = (state = initalState, action) => {
    console.log(state)

    switch (action.type) {

        case ChangeInputName: return { ...state, Name: action.payload }
        case ChangeInputNumber: return { ...state, Phone: action.payload }
        case ChangeInputEmail: return { ...state, Email: action.payload }
        case ChangeInputDate: return { ...state, Date: action.payload }
        case ChangeInputMessage: return { ...state, Message: action.payload }
        case ReturnMessage : return {...state,ReturnMessage:action.payload}
        default: return state
    }



}
export default indexReducer