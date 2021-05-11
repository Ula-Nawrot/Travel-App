const mainContainer = document.querySelector(".container");
const inputDateFrom = document.querySelector(".search__date_from");
const inputDateTo = document.querySelector(".search__date_to");
const arrowBackPage2 = document.querySelector(".arrow");

export default class View {
  constructor() {
    this.errorMessage =
      "We could not find that recipe. Please try another one!";
    this.dataFrom;
    this.dataTo;

    //console.log(this.data.Poland);
  }
  arrowBack(page) {
    const arrowBackPage2 = document.querySelector(".arrow");
    const choosingHotel = document.getElementById("choosingHotel");
    const choosingCountry = document.getElementById("choosingCountry");
    const inputCountry = document.querySelector(".search__field");
    const inputDateFrom = document.querySelector(".search__date_from");
    const inputDateTo = document.querySelector(".search__date_to");
    const inputPeople = document.querySelector("#people");

    arrowBackPage2.addEventListener("click", function () {
      //page.render(data);

      console.log("click" + page);
      if (page == 2) {
        choosingHotel.classList.add("hidden");
        choosingCountry.classList.remove("hidden");
        inputCountry.value = '';
        inputDateFrom.value = '';
        inputDateTo.value = '';
        inputPeople.value = '';
      }
    });
  }

  variableAssignment() {
    this.inputCountry = document.querySelector(".search__field");
    console.log(this.inputCountry);
  }

  diffBetweenDates() {
    const inputDateFrom = document.querySelector(".search__date_from");
    const inputDateTo = document.querySelector(".search__date_to");

    inputDateTo.addEventListener("change", function () {
      const from = inputDateFrom.value;
      const to = inputDateTo.value;

      const date1 = new Date(from);
      const date2 = new Date(to);

      const differenceInTime = date2.getTime() - date1.getTime();

      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      console.log(`Twoja wycieczka będzie trwała ${differenceInDays}`);
    });
  }
  // render(data, page) {
  //   this.data = data.Poland;
  //   const markup = this.generateMarkup();

  //   mainContainer.innerHTML = "";
  //   mainContainer.insertAdjacentHTML("afterbegin", markup);

  //   if (page == 1) {
  //     this.inputRecommendedCountry();
  //     this.inputDates();
  //     this.diffBetweenDates();
  //   }
  // }
}
