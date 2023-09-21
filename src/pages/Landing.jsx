import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = 'margarita';
  try {
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    return { drinks: response.data.drinks, searchTerm };
  } catch (error) {
    console.log(error.response);
    return { data: 'error' };
  }
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);
  return <div>Landing</div>;
};

export default Landing;
