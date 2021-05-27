import View from "./View";
import { userData } from "./page1.js";
import { doc } from "prettier";
let price = null;

export default class Page3 extends View {
  constructor() {
    super();
  }

  bookButton(dataHotel, userData) {
    const formPage = document.getElementById("feelingForm");
    const bookButtons = document.querySelectorAll(".book");
    const choosingHotel = document.getElementById("choosingHotel");

    for (let i = 0; i < bookButtons.length; i++) {
      bookButtons[i].onclick = () => {
        formPage.classList.remove("hidden");
        choosingHotel.classList.add("hidden");

        this.feelingForm(dataHotel[i], userData, i);
        this.additionalOptions(dataHotel[i]);
        this.priceCalc(dataHotel[i], userData);
        this.arrowBack();
        this.loadMap(dataHotel[i]);
        this.saveInLocalStorage(dataHotel[i], i);
      };
    }
  }
  feelingForm(dataHotel, userData, i) {
    const hotelName = document.getElementById("form_hotel_name");
    const hotelCountry = document.getElementById("form_hotel_country");
    const hotelCity = document.getElementById("form_hotel_city");
    const dateFrom = document.getElementById("form_data_from");
    const dateTo = document.getElementById("form_data_to");
    const selectedDateFrom = this.changeDate(userData.dateFrom);
    const selectedDateTo = this.changeDate(userData.dateTo);
    const noOfPeople = document.getElementById("form_people");
    const hotelImage = document.getElementById("hotel_image");

    const confirmButton = document.getElementById("confirm");
    confirmButton.setAttribute("data-index", i);

    hotelName.textContent = dataHotel.name;
    hotelCountry.textContent = userData.country;
    hotelCity.textContent = dataHotel.location.city;
    hotelImage.setAttribute("src", dataHotel.photos[0].base64);
    dateFrom.textContent = `${selectedDateFrom[0]}/${selectedDateFrom[1]}/${selectedDateFrom[2]}`;
    dateTo.textContent = `${selectedDateTo[0]}/${selectedDateTo[1]}/${selectedDateTo[2]}`;

    noOfPeople.textContent = userData.noOfPeople;
  }
  additionalOptions(datahotel) {
    const breakfast = document.getElementById("breakfast");
    const taxi = document.getElementById("taxi");
    const parking = document.getElementById("parking");

    breakfast.textContent = `Breakfast - 10 ${datahotel.currency}/day`;
    taxi.textContent = `Taxi to hotel - 50 ${datahotel.currency}`;
    parking.textContent = `Parking - 5 ${datahotel.currency}/day`;
  }
  priceCalc(datahotel, dataUser) {
    const showPrice = document.getElementById("totalAmount");
    const dayAmount = this.diffBetweenDates(dataUser);
    const pricePerNight = datahotel.price;
    const currency = datahotel.currency;
    const people = dataUser.noOfPeople;
    let totalAmount = pricePerNight * dayAmount * people;

    showPrice.textContent = `Total Price: ${totalAmount} ${currency}`;
    showPrice.setAttribute("value", `${totalAmount}`);

    //additional option added on click
    const el = document.querySelector(".options");
    const products = el.getElementsByTagName("input");
    const lenght = products.length;
    for (let i = 0; i < lenght; i++) {
      if (products[i].type === "checkbox") {
        products[i].onclick = updateCost;
      }
    }

    //function to update cost after clicking on additional options
    function updateCost(e) {
      if (this.checked) {
        if (this.id == "checkboxTaxi") {
          totalAmount += parseFloat(this.value);
          showPrice.textContent = `Total Price: ${totalAmount} ${currency}`;
          showPrice.setAttribute("value", `${totalAmount}`);
          price = totalAmount;
        } else {
          totalAmount += parseFloat(this.value) * dayAmount;
          showPrice.textContent = `Total Price: ${totalAmount} ${currency}`;
          showPrice.setAttribute("value", `${totalAmount}`);
          price = totalAmount;
        }
      } else {
        if (this.id == "checkboxTaxi") {
          totalAmount -= parseFloat(this.value);
          showPrice.textContent = `Total Price: ${totalAmount} ${currency}`;
          showPrice.setAttribute("value", `${totalAmount}`);
          price = totalAmount;
        } else {
          totalAmount -= parseFloat(this.value) * dayAmount;
          showPrice.textContent = `Total Price: ${totalAmount} ${currency}`;
          showPrice.setAttribute("value", `${totalAmount}`);
          price = totalAmount;
        }
      }
    }
  }
  loadMap(dataHotel) {
    const latitude = dataHotel.location.latitude;
    const longitude = dataHotel.location.longitude;
    const map = L.map("map").setView([latitude, longitude], 10);

    L.tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`,
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "sk.eyJ1Ijoic2lvc3RyYXVyc3p1bGFua2EiLCJhIjoiY2tsemVubTlpM2pscjJwcW0ycXdzYjYyMyJ9.6WdnQPNfiC4g4lKChZfa5g",
      }
    ).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(dataHotel.name)
      .openPopup();
  }
  saveInLocalStorage(data, i) {
    const inputContainer = document.getElementById("form");

    inputContainer.onchange = () => {
      const breakfast = document.getElementById("checkboxBreakfast");
      const taxi = document.getElementById("checkboxTaxi");
      const parking = document.getElementById("checkboxParking");
      const surname = document.getElementById("surname");
      const email = document.getElementById("email");
      const hotelName = data.name;
      const mobilePayment = document.getElementById("mobile_payment");
      const bankTransfer = document.getElementById("bank_transfer");
      const creditCard = document.getElementById("credit_card");

      const formDataToSave = {
        breakfast: breakfast.checked,
        taxi: taxi.checked,
        parking: parking.checked,
        surname: surname.value,
        email: email.value,
        hotel: hotelName,
        totalPrice: price,
        mobilePayment: mobilePayment.checked,
        bankTransfer: bankTransfer.checked,
        creditCard: creditCard.checked,
        hotelIndex: i,
      };
      localStorage.setItem("formDataToSave", JSON.stringify(formDataToSave));
    };
  }
}
