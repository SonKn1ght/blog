
const initialState = {
  bio: localStorage.getItem("bio"),
  createdAt: localStorage.getItem("createdAt"),
  email: localStorage.getItem("email"),
  id: localStorage.getItem("id"),
  image: localStorage.getItem("image"),
  token: localStorage.getItem("token"),
  updatedAt: localStorage.getItem("updatedAt"),
  username: localStorage.getItem("username"),
  auth:localStorage.getItem("auth"),
  errorReg:false,
  errorAuth:false
}


const authorization = (state = initialState,action) => {
  if(action.type === "POST/AUTHORIZATION") {
    localStorage.setItem("bio", action.payload.bio)
    localStorage.setItem("createdAt", action.payload.createdAt)
    localStorage.setItem("email", action.payload.email)
    localStorage.setItem("id", action.payload.id)
    localStorage.setItem("image", action.payload.image)
    localStorage.setItem("token", action.payload.token)
    localStorage.setItem("updatedAt", action.payload.updatedAt)
    localStorage.setItem("username", action.payload.username)
    localStorage.setItem("auth", true)
    return {
      ...action.payload,
      auth: true,
      errorReg:false,
      errorAuth:false
    }
  }

  if(action.type === "DELETE/LOGOUT") {
    localStorage.clear("bio")
    localStorage.clear("createdAt")
    localStorage.clear("email")
    localStorage.clear("id")
    localStorage.clear("image")
    localStorage.clear("token")
    localStorage.clear("updatedAt")
    localStorage.clear("username")
    return {
      ...initialState,
      auth: false,
      errorReg:false,
      errorAuth:false
    }
  }

  if(action.type === "REG/ERROR") {
    return {
      ...state,
      errorReg:true
    }
  }

  if(action.type === "AUTHORIZATION/ERROR") {
    return {
      ...state,
      errorAuth:true
    }
  }

  return state
}

export default authorization