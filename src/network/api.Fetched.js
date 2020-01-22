import * as API from './api'

export const FetchSumitAPI = ({ name, phone, email, date, message },callback) => {
    fetch(API.Submit_Url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
        },
        body: JSON.stringify({ name: name, phoneno: phone, email: email, date: date, message: message })
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                  callback(null,null,data)
            }
            else{
                callback(null,data,null)
            }
        })
    return null
}