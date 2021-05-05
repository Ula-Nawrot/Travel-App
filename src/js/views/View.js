const mainContainer = document.querySelector(".container");
const inputDateFrom = document.querySelector(".search__date_from");
const inputDateTo = document.querySelector(".search__date_to");
const arrowBackPage2 = document.querySelector(".arrow");

export default class View {
    arrowBack(data, page) {
    const arrowBackPage2 = document.querySelector(".arrow");
    if (document.body.contains(arrowBackPage2)) {
      arrowBackPage2.addEventListener("click", function(){
            page.render(data)
            console.log('click');
          });;
    } else {
      console.log('it doesn\'t work');
    }
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
