// =========== Loading Spinner Design ============
/*
<div class="flex items-center justify-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
</div>
*/

// =========== Empty State Design ============
/*
<div class="flex flex-col items-center justify-center py-12 text-center">
    <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
    </div>
    <p class="text-gray-500 text-lg">No recipes found</p>
    <p class="text-gray-400 text-sm mt-2">Try searching for something else</p>
</div>
*/

const recipesContainer = document.getElementById("recipes-grid");
const areasContainer = document.getElementById("areas-container");
const categoryContainer = document.getElementById("categories-grid");
// meals
export function displayMeals(meals) {
  let cartona = "";
  for (let i = 0; i < meals.length; i++) {
    cartona += `<div
              class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              data-meal-id="${meals[i].id}"
            >
              <div class="relative h-48 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="${meals[i].thumbnail}"
                  alt="Teriyaki Chicken Casserole"
                  loading="lazy"
                />
                <div class="absolute bottom-3 left-3 flex gap-2">
                  <span
                    class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700"
                  >
                    ${meals[i].category}
                  </span>
                  <span
                    class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white"
                  >
                    ${meals[i].area || "international"}
                  </span>
                </div>
              </div>
              <div class="p-4">
                <h3
                  class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1"
                >
                  ${meals[i].name}
                </h3>
                <p class="text-xs text-gray-600 mb-3 line-clamp-2">
                  ${meals[i].instructions}
                </p>
                <div class="flex items-center justify-between text-xs">
                  <span class="font-semibold text-gray-900">
                    <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
                    ${meals[i].category}
                  </span>
                  <span class="font-semibold text-gray-500">
                    <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
                    ${meals[i].area}
                  </span>
                </div>
              </div>
            </div>`;
  }

  recipesContainer.innerHTML = cartona;
}
// areas
export function displayAreas(areas) {
  let cartona = "";
  for (let i = 0; i < areas.length; i++) {
    cartona += `<button
              class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm whitespace-nowrap hover:bg-gray-200 transition-all"
            data-area["${areas[i].name}"]
              >
              ${areas[i].name}
            </button>`;
  }
  areasContainer.insertAdjacentHTML("beforeend", cartona);
}
// color and icon
const categoryStyles = {
  Beef: {
    icon: "fa-drumstick-bite",
    gradient: "from-red-50 to-rose-50",
    border: "border-red-200",
    hoverBorder: "hover:border-red-400",
    iconGradient: "from-red-400 to-rose-500",
  },

  Chicken: {
    icon: "fa-drumstick-bite",
    gradient: "from-orange-50 to-amber-50",
    border: "border-orange-200",
    hoverBorder: "hover:border-orange-400",
    iconGradient: "from-orange-400 to-amber-500",
  },

  Dessert: {
    icon: "fa-cake-candles",
    gradient: "from-pink-50 to-rose-50",
    border: "border-pink-200",
    hoverBorder: "hover:border-pink-400",
    iconGradient: "from-pink-400 to-rose-500",
  },

  Lamb: {
    icon: "fa-drumstick-bite",
    gradient: "from-orange-50 to-yellow-50",
    border: "border-orange-200",
    hoverBorder: "hover:border-orange-400",
    iconGradient: "from-orange-400 to-yellow-500",
  },

  Miscellaneous: {
    icon: "fa-bowl-food",
    gradient: "from-slate-50 to-gray-50",
    border: "border-slate-200",
    hoverBorder: "hover:border-slate-400",
    iconGradient: "from-slate-400 to-gray-500",
  },

  Pasta: {
    icon: "fa-bowl-food",
    gradient: "from-yellow-50 to-amber-50",
    border: "border-yellow-200",
    hoverBorder: "hover:border-yellow-400",
    iconGradient: "from-yellow-400 to-amber-500",
  },

  Pork: {
    icon: "fa-bacon",
    gradient: "from-red-50 to-pink-50",
    border: "border-red-200",
    hoverBorder: "hover:border-red-400",
    iconGradient: "from-red-400 to-pink-500",
  },

  Seafood: {
    icon: "fa-fish",
    gradient: "from-cyan-50 to-cyan-50",
    border: "border-cyan-200",
    hoverBorder: "hover:border-cyan-400",
    iconGradient: "from-cyan-400 to-cyan-500",
  },

  Side: {
    icon: "fa-bowl-food",
    gradient: "from-emerald-50 to-green-50",
    border: "border-emerald-200",
    hoverBorder: "hover:border-emerald-400",
    iconGradient: "from-emerald-400 to-green-500",
  },

  Starter: {
    icon: "fa-utensils",
    gradient: "from-cyan-50 to-teal-50",
    border: "border-cyan-200",
    hoverBorder: "hover:border-cyan-400",
    iconGradient: "from-cyan-400 to-teal-500",
  },

  Vegan: {
    icon: "fa-leaf",
    gradient: "from-green-50 to-emerald-50",
    border: "border-green-200",
    hoverBorder: "hover:border-green-400",
    iconGradient: "from-green-400 to-emerald-500",
  },

  Vegetarian: {
    icon: "fa-seedling",
    gradient: "from-lime-50 to-green-50",
    border: "border-lime-200",
    hoverBorder: "hover:border-lime-400",
    iconGradient: "from-lime-400 to-green-500",
  },
};
// console.log(categoryStyles.Beef.border);

// categories
export function displayCategories(categories) {
  let cartona = "";
  for (let i = 0; i < 12; i++) {
    let name = categories[i].name;
    cartona += `<div
              class="category-card bg-gradient-to-br ${categoryStyles[name].gradient} rounded-xl p-3 border ${categoryStyles[name].border} ${categoryStyles[name].hoverBorder} hover:shadow-md cursor-pointer transition-all group"
              data-category="${categories[i].name}"
            >
              <div class="flex items-center gap-2.5">
                <div
                  class="text-white w-9 h-9 bg-gradient-to-br ${categoryStyles[name].iconGradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm"
                >
                  <i class="fa-solid ${categoryStyles[name].icon}"></i>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-gray-900">${categories[i].name}</h3>
                </div>
              </div>
            </div>
    `;
  }
  categoryContainer.innerHTML = cartona;
}
const mealFilter = document.getElementById("search-filters-section");
const mealCategory = document.getElementById("meal-categories-section");
const allRecipes = document.getElementById("all-recipes-section");
const mealDetails = document.getElementById("meal-details");
const header = document.getElementById("header-head");
const headPara = document.getElementById("head-para");
export function displayMeal(meal) {
  header.textContent = "Recipe Details";
  headPara.textContent = "View full recipe information and nutrition facts";
  // hide other sec and show sec
  mealFilter.classList.add("d-none");
  mealCategory.classList.add("d-none");
  allRecipes.classList.add("d-none");
  mealDetails.classList.remove("d-none");

  console.log(meal);

  const image = document.getElementById("hero-image");
  const headText = document.getElementById("head-text");
  const span = document.querySelector(".one");
  const numItems = document.getElementById("num-items");
  const ingredientsContainer = document.getElementById("ingredients");
  const instructionsContainer = document.getElementById("instructions");
  image.setAttribute("src", meal.result.thumbnail);
  headText.textContent = meal.result.name;
  span.textContent = meal.result.category;
  if (meal.result.area) {
    span.nextElementSibling.textContent = meal.result.area;
  }
  if (meal.result.tags) {
    span.nextElementSibling.nextElementSibling.textContent =
      meal.result.tags[0];
    span.nextElementSibling.nextElementSibling.nextElementSibling.textContent =
      meal.result.tags[1];
  }
  numItems.textContent = `${meal.result.ingredients.length} items`;
  let cartona = "";
  let cartonaTwo = "";
  for (let i = 0; i < meal.result.ingredients.length; i++) {
    cartona += `
    <div
                    class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
                    />
                    <span class="text-gray-700">
                      <span class="font-medium text-gray-900">${meal.result.ingredients[i].measure}</span>
                       ${meal.result.ingredients[i].ingredient}
                    </span>
                  </div>
    `;
  }
  ingredientsContainer.innerHTML = cartona;
  for (let i = 0; i < meal.result.instructions.length; i++) {
    cartonaTwo += `
    <div
                    class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0"
                    >
                      ${i + 1}
                    </div>
                    <p class="text-gray-700 leading-relaxed pt-2">
                      ${meal.result.instructions[i]}
                    </p>
                  </div>
    `;
  }
  instructionsContainer.innerHTML = cartonaTwo;
  const video = document.querySelector("iframe");

  const videoUrl = meal.result.youtube;

  const videoId = new URL(videoUrl).searchParams.get("v");
  video.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
}
// search
