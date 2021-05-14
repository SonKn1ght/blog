const initialState = {
  tags:[]
}

const tags = (state = initialState,action) => {
  if(action.type === "ADD/INPUT") {
    return { ...state, tags: [...state.tags, action.payload] };
  }

  if(action.type === "ADD/ALL") {
    const newArrayTags = action.payload.map((tag) => {
      return {val:tag,id:new Date()}
    })
    return {
      tags: [...newArrayTags]
    }
  }

  if(action.type === "DELETE/INPUT") {
    return { ...state, tags: [...state.tags.filter(tag => tag.id !== action.payload)] };
  }

  if(action.type === "REMOVE/ALL") {
    return {
      tags: []
    }
  }

  return state
}

export default tags