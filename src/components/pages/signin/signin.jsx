import React from "react"
import Header from "../../header/header";
import {Button, Checkbox} from "antd";

const Signin = () => {
  return (
    <>
      <Header/>
      <div className="form__container">
        <form action="" className="signup">
          <h2 className="signup__label">
            Sign In
          </h2>
          <label className="signup__field">
            <span>Email address</span>
            <input type="text" className="signup__input" placeholder="Email address"/>
          </label>
          <label className="signup__field">
            <span>Password</span>
            <input type="text" className="signup__input" placeholder="Password"/>
          </label>
          <Button className="signup__btn" type="primary">Login</Button>
          <span className="signup__haveAccount">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            Don’t have an account? <a href="#"> Sign Up.</a>
        </span>
        </form>
      </div>
    </>
  )
}

export default Signin