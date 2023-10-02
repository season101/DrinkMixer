import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from './../components/CocktailList';
import SearchForm from './../components/SearchForm';

import { useQuery } from '@tanstack/react-query';

const searchCocktailsQuery = (searchTerm) =>{
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    }
  }
}

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = (queryClient) => async ({request}) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  try {
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  } catch (error) {
    console.log(error.response);
    return { data: 'error' };
  }
};

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const {data: drinks} = useQuery(searchCocktailsQuery(searchTerm));
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
