const initState ={
    recipes:[
        {id:'1', title: 'Chicken Tikka', ingredients: 'Chicken,Tikka masala', recipe: 'Without egg mix everything and make small balls.After that dip the balls into egg and fry it into oil'},
        {id:'2', title: 'Chicken Kabab', ingredients: 'Chicken,Tikka masala', recipe: 'Without egg mix everything and make small balls.After that dip the balls into egg and fry it into oil'},
        {id:'3', title: 'Chicken Tandoori', ingredients: 'Chicken,Tikka masala', recipe: 'Without egg mix everything and make small balls.After that dip the balls into egg and fry it into oil'},
    ]

}


const projectReducer = (state = initState, action) => {
    return state;

}

export default projectReducer ; 