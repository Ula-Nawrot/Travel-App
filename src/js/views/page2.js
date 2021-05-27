import View from "./View";
import { userData } from "./page1.js";

import { doc } from "prettier";
import { data } from "autoprefixer";

export default class Page2 extends View {
  constructor() {
    super();
  }
  renderFunctions(dataHotel) {
    this.insertData();
    this.inputDates();
    this.arrowBack();
    this.showHotels(dataHotel);
    this.updatePriceOfHotel(dataHotel);
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
  showHotels(dataHotel) {
    const hotelContainer = document.querySelector(".hotels");
    const markup = dataHotel.map(this.generateMarkupHotel).join("");
    hotelContainer.insertAdjacentHTML("afterbegin", markup);
  }
  generateMarkupHotel(dataHotel) {
    userData;
    const days = View.prototype.diffBetweenDates3(userData);
    const facilities = Object.values(dataHotel.facilities);

    function hotelStars(dataHotel){
      if(dataHotel.stars==3){
        return 'star3.jpg'
      }
      if(dataHotel.stars==4){
        return 'star4.jpg'
      }
      if(dataHotel.stars==5){
        return 'star5.jpg'
      }
    }
    return `<div class="city">
    <img src="${dataHotel.photos[0].base64}" />
      <div class="hotel">
        <p class="hotel_name">${dataHotel.name} </p>
        <img src="./images/${hotelStars(dataHotel)}" alt="one star" class="stars"/>
        <ul>
          ${facilities
            .map((facility) => {
              return `<li>${facility.name}</li>`;
            })
            .join("")}
        </ul>
      </div>
      <div class="booking">
          <div class="price">${dataHotel.price * userData.noOfPeople * days} ${
            dataHotel.currency}</div>
          <button class="btn book">Book</button>
      </div>
    </div>`;
  }
  
  updatePriceOfHotel(dataHotel) {
    userData;
    const containerPage2 = document.getElementById("choosingHotel");
    const inputDateFrom = document.getElementById("from2");
    const inputDateTo = document.getElementById("to2");
    const priceContainer = containerPage2.querySelectorAll(".price");

    containerPage2.onchange = () => {
      const days = View.prototype.diffBetweenDates3(userData);
      console.log("number of days:" + days);
      userData.dateFrom = inputDateFrom.value;
      console.log(userData.dateFrom);
      userData.dateTo = inputDateTo.value;
      console.log(userData.dateTo);
      priceContainer.forEach((el) => {
        el.innerHTML = `${dataHotel.price * userData.noOfPeople * days} ${
          dataHotel.currency
        } /night`;
        console.log(el.innerHTML);
      });
    };
  }
}
