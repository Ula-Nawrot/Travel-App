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

  inputCountry() {
    const inputCountry = document.querySelector(".search__field");
    return inputCountry.value;
  }

  inputDates() {
    const inputDateFrom = document.querySelectorAll(".search__date_from");
    const inputDateTo = document.querySelectorAll(".search__date_to");
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();

    inputDateFrom.forEach((el) => {
      el.setAttribute("min", `${year}-${month}-${day}`);
    });

    inputDateFrom.forEach((element1) => {
      element1.onchange = () => {
        inputDateTo.forEach((element2) => {
          const dayFrom = this.changeDate(element1.value);
          const dayPlusOne = `${dayFrom[2]}-${dayFrom[1]}-${
            Number(dayFrom[0]) + 1
          }`;
          element2.setAttribute("min", `${dayPlusOne}`);
          console.log("wartość DataTo:" + typeof element2.value);
          // if (element1.value >= element2.value && element2 != "") {
          //   alert("Data From is larger that data To");
          // }
          console.log(dayPlusOne);
        });
      };
      // element1.addEventListener("change", function () {

      // });
    });
  }
  changeDate(date) {
    const mydate = new Date(date);
    const day = `${mydate.getDate()}`.padStart(2, 0);
    const month = `${mydate.getMonth() + 1}`.padStart(2, 0);
    const year = `${mydate.getFullYear()}`;
    return [day, month, year];
  }

  arrowBack() {
    const signBack = document.querySelectorAll(".arrow");
    const choosingHotel = document.getElementById("choosingHotel");
    const choosingCountry = document.getElementById("choosingCountry");
    const feelingForm = document.getElementById("feelingForm");
    const inputCountry = document.querySelector(".search__field");
    const inputDateFrom = document.querySelector(".search__date_from");
    const inputDateTo = document.querySelector(".search__date_to");
    const inputPeople = document.querySelector("#people");

    signBack.forEach((item, i) =>
      item.addEventListener("click", function () {
        if (i === 0) {
          choosingHotel.classList.add("hidden");
          choosingCountry.classList.remove("hidden");
          inputCountry.value = "";
          inputDateFrom.value = "";
          inputDateTo.value = "";
          inputPeople.value = "";
        }
        if (i === 1) {
          feelingForm.classList.add("hidden");
          choosingHotel.classList.remove("hidden");
        }
      })
    );
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
    const to = data.dateTo;

    const date1 = new Date(from);
    const date2 = new Date(to);

    const differenceInTime = date2.getTime() - date1.getTime();

    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays;
  }
  convertImage(dataHotel) {
    // const image = new Image();
    // image.src = dataHotel.images[0];
    // return image.src;
    //document.body.appendChild(image);
  }
}
