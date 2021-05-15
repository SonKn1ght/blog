//Dependencies
import React from "react"
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom"

//PagesComponents
import {ArticleOpen, MainContent, NewArticle, ProfilePage, Signin, Signup} from './pages'


//Style
import './apps.css'
import {useSelector} from "react-redux";


function App() {
  const auth = useSelector(state => state.authorization.auth)
  return (
    <Router>
      <Route path='/' component={MainContent} exact/>
      <Route path='/articles/:slug' component={ArticleOpen} exact/>
      {auth ?
        <Redirect to='/'/>
        : <>
          <Route path='/signup' component={Signup} exact/>
          <Route path='/signin' component={Signin} exact/>
        </>
      }
      {
        auth ?
          <>
            <Route path='/new-article' component={NewArticle} exact/>
            <Route path="/profile" component={ProfilePage} exact/>
            <Route path="/articles/:slug/edit" component={NewArticle} exact/>
          </>
          : <Redirect to='/'/>
      }
    </Router>

  );
}

export default App;
