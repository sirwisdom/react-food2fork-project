import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.css';

export class RecipeDetials extends Component {

    constructor(props){
        super(props)
        this.state = {
            recipe : {},
            url : `https://www.food2fork.com/api/get?key=d5d680d51e2333f9309ab322b93385ef&rId=${this.props.id}`
        }
    }


 async componentDidMount(){
        try{
          const data = await fetch(this.state.url);
          const jsonData = await data.json();
          this.setState({
            recipe: jsonData.recipe
          });
        } catch(error){
          console.log(error);
        }
      }
  


    render() {
       
        const{image_url, publisher, publisher_url,
             source_url, title, ingredients} = this.state.recipe;
         const {handleIndex} = this.props
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-10 mx-auto col-md-6 my-3'>
                            <button className='btn btn-warning mb-5
                            text-capitalize'
                            onClick={() => handleIndex(1)}>
                                Back to recipe list
                            </button>
                            <img src={image_url} className='d-block w-100' 
                            alt="recipe"/>
                        </div>
                        {/*details section */}
                        <div className='col-10 mx-auto col-md-6 my-3'>
                            <h6 className='text-uppercase'>{title}</h6>
                            <h6 className='text-warning text-slanted text-capitalize'>
                                provided by {publisher}
                            </h6>
                            <a href={publisher_url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn btn-primary text-capitalize mt-2'>
                                publisher webpage
                            </a>
                            <a href={source_url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn btn-success mx-3 text-capitalize mt-2'>
                                recipe url
                            </a>
                                <h2 className='mt-3 mb-4'>Ingredients</h2>
                                   {ingredients ?
                                        ingredients.map((item,index) =>{
                                            return(
                                                <li key={index} className='list-group-item
                                                text-slanted'>
                                                    {item}
                                                </li>
                                            )
                                        }) : <div class="fa-3x">
                                        <i class="fas fa-spinner fa-pulse text-primary"></i> 
                                      </div>
                                    } 
                                 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeDetials
 