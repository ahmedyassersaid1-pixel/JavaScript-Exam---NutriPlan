/**
 * NutriPlan - Main Entry Point
 *
 * This is the main entry point for the application.
 * Import your modules and initialize the app here.
 */

import {
  getMeals,
  getAreas,
  getCategories,
  getMealById,
  getSearchData,
  searchCategoey,
} from "./api/mealdb.js";
import {
  displayMeals,
  displayAreas,
  displayCategories,
  displayMeal,
} from "./ui/components.js";
const loading = document.getElementById("app-loading-overlay");
const recipesContainer = document.getElementById("recipes-grid");
const input = document.getElementById("search-input");
const recipesCount = document.getElementById("recipes-count");

let mealId;
let meals = await getMeals();
let area = await getAreas();
let categories = await getCategories();

displayMeals(meals);
displayAreas(area.results);
displayCategories(categories);

loading.classList.add("loading");
recipesContainer.addEventListener("click", async function (e) {
  const card = e.target.closest(".recipe-card");
  if (card !== null) {
    mealId = card.dataset.mealId;
    let meal = await getMealById(mealId);
    // console.log(meal);

    displayMeal(meal);
  }
});

// search

input.addEventListener("input", async function (e) {
  let searchKey = e.target.value;

  if (searchKey.trim() === "") {
    displayMeals(meals);
    return;
  }

  let data = await getSearchData(searchKey);
  recipesCount.textContent = `Showing ${data.results.length} recipes for "${searchKey}"`;
  if (data.results == null || data.results.length === 0) {
    recipesContainer.innerHTML = `<div class="flex flex-col items-center justify-center py-12 text-center">
        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
        </div>
        <p class="text-gray-500 text-lg">No recipes found</p>
        <p class="text-gray-400 text-sm mt-2">Try searching for something else</p>
    </div>`;
  } else {
    displayMeals(data.results);
  }
});
const iconClick = document.querySelectorAll(".category-card");

for (let i = 0; i < iconClick.length; i++) {
  iconClick[i].addEventListener("click", async function (e) {
    const card = e.target.closest(".category-card");
    const category = card.dataset.category;
    let searchCat = await searchCategoey(category);
    // console.log(searchCat);

    displayMeals(searchCat.results);
    recipesCount.textContent = `Showing ${searchCat.results.length} ${category} recipes`;
  });
}

// console.log(meals);
// console.log(area.results);
