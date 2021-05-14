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
  changeDate(date) {
    const mydate = new Date(date);
    const day = `${mydate.getDate()}`.padStart(2, 0);
    const month = `${mydate.getMonth() + 1}`.padStart(2, 0);
    const year = `${mydate.getFullYear()}`;
    return [day, month, year];
  }
  arrowBack() {
    const arrowBackPage2 = document.querySelectorAll(".arrow");
    const choosingHotel = document.getElementById("choosingHotel");
    const choosingCountry = document.getElementById("choosingCountry");
    const feelingForm = document.getElementById('feelingForm')
    const inputCountry = document.querySelector(".search__field");
    const inputDateFrom = document.querySelector(".search__date_from");
    const inputDateTo = document.querySelector(".search__date_to");
    const inputPeople = document.querySelector("#people");
    arrowBackPage2.forEach((item,i) => item.addEventListener("click", function () {
      
      if (i === 0) {
        choosingHotel.classList.add("hidden");
        choosingCountry.classList.remove("hidden");
        inputCountry.value = "";
        inputDateFrom.value = "";
        inputDateTo.value = "";
        inputPeople.value = "";
      }
       if (i === 1){
        feelingForm.classList.add("hidden")
        choosingHotel.classList.remove("hidden");
      }
    }));
  }

  variableAssignment() {
    this.inputCountry = document.querySelector(".search__field");
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
      return differenceInDays;
    });
  }
  diffBetweenDates3(data) {

    const from = data.dateFrom;
    const to = data.dateTo;;

    const date1 = new Date(from);
    const date2 = new Date(to);

    const differenceInTime = date2.getTime() - date1.getTime();

    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays;
  }
}
