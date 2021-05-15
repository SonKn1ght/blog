import {baseUrl} from "../api";

export const onAuthorization = (date) => {
  return (dispatch) => {
    const jsonDate = JSON.stringify({
      "user": {
        "email": date.email.toLowerCase(),
        "password": date.password
      }
    })
    fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: jsonDate
    })
      .then((res) => {
        return res.json()
      })
      .then((bodyUser) => {
        dispatch({
          type: "POST/AUTHORIZATION",
          payload: bodyUser.user
        })
      })
      .catch(() => {
        dispatch({
          type: "AUTHORIZATION/ERROR"
        })
      })
  }
}


export const onRegistration = (date) => {
  return async (dispatch) => {
    try {
      const jsonDate = JSON.stringify({
        "user": {
          "username": date.Username,
          "email": date.Email,
          "password": date.password
        }
      })
      const bodyUser = await (await fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: jsonDate
      })).json()
      if(bodyUser.errors) {
        throw new Error('asdasd')
      }
      dispatch({
        type: "POST/AUTHORIZATION",
        payload: bodyUser.user
      })
    } catch (err) {
      dispatch({
        type: "REG/ERROR"
      })
    }
  }
}