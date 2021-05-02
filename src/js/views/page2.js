import View from "./View";
const mainContainer = document.querySelector(".container");


export default class Page2 extends View {
  
  constructor() {
    super();
    

    //console.log(this.data.Poland);
  }
  generateMarkup(){
    return`<div id="page2">
    <header>
        <div class="arrow_back">
          <img src="./images/arrow_back.svg" alt="arrow back" />
        </div>
        <form class="search">
          <div class="input_fiels">
            <label for="from">Country</label>
            <input type="text" class="search__field" value="this.userData.country" />
          </div>
          <div class="input_fiels">
            <label for="from">From</label>
            <input type="date" class="search__date_from" id="from" value="20.04.2021" />
          </div>
  
          <div class="input_fiels">
            <label for="to">To</label>
            <input type="date" class="search__date_to" id="to"/>
          </div>
  
          <div class="input_fiels">
            <label for="No. of people">No. of people</label>
            <input
              type="text"
              class="search__people"
              id="No. of people"
              value="1"
            />
          </div>
        </form>
    </header>
  
    <div class="cities">
        ${this.data.map(this.generateMarkupHotel).join('')}
    </div>`;
  }
  generateMarkupHotel(hotel){
    return `<div class="city">
    <img src="./images/cochem_germany.jpg" />
    <div class="hotel">
      <p class="hotel_name">${hotel.name} </p>
      <img src="./images/stars_1.svg" alt="one star" class="stars"/>
      <ul>
        <li>${hotel.facilities}</li>
        <li>Free WiFi internet</li>
        <li>Free parking</li>
        <li>Fitness center</li>
        <li>Coffee Kit</li>
        <li>Bathrobes and slippers</li>
      </ul>
    </div>
    <div class="booking">
        <div class="price">${hotel.price} ${hotel.currency} /night</div>
        <button class="btn">Book</button>
    </div>
  </div>`
  }
  
  

}
