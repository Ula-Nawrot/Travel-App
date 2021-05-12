import View from "./View";

const inputDateFrom = document.querySelector(".search__date_from");
const inputDateTo = document.querySelector(".search__date_to");
const inputPeople = document.querySelector("#people");
const mainContainer = document.querySelector(".container");
export const userData = {};

export default class Page1 extends View {
  constructor() {
    super();
    //console.log(inputCountry);
    //this.inputCountry = document.querySelector(".search__field");
    // this.inputDateFrom = document.querySelector(".search__date_from");
    // this.inputDateTo = document.querySelector(".search__date_to");
    // this.inputPeople = document.querySelector("#people");

    //console.log(this.data.Poland);
  }
  renderFunctions() {
    this.inputRecommendedCountry();
    this.inputDates();
    this.diffBetweenDates();
  }
  inputDates() {
    const inputDateFrom = document.querySelector(".search__date_from");
    const inputDateTo = document.querySelector(".search__date_to");
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();

    inputDateFrom.setAttribute("min", `${year}-${month}-${day}`);

    inputDateFrom.addEventListener("change", function () {
      inputDateTo.setAttribute("min", `${inputDateFrom.value}`);
    });
  }
  validationDates() {
    const inputDateFrom = document.querySelector(".search__date_from");
    const inputDateTo = document.querySelector(".search__date_to");
    if (inputDateFrom.value == "" || inputDateTo.value == "") {
      alert("Please select the date of your stay");
      return false;
    } else {
      return true;
    }
  }
  inputCountryName() {
    const inputCountry = document.querySelector(".search__field");
    const inputDateFrom = document.querySelector(".search__date_from");
    const inputDateTo = document.querySelector(".search__date_to");
    const conditionsArray = [
      inputCountry.value != "Poland",
      inputCountry.value != "Germany",
      inputCountry.value != "Austria",
      inputCountry.value != "Belgium",
      inputCountry.value != "Croatia",
      inputCountry.value != "Italy",
      inputCountry.value != undefined,
      inputCountry.value != "",
    ];
    if (conditionsArray.every((cond) => cond == true)) {
      alert(
        "The application is under development. The following countries are available: Poland, Germany, Austria, Belgium, Croatia, Italy."
      );
      return false;
    } else if (
      inputCountry.value != undefined &&
      inputCountry.value != ""
    ) {
      userData.country = inputCountry.value;
      userData.dateFrom = inputDateFrom.value;
      userData.dateTo = inputDateTo.value;
      userData.noOfPeople = inputPeople.value;

      return true;
    } else {
      alert(
        "You must select a country. Enter one of the following countries: Poland, Germany, Austria, Belgium, Croatia, Italy."
      );
      return false;
    }
  }
  searchButton(renderedpage){
    const searchButton = document.querySelector(".search__btn");
    
  }
  inputRecommendedCountry() {
    const countries = document.querySelector(".countries");
    const inputCountry = document.querySelector(".search__field");
    countries.onclick = function (e) {
      e.preventDefault();

      const countryButton = e.target.closest(".country");
      switch (countryButton.id) {
        case `germany`:
          inputCountry.value = "Germany";
          break;
        case `belgium`:
          inputCountry.value = "Belgium";
          break;
        case `austria`:
          inputCountry.value = "Austria";
          break;
        case `italy`:
          inputCountry.value = "Italy";
          break;
        case `croatia`:
          inputCountry.value = "Croatia";
          break;
        case `netherland`:
          inputCountry.value = "Netherland";
          break;
      }
    };
  }
  
}
