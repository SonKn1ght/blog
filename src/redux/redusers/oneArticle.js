
const initialState = {
  article:{}
}

const oneArticle = (state= initialState,action) => {
    if(action.type === "SET/ONEARTICLE") {
      return {
        article: action.payload
      }
    }
  return state
}

export default oneArticle