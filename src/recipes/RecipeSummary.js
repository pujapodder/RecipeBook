import React from 'react';

const RecipeSummary=({recipe}) =>{
    return(
        <div className="project-list section">
            <div className="card z-depth-0 recipe-summary">
                 <div className="card-content grey-text text-darken-3">
                
                 <span className="card tittle pink-text" style={{'fontSize': '24px'}}> <b> {recipe.title} </b></span>
                    <p><b>Ingrdients</b></p>
                    <p> {recipe.ingredients}</p>
                    <p><b>Recipe</b></p>
                    <p> {recipe.recipe}</p>
                    <br></br>
                    <p className="blue-text" > Posted By Puja</p>
                    <p className="grey-text"> 2 June, 6pm </p>


            </div>
            </div>
            </div>
    )
}

export default RecipeSummary;