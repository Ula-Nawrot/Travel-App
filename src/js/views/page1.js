import View from "./View";
export const userData = {};

export default class Page1 extends View {
  constructor() {
    super();
  }
  renderFunctions() {
    this.inputRecommendedCountry();
    this.inputDates();
    this.diffBetweenDatesOnChange();
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
    const inputPeople = document.querySelector("#people");
    const conditionsArray = [
      inputCountry.value != "Germany",
      inputCountry.value != "Poland",
      inputCountry.value != "Austria",
      inputCountry.value != "Croatia",
      inputCountry.value != "Netherland",
      inputCountry.value != "Italy",
      inputCountry.value != undefined,
      inputCountry.value != "",
    ];

    if (conditionsArray.every((cond) => cond == true)) {
      alert(
        "The application is under development. The following countries are available: Poland, Germany, Austria, Netherland, Croatia, Italy."
      );
      return false;
    } else if (inputCountry.value != undefined && inputCountry.value != "") {
      userData.country = inputCountry.value;
      userData.dateFrom = inputDateFrom.value;
      userData.dateTo = inputDateTo.value;
      userData.noOfPeople = inputPeople.value;
      return true;
    } else {
      alert(
        "You must select a country. Enter one of the following countries: Poland, Germany, Austria, Netherland, Croatia, Italy."
      );
      return false;
    }
  }

  inputRecommendedCountry() {
    const countries = document.querySelector(".countries");
    const inputCountry = document.querySelector(".search__field");
    let onchangeEvent = new Event("change");

    countries.onclick = function (e) {
      e.preventDefault();
      const countryButton = e.target.closest(".country");

      switch (countryButton.id) {
        case `germany`:
          inputCountry.value = "Germany";
          inputCountry.dispatchEvent(onchangeEvent);
          break;
        case `poland`:
          inputCountry.value = "Poland";
          inputCountry.dispatchEvent(onchangeEvent);
          break;
        case `austria`:
          inputCountry.value = "Austria";
          inputCountry.dispatchEvent(onchangeEvent);
          break;
        case `italy`:
          inputCountry.value = "Italy";
          inputCountry.dispatchEvent(onchangeEvent);
          break;
        case `croatia`:
          inputCountry.value = "Croatia";
          inputCountry.dispatchEvent(onchangeEvent);
          break;
        case `netherland`:
          inputCountry.value = "Netherland";
          inputCountry.dispatchEvent(onchangeEvent);
          break;
      }
    };
  }
}
