import React from 'react';
import RecipeList from "@/components/RecipeList" 

const getRecipes = async(type)=>{
 const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`)
 const responce = await res.json();
 return responce; 
}	

const Page = async ({params})=>{
  const recipes = await getRecipes(params.type);
  console.log(recipes)
  return (<RecipeList recipes={recipes.meals} type={params.type}/>)
};

export default Page