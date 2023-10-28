import React ,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';
const App =()=>{
  const APP_ID  ="e858c8f7";
  const APP_KEY="feab8820fc11f3eb6bd6dfd504099c25";
const[recipes,setRecipes]=useState([]);
const[search,setSearch]=useState('');
const[query,setQuery]=useState('chicken');

 useEffect(()=>{getRecipes();
 },[query]);

  const getRecipes=async()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data =await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  };
  const updateSearch=e=>{
    setSearch(e.target.value);

  }
  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
  }
  return(
    <div className="App">
       <form onSubmit={getSearch} className='srchfm'>
        <input className="srcbr" type="text" value={search} onChange={updateSearch}/>
        <button className='srcbtn' type="submit">Search</button>
       </form>
       <div className='recipes'>
       {recipes.map(recipe=>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
       ))}
       </div>
    </div>
  );
}
export default App;