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
            data-area="${areas[i].name}"
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

  // console.log(meal);

  const image = document.getElementById("hero-image");
  const headText = document.getElementById("head-text");
  const span = document.querySelector(".one");
  const numItems = document.getElementById("num-items");
  const ingredientsContainer = document.getElementById("ingredients");
  const instructionsContainer = document.getElementById("instructions");
  image.setAttribute("src", meal.result.thumbnail);
  headText.textContent = meal.result.name;
  span.textContent = meal.result.category;
  const tagOne = span.nextElementSibling.nextElementSibling;
  const tagTwo = tagOne.nextElementSibling;

  if (meal.result.tags && meal.result.tags.length > 0) {
    if (meal.result.tags[0]) {
      tagOne.textContent = meal.result.tags[0];
    } else {
      tagOne.classList.add("d-none");
    }

    if (meal.result.tags[1]) {
      tagTwo.textContent = meal.result.tags[1];
    } else {
      tagTwo.classList.add("d-none");
    }
  } else {
    tagOne.classList.add("d-none");
    tagTwo.classList.add("d-none");
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
  const videoSection = document.getElementById("video-section");
  const video = videoSection.querySelector("iframe");
  const videoUrl = meal.result.youtube;

  if (videoUrl) {
    try {
      const videoId = new URL(videoUrl).searchParams.get("v");

      if (videoId) {
        videoSection.classList.remove("d-none");

        setTimeout(() => {
          video.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
        }, 300);
      } else {
        videoSection.classList.add("d-none");
      }
    } catch (error) {
      videoSection.classList.add("d-none");
    }
  } else {
    videoSection.classList.add("d-none");
  }
}
// display scanner search by word
const productsGrid = document.getElementById("products-grid");

export async function scannerSearch(data) {
  // console.log(data);

  let cartona = "";
  header.textContent = "Product Scanner";
  headPara.textContent = "Search packaged foods by name or barcode";
  if (data.length !== 0) {
    for (let i = 0; i < data.length; i++) {
      cartona += `<div 
  class="product-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group" 
  data-barcode="${data[i].barcode}" 
> 
  <div 
    class="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden" 
  > 
    ${
      data[i].image
        ? `<img 
        class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
        src="${data[i].image}" 
        alt="${data[i].name}" 
        loading="lazy" 
      />`
        : `<i class="fa-solid fa-box text-gray-400 text-4xl"></i>`
    } 

    <!-- Nutri-Score Badge --> 
    ${
      data[i].nutritionGrade == "unknown"
        ? ""
        : `<div 
            class="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded uppercase"
          >
            Nutri-Score ${data[i].nutritionGrade}
          </div>`
    }

    <!-- NOVA Badge --> 
    ${
      data[i].novaGroup
        ? `<div 
      class="absolute top-2 right-2 bg-lime-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center" 
      title="NOVA ${data[i].novaGroup}" 
    > 
      ${data[i].novaGroup} 
    </div>`
        : ""
    }
  </div> 

  <div class="p-4"> 
    <p 
      class="text-xs text-emerald-600 font-semibold mb-1 truncate" 
    > 
      ${data[i].brand} 
    </p> 

    <h3 
      class="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors" 
    > 
      ${data[i].name} 
    </h3> 
${
  data[i].nutrients.calories
    ? ` <div 
      class="flex items-center gap-3 text-xs text-gray-500 mb-3" 
    > 
      <span>
        <i class="fa-solid fa-fire mr-1"></i>${Math.floor(data[i].nutrients.calories.toFixed())}  kcal/100g
      </span> 
    </div> `
    : ""
}
   

    <!-- Mini Nutrition --> 
    <div class="grid grid-cols-4 gap-1 text-center"> 
      <div class="bg-emerald-50 rounded p-1.5"> 
        <p class="text-xs font-bold text-emerald-700">${data[i].nutrients.protein.toFixed(1)}g</p> 
        <p class="text-[10px] text-gray-500">Protein</p> 
      </div> 

      <div class="bg-blue-50 rounded p-1.5"> 
        <p class="text-xs font-bold text-blue-700">${data[i].nutrients.carbs.toFixed(1)}g</p> 
        <p class="text-[10px] text-gray-500">Carbs</p> 
      </div> 

      <div class="bg-purple-50 rounded p-1.5"> 
        <p class="text-xs font-bold text-purple-700">${data[i].nutrients.fat.toFixed(1)}g</p> 
        <p class="text-[10px] text-gray-500">Fat</p> 
      </div> 

      <div class="bg-orange-50 rounded p-1.5"> 
        <p class="text-xs font-bold text-orange-700">${data[i].nutrients.sugar.toFixed(1)}g</p> 
        <p class="text-[10px] text-gray-500">Sugar</p> 
      </div> 
    </div> 
  </div> 
</div>`;
    }
    productsGrid.innerHTML = cartona;
  } else {
    productsGrid.innerHTML = `<div id="products-empty"  class="py-12 ">
                    <div class="text-center">
                        <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="text-3xl text-gray-400" data-fa-i2svg=""><svg class="svg-inline--fa fa-box-open" data-prefix="fas" data-icon="box-open" role="img" viewBox="0 0 640 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z"></path></svg></i>
                        </div>
                        <p class="text-gray-500 text-lg mb-2">No products to display</p>
                        <p class="text-gray-400 text-sm">Search for a product or browse by category</p>
                    </div>
                </div>`;
  }
}
const nutritionFactsContainer = document.getElementById(
  "nutrition-facts-container",
);
export async function displayNutrition(nutritionData) {
  let data = nutritionData.data;
  // console.log(data);

  nutritionFactsContainer.innerHTML = `<p class="text-sm text-gray-500 mb-4">Per serving</p>

                  <div
                    class="text-center py-4 mb-4 bg-linear-to-br from-emerald-50 to-teal-50 rounded-xl"
                  >
                    <p class="text-sm text-gray-600">Calories per serving</p>
                    <p class="text-4xl font-bold text-emerald-600">${data.perServing.calories.toFixed()}</p>
                    <p class="text-xs text-gray-500 mt-1">Total: ${data.totals.calories.toFixed()} cal</p>
                  </div>

                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                        <span class="text-gray-700">Protein</span>
                      </div>
                      <span class="font-bold text-gray-900">${data.perServing.protein.toFixed()}g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-emerald-500 h-2 rounded-full"
                        style="width: 84%"
                      ></div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span class="text-gray-700">Carbs</span>
                      </div>
                      <span class="font-bold text-gray-900">${data.perServing.carbs.toFixed()}g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-blue-500 h-2 rounded-full"
                        style="width: 17%"
                      ></div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span class="text-gray-700">Fat</span>
                      </div>
                      <span class="font-bold text-gray-900">${data.perServing.fat.toFixed()}g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-purple-500 h-2 rounded-full"
                        style="width: 12%"
                      ></div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-orange-500"></div>
                        <span class="text-gray-700">Fiber</span>
                      </div>
                      <span class="font-bold text-gray-900">${data.perServing.fiber.toFixed()}g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-orange-500 h-2 rounded-full"
                        style="width: 14%"
                      ></div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-pink-500"></div>
                        <span class="text-gray-700">Sugar</span>
                      </div>
                      <span class="font-bold text-gray-900">${data.perServing.sugar.toFixed()}g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-pink-500 h-2 rounded-full"
                        style="width: 24%"
                      ></div>
                    </div>
                  </div>

                  <div class="mt-6 pt-6 border-t border-gray-100">
                    <h3 class="text-sm font-semibold text-gray-900 mb-3">
                      other
                    </h3>
                    <div class="grid grid-cols-2 gap-3 text-sm">
                      <div class="flex justify-between">
                        <span class="text-gray-600">Cholesterol</span>
                        <span class="font-medium">${data.perServing.cholesterol.toFixed()}mg</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-600">Sodium</span>
                        <span class="font-medium">${data.perServing.sodium.toFixed()}mg</span>
                      </div>
                    </div>
                  </div>`;
}

// modal card
export async function showCard(data) {
  // console.log(data);

  const modalBrand = document.getElementById("modal-brand");
  const modalName = document.getElementById("modal-name");
  const modalQuantity = document.getElementById("modal-quantity");

  // Nutri-Score elements
  const nutriScore = document.getElementById("nutri-score");
  const modalScoreBadge = document.getElementById("modal-score-badge");
  const modalScore = document.getElementById("modal-score");

  // NOVA elements
  const novaScore = document.getElementById("nova-score");
  const modalNovaBadge = document.getElementById("modal-nova-badge");
  const modalNova = document.getElementById("modal-nova");

  const modalCalories = document.getElementById("modal-calories");
  const modalProtein = document.getElementById("modal-protein");
  const modalCarbs = document.getElementById("modal-carbs");
  const modalFat = document.getElementById("modal-fat");
  const modalSugar = document.getElementById("modal-sugar");
  const modalSaturatedFat = document.getElementById("modal-saturated-fat");
  const modalFiber = document.getElementById("modal-fiber");
  const modalSalt = document.getElementById("modal-salt");

  const productModalImage = document.querySelector(".product-modal-image");
  const modalIngred = document.getElementById("modal-ingred");

  // ---------- Image ----------
  if (!data.image) {
    productModalImage.innerHTML = `
      <div class="flex items-center justify-center h-full w-full p-4">
        <i class="text-4xl text-gray-400 fa-solid fa-box"></i>
      </div>
    `;
  } else {
    productModalImage.innerHTML = `
      <img id="modal-image" src="${data.image}" alt="${data.name}" />
    `;
  }

  modalBrand.textContent = data.brand || "Unknown Brand";
  modalName.textContent = data.name || "Unknown Product";

  if (data.quantity) {
    modalQuantity.textContent = data.quantity;
    modalQuantity.style.display = "block";
  } else {
    modalQuantity.style.display = "none";
  }

  const validGrades = ["a", "b", "c", "d", "e"];
  const rawGrade = data.nutritionGrade?.toLowerCase();
  const grade = validGrades.includes(rawGrade) ? rawGrade : null;

  const gradeClasses = ["grade-a", "grade-b", "grade-c", "grade-d", "grade-e"];
  modalScoreBadge.classList.remove(...gradeClasses);
  nutriScore.classList.remove(...gradeClasses);

  if (grade) {
    nutriScore.style.display = "flex";

    modalScoreBadge.textContent = grade.toUpperCase();
    modalScoreBadge.classList.add(`grade-${grade}`);

    const scoreText = {
      a: "Excellent",
      b: "Good",
      c: "Average",
      d: "Poor",
      e: "Bad",
    };

    modalScore.textContent = scoreText[grade];
  } else {
    nutriScore.style.display = "none";
  }

  const rawNova = data.nova ?? data.novaGroup;
  const nova = [1, 2, 3, 4].includes(Number(rawNova)) ? Number(rawNova) : null;

  const novaClasses = ["nova-1", "nova-2", "nova-3", "nova-4"];
  modalNovaBadge.classList.remove(...novaClasses);
  novaScore.classList.remove(...novaClasses);

  if (nova) {
    novaScore.style.display = "flex";

    modalNovaBadge.textContent = nova;
    modalNovaBadge.classList.add(`nova-${nova}`);
    novaScore.classList.add(`nova-${nova}`);

    const novaText = {
      1: "Unprocessed",
      2: "Processed ingredients",
      3: "Processed",
      4: "Ultra-processed",
    };

    modalNova.textContent = novaText[nova];
  } else {
    novaScore.style.display = "none";
  }

  if (data.nutrients) {
    modalCalories.textContent =
      data.nutrients.calories != null
        ? Math.round(data.nutrients.calories)
        : "0";

    modalProtein.textContent =
      data.nutrients.protein != null
        ? `${data.nutrients.protein.toFixed(1)}g`
        : "0.0g";

    modalCarbs.textContent =
      data.nutrients.carbs != null
        ? `${data.nutrients.carbs.toFixed(1)}g`
        : "0.0g";

    modalFat.textContent =
      data.nutrients.fat != null ? `${data.nutrients.fat.toFixed(1)}g` : "0.0g";

    modalSugar.textContent =
      data.nutrients.sugar != null
        ? `${data.nutrients.sugar.toFixed(1)}g`
        : "0.0g";

    modalSaturatedFat.textContent =
      data.nutrients.saturatedFat != null
        ? `${data.nutrients.saturatedFat.toFixed(1)}g`
        : "0.0g";

    modalFiber.textContent =
      data.nutrients.fiber != null
        ? `${data.nutrients.fiber.toFixed(1)}g`
        : "0.0g";

    modalSalt.textContent =
      data.nutrients.sodium != null
        ? `${data.nutrients.sodium.toFixed(2)}g`
        : "0.00g";
  }
  modalIngred.textContent =
    data.ingredientsText || "No ingredients information available";
}
export async function displayFoodLogDetails(data) {
  console.log(data);
  const caloriesDetails = document.getElementById("calories-details");
  const caloriesProgress = document.getElementById("calories-progress");
  caloriesDetails.textContent = `${data.perServing.calories.toFixed(0)} / 2000 kcal`;
  caloriesProgress.style.width = `${(data.perServing.calories / 2000) * 100}%`;
}

////

let todayLog = [];

const DAILY_GOALS = {
  calories: 2000,
  protein: 50,
  carbs: 250,
  fat: 65,
};


export function addFoodLogEntry(entry) {
  todayLog.push({
    ...entry,
    date: new Date().toISOString().split("T")[0],
  });

  renderFoodLog();
  updateWeeklyOverview();
}

export function removeFoodLogEntry(id) {
  todayLog = todayLog.filter(
    (item) => item.id !== id,
  );

  localStorage.setItem(
    "foodLog",
    JSON.stringify(todayLog),
  );

  renderFoodLog();
}
document
  .getElementById("clear-foodlog")
  ?.addEventListener("click", () => {
    todayLog = [];

    localStorage.setItem(
      "foodLog",
      JSON.stringify(todayLog),
    );

    renderFoodLog();
  });

// show food log sec
function renderFoodLog() {
  const caloriesDetails = document.getElementById("calories-details");
  const caloriesProgress = document.getElementById("calories-progress");
  const proteinDetails = document.getElementById("protein-details");
  const proteinProgress = document.getElementById("protein-progress");
  const carbsDetails = document.getElementById("carbs-details");
  const carbsProgress = document.getElementById("carbs-progress");
  const fatDetails = document.getElementById("fat-details");
  const fatProgress = document.getElementById("fat-progress");
  const loggedItemsList = document.getElementById("logged-items-list");
  const loggedItemsCount = document.getElementById("logged-items-count");
  const clearBtn = document.getElementById("clear-foodlog");

  const totals = todayLog.reduce(
    (acc, item) => {
      acc.calories += item.calories;
      acc.protein += item.protein;
      acc.carbs += item.carbs;
      acc.fat += item.fat;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  );

  caloriesDetails.textContent = `${Math.round(totals.calories)} / ${DAILY_GOALS.calories} kcal`;
  caloriesProgress.style.width = `${Math.min((totals.calories / DAILY_GOALS.calories) * 100, 100)}%`;
  caloriesProgress.classList.toggle(
    "bg-red-500",
    totals.calories > DAILY_GOALS.calories,
  );

  proteinDetails.textContent = `${Math.round(totals.protein)} / ${DAILY_GOALS.protein} g`;
  proteinProgress.style.width = `${Math.min((totals.protein / DAILY_GOALS.protein) * 100, 100)}%`;
  proteinProgress.classList.toggle(
    "bg-red-500",
    totals.protein > DAILY_GOALS.protein,
  );

  carbsDetails.textContent = `${Math.round(totals.carbs)} / ${DAILY_GOALS.carbs} g`;
  carbsProgress.style.width = `${Math.min((totals.carbs / DAILY_GOALS.carbs) * 100, 100)}%`;
  carbsProgress.classList.toggle(
    "bg-red-500",
    totals.carbs > DAILY_GOALS.carbs,
  );

  fatDetails.textContent = `${Math.round(totals.fat)} / ${DAILY_GOALS.fat} g`;
  fatProgress.style.width = `${Math.min((totals.fat / DAILY_GOALS.fat) * 100, 100)}%`;
  fatProgress.classList.toggle("bg-red-500", totals.fat > DAILY_GOALS.fat);

  loggedItemsCount.textContent = `Logged Items (${todayLog.length})`;

  if (todayLog.length === 0) {
    loggedItemsList.innerHTML = `
      <div class="text-center py-8 text-gray-500">
        <i class="fa-solid fa-utensils text-4xl mb-3 text-gray-300"></i>
        <p class="font-medium">No meals logged today</p>
        <p class="text-sm">Add meals from the Meals page or scan products</p>
      </div>
    `;
    clearBtn.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    loggedItemsList.innerHTML = todayLog
      .map(
        (item) => `
        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
          <div class="flex items-center gap-3">
            <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-lg object-cover" />
            <div>
              <p class="font-semibold text-gray-900">${item.name}</p>
              <p class="text-xs text-gray-500">${item.servings} serving(s) · ${Math.round(item.calories)} cal</p>
            </div>
          </div>
          <button
            class="remove-food-log-item text-red-500 hover:text-red-600"
            data-id="${item.id}"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `,
      )
      .join("");
  }
}

document.getElementById("logged-items-list")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".remove-food-log-item");
  if (!btn) return;
  removeFoodLogEntry(btn.dataset.id);
});

document.getElementById("clear-foodlog")?.addEventListener("click", () => {
  todayLog = [];
  renderFoodLog();
});

export function showMealMModal(data, image) {
  document.getElementById("log-meal-modal")?.remove();

  let servings = 1;

  const modal = document.createElement("div");
  modal.id = "log-meal-modal";
  modal.className =
    "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4";

  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
      <div class="flex items-center gap-4 mb-6">
        <img
          src="${image}"
          alt="${data.recipeName}"
          class="w-16 h-16 rounded-xl object-cover"
        />
        <div>
          <h2 class="text-lg font-bold text-gray-900">Log This Meal</h2>
          <p class="text-sm text-gray-500">${data.recipeName}</p>
        </div>
      </div>

      <div class="mb-6">
        <h3 class="text-sm font-semibold text-gray-700 mb-3">
          Number of Servings
        </h3>
        <div class="flex items-center gap-4">
          <button
            id="decrease-serving"
            class="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-xl font-bold text-gray-700"
          >
            −
          </button>
          <span
            id="serving-count"
            class="text-xl font-bold text-gray-900 w-8 text-center"
            >1</span
          >
          <button
            id="increase-serving"
            class="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-xl font-bold text-gray-700"
          >
            +
          </button>
        </div>
      </div>

      <div class="bg-emerald-50 rounded-xl p-4 mb-6">
        <h3 class="text-sm font-semibold text-gray-700 mb-3">
          Estimated nutrition per serving:
        </h3>
        <div class="grid grid-cols-4 gap-2 text-center">
          <div>
            <strong
              id="modal-log-calories"
              class="block text-lg font-bold text-emerald-600"
              >${Math.round(data.perServing.calories)}</strong
            >
            <span class="text-xs text-gray-500">Calories</span>
          </div>
          <div>
            <strong
              id="modal-log-protein"
              class="block text-lg font-bold text-blue-600"
              >${data.perServing.protein.toFixed(0)}g</strong
            >
            <span class="text-xs text-gray-500">Protein</span>
          </div>
          <div>
            <strong
              id="modal-log-carbs"
              class="block text-lg font-bold text-orange-600"
              >${data.perServing.carbs.toFixed(0)}g</strong
            >
            <span class="text-xs text-gray-500">Carbs</span>
          </div>
          <div>
            <strong
              id="modal-log-fat"
              class="block text-lg font-bold text-purple-600"
              >${data.perServing.fat.toFixed(0)}g</strong
            >
            <span class="text-xs text-gray-500">Fat</span>
          </div>
        </div>
      </div>

      <div class="flex gap-3">
        <button
          id="cancel-log-meal"
          class="flex-1 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 font-semibold text-gray-700 transition-all"
        >
          Cancel
        </button>
        <button
          id="confirm-log-meal"
          class="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-white transition-all flex items-center justify-center gap-2"
        >
          <i class="fa-solid fa-clipboard-list"></i>
          Log Meal
        </button>
      </div>
    </div>
  `;

  document.body.append(modal);

  const servingCountEl = modal.querySelector("#serving-count");
  const decreaseBtn = modal.querySelector("#decrease-serving");
  const increaseBtn = modal.querySelector("#increase-serving");
  const cancelBtn = modal.querySelector("#cancel-log-meal");
  const confirmBtn = modal.querySelector("#confirm-log-meal");

  function closeModal() {
    modal.remove();
  }

  decreaseBtn.addEventListener("click", () => {
    if (servings > 1) {
      servings--;
      servingCountEl.textContent = servings;
    }
  });

  increaseBtn.addEventListener("click", () => {
    servings++;
    servingCountEl.textContent = servings;
  });

  cancelBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  confirmBtn.addEventListener("click", () => {
    addFoodLogEntry({
      id: Date.now().toString(),
      name: data.recipeName,
      image: image,
      servings: servings,
      calories: data.perServing.calories * servings,
      protein: data.perServing.protein * servings,
      carbs: data.perServing.carbs * servings,
      fat: data.perServing.fat * servings,
    });

    closeModal();
  });
}
// week
export function updateWeeklyOverview() {
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);

    date.setDate(today.getDate() - (6 - i));

    const dayName = date.toLocaleDateString("en-US", {
      weekday: "long",
    });

    const dayDate = date.getDate();

    const dateKey = date.toISOString().split("T")[0];

    const dayCalories = todayLog
      .filter((item) => item.date === dateKey)
      .reduce((total, item) => {
        return total + Number(item.calories || 0);
      }, 0);

    document.querySelector(
      `[data-day-name="${i}"]`
    ).textContent = dayName;

    document.querySelector(
      `[data-day-date="${i}"]`
    ).textContent = dayDate;

    document.querySelector(
      `[data-day-calories="${i}"]`
    ).textContent = `${Math.round(dayCalories)} kcal`;
  }
}
