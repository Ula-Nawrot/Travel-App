import View from "./View";
import { userData } from "./page1.js";

import { doc } from "prettier";

export default class Page2 extends View {
  constructor() {
    super();
  }
  renderFunctions(data) {
    this.insertData();
    this.inputDates();
    this.arrowBack();
    this.showHotels(data);
    this.updatePriceOfHotel(data);
  }
  insertData() {
    const inputCountry = document.querySelectorAll(".search__field");
    const inputDateFrom = document.getElementById("from2");
    const inputDateTo = document.getElementById("to2");
    const inputPeople = document.getElementById("people2");
    inputCountry[1].value = `${userData.country}`;
    inputDateFrom.value = `${userData.dateFrom}`;
    inputDateTo.value = `${userData.dateTo}`;
    inputPeople.value = `${userData.noOfPeople}`;
  }
  showHotels(data) {
    const hotelContainer = document.querySelector(".hotels");
    // hotelContainer.innerHTML = "";
    this.data = data;
    const markup = this.data.map(this.generateMarkupHotel).join("");
    hotelContainer.insertAdjacentHTML("afterbegin", markup);
  }
  generateMarkupHotel(hotel) {
    userData;
    const days = View.prototype.diffBetweenDates3(userData);
    

    return `<div class="city">
    <img src="${hotel.photos[0].base64}" />
    <div class="hotel">
      <p class="hotel_name">${hotel.name} </p>
      <img src="./images/stars_1.svg" alt="one star" class="stars"/>
      <ul>
        <li>${hotel.facilities[0].name}</li>
        <li>Free WiFi internet</li>
        <li>Free parking</li>
        <li>Fitness center</li>
        <li>Coffee Kit</li>
        <li>Bathrobes and slippers</li>
      </ul>
    </div>
    <div class="booking">
        <div class="price">${hotel.price * userData.noOfPeople * days} ${
      hotel.currency} /night</div>
        <button class="btn book">Book</button>
    </div>
  </div>`;
  }
  updatePriceOfHotel(data) {
    userData;
    this.hotel = data;
    const containerPage2 = document.getElementById("choosingHotel");
    const inputDateFrom = document.getElementById("from2");
    const inputDateTo = document.getElementById("to2");
    const priceContainer = containerPage2.querySelectorAll(".price");
    
    containerPage2.onchange = () => {
      const days = View.prototype.diffBetweenDates3(userData);
      console.log('number of days:'+ days);
      userData.dateFrom = inputDateFrom.value;
      console.log(userData.dateFrom);
      userData.dateTo = inputDateTo.value;
      console.log(userData.dateTo);
      priceContainer.forEach((el) => {
        el.innerHTML = `${this.hotel.price * userData.noOfPeople * days} ${
          this.hotel.currency} /night`
        console.log(el.innerHTML);
      });
    };
  }
}
