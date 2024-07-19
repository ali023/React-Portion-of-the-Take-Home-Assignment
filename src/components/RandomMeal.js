import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomMeal = ({ randomMeal }) => {
  const [randomMeals, setRandomMeals] = useState([]);

  useEffect(() => {
    const postData = async () => {
      let dish = randomMeal.strMeal;
      let country = randomMeal.strArea;
      if (dish && country) {
        axios
          .post(
            "http://ec2-34-219-38-0.us-west-2.compute.amazonaws.com:8000/api/random/",
            {
              dish,
              country,
            }
          )
          .then(() => {
            getRandomMeals();
          })
          .catch((error) => console.error(error));
      }
    };

    postData();
  }, [randomMeal]);

  const getRandomMeals = () => {
    // let newMeal = { strMeal: randomMeal.dish, strArea: randomMeal.country };
    axios
      .get(
        "http://ec2-34-219-38-0.us-west-2.compute.amazonaws.com:8000/api/random/"
      )
      .then((response) => {
        console.log(response.data);
        setRandomMeals(response.data);
      })
      .catch((error) => console.error(error));
    // set random meals to result from axios get request to /api/random/
  };

  return (
    <div>
      <p>
        Try {randomMeal.strArea} {randomMeal.strMeal}!
      </p>
      <p>List of Random Meals</p>
      <ul>
        <li>
          {randomMeals.map((randomMeal) => (
            <li>
              {randomMeal.country} {randomMeal.dish}!
            </li>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default RandomMeal;
