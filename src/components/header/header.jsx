import React from "react"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";

import {Button} from "antd";

import avatar from "./avatar.png"

import 'antd/dist/antd.css';
import "./header.css"
import {setLoaded} from "../../redux/actions";
import getArticle from "../../redux/actions/getArticle";
import {logout} from "../../redux/actions/logout";


const Header = () => {
  const dispatch = useDispatch()
  const {username, image, auth} = useSelector(state => state.authorization)
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="title">
            <Link to="/" onClick={() => {
              dispatch(setLoaded())
              dispatch(getArticle())
            }} className="title">Realworld Blog</Link>
          </div>
          {!auth ?
            <div className="userBtn">
              <Link to="/signin">
                <Button type="text">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button type="primary" ghost>
                  Sign Up
                </Button>
              </Link>

            </div>
            :
            <div className='userAuth'>
              <Link to={"/new-article"} className="userAuth__createArticle">Create article</Link>
              <Link to={'/profile'}>
                <div className="userAuth__inner">
                  <p className="userAuth__username">{username}</p>
                  <img src={image !== "null" && image !== null ? image : avatar} alt="" className="userAuth__image"/>
                </div>
              </Link>
              <button onClick={() => {
                dispatch(logout())
              }
              } className="userAuth__logout">Log Out
              </button>
            </div>
          }
        </div>
      </div>
    </header>
  )
}


export default Header