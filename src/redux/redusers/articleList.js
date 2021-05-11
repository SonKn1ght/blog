
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
  return state
}

export default articleList