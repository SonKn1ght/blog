
const initialState = {
  article:{
    author:{
      username:'John Doe'
    }
  },
  edit:false,
  loading:true
}

const oneArticle = (state= initialState,action) => {
    if(action.type === "DELETE/ONEARTICLE") {
      return {
        ...state,
        loading:true
      }
    }

  if(action.type === "SET/EDIT") {
    return {
      ...state,
      edit:true,
    }
  }

  if(action.type === "SET/CREATE") {
    return {
      ...state,
      edit: false
    }
  }

    if(action.type === "SET/ONEARTICLE") {
      return {
        article: action.payload,
        edit:false,
        loading:false
      }
    }
  return state
}

export default oneArticle