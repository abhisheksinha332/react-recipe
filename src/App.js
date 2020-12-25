
import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';


function App() {

  const APP_ID = '2adf7481';
  const APP_KEY = '0b03c5116947f05dd8d12b93d1e6c26e';

  const [recipes, setRecipes] = useState([]);

  useEffect( () => {
    getRecipes();
  },[]);

// const getRecipes = async () => {
//   const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
//   const data = await response.json;
//   console.log(data);
  

// }
const getRecipes = async () => {
  const respone =await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await respone.json();
  setRecipes(data.hits);
  
};

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type = "submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe />
      ))}
    </div>
  );
}

export default App;
