import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";
import RandomMeal from "./components/RandomMeal"

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [randomMeal, setRandomMeal] = useState(
    {strMeal: '', strArea: ''}
  );

  useEffect(() => {
    axios
      .get("http://ec2-34-219-38-0.us-west-2.compute.amazonaws.com:8000/api/recipes/")
      .then((response) => setRecipes(response.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => setRandomMeal({strMeal: 
        response.data.meals[0].strMeal, strArea: response.data.meals[0].strArea}))
      .catch((error) => console.error(error));
  }, []);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div>
      <h1>Ingredients Needed for Various Dishes</h1>
      <RandomMeal randomMeal={randomMeal} />
      <RecipeList recipes={recipes} />
      <AddRecipe addRecipe={addRecipe} />
    </div>
  );
};

export default App;
