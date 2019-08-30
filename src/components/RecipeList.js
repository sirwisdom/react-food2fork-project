import React, { Component } from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
    render() {
        const {recipes, handleDetails, value,
             handleChange, handleSubmit, error} = this.props;
        return (
            <React.Fragment> 
                <RecipeSearch value ={value} handleChange={handleChange}
                handleSubmit = {handleSubmit} />
                <div className='container my-5'>
                    {/* Title */}
                   <div className='row'>
                        <div className='col-10 mx-auto col-md-6
                            text-center text-uppercase mb-3'>
                            <h1 className='text-slanted'>Recipe List</h1>
                        </div>
                   </div>
                   {/* End of Title */}
                   <div className="row">
                       {error? <h2 className='text-danger text-center'>{error}</h2> :
                       
                       recipes.map(recipe =>{
                        return(
                            <Recipe
                            Key={recipe.recipe_id}
                            recipe={recipe} 
                            handleDetails ={handleDetails}/>
                        )
                    })
                    }
                       
                   </div>
                </div> 
            </React.Fragment>
        )
    }
}
