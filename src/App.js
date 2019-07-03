import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBar from './layout/NavBar.js';
import Newsfeed from './dashboard/Newsfeed.js';
import RecipeDetails from './recipes/RecipeDetails.js';
import Login from './auth/Login.js';
import SignUp from './auth/SignUp.js';

import CreateRecipe  from './recipes/CreateRecipe.js';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch >
        <Route exact path='/' component ={Newsfeed}/>
        <Route path='/recipes/:id' component ={RecipeDetails}/>
        <Route path='/login' component ={Login}/>
        <Route path='/signup' component ={SignUp}/>
        <Route path='/createrecipe' component ={CreateRecipe}/>
      </Switch>
    
    </div>

    </BrowserRouter>
  );
}

export default App;
