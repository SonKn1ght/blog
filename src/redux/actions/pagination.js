
import {baseUrl, queryListArcticle} from "../api";

export const setLoaded = (page) => {
  return {
    type:"SET/LOADING",
    currentPage:page
  }
}


export const pagination = (page) => {
  return async (dispatch) => {
    fetch((`${baseUrl}${queryListArcticle}${(page-1)*20}`))
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        dispatch( {
          type:'GET/UPDATE',
          payload:res.articles,
          currentPage:page
        })
      })

  }
}
