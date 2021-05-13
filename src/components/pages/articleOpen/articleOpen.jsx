//Dependencies
import React from "react";

import {HeartOutlined} from "@ant-design/icons";
import {Space, Spin, Tag} from "antd";
import avatar from "../../article/avatar.png";

//Component
import {Header} from "../../index";
import './articleOpen.css'
import {useSelector} from "react-redux";


const ArcticleOpen = () => {
  const oneArticle = useSelector(state => state.oneArticle.article)
  const loading = useSelector(state => state.oneArticle.loading)
  const username  = useSelector(state => state.authorization.username)
  const {author, description, favoritesCount, title, createdAt, body, tagList} = oneArticle
  const optionsDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  }
  return (
    <>
      <Header/>
      {
        loading ?
          <Space size="middle" style={{display: "flex", justifyContent: "center", margin: '20px'}}>
            <Spin size="large"/>
          </Space>
          :
          <div className="arcticle">
            <div className="arcticle__header">
              <div className="titleBlog">
                <div className="titleBlog__inner">
                  <h5 className="arcticle__titles">{title}</h5>
                  <button className="arcticle__like">
                    <HeartOutlined/>
                    {favoritesCount}
                  </button>
                </div>
                {tagList && tagList.map((tag) => {
                  return <Tag>{tag}</Tag>
                })}
              </div>
              <div className="arcticle__wrapper">
                <div className="titleUser">
                  <div className="titleUser__inner">
                    <h6 className="titleUser__name">{author.username}</h6>
                    <div className="titleUser__date">
                      {new Date(createdAt).toLocaleDateString('en-US', optionsDate)}
                    </div>
                  </div>
                  <div className="arcticle__avatar">
                    <img src={author.image || avatar} alt="/"/>
                  </div>
                </div>
                {
                  username === author.username ?                 <div className="article__btn">
                    <button className="article__delete">Delete</button>
                    <button className="article__edit">Edit</button>
                  </div>
                    :null
                }

              </div>

            </div>
            <div className="arcticle__main">
              <p className="arcticle__text">
                {description}
              </p>
              <p className="arcticle__text--open">
                {body}
              </p>
            </div>
          </div>
      }
    </>
  )
};

export default ArcticleOpen