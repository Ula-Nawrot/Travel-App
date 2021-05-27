export default class View {
  constructor() {}

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
        });
      };
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
    const hotelContainer = document.querySelector(".hotels");

    signBack.forEach((item, i) =>
      item.addEventListener("click", function () {
        if (i === 0) {
          choosingHotel.classList.add("hidden");
          choosingCountry.classList.remove("hidden");
          inputCountry.value = "";
          inputDateFrom.value = "";
          inputDateTo.value = "";
          inputPeople.value = "1";
          hotelContainer.innerHTML = "";
        }
        if (i === 1) {
          feelingForm.classList.add("hidden");
          choosingHotel.classList.remove("hidden");
        }
      })
    );
  }

  diffBetweenDatesOnChange() {
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
  diffBetweenDates(dataHotel) {
    const from = dataHotel.dateFrom;
    const to = dataHotel.dateTo;

    const date1 = new Date(from);
    const date2 = new Date(to);

    const differenceInTime = date2.getTime() - date1.getTime();

    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays;
  }
}
