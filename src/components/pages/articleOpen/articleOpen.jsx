//Dependencies
import React from "react";

import {HeartOutlined} from "@ant-design/icons";
import {Tag} from "antd";
import avatar from "../../article/avatar.png";

//Component
import { Header } from "../../index";
import './articleOpen.css'
import {useSelector} from "react-redux";


const ArcticleOpen = () => {
  const oneArticle = useSelector(state => state.oneArticle.article)
  const {author,description, favoritesCount, title, createdAt, body, tagList} = oneArticle

  const optionsDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  }
  return (
    <>
      <Header/>
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
          <div className="titleUser">
            <div className="titleUser__inner">
              <h6 className="titleUser__name">John Doe</h6>
              <div className="titleUser__date">
                { new Date(createdAt).toLocaleDateString('en-US',optionsDate)}
              </div>
            </div>
            <div className="arcticle__avatar">
              <img src={avatar} alt="/"/>
            </div>
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
    </>
  )
}

export default ArcticleOpen