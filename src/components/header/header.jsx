import React from "react"
import { Link } from "react-router-dom"
import {useDispatch} from "react-redux";

import {Button} from "antd";

import 'antd/dist/antd.css';
import "./header.css"
import {setLoaded} from "../../redux/actions";
import getArticle from "../../redux/actions/getArticle";



const Header = () => {
  const dispatch = useDispatch()
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
        </div>
      </div>
    </header>
  )
}


export default Header