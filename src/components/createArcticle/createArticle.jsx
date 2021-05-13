import React from "react";

import './createArticle.css'

const CreateArticle = () => {
  return (
    <>
      <div className="createArticle__container">
        <form className="createArticle__form">
          <h2 className="createArticle__title">
            Create new article
          </h2>
          <label className="createArticle__inputLabel">
            <span>Title</span>
            <input className="createArticle__input" type="text" placeholder={"Title"}/>
          </label>
          <label className="createArticle__inputLabel">
            <span>Short description</span>
            <input className="createArticle__input" type="text" placeholder={"Title"}/>
          </label>
          <label className="createArticle__inputLabel">
            <span>Text</span>
            <textarea className="createArticle__textarea" rows="8" placeholder={"Text"}/>
          </label>
          <div className="tags">
            <label className="tags__label">
              <input type="text" className="tags__input"/>
              <button type={"button"} className="tags__delete">Delete</button>
            </label>
            <label className="tags__label">
              <input type="text" className="tags__input"/>
              <button type={"button"} className="tags__delete">Delete</button>
            </label>
            <button type={"button"} className="tags__add">Add tag</button>
          </div>
          <button type={"button"} className="createArticle__send">Send</button>
        </form>
      </div>
    </>
  )
}

export default CreateArticle