//Dependencies
import React from "react"
import {useSelector} from "react-redux";

//Component
import { Article } from "../";
import { Spin, Space } from 'antd';

//Style
import "./articlesList.css"


const ArticlesList = () => {
  const articlesList = useSelector(state => state.articleList.articleList)
  const loadingStatus = useSelector(state => state.articleList.loading)
  const newArrayArticList = articlesList.map((article) => {
    return  <Article key={`${article.slug}${article.createdAt}`} {...article} />
  })
  return (
    <div className="articlesList">
      {
        loadingStatus ?
          <Space size="middle" style={{display:"flex",justifyContent:"center",margin: '20px'}}>
            <Spin size="large" />
          </Space>
          : newArrayArticList
      }
    </div>
  )
}

export default ArticlesList