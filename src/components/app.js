//Dependencies
import React from "react"
import {BrowserRouter as Router, Route } from "react-router-dom"
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
        <Route path='/new-article' component={NewArticle} exact/>
        <Route path="/profile" component={ProfilePage} exact/>
      </Router>
    </Provider>
  );
}

export default App;
