// meals api
export async function getMeals() {
  try {
    let res = await fetch(
      `https://nutriplan-api.vercel.app/api/meals/search?q=chicken&page=1&limit=25`,
    );
    let mealData = await res.json();
    return mealData.results;
  } catch (error) {
    throw new Error(error);
  }
}
// areas api
export async function getAreas() {
  try {
    let res = await fetch(`https://nutriplan-api.vercel.app/api/meals/areas`);
    let data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
// category api
export async function getCategories() {
  try {
    let res = await fetch(
      `https://nutriplan-api.vercel.app/api/meals/categories`,
    );
    let data = await res.json();
    return data.results;
  } catch (error) {
    throw new Error(error);
  }
}
// every meal api
export async function getMealById(id) {
  let res = await fetch(`https://nutriplan-api.vercel.app/api/meals/${id}`);
  let data = await res.json();

  return data;
}
// seach
export async function getSearchData(name) {
  let res = await fetch(
    `https://nutriplan-api.vercel.app/api/meals/search?q=${name}&page=1&limit=25`,
  );
  let data = await res.json();
  // console.log(data.results);
  return data;
}
// search category
export async function searchCategoey(category) {
  let res = await fetch(
    `https://nutriplan-api.vercel.app/api/meals/filter?category=${category}&page=1&limit=25`,
  );
  let data = await res.json();
  // console.log(data.results);
  return data;
}
// search by area
export async function searchByArea(area) {
  let res = await fetch(
    `https://nutriplan-api.vercel.app/api/meals/filter?area=${area}&page=1&limit=25`,
  );
  let data = await res.json()
  // console.log(data);
  return data
}
