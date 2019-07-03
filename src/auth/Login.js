import React , {Component} from 'react'



class Login extends Component{
    state={
        email:'',
        password:''
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
                    <h5 className="grey-text text-darken-5"> <b> Log In </b></h5>
                    <div className="input-field">
                    
                    <label htmlfor="email"> Email </label >
                    <input type="email" id="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                    
                    <label htmlfor="password" > Password </label>
                    <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0"> Login </button> 
                        <button className="btn grey lighten-2 z-depth-0"> Cancel </button>
                    </div> 

             </form>
            </div>
    
        )
    }
}


export default Login; 