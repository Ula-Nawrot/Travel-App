import { hotelsAPI } from "./hotels_API.js";
import { userData } from "./views/page1";
import Page2 from "./views/page2";
import Page1 from "./views/page1.js";
import Page3 from "./views/page3.js";
import Confirm_Msg from "./views/confirm_msg.js";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";
///IMAGES////
import "../scss/main.scss";
import "../images/search_icon.png";
import "../images/icon_search.svg";
import "../images/white_search_icon.svg";
import "../images/cochem_germany.jpg";
import "../images/poland_gdansk.jpg";
import "../images/hallstatt_austria.jpg";
import "../images/venice_italy.jpg";
import "../images/netherland.jpg";
import "../images/rome_italy.jpg";
import "../images/venice_italy.jpg";
import "../images/photo_nav@2x.png";
import "../images/arrow_back.svg";
import "../images/stars_1.svg";
import "../images/add_sign.svg";
import View from "./views/View.js";

// function importAll(r) {
//     return r.keys().map(r);
//   }

//   const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
//https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack

///////////////Selecting DOM elements/////////////////////

const searchButton = document.querySelector(".search__btn");
const confirmButton = document.getElementById("confirm");

const choosingHotel = document.getElementById("choosingHotel");
const choosingCountry = document.getElementById("choosingCountry");
const inputCountry = document.querySelector(".search__field");
const form = document.getElementById("form");
const imagesCountries = document.querySelector(".countries");

const page1 = new Page1();
const page2 = new Page2();
const page3 = new Page3();
const view = new View();
const confirmation = new Confirm_Msg();
let country = {};

localStorage.clear();
page1.renderFunctions();

inputCountry.onchange = (e) => {
  country = view.inputCountry();
  feelingForm(country);
  chooseCountry(country);
};

async function chooseCountry(country) {
  try {
    const dataHotel = await hotelsAPI(country);

    searchButton.onclick = (e) => {
      e.preventDefault();

      if (page1.inputCountryName() && page1.validationDates()) {
        choosingHotel.classList.remove("hidden");
        choosingCountry.classList.add("hidden");
        page2.renderFunctions(dataHotel);
        page3.bookButton(dataHotel, userData);
      }
    };
  } catch (err) {
    alert(err);
  }
}

async function feelingForm(country) {
  try {
    const dataApi = await hotelsAPI(country);

    confirmButton.onclick = (e) => {
      e.preventDefault();
      const index = confirmButton.getAttribute("data-index");
      const totalPrice = page3.priceCalc(dataApi[index], userData);

      confirmation.renderFunctions();

      if (
        confirmation.ValidateEmail() == true &&
        confirmation.ValidateSurname() == true &&
        confirmation.ValidatePayment() == true
      ) {
        console.log("email i nazwisko jest poprawny");
        confirmation.showConfirmation();
      }
    };
  } catch (err) {
    alert(err);
  }
}
