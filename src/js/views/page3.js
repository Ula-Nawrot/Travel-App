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
    const formPage = document.getElementById("feelingForm");
    const bookButton = document.querySelector(".book");
    const choosingHotel = document.getElementById("choosingHotel");

    bookButton.onclick = () => {
      //3. Ukryj poprzednią stronę i pokaż formularz

      formPage.classList.remove("hidden");
      choosingHotel.classList.add("hidden");

      //4.Przypisanie danych hotelu do formularza
      this.feelingForm(this.data, userData);
      this.additionalOptions(this.data);
      this.priceCalc(this.data, userData);
      this.arrowBack();
      this.loadMap(this.data);
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
    const noOfPeople = document.getElementById("form_people");

    hotelName.textContent = dataHotel[0].name;
    hotelCountry.textContent = userData.country;
    hotelCity.textContent = dataHotel[0].location.city;

    dateFrom.textContent = `${selectedDAteFrom[0]}/${selectedDAteFrom[1]}/${selectedDAteFrom[2]}`;
    dateTo.textContent = `${selectedDAteTo[0]}/${selectedDAteTo[1]}/${selectedDAteTo[2]}`;

    noOfPeople.textContent = userData.noOfPeople;
    console.log(hotelName.textContent);
    console.log(dataHotel);
  }
  additionalOptions(datahotel) {
    const breakfast = document.getElementById("breakfast");
    const taxi = document.getElementById("taxi");
    const parking = document.getElementById("parking");

    breakfast.textContent = `Breakfast - 10 ${datahotel[0].currency}/day`;
    taxi.textContent = `Taxi to hotel - 50 ${datahotel[0].currency}`;
    parking.textContent = `Parking - 5 ${datahotel[0].currency}/day`;
  }
  priceCalc(datahotel, dataUser) {
    const showPrice = document.getElementById("totalAmount");
    const dateFrom = document.getElementById("form_data_from");
    const dateTo = document.getElementById("form_data_to");

    const dayAmount = this.diffBetweenDates3(dataUser);
    const pricePerNight = datahotel[0].price;
    const currency = datahotel[0].currency;
    const people = dataUser.noOfPeople;
    let totalAmount = pricePerNight * dayAmount * people; // +optionPrice;

    showPrice.textContent = `Total Price: ${totalAmount} ${currency}`;
    showPrice.setAttribute("value", `${totalAmount}`);
    /////////////////////////////////////////////////////
    const el = document.querySelector(".options");
    const products = el.getElementsByTagName("input");
    const lenght = products.length;
    for (let i = 0; i < lenght; i++) {
      if (products[i].type === "checkbox") {
        products[i].onclick = updateCost;
      }
    }
    ///////////////////////////////////////////////////////////

    function updateCost(e) {
      console.log(e.target);
      console.log(e.target.value);

      console.log("val przed" + totalAmount);
      if (this.checked) {
        console.log("to jest id of this:" + this.id);
        if (this.id == "checkboxTaxi") {
          totalAmount += parseFloat(this.value);
          showPrice.textContent = `Total Price: ${totalAmount} ${currency}`;
        } else {
          totalAmount += parseFloat(this.value) * dayAmount;
          showPrice.textContent = `Total Price: ${totalAmount} ${currency}`;
        }
      } else {
        if (this.id == "checkboxTaxi") {
          totalAmount -= parseFloat(this.value);
          showPrice.textContent = `Total Price: ${totalAmount} ${currency}`;
        } else {
          totalAmount -= parseFloat(this.value) * dayAmount;
          showPrice.textContent = `Total Price: ${totalAmount} ${currency}`;
        }
      }
    }
  }
  loadMap(data) {
    const latitude = data[0].location.latitude;
    const longitude = data[0].location.longitude;
    console.log("latitude:" + latitude + " longitude: " + longitude);
    const map = L.map("map").setView([latitude, longitude], 10);

    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'sk.eyJ1Ijoic2lvc3RyYXVyc3p1bGFua2EiLCJhIjoiY2tsemVubTlpM2pscjJwcW0ycXdzYjYyMyJ9.6WdnQPNfiC4g4lKChZfa5g'
        }).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(data[0].name)
      .openPopup();
  }
}
