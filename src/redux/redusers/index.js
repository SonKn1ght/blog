import { combineReducers } from 'redux'
import articleList from "./articleList"
import oneArticle from './oneArticle'
import authorization from "./authorization";
import tags from "./tags";

const rootReducer = combineReducers({
  articleList,
  oneArticle,
  authorization,
  tags
})

export default rootReducer