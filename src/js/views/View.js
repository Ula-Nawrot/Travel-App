
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

    arrowBackPage2.addEventListener("click", function () {
      //page.render(data);

      console.log("click" + page);
      if (page == 2) {
        choosingHotel.classList.add("hidden");
        choosingCountry.classList.remove("hidden");
      }
    });
  }
  diffBetweenDates() {
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
  render(data) {
    this.data = data.Poland;
    console.log(this.data);
    const markup = this.generateMarkup();

    mainContainer.innerHTML = "";
    mainContainer.insertAdjacentHTML("afterbegin", markup);
  }
  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
          <p>${message}</p>
      </div>
    `;
    this._clear();
    mainContainer.insertAdjacentHTML("afterbegin", markup);
  }
}
