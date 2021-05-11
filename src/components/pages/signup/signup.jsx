//Dependencies
import React, {useRef, useState} from "react"
import {Controller, useForm} from "react-hook-form";

//Components
import {Header} from '../../'
import {Checkbox} from 'antd';

//Style
import "./signup.css"

const Signup = () => {
  const {register, control, handleSubmit, formState: {errors}} = useForm();
  const submits = (date) => console.log('Это работает', date)
  const inputPassword = useRef()
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
              {...register("Username", {
                  required: true,
                  minLength: 3,
                  maxLength: 20
                }
              )}
              type="text"
              className={`signup__input ${errors.hasOwnProperty("Username") ? "signup__input--err" : ''}`}
              placeholder="Username"/>
            <p
              style={{color: "red"}}>{errors.hasOwnProperty("Username") ? " From 3 to 20 characters inclusive" : null}</p>
          </label>
          <label className="signup__field">
            <span>Email address</span>
            <input
              {...register("Email", {
                required: true,
                minLength: 10,
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
            <input type="password"
                   {...register("Password", {
                     required: true,
                     minLength: 6,
                     maxLength: 40
                   })}
                   className={`signup__input ${errors.hasOwnProperty("Password") ? "signup__input--err" : ''}`}
                   id={"signup__password"}
                   placeholder="Password"/>
            <p
              style={{color: "red"}}>{errors.hasOwnProperty("Password") ? "Your password needs to be at least 6 characters." : null}</p>
          </label>
          <label className="signup__field">
            <span>Repeat Password</span>
            <input
              onChange={(event) => setRepeatPass(event.target.value)}
              type="password"
              className="signup__input"
              placeholder="Password"

              {...register("RepeatPassword", {
                required: true,
                minLength: 6,
                maxLength: 40,
                // validate: (value) => value === passValue
              })}

            />
            {errors.RepeatPassword && <p style={{color: "red"}}> Passwords must match</p>}
          </label>
          <div className="signup__hr"/>
          <Controller
            name={"checkbox"}
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange}}) =>
              <Checkbox
                checked={value}
                onChange={(e) => {
                  onChange(e.target.checked);
                }}
                className="signup__checkbox">I agree to the processing of my personal
                information</Checkbox>}
          />
          {
            errors.hasOwnProperty("checkbox")
              ?
              <button className="signup__btn" type="submit" disabled>Create</button>
              : <button className="signup__btn" type="submit">Create</button>
          }
          <span className="signup__haveAccount">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            Already have an account? <a href="#">Sign In.</a>
        </span>
        </form>
      </div>
    </>
  )

}

export default Signup