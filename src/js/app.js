import {getHotels} from './hotels_API.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
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

async function getHotelsHandler() {
  try {
    myData = await getHotels();
    console.log(myData.data);
  } catch {}
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

