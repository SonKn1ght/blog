import React, {useEffect} from "react";

import { Header, ArticlesList } from "../../"
import {Pagination} from "antd";
import {useDispatch, useSelector} from "react-redux";

import { getArticle, pagination, setLoaded} from '../../../redux/actions'


const MainContent = () => {
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getArticle())
    }, [])
  const pageTotal = useSelector(state => state.articleList.articlesCount)
  const currentPage = useSelector(state => state.articleList.currentPage)
  return (
    <div className="App">
      <Header/>
      <ArticlesList/>
      <div className="pagination__container">
        <Pagination
          total={pageTotal}
          current={currentPage}
          onChange={(page) => {
            window.scrollTo(0,0)
            dispatch(setLoaded(page))
            dispatch(pagination(page))
          }
          }
          pageSize="20"
        />
      </div>

    </div>
  )
}

export default MainContent