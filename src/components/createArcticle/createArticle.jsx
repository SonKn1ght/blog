import React, {useEffect, useState} from "react";
import './createArticle.css'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addAllTag, addTag, removeAllTag, removeTag} from '../../redux/actions/tags'
import {sendNewArticle, sendUpdateArticle} from "../../redux/actions/newArticleSend"
import {Space, Spin} from "antd";
import {createArticle} from "../../redux/actions/editArticle";
import {useHistory} from "react-router";


const CreateArticle = () => {
  const {register, handleSubmit, errors} = useForm()
  const {tags} = useSelector(state => state.tags)
  const {edit} = useSelector(state => state.oneArticle )
  const oneArticle = useSelector(state => state.oneArticle.article)
  const history = useHistory()
  const [loading,setLoading] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    if(edit) {
      dispatch(addAllTag(oneArticle.tagList))
    }
    return () => {
      dispatch(createArticle())
    }
  },[dispatch, edit, oneArticle.tagList]);

  const [value, setValue] = useState('')

  const createTag = (val) => {
    if (val.length > 0) {
      const tag = {
        val, id: new Date().getTime(),
      };
      dispatch(addTag(tag));
      setValue('');
    }
  };

  const submit = async (date) => {
    setLoading(true)
    await sendNewArticle(date, tags)
    dispatch(removeAllTag())
    history.push('/')
  }

  const submitEdit = async (date) => {
    const slug = oneArticle.slug
    setLoading(true)
    await sendUpdateArticle(date,tags,slug)
    dispatch(removeAllTag())
    history.push('/')
  }

  return (
    <>
      {
        loading ?
          <Space size="middle" style={{display:"flex",justifyContent:"center",margin: '20px'}}>
            <Spin size="large" />
          </Space>
          :
          <div className="createArticle__container">
            {
              edit ?
                <form className="createArticle__form" onSubmit={handleSubmit(submitEdit)}>
                  <h2 className="createArticle__title">
                    Edit article
                  </h2>
                  <label className="createArticle__inputLabel">
                    <span>Title</span>
                    <input className={`createArticle__input ${errors.hasOwnProperty("title") ? "signup__input--err" : ""}`}
                           type="text"
                           name="title"
                           defaultValue={oneArticle.title}
                           placeholder={"Title"}
                           ref={register({required: true})}
                    />
                    <p style={{color: "red"}}>{errors.hasOwnProperty('title') ? 'Поле обязательно для заполнения' : ''}</p>
                  </label>
                  <label className="createArticle__inputLabel">
                    <span>Short description</span>
                    <input
                      className={`createArticle__input ${errors.hasOwnProperty("shortDescription") ? "signup__input--err" : ""}`}
                      type="text"
                      defaultValue={oneArticle.description}
                      name="shortDescription"
                      placeholder={"Short Description"}
                      ref={register({required: true})}
                    />
                    <p
                      style={{color: "red"}}>{errors.hasOwnProperty('shortDescription') ? 'Поле обязательно для заполнения' : ''}</p>
                  </label>
                  <label className="createArticle__inputLabel">
                    <span>Text</span>
                    <textarea
                      className={`createArticle__textarea ${errors.hasOwnProperty("textarea") ? "signup__input--err" : ""}`}
                      rows="8"
                      name='textarea'
                      defaultValue={oneArticle.body}
                      placeholder={"Text"}
                      ref={register({required: true})}
                    />
                    <p style={{color: "red"}}>{errors.hasOwnProperty('textarea') ? 'Поле обязательно для заполнения' : ''}</p>
                  </label>
                  <div className="tags">
                    {
                      tags.map(tag => {
                        return (
                          <label className="tags__label" key={`${tag.val}${tag.id}`}>
                            <input type="text"
                                   className="tags__input"
                                   name={tag.val}
                                   readOnly
                                   value={tag.val}
                                   ref={register({required: false})}
                            />
                            {
                              tags.length !== 0 ? <button type={"button"} className="tags__delete" onClick={() => {
                                  dispatch(removeTag(tag))
                                }
                                }>Delete</button>
                                : null
                            }
                          </label>
                        )
                      })
                    }
                    <label className="tags__label">
                      <input type="text"
                             className="tags__input"
                             name='tag'
                             value={value}
                             onChange={(event) => setValue(event.target.value)}
                             ref={register({required: false})}
                      />
                      {
                        tags.length !== 0 && !tags[tags.length - 1] ?
                          <button type={"button"} className="tags__delete">Delete</button>
                          : null
                      }
                    </label>
                    <button type={"button"}
                            className="tags__add"
                            onClick={() => createTag(value)}>Add tag
                    </button>
                  </div>
                  <button type="submit" className="createArticle__send">Send</button>
                </form>
                :
                <form className="createArticle__form" onSubmit={handleSubmit(submit)}>
                  <h2 className="createArticle__title">
                    Create new article
                  </h2>
                  <label className="createArticle__inputLabel">
                    <span>Title</span>
                    <input className={`createArticle__input ${errors.hasOwnProperty("title") ? "signup__input--err" : ""}`}
                           type="text"
                           name="title"
                           placeholder={"Title"}
                           ref={register({required: true})}
                    />
                    <p style={{color: "red"}}>{errors.hasOwnProperty('title') ? 'Поле обязательно для заполнения' : ''}</p>
                  </label>
                  <label className="createArticle__inputLabel">
                    <span>Short description</span>
                    <input
                      className={`createArticle__input ${errors.hasOwnProperty("shortDescription") ? "signup__input--err" : ""}`}
                      type="text"
                      name="shortDescription"
                      placeholder={"Short Description"}
                      ref={register({required: true})}
                    />
                    <p
                      style={{color: "red"}}>{errors.hasOwnProperty('shortDescription') ? 'Поле обязательно для заполнения' : ''}</p>
                  </label>
                  <label className="createArticle__inputLabel">
                    <span>Text</span>
                    <textarea
                      className={`createArticle__textarea ${errors.hasOwnProperty("textarea") ? "signup__input--err" : ""}`}
                      rows="8"
                      name='textarea'
                      placeholder={"Text"}
                      ref={register({required: true})}
                    />
                    <p style={{color: "red"}}>{errors.hasOwnProperty('textarea') ? 'Поле обязательно для заполнения' : ''}</p>
                  </label>
                  <div className="tags">
                    {
                      tags.map(tag => {
                        return (
                          <label className="tags__label" key={`${tag.id}${tag.val}`}>
                            <input type="text"
                                   className="tags__input"
                                   name={tag.val}
                                   readOnly
                                   value={tag.val}
                                   ref={register({required: false})}
                            />
                            {
                            }
                            {
                              tags.length !== 0 ? <button type={"button"} className="tags__delete" onClick={() => {
                                  dispatch(removeTag(tag))
                                }
                                }>Delete</button>
                                : null
                            }
                          </label>
                        )
                      })
                    }
                    <label className="tags__label">
                      <input type="text"
                             className="tags__input"
                             name='tag'
                             value={value}
                             onChange={(event) => setValue(event.target.value)}
                             ref={register({required: false})}
                      />
                      {
                        tags.length !== 0 && !tags[tags.length - 1] ?
                          <button type={"button"} className="tags__delete">Delete</button>
                          : null
                      }
                    </label>
                    <button type={"button"}
                            className="tags__add"
                            onClick={() => createTag(value)}>Add tag
                    </button>
                  </div>
                  <button type="submit" className="createArticle__send">Send</button>
                </form>
            }

          </div>

      }

    </>
  )
};

export default CreateArticle