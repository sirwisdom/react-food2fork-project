import React, {Component} from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetials';

class  App extends Component{

  state = {
    recipes: [],
    url: 'https://www.food2fork.com/api/search?key=d5d680d51e2333f9309ab322b93385ef',
    base_url: 'https://www.food2fork.com/api/search?key=d5d680d51e2333f9309ab322b93385ef',
    details_id: 35382,
    pageIndex : 1,
    search: '',
    querry: '&q=',
    error: ''
  };

// Begining of getRecipe method
  async getRecipe(){
    try{
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if (jsonData.recipes.length === 0){
        this.setState(() =>{
         return {error: 'Sorry, Your search returned no result'}
        })
      }
      else{
        this.setState(() =>{
          return {recipes: jsonData.recipes}
        })
      }
    } catch(error){
      console.log(error);
    }
  }

  // end of getRecipe method

  componentDidMount(){
    this.getRecipe();
  }

  displayPage =(index) =>{
      switch(index){
        default:
          case 1:
          return  (<RecipeList recipes={this.state.recipes} 
            handleDetails={this.handleDetails}
            value = {this.state.search}
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            error= {this.state.error} />)

          case 0:
            return ( <RecipeDetails id={this.state.details_id} 
              handleIndex = {this.handleIndex} />)
      }
  }

  // Begining of handleIndex method
  handleIndex = index =>{
    this.setState({
      pageIndex: index
    });
  }

  // Begining of handleDetials method
  handleDetails = (index, id) =>{
    this.setState({
      pageIndex: index,
      details_id: id
    });
  }

  // Begining of handleChange method
  handleChange = (e) =>{
   this.setState({
     search: e.target.value
   }, () =>{
     console.log(this.state.search);
   })
  }

  // Begining of handleSumit method
  handleSubmit =(e) =>{
    e.preventDefault();
  const {base_url, querry, search} = this.state;
  this.setState( () =>{
    return{url:`${base_url}${querry}${search}`, search:''}
  },
  () =>{
    this.getRecipe();
  })  
  }


  render() {
    
    return (
   <React.Fragment>
     {this.displayPage(this.state.pageIndex)} 
   </React.Fragment>
  );
  }
}

export default App;
