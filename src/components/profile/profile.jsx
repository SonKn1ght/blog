import React from "react";

import './profile.css'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {editProfile} from "../../redux/actions/editProfile";
import {useHistory} from "react-router";



const Profile = () => {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const {username, email, image} = useSelector(state => state.authorization)
  const dispatch = useDispatch()
  const history = useHistory()
  const date = (date) => {
    dispatch(editProfile(date))
    history.push('/')
  }

  return (
    <div className='profile'>
      <form className='profile__form' onSubmit={handleSubmit(date)}>
        <h5 className="profile__title">Edit Profile</h5>
        <label className="profile__label">
          <span>Username</span>
          <input type="text"
                 name='username'
                 defaultValue={username}
                 className={`profile__input ${errors.hasOwnProperty("username") ? "signup__input--err" : ""}`}
                 ref={register({required: true, minLength: 3, maxLength: 20})}
          />
          <p
            style={{color: "red"}}>{errors.hasOwnProperty("username") ? "From 3 to 20 characters inclusive" : null}</p>
        </label>
        <label className="profile__label">
          <span>Email address</span>
          <input type="email"
                 name='email'
                 defaultValue={email}
                 className={`profile__input ${errors.hasOwnProperty("email") ? "signup__input--err" : ""}`}
                 ref={register({
                   required: true,
                   minLength: 6,
                   pattern: {
                     value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                     message: '',
                   },
                 })}
          />
          <p
            style={{color: "red"}}>{errors.hasOwnProperty("email") ? "Not valid email." : null}</p>
        </label>
        <label className="profile__label">
          <span>New password</span>
          <input type="password"
                 name="password"
                 placeholder="New password"
                 className={`profile__input ${errors.hasOwnProperty("password") ? "signup__input--err" : ""}`}
                 ref={register({ minLength: 8, maxLength: 40 })}/>
          <p
            style={{color: "red"}}>{errors.hasOwnProperty("password") ? "Your password needs to be at least 8 characters." : null}</p>
        </label>
        <label className="profile__label">
          <span>Avatar image (url)</span>
          <input type="url"
                 name='image'
                 defaultValue={image === null || image === 'null' ? "" : image}
                 placeholder={image === null || image === 'null' ? "Avatar image" : image}
                 ref={register({required:false})}
                 className={`profile__input ${errors.hasOwnProperty("Username") ? "signup__input--err" : ""}`}
          />
        </label>
        <button className="profile__save">Save</button>
      </form>
    </div>
  )
}

export default Profile