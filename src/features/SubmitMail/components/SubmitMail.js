import React, { useEffect } from 'react'
import { Label, InputForm } from './CommonComponent'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { InputName, InputNumber, InputEmail, InputDate, InputMessage, DataSumitReturn } from '../../../components/redux/actions'
import { FetchSumitAPI } from '../../../network/api.Fetched'
export const SumitMail = () => {
//there can be date format problem
//date format return mm-dd-yyy
    const { name, phone, email, date, message, ReturnMessage } = useSelector(state => ({
        name: state.Name, phone: state.Phone, email: state.Email, date: state.Date, message: state.Message, ReturnMessage: state.ReturnMessage
    }), shallowEqual)
    const dispatch = useDispatch()
    let timeoutId = null
    useEffect(() => {
        clearTimeout(timeoutId)
    }, [])
    const SubmitData = e => {
        e.preventDefault()
        FetchSumitAPI({ name: name, phone: phone, email: email, date: date, message: message }, (netWorkErr, userErr, data) => {
            if (netWorkErr !== null) {
                console.log(netWorkErr)
            }
            else if (userErr !== null) {
                console.log(userErr)
            }
            else {
                dispatch(DataSumitReturn(data.msg))
            }
            timeoutId = setTimeout(() => {
                window.location.reload()
            }, 200)

        })

    }
    return (
        <div className="container">
            <div className="row my-3  justify-content-center">
                <div className="col-md-6">
                    <div className="row">
                        <div className="card box-shadow">
                            <h5 className="card-header">Email Us</h5>
                            <div className="card-body">
                                <form onSubmit={(e) => SubmitData(e)}>
                                    <div className="form-row">

                                        <div className="col">
                                            <div className="form-group">
                                                <Label text={"Name"} htmlFor={"inputName"}></Label>
                                                <InputForm type={"name"} className={"form-control"} onChange={(e) => dispatch(InputName(e.target.value))} value={name} aria-describedby={"nameHelp"} placeholder={"Enter name"} />

                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <Label text={"Date"} htmlFor={"inputDate"}></Label>
                                                <InputForm type={"date"} className={"form-control"} onChange={(e) => dispatch(InputDate(e.target.value))} value={date} aria-describedby={"dateHelp"} placeholder={"Enter date"} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">

                                        <div className="col">
                                            <div className="form-group">
                                                <Label text={"Email"} htmlFor={"inputEmail"}></Label>
                                                <InputForm type={"email"} className={"form-control"} onChange={(e) => dispatch(InputEmail(e.target.value))} value={email} aria-describedby={"emailHelp"} placeholder={"Enter email"} />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <Label text={"Phone No:"} htmlFor={"inputPhNumber"}></Label>
                                                <InputForm type={"number"} max={"999999999999"}className={"form-control"} onChange={(e) => dispatch(InputNumber(e.target.value))} value={phone} aria-describedby={"numberHelp"} placeholder={"Enter phone number"} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">

                                        <div className="col">
                                            <div className="form-group">
                                                <Label htmlFor={"inputMessage"} text={"Message"}></Label>
                                                <textarea className="form-control" required
                                                    id="exampleFormControlTextarea1" rows="3" onChange={(e) => dispatch(InputMessage(e.target.value))} value={message}></textarea>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <button style={{ width: '100%' }} className="btn btn-primary">ADD</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}

