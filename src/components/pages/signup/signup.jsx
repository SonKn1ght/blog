//Dependencies
import React, {useState} from "react"
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom"
import {onRegistration} from "../../../redux/actions/authorization"


//Components
import {Header} from '../../'

//Style
import "./signup.css"

const Signup = () => {
  const history = useHistory()

  const {register, handleSubmit, formState: {errors}} = useForm();
  const submits = (date) => {
    onRegistration(date).then(() => {
      history.push("/");
    }).catch(() => {
      alert("Произошла ошибка, такой пользователь уже сущесвует")
    })

  }
  const [password, setPassword] = useState()
  const [checked, setChecked] = useState(false)
  return (
    <>
      <Header/>
      <div className="form__container">
        <form action="" className="signup" onSubmit={handleSubmit(submits)}>
          <h2 className="signup__label">
            Create new account
          </h2>
          <label className="signup__field">
            <span>Username</span>
            <input
              name={"Username"}
              ref={register({
                  required: true,
                  minLength:3,
                  maxLength: 20,
                }
              )}
              type="text"
              className={`signup__input ${errors.hasOwnProperty("Username") ? "signup__input--err" : ''}`}
              placeholder="Username"/>
            <p
              style={{color: "red"}}>{errors.hasOwnProperty("Username") ? "From 3 to 20 characters inclusive" : null}</p>
          </label>
          <label className="signup__field">
            <span>Email address</span>
            <input
              name={"Email"}
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
              onChange={(event) => {
                setPassword(event.target.value)}}
              className={`signup__input ${errors.hasOwnProperty("password") ? "signup__input--err" : ''}`}
              name='password'
              type="password"
              placeholder='Password'
              ref={register({ required: true, minLength: 8, maxLength: 40 })}/>
            <p
              style={{color: "red"}}>{errors.hasOwnProperty("password") ? "Your password needs to be at least 8 characters." : null}</p>
          </label>
          <label className="signup__field">
            <span>Repeat Password</span>
            <input
              type="password"
              className="signup__input"
              placeholder="Password"
              name={"RepeatPassword"}
              ref={register({
                required: true,
                minLength: 6,
                maxLength: 40,
                validate: (value) => value === password
              })}
            />
            {errors.RepeatPassword && <p style={{color: "red"}}>Passwords must match</p>}
          </label>
          <div className="signup__hr"/>
          <label className="signup__checkLabel"
                 onChange={() => setChecked(prevState => !checked)}
          >
            <input
              className="signup__checkbox"
              type="checkbox"
              name='agree'
              defaultChecked={checked}
              ref={register({ required: true })}/>
            <span>I agree to the processing of my personal information</span>
          </label>
          {
            checked ?
              <button className="signup__btn" type="submit">Create</button>
              : <button className="signup__btn" type="submit" disabled>Create</button>
          }
          <span className="signup__haveAccount">
            Already have an account? <a href="#">Sign In.</a>
        </span>
        </form>
      </div>
    </>
  )

}

export default Signup