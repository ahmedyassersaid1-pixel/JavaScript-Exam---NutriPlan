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
  searchByArea,
  getScannerInput,
  getNutritionData,
  getDataBarcode,
} from "./api/mealdb.js";
import {
  displayMeals,
  displayAreas,
  displayCategories,
  displayMeal,
  scannerSearch,
  displayNutrition,
  showCard,
} from "./ui/components.js";

const loading = document.getElementById("app-loading-overlay");
const recipesContainer = document.getElementById("recipes-grid");
const input = document.getElementById("search-input");
const recipesCount = document.getElementById("recipes-count");

// sections
const mealSection = document.getElementById("all-recipes-section");
const scannerSection = document.getElementById("products-section");
const foodLogSection = document.getElementById("foodlog-section");
const categorySection = document.getElementById("meal-categories-section");
const searchFilterSection = document.getElementById("search-filters-section");

function showSection(sectionToShow) {
  const sections = [
    mealSection,
    scannerSection,
    foodLogSection,
    categorySection,
    searchFilterSection,
  ];

  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.add("d-none");
  }

  if (sectionToShow === mealSection) {
    mealSection.classList.remove("d-none");
    categorySection.classList.remove("d-none");
    searchFilterSection.classList.remove("d-none");
  } else {
    sectionToShow.classList.remove("d-none");
  }
}

function activeLink(link) {
  for (let index = 0; index < lis.length; index++) {
    lis[index].children[0].classList.remove("bg-emerald-50");
    lis[index].children[0].classList.remove("text-emerald-700");

    lis[index].children[0].classList.add("text-gray-600");
    lis[index].children[0].classList.add("hover:bg-gray-50");
  }

  link.children[0].classList.remove("text-gray-600");
  link.children[0].classList.remove("hover:bg-gray-50");

  link.children[0].classList.add("bg-emerald-50");
  link.children[0].classList.add("text-emerald-700");
}

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
    // console.log(meal.result.ingredients);
    const ingredients = meal.result.ingredients.map((item) => {
      return `${item.measure} ${item.ingredient}`;
    });

    const nutritionData = await getNutritionData(meal.result.name, ingredients);

    // console.log(nutritionData.data);
    displayNutrition(nutritionData);
    displayMeal(meal);
  }
});

// search

input.addEventListener("input", async function (e) {
  let searchKey = e.target.value;

  if (searchKey.trim() === "") {
    displayMeals(meals);
    recipesCount.textContent = `Showing ${meals.length} recipes`;
    return;
  }

  let data = await getSearchData(searchKey);

  if (data.results == null || data.results.length === 0) {
    recipesContainer.innerHTML = `<div class="flex flex-col items-center justify-center py-12 text-center"> 
        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4"> 
        <i class="fa-solid fa-search text-gray-400 text-2xl"></i> 
        </div> 
        <p class="text-gray-500 text-lg">No recipes found</p> 
        <p class="text-gray-400 text-sm mt-2">Try searching for something else</p> 
    </div>`;
    recipesCount.textContent = `Showing 0 recipes for "${searchKey}"`;
  } else {
    displayMeals(data.results);
    recipesCount.textContent = `Showing ${data.results.length} recipes for "${searchKey}"`;
  }
});

// click on  country
const areasContainer = document.getElementById("areas-container");
areasContainer.addEventListener("click", async function (e) {
  const area = e.target.closest("#areas-container button");

  if (area === null) {
    return;
  }
  const areaName = area.dataset.area;
  let results;
  if (areaName === "All") {
    results = await getMeals();
  } else {
    const data = await searchByArea(areaName);
    results = data.results;
  }

  if (results == null || results.length === 0) {
    recipesContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center py-12 text-center">
        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
        </div>

        <p class="text-gray-500 text-lg">No recipes found</p>

        <p class="text-gray-400 text-sm mt-2">
          Try searching for something else
        </p>
      </div>
    `;

    recipesCount.textContent = "Showing 0 recipes";
    return;
  }

  recipesCount.textContent =
    areaName === "all"
      ? `Showing ${results.length} recipes`
      : `Showing ${results.length} ${areaName} recipes`;

  displayMeals(results);
});
const iconClick = document.querySelectorAll(".category-card");

// icons click to display
for (let i = 0; i < iconClick.length; i++) {
  iconClick[i].addEventListener("click", async function (e) {
    const card = e.target.closest(".category-card");
    const category = card.dataset.category;
    let searchCat = await searchCategoey(category);

    displayMeals(searchCat.results);
    recipesCount.textContent = `Showing ${searchCat.results.length} ${category} recipes`;
  });
}

// ul links
const lis = document.querySelectorAll("li");
const mealDetails = document.getElementById("meal-details");
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function (e) {
    activeLink(e.currentTarget);
    mealDetails?.classList.add("d-none");

    if (i === 0) {
      showSection(mealSection);
    } else if (i === 1) {
      showSection(scannerSection);
    } else if (i === 2) {
      showSection(foodLogSection);
    }
  });
}
// product-search-input
const productSearchInput = document.getElementById("product-search-input");
const searchProductBtn = document.getElementById("search-product-btn");
// on input click
searchProductBtn.addEventListener("click", async function (e) {
  let value = productSearchInput.value;

  let data = await getScannerInput(value);
  scannerSearch(data);
  // console.log(data);
});
// on enter key press
productSearchInput.addEventListener("keydown", async function (e) {
  if (e.key === "Enter") {
    let value = productSearchInput.value;
    let data = await getScannerInput(value);
    scannerSearch(data);
  }
});
// modal open

document
  .getElementById("products-grid")
  .addEventListener("click", async function (e) {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const barcode = card.dataset.barcode;
    // console.log(barcode);
    const productData = await getDataBarcode(barcode);
    // console.log(productData.result);
    showCard(productData.result);
    openProductModal();
  });
// modal close
document.getElementById("modal-close").addEventListener("click", function () {
  closeProductModal();
});
// modal close
document
  .getElementById("modal-close-bottom")
  .addEventListener("click", function (e) {
    closeProductModal();
  });
// modal close
document
  .getElementById("product-modal")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      closeProductModal();
    }
  });
// fun to open modal
function openProductModal() {
  document.getElementById("product-modal").classList.add("show");
}
// fun to close modal

function closeProductModal() {
  document.getElementById("product-modal").classList.remove("show");
}
