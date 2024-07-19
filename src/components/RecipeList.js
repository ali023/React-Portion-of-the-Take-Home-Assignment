import React from "react";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <p>Your Meals</p>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.title} can be made with: {recipe.ingredients}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
