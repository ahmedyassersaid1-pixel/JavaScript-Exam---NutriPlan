// meals api
export async function getMeals() {
  try {
    const res = await fetch(
      `https://nutriplan-api.vercel.app/api/meals/search?q=chicken&page=1&limit=25`,
    );
    const mealData = await res.json();
    return mealData.results;
  } catch (error) {
    throw new Error(error);
  }
}
// areas api
export async function getAreas() {
  try {
    const res = await fetch(`https://nutriplan-api.vercel.app/api/meals/areas`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
// category api
export async function getCategories() {
  try {
    const res = await fetch(
      `https://nutriplan-api.vercel.app/api/meals/categories`,
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    throw new Error(error);
  }
}
// every meal api
export async function getMealById(id) {
  try {
    const res = await fetch(`https://nutriplan-api.vercel.app/api/meals/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
// seach
export async function getSearchData(name) {
  try {
    const res = await fetch(
      `https://nutriplan-api.vercel.app/api/meals/search?q=${name}&page=1&limit=25`,
    );
    const data = await res.json();
    // console.log(data.results);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
// search category
export async function searchCategoey(category) {
  try {
    const res = await fetch(
      `https://nutriplan-api.vercel.app/api/meals/filter?category=${category}&page=1&limit=25`,
    );
    const data = await res.json();
    // console.log(data.results);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
// search by area
export async function searchByArea(area) {
  try {
    const res = await fetch(
      `https://nutriplan-api.vercel.app/api/meals/filter?area=${area}&page=1&limit=25`,
    );
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
// call api scanner
export async function getScannerInput(name) {
  try {
    const res = await fetch(
      `https://nutriplan-api.vercel.app/api/products/search?q=${name}&page=1&limit=24`,
    );
    const data = await res.json();
    // console.log(data.results);
    return data.results;
  } catch (error) {
    throw new Error(error);
  }
}
// nutrition api
export async function getNutritionData(name, arr) {
  try {
    const res = await fetch(
      "https://nutriplan-api.vercel.app/api/nutrition/analyze",
      {
        method: "POST",
        headers: {
          "x-api-key": "KgcZgHcL87eh9w8RoCMtANgkiUSJlLXWh7m7zaUS",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipeName: name,
          ingredients: arr,
        }),
      },
    );

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
// get product by barcode
export async function getDataBarcode(barcode) {
  try {
    const res = await fetch(
      `https://nutriplan-api.vercel.app/api/products/barcode/${barcode}`,
    );
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
    // console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
