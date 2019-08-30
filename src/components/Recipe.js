import React, { Component } from 'react'

export class Recipe extends Component {
    render() {
    const { publisher,
        title,
        source_url,
        recipe_id,
        image_url,
    } = this.props.recipe;

    const {handleDetails} = this.props;

        return(
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <div className="card">
                <img src={image_url}
                className="img-card-top"
                style={{height:'14rem'}}
                alt="recipe"/>
            </div>
            <div className='card-body text-capitalize'>
                <h6>{title}</h6>
                <h6 className="text-slanted text-warning">
                    Provided by {publisher}
                </h6>
            </div>
            <div className='card-footer'>
                <button type="button" 
                className='btn btn-warning text-capitalize'
                onClick={() => handleDetails(0,recipe_id)}>
                    Details</button>
                    <a href= {source_url} target='_blank'
                    className='btn btn-primary text-capitalze mx-2'
                    rel='noopener noreferrer'>
                        Recipe url
                    </a>
            </div>
        </div>
        )
    }
}

export default Recipe
