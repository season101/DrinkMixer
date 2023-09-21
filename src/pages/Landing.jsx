import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from './../components/CocktailList';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = '';
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
  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
