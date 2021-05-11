import View from "./View";
import { userData } from "./page1.js";

export default class Form extends View {
  constructor() {
    super();
  }
  //btn_book
  bookButton(data) {
    //1.Przypisanie do btn addEvent listener
    this.data = data.Poland;
    const hotelID = this.data.map((hotel) => {
      return hotel.id;
    });
    console.log('przycisk na drugiej stronie działa');
    //2.Przypisz eventListener do buttona
    const formPage = document.getElementById("form");
    const bookButton = document.querySelector(".book");
    const choosingHotel = document.getElementById("choosingHotel");
    bookButton.addEventListener("click", function () {
      //3. Ukryj poprzednią stronę i pokaż formularz
      
      formPage.classList.remove("hidden");
      choosingHotel.classList.add("hidden");
      console.log(formPage);
    });
  }
}
