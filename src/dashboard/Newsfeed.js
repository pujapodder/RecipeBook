import React, {Component} from 'react'
import Notifications from './Notifications.js';
import RecipeList from '../recipes/RecipeList.js';
import {connect} from 'react-redux';

class Newsfeed extends Component{
    render(){
     // console.log(this.props);
     const {recipes} =this.props; 
     
     return(

      <div classname="newsfeed container" >
            <div classname="row">
               
                     <div class="card-panel teal lighten-3 left"   style={{width: '55%', height: '100%',marginLeft:'50px'}}>
                  
                            <RecipeList recipes={recipes}/>
    
                </div>


                        <div class="card-panel grey lighten-1 right" style={{ width: '30%',height: '100%',marginLeft:'20px',marginRight:'50px',textAlign:"center"}}>
                                 <Notifications/>
                      
                    
                </div>
            </div>
          </div>
        )
    }
}
const mapStateToProps=(state)=>{

 return{
   recipes: state.recipe.recipes
    
 } 
}

export default connect(mapStateToProps)(Newsfeed); 