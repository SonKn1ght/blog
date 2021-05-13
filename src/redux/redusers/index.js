import { combineReducers } from 'redux'
import articleList from "./articleList"
import oneArticle from './oneArticle'
import authorization from "./authorization";

const rootReducer = combineReducers({
  articleList:articleList,
  oneArticle:oneArticle,
  authorization:authorization
})

export default rootReducer