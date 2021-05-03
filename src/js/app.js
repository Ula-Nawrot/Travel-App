import { apiAccess } from "./hotels_API.js";
import Page2 from "./views/page2";
import Page1 from "./views/page1.js";
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
///////////////Selecting DOM elements/////////////////////
const searchButton = document.querySelector(".search__btn");




async function gettingData() {
  try {
    const dataApi = await apiAccess();
    const userData = {};
    const page1 = new Page1();
    const page2 = new Page2();
    
    //console.log(polska);
    searchButton.addEventListener("click", function (e) {
      e.preventDefault();
      //1. Reading input values
      page1.inputData();
      
      page2.render(dataApi);
    });
    //back to page 1
    //arrowBackPage2.addEventListener("click",page1.render(dataApi))
    
    page1.inputRecommendedCountry();
  } catch (err) {
    alert(err);
  }
}

gettingData();





function countryValidation() {
  if (userData.country != "") {
    userData.country = inputCountry.value;
    console.log(userData);
  } else {
    console.log("brak kraju");
  }
}


