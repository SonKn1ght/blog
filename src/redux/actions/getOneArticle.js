import { listArcticle, baseUrl} from "../api";


const getOneArticle = (slug) => {
  return async (dispatch) => {
    fetch(`${baseUrl}${listArcticle}/${slug}`)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        dispatch({
          type:"SET/ONEARTICLE",
          payload: res.article
        })
      })
  }
}

export default getOneArticle