import React from "react";
import './modalDelete.css'
import {baseUrl} from "../../redux/api";

import {useHistory} from "react-router";


const ModalDelete = (props) => {
  const {slug} = props
  const history = useHistory()

 const deleteArticle = async () => {
    await fetch(`${baseUrl}/articles/${slug}`,{
      method:"DELETE",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
   history.push('/')
 }

  return (
    <>
    <div className="modal">
      <p className="modal__text">Are you sure to delete this article?</p>
      <div className="modal__btns">
        <button className="modal__btnNo" onClick={() => props.setShowModal(false)}>no</button>
        <button className="modal__btnYes" onClick={() => deleteArticle()}>yes</button>
      </div>
    </div>
    </>
  )
}

export default ModalDelete