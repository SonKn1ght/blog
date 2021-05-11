//Dependencies
import React from "react"
import {getOneArticle} from "../../redux/actions";


//Component
import { Tag } from 'antd';

//Icon
import avatar from "./avatar.png"
import {HeartOutlined} from  '@ant-design/icons'

//Style
import './article.css'
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";


const Article = ({title, description, tagList, slug, author, createdAt, favoritesCount}) => {
  const dispatch = useDispatch()
  // title, description, tagList,createdAt,author
  const optionsDate = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
  }
  return (
    <>


      <div className="arcticle">
        <div className="arcticle__header">
          <div className="titleBlog">
            <div className="titleBlog__inner">
              <Link to={`/articles/${slug}`} onClick={() => {
                dispatch(getOneArticle(slug))
              }
              }>
              <h5 className="arcticle__titles">{title}</h5>
              </Link>
              <button className="arcticle__like">
                <HeartOutlined/>
                {favoritesCount}
              </button>
            </div>
            {tagList.map((tag) => {
              return <Tag>{tag}</Tag>
            })}
          </div>
          <div className="titleUser">
            <div className="titleUser__inner">
              <h6 className="titleUser__name">{author.username}</h6>
              <div className="titleUser__date">
                { new Date(createdAt).toLocaleDateString('en-US',optionsDate)}
              </div>
            </div>
            <div className="arcticle__avatar">
              <img src={author.image || avatar} alt="/"/>
            </div>
          </div>

        </div>
        <div className="arcticle__main">
          <p className="arcticle__text">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}

export default Article