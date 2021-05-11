const mainContainer = document.querySelector(".container");
const inputDateFrom = document.querySelector(".search__date_from");
const inputDateTo = document.querySelector(".search__date_to");
const arrowBackPage2 = document.querySelector(".arrow");

export default class View {
  constructor() {
    
  }
  arrowBack(data, page) {
    const arrowBackPage2 = document.querySelector(".arrow");
    if (document.body.contains(arrowBackPage2)) {
      arrowBackPage2.addEventListener("click", function () {
        page.render(data, 1);
        console.log("click");
      });
    } else {
      console.log("EventListener wasn't add to arrow back");
    }
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
