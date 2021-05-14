import {baseUrl, listArcticle} from "../api";


const getArticle = () => {
  return async (dispatch) => {
      await fetch(`${baseUrl}${listArcticle}`, {
        method:"GET"
      }).then((res) => {
      return res.json()
    }).then((res) => {
        dispatch(
          {
            type:"GET/LISTARCTICLE",
            payload: res
          }
        )
      })
  }
}

export default getArticle