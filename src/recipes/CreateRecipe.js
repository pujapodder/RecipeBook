import React , {Component} from 'react'



class CreateRecipe extends Component{
    state={
        RecipeTitle:'',
        RecipeIngredients:'',
        RecipeDescription:''
    }
    handleChange =(e) =>{
        this.setState({
        [e.target.id] : e.target.value
    })
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        console.log(this.state);

    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-5"> <b> New Recipe </b></h5>
                    <div className="input-field">
                    
                    <label htmlfor=" RecipeTitle"> Recipe Title</label>
                    <input type="text" id="RecipeTitle" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                    
                    <label htmlfor="  RecipeIngredients" >   Ingredients </label>
                    <input type="text" id="  RecipeIngredients" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                    
                    <label htmlfor="RecipeDescription" > Recipe </label>
                    <input type="text" id="RecipeDescription" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0"> Post </button> 
                        <button className="btn grey lighten-2 z-depth-0"> Cancel </button>
                    </div> 

             </form>
            </div>
    
        )
    }
}


export default CreateRecipe ; 