//Dependencies
import React, {useState} from "react";
import {Header, ModalDelete} from "../../";
import {Space, Spin, Tag} from "antd";
import avatar from "../../article/avatar.png";
import {Link} from 'react-router-dom'

//Component

import './articleOpen.css'
import {useDispatch, useSelector} from "react-redux";
import {editArticle} from "../../../redux/actions/editArticle";


const ArcticleOpen = () => {
  const oneArticle = useSelector(state => state.oneArticle.article)
  const loading = useSelector(state => state.oneArticle.loading)
  const username  = useSelector(state => state.authorization.username)
  const {author, description, title, createdAt, body, tagList} = oneArticle
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false)
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
                </div>
                {tagList && tagList.map((tag) => {
                  return <Tag key={`${tag}${new Date()}_${username}`} >{tag}</Tag>
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
                  username === author.username ? <div className="article__btn">
                    <button className="article__delete" onClick={() => {
                      setShowModal(!showModal)
                    }}>Delete</button>
                    <Link to={`/articles/${oneArticle.slug}/edit`} onClick={() => {
                    dispatch(editArticle())}
                    } className="article__edit">Edit</Link>
                  </div>
                    :null
                }
                {showModal ? <ModalDelete setShowModal={setShowModal} slug={oneArticle.slug}/> : null}
              </div>

            </div>
            <div className="arcticle__main arcticle__open">
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