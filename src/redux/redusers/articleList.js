
const initialState = {
  articleList: [],
  articlesCount:1,
  currentPage:1,
  loading:true
}


const articleList = (state = initialState, action) => {
  if(action.type === "GET/LISTARCTICLE") {
    return {
      articleList: action.payload.articles,
      articlesCount: action.payload.articlesCount,
      currentPage: 1,
      loading: false
    }
  }

  if(action.type === "GET/UPDATE") {
    return {
      ...state,
      articleList: action.payload,
      currentPage:action.currentPage,
      loading: false
    }
  }

  if(action.type === 'SET/LOADING') {
    return {
      ...state,
      articleList: [],
      currentPage:action.currentPage,
      loading: true
    }
  }

  if(action.type === "SET/FAVORITE" || action.type === "DELETE/FAVORITE") {
    const idx = state.articleList.findIndex((item) => {
      return item.slug === action.payload.slug
    })
    const leftArray = state.articleList.slice(0,idx)
    const rightArray = state.articleList.slice(idx + 1)
    return {
      ...state,
      articleList: [...leftArray,action.payload,...rightArray]
    }
  }

  return state
}

export default articleList