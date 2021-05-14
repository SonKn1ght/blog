import {baseUrl} from "../api";


export const editProfile = (date) => {
  return async (dispatch) => {
    const newUserDate = await (await fetch(`${baseUrl}/user`,{
      method: "PUT",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(date)
    })).json()
    dispatch({
      type: "POST/AUTHORIZATION",
      payload:newUserDate.user
    })
  }
}