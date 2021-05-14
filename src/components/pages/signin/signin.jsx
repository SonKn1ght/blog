import React from "react"
import Header from "../../header/header";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {onAuthorization} from "../../../redux/actions/authorization";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";


const Signin = () => {
  const dispatch = useDispatch()
  const {register, handleSubmit, formState: {errors}} = useForm();
  const history = useHistory()

  const submits = (date) => {
    dispatch(onAuthorization(date))
    history.push('/')
  }
  return (
    <>
      <Header/>
      <div className="form__container">
        <form action="" className="signup" onSubmit={handleSubmit(submits)}>
          <h2 className="signup__label">
            Sign In
          </h2>
          <label className="signup__field">
            <span>Email address</span>
            <input
              name={"email"}
              ref={register({
                required: true,
                minLength: 6,
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                  message: '',
                },
              })}
              type="email"
              className={`signup__input ${errors.hasOwnProperty("Email") ? "signup__input--err" : ''}`}
              placeholder="Email address"/>
            <p style={{color: "red"}}>{errors.hasOwnProperty("Email") ? "Not valid email." : null}</p>
          </label>
          <label className="signup__field">
            <span>Password</span>
            <input
              className={`signup__input ${errors.hasOwnProperty("password") ? "signup__input--err" : ''}`}
              name='password'
              type="password"
              placeholder='Password'
              ref={register({ required: true, minLength: 8, maxLength: 40 })}/>
            <p
              style={{color: "red"}}>{errors.hasOwnProperty("password") ? "Your password needs to be at least 8 characters." : null}</p>
          </label>
          <button className="signup__btn" type="submit">Login</button>
          <span className="signup__haveAccount">
            Don’t have an account? <Link to='/signup'> Sign Up.</Link>
        </span>
        </form>
      </div>
    </>
  )
}

export default Signin