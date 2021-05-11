import { combineReducers } from 'redux'
import articleList from "./articleList"
import oneArticle from './oneArticle'

const rootReducer = combineReducers({
  articleList:articleList,
  oneArticle:oneArticle
})

export default rootReducer