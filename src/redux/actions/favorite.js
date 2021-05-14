import {baseUrl, listArcticle} from "../api";


export const onfavorite = (slug) => {
  return async (dispatch) => {
    const request = await (await fetch(`${baseUrl}${listArcticle}/${slug}/favorite`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${localStorage.getItem('token')}`
      },
    })).json()
    dispatch({
     type: "SET/FAVORITE",
     payload: request.article
    })
  }
}

export const unFavorite = (slug) => {
  return async (dispatch) => {
    const request = await (await fetch(`${baseUrl}${listArcticle}/${slug}/favorite`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${localStorage.getItem('token')}`
      },
    })).json()
    dispatch({
      type: "DELETE/FAVORITE",
      payload: request.article
    })
  }
}
