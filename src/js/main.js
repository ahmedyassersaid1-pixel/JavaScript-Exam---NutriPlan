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
  displayFoodLogDetails,
  showMealMModal,
  updateWeeklyOverview,
  addFoodLogEntry,
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
const lis = document.querySelectorAll("li");
const mealDetails = document.getElementById("meal-details");
//
let mealDetailsAdd;
let currentProduct = null;
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
// url link
function navigate(section) {
  history.pushState({}, "", `?section=${section}`);

  if (section === "meals") {
    activeLink(lis[0]);
    showSection(mealSection);
    mealDetails?.classList.add("d-none");
  } else if (section === "products") {
    activeLink(lis[1]);
    showSection(scannerSection);
    mealDetails?.classList.add("d-none");
  } else if (section === "foodlog") {
    activeLink(lis[2]);
    showSection(foodLogSection);
    mealDetails?.classList.add("d-none");
  }
}
// show active link
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

if (meals.length > 0) {
  displayMeals(meals);
} else {
  console.log("No meals available");
}
let area = await getAreas();
if (area.results.length > 0) {
  displayAreas(area.results);
} else {
  console.log("No areas available");
}
let categories = await getCategories();
if (categories.length > 0) {
  displayCategories(categories);
} else {
  console.log("No categories available");
}

loading.classList.add("loading");

recipesContainer.addEventListener("click", async function (e) {
  const card = e.target.closest(".recipe-card");

  if (card !== null) {
    mealId = card.dataset.mealId;

    let meal = await getMealById(mealId);
    // console.log(meal);
    mealDetailsAdd = meal.result;
    // console.log(mealDetailsAdd);
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
    recipesContainer.innerHTML = `<div class="col-span-full flex items-center justify-center h-64">
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>`;

    let searchCat = await searchCategoey(category);

    displayMeals(searchCat.results);
    recipesCount.textContent = `Showing ${searchCat.results.length} ${category} recipes`;
  });
}

// ul links

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function () {
    if (i === 0) {
      navigate("meals");
    } else if (i === 1) {
      navigate("products");
    } else if (i === 2) {
      navigate("foodlog");
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
// scanner sec filter score
const productsGrid = document.getElementById("products-grid");

const Filters = document.querySelectorAll(".nutri-score-filter");

for (let i = 0; i < Filters.length; i++) {
  Filters[i].addEventListener("click", async function (e) {
    productsGrid.innerHTML = `
  <div class="col-span-full flex items-center justify-center h-64">
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
`;

    let data = await getScannerInput(e.target.dataset.grade);
    scannerSearch(data);
  });
}
const FiltersCategory = document.querySelectorAll(".product-category-btn");
for (let i = 0; i < FiltersCategory.length; i++) {
  FiltersCategory[i].addEventListener("click", async function (e) {
    // console.log(e.target.dataset.grade);
    productsGrid.innerHTML = `
  <div class="col-span-full flex items-center justify-center h-64">
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
`;
    productsGrid.innerHTML = `<div class="lds-ellipsis" ><div></div><div></div><div></div><div></div></div>`;
    let data = await getScannerInput(e.target.dataset.category);
    scannerSearch(data);
  });
}

// modal open

document
  .getElementById("products-grid")
  .addEventListener("click", async function (e) {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const barcode = card.dataset.barcode;
    // console.log(barcode);
    const productData = await getDataBarcode(barcode);

    if (productData.result) {
      currentProduct = productData.result;
      showCard(currentProduct);
      openProductModal();
    }
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
// search by barcode
const barcodeInput = document.getElementById("barcode-input");
const searchBarcodeBtn = document.getElementById("lookup-barcode-btn");

async function searchBarcode() {
  const barcode = barcodeInput.value.trim();

  if (!barcode) return;

  const data = await getDataBarcode(barcode);

  if (data.result) {
    currentProduct = data.result;

    showCard(currentProduct);
    scannerSearch([currentProduct]);
    openProductModal();
  } else {
    showToast("Product not found in database", "red");
  }
}

searchBarcodeBtn.addEventListener("click", searchBarcode);

// Enter
barcodeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchBarcode();
  }
});

// toster fun

function showToast(message, color) {
  const oldToast = document.querySelector(".toast-notification");

  if (oldToast) {
    oldToast.remove();
  }
  const toast = document.createElement("div");
  if (color === "red") {
    toast.className =
      "fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 toast-notification";
    toast.textContent = message;
  } else if (color === "blue") {
    toast.className =
      "fixed bottom-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 toast-notification";
    toast.textContent = message;
  }
  document.body.append(toast);
  setTimeout(() => {
    toast.remove();
  }, 1000);
}
// foodlog section
const foodDate = document.getElementById("foodlog-date");
function getTodayDate() {
  const today = new Date();

  return today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}
foodDate.textContent = getTodayDate();
// add meal btn
const logMealBtn = document.getElementById("log-meal-btn");

logMealBtn.addEventListener("click", async function () {
  const mealNutritionData = await getNutritionData(
    mealDetailsAdd.name,
    mealDetailsAdd.ingredients.map(
      (item) => `${item.measure} ${item.ingredient}`,
    ),
  );

  showMealMModal(mealNutritionData.data, mealDetailsAdd.thumbnail);
});
// log this food
const logFoodBtn = document.getElementById("log-this-food");

logFoodBtn.addEventListener("click", function () {
  if (!currentProduct) return;

  const nutrients = currentProduct.nutrients || {};

  addFoodLogEntry({
    id: Date.now().toString(),
    name: currentProduct.name,
    image: currentProduct.image || "",
    servings: 1,
    calories: Number(nutrients.calories || 0),
    protein: Number(nutrients.protein || 0),
    carbs: Number(nutrients.carbs || 0),
    fat: Number(nutrients.fat || 0),
  });

  closeProductModal();
});
// week call
updateWeeklyOverview();
// quick btn
const quickLogBtns = document.querySelectorAll(".quick-log-btn");

quickLogBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const section = this.dataset.section;

    if (section === "meal") {
      navigate("meals");
    } else if (section === "scanner") {
      navigate("products");
    } else if (section === "custom") {
      // custom modal
    }
  });
});
// back btn
const backBtn = document.getElementById("back-to-meals-btn");
backBtn.addEventListener("click", function () {
  navigate("meals");
});
// //////////
function loadSectionFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const section = params.get("section");

  if (section === "products") {
    navigateWithoutHistory("products");
  } else if (section === "foodlog") {
    navigateWithoutHistory("foodlog");
  } else {
    navigateWithoutHistory("meals");
  }
}

function navigateWithoutHistory(section) {
  mealDetails?.classList.add("d-none");

  if (section === "meals") {
    activeLink(lis[0]);
    showSection(mealSection);
  } else if (section === "products") {
    activeLink(lis[1]);
    showSection(scannerSection);
  } else if (section === "foodlog") {
    activeLink(lis[2]);
    showSection(foodLogSection);
  }
}

loadSectionFromUrl();

window.addEventListener("popstate", function () {
  loadSectionFromUrl();
});
