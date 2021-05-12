import View from "./View";
import { userData } from "./page1.js";
import { doc } from "prettier";

export default class Page3 extends View {
  constructor() {
    super();
  }
  //btn_book
  bookButton(data, userData) {
    //1.Przypisanie do btn addEvent listener
    this.data = data.Poland;
    const hotelID = this.data.map((hotel) => {
      return hotel.id;
    });
    //2.Przypisz eventListener do buttona
    const formPage = document.getElementById("page3");
    const bookButton = document.querySelector(".book");
    const choosingHotel = document.getElementById("choosingHotel");

    bookButton.onclick = () => {
      //3. Ukryj poprzednią stronę i pokaż formularz

      formPage.classList.remove("hidden");
      choosingHotel.classList.add("hidden");

      //4.Przypisanie danych hotelu do formularza
      this.feelingForm(this.data, userData);
    };
  }
  feelingForm(dataHotel, userData) {
    const hotelName = document.getElementById("form_hotel_name");
    const hotelCountry = document.getElementById("form_hotel_country");
    const hotelCity = document.getElementById("form_hotel_city");
    const dateFrom = document.getElementById("form_data_from");
    const dateTo = document.getElementById("form_data_to");
    const selectedDAteFrom = this.changeDate(userData.dateFrom);
    const selectedDAteTo = this.changeDate(userData.dateTo);
    const noOfPeople = document.getElementById('form_people');

    hotelName.textContent = dataHotel[0].name;
    hotelCountry.textContent = userData.country;
    hotelCity.textContent = dataHotel[0].location.city;

    dateFrom.textContent = `${selectedDAteFrom[0]}/${selectedDAteFrom[1]}/${selectedDAteFrom[2]}`;
    dateTo.textContent = `${selectedDAteTo[0]}/${selectedDAteTo[1]}/${selectedDAteTo[2]}`;

    noOfPeople.textContent = userData.noOfPeople;
    console.log(hotelName.textContent);
    console.log(dataHotel);
  }
}
