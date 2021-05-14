//Dependencies
import React from "react"
import {BrowserRouter as Router, Route, Redirect  } from "react-router-dom"
import {Provider} from "react-redux";
import store from "../redux/store";

//PagesComponents
import { MainContent, Signup, Signin, ArticleOpen, NewArticle, ProfilePage } from './pages'


//Style
import './apps.css'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' component={MainContent} exact/>
        <Route path='/articles/:slug' component={ArticleOpen} exact/>
        <Route path='/signup' component={Signup} exact/>
        <Route path='/signin' component={Signin} exact/>
        {store.getState().authorization.auth ? <Route path='/new-article' component={NewArticle} exact/> : <Redirect to='/'/> }
        {store.getState().authorization.auth ? <Route path="/profile" component={ProfilePage} exact/> : <Redirect to='/'/> }
        {store.getState().authorization.auth ? <Route path="/articles/:slug/edit" component={NewArticle} exact/> : <Redirect to='/'/>}
      </Router>
    </Provider>
  );
}

export default App;
