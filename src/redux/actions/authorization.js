import {baseUrl} from "../api";

export const onAuthorization = (date) => {
  return async (dispatch) => {
    const jsonDate = JSON.stringify({
      "user":{
        "email": date.email.toLowerCase(),
        "password": date.password
      }
    })
    const bodyUser = await (await fetch(`${baseUrl}/users/login`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: jsonDate
    })).json()
    dispatch({
      type: "POST/AUTHORIZATION",
      payload:bodyUser.user
    })
  }
}


export const onRegistration = async (date) => {
    const jsonDate = JSON.stringify({
      "user":{
        "username": date.Username,
        "email": date.Email,
        "password": date.password
      }
    })
    await fetch(`${baseUrl}/users`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: jsonDate
    })
}