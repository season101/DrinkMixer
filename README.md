[![Build and Deploy React Application](https://github.com/season101/DrinkMixer/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/season101/DrinkMixer/actions/workflows/build-and-deploy.yml)
## Figma URL

[MixMaster Design](https://www.figma.com/community/file/1255860657910062828)

## Steps

#### Install and Setup

- npm install
- npm run dev

# Drink Mixer

Drink Mixer is a Single Page Application(SPA). SPA is a web application that dynamically updates its content without requiring a full page reload. It achieves this by loading the initial HTML, CSS, and JavaScript resources and then dynamically fetching data and updating the DOM as users interact with the application.

React Router is a JavaScript library used in React applications to handle routing and navigation. It provides a declarative way to define the routes of an application and render different components based on the current URL. React Router allows developers to create a seamless, client-side navigation experience within a SPA by mapping URLs to specific components and managing the history and URL changes.

[React Router](https://reactrouter.com/en/main)



#### TheCocktailDB

The data are dynamically fetched from following APIs using **React Query**, **Axios**, and `useLoader()` and also maintains the caching. 


[API](https://www.thecocktaildb.com/)

- Search cocktail by name
  www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
- Lookup full cocktail details by id
  www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
---
[Challenge Link](https://github.com/john-smilga/react-course-v3/tree/main/09-mixmaster/starter)
