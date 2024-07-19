import React, { useState } from "react";
import axios from "axios";

const AddRecipe = ({ addRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://ec2-34-219-38-0.us-west-2.compute.amazonaws.com:8000/api/recipes/", {
        title,
        ingredients,
      })
      .then((response) => {
        addRecipe(response.data);
        setTitle("");
        setIngredients("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Dish"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Ingredients (comma-separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;
