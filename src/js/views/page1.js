import View from "./View";
const inputCountry = document.querySelector(".search__field");
const inputDateFrom = document.querySelector(".search__date_from");
const inputDateTo = document.querySelector(".search__date_to");
const inputPeople = document.querySelector("#people");
export const userData = {};

export default class Page1 extends View {
  constructor() {
    super();
    this.errorMessage =
      "We could not find that recipe. Please try another one!";
    this.dataFrom;
    this.dataTo;

    //console.log(this.data.Poland);
  }
  inputDates() {
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
    if (inputDateFrom.value == "" || inputDateTo.value == "") {
      alert("Please select the date of your stay");
      return false;
    } else {
      return true;
    }
  }
  inputCountryName() {
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
    } else if (inputCountry.value != undefined && inputCountry.value != "") {
      userData.country = inputCountry.value;

      userData.dateFrom = inputDateFrom.value;
      userData.dateTo = inputDateTo.value;
      userData.noOfPeople = inputPeople.value;
      console.log(userData);

      return true;
    } else {
      alert(
        "You must select a country. Enter one of the following countries: Poland, Germany, Austria, Belgium, Croatia, Italy."
      );
      return false;
    }
  }
  inputRecommendedCountry() {
    const countries = document.querySelector(".countries");

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
