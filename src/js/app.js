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
//const searchButton = document.querySelector(".search__btn");
const searchButton = document.querySelector(".search__btn");
const confirmButton = document.getElementById("confirm");
const arrowBackPage2 = document.querySelector(".arrow_back_page2");
const choosingHotel = document.getElementById("choosingHotel");
const choosingCountry = document.getElementById("choosingCountry");
const form = document.getElementById("form");
const bookButton = document.querySelector(".book");

async function gettingData() {
  try {
    const dataApi = await hotelsAPI();

    const page1 = new Page1();
    const page2 = new Page2();
    const page3 = new Page3();
    const confirmation = new Confirm_Msg();

    page1.renderFunctions();
    //console.log(userData);
    // const formPage = document.getElementById("form");
    // formPage.classList.add("hidden");
    searchButton.addEventListener("click", function (e) {
      e.preventDefault();
      //1. Reading input values
      if (page1.inputCountryName() && page1.validationDates()) {
        choosingHotel.classList.remove("hidden");
        choosingCountry.classList.add("hidden");
        page2.renderFunctions(dataApi);
        page3.bookButton(dataApi, userData);
        console.log(userData);
      }
    });

    

    confirmButton.onclick = (e) => {
      e.preventDefault();
      
      
      confirmation.renderFunctions();
      
      //console.log("kliknąłeś przycisk potwierdzający");
      if(confirmation.ValidateEmail()==true && confirmation.ValidateSurname()==true){
        console.log('email i nazwisko jest poprawny');
        confirmation.showConfirmation();
    }
    };

    // console.log(document.body.contains(bookButton));
    // if(bookButton){
    //   form.bookButton(dataApi);

    // }
    
  } catch (err) {
    alert(err);
  }
}

gettingData();
