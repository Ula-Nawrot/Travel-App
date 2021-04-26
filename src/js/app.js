import { getHotels } from "./hotels_API.js";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";
///IMAGES////
import "../scss/main.scss";
import "../images/search_icon.png";
import "../images/icon_search.svg";
import "../images/white_search_icon.svg";
import "../images/cochem_germany.jpg";
import "../images/dinant_belgium.jpg";
import "../images/hallstatt_austria.jpg";
import "../images/venice_italy.jpg";
import "../images/netherland.jpg";
import "../images/rome_italy.jpg";
import "../images/venice_italy.jpg";
import "../images/photo_nav@2x.png";
import "../images/arrow_back.svg";
import "../images/stars_1.svg";
import "../images/add_sign.svg";
// function importAll(r) {
//     return r.keys().map(r);
//   }

//   const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
//https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack

/////////////////////////////////////////

async function getHotelsHandler() {
  try {
    const myData = await getHotels("Polska");
    console.log(myData.data);
  } catch (err) {
    alert(err);
  }
}

getHotelsHandler();

// tab[]

// function search(country) {
//     myData.data.forEach(element => {
//         if(element.location.country == 'country')
//         {
//             tab.append(element)
//         }
//     });
// }

///////////////Selecting DOM elements/////////////////////
const mainContainer = document.querySelector(".container");

///////////////////////////////////////////
/////////////////Page 1////////////////////
///////////////Selecting DOM elements/////////////////////
const searchButton = document.querySelector(".search__btn");
const inputCountry = document.querySelector(".search__field");
const inputDateFrom = document.querySelector(".search__date_from");
const inputDateTo = document.querySelector(".search__date_to");
const inputPeople = document.querySelector("#people");
const userData = {};

function countryValidation() {
  if (userData.country != "") {
    userData.country = inputCountry.value;
    console.log(userData);
  } else {
    console.log("brak kraju");
  }
}

searchButton.addEventListener("click", function () {
  //1. Reading input value

  userData.dateFrom = inputDateFrom.value;
  userData.dateTo = inputDateTo.value;
  userData.noOfPeople = inputPeople.value;
  //console.log(userData);

  ifInputIsEmpty(userData.country);

  //2. Reading days input value

  //setAttribute("value", "2014-02-09");
});

const ifInputIsEmpty = function (element) {
  if ((element = "")) return console.log("działa");
};

const showPage2 = function () {
  mainContainer.innerHTML = "";
  // const markup = `Hello`;
  // mainContainer.insertAdjacentHTML('afterbegin',markup);
  //console.log(x);
};

//showPage2();
