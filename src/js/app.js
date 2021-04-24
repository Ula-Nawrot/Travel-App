//import data from './data.js'
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

const axios = require("axios");
const data = '';
const myData =  axios
  .get("https://us-central1-hotelsapi-311419.cloudfunctions.net/api/hotels")
  .then(
      function(response){
          console.log(response.data);
      }
  );

  console.log(myData);

//test();

// function importAll(r) {
//     return r.keys().map(r);
//   }

//   const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
//https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack


///////////////Selecting DOM elements/////////////////////
const mainContainer = document.querySelector('.container');

///////////////////////////////////////////


const showPage2 = function () {

    mainContainer.removeChild(mainContainer.childNodes[1]);
    // const markup = `Hello`;
    // mainContainer.insertAdjacentHTML('afterbegin',markup);
     //console.log(x);
};

showPage2();

