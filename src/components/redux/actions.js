import {
ChangeInputName,
ChangeInputNumber,
ChangeInputEmail,
ChangeInputDate,
ChangeInputMessage,
ReturnMessage
} from './actionTypes'

export const InputName = name =>({
    type:ChangeInputName,
    payload:name
})

export const InputNumber = number =>({
    type:ChangeInputNumber,
    payload:number
})

export const InputEmail = email =>({
    type:ChangeInputEmail,
    payload:email
})
export const InputDate = date =>({
    type:ChangeInputDate,
    payload:date
})

export const InputMessage = message =>({
    type:ChangeInputMessage,
    payload:message
})

export const DataSumitReturn = returnMessage =>({
    type:ReturnMessage,
    payload:returnMessage
})
