import React from 'react';

const RecipeDetails=(props) =>{
    const id= props.match.params.id;
    return(
        <div className="container section recipe-details">
            <div classname="card z-depth-0">
            <div classname="card-content ">
                <span classname="card-title" style={{'fontSize': '24px'}}> <b> Recipe Title - {id}</b> </span>
                    <p> After that dip the balls into egg and fry it into oil.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div> Posted by Puja </div>
                    <div>2 June, 6pm </div>
                    </div>
             </div>
             </div> 
    

    )
}

export default RecipeDetails;