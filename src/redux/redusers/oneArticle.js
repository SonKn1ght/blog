
const initialState = {
  article:{
    author:{
      username:'John Doe'
    }
  },
  loading:true
}

const oneArticle = (state= initialState,action) => {
    if(action.type === "DELETE/ONEARTICLE") {
      return {
        ...state,
        loading:true
      }
    }

    if(action.type === "SET/ONEARTICLE") {
      return {
        article: action.payload,
        loading:false
      }
    }
  return state
}

export default oneArticle