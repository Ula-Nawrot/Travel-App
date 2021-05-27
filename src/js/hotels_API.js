import { async } from "regenerator-runtime";
const BASE_API_URL = `https://quiet-forest-42003.herokuapp.com/api/hotels/all?country=`;

export const hotelsAPI = async function (country) {
  try {
    const res = await fetch(`${BASE_API_URL}${country}`);
    const data = await res.json();

    return data[country];
  } catch (err) {
    alert(err);
  }
};


