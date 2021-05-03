import View from "./View";
const inputCountry = document.querySelector(".search__field");
const inputDateFrom = document.querySelector(".search__date_from");
const inputDateTo = document.querySelector(".search__date_to");
const inputPeople = document.querySelector("#people");
export const userData = {};

export default class Page1 extends View {
  
  constructor() {
    super();
    this.errorMessage = 'We could not find that recipe. Please try another one!';
    
    //console.log(this.data.Poland);
  }
  inputData(){
    
    //(inputCountry.value='')?this.render(this.errorMessage):userData.country = inputCountry.value;
    userData.country = inputCountry.value;
    userData.dateFrom = inputDateFrom.value;
    userData.dateTo = inputDateTo.value;
    userData.noOfPeople = inputPeople.value;
    //console.log(userData);
    return userData
  }
  inputRecommendedCountry(){
      const countries = document.querySelector('.countries');
      
      countries.onclick = function(e){
        e.preventDefault();
        const countryButton = e.target.closest('.country');
        console.log(countryButton.id);
        switch(countryButton.id) {
            case `germany`:
                inputCountry.value = 'Germany';
                break;
            case `belgium`:
                inputCountry.value = 'Belgium';
                break;
            case `austria`:
                inputCountry.value = 'Austria';
                break; 
            case `italy`:
                inputCountry.value = 'Italy';
                break;
            case `croatia`:
                inputCountry.value = 'Croatia';
                break;
            case `netherland`:
                inputCountry.value = 'Netherland';
                break;
          }
      }
  }
  generateMarkup(){
    return`<div id="page1">
    <header>
      <p class="title">Hotels from all over Europe</p>
      <form class="search">
        <div class="input_fiels">
          <label for="from">Country</label>
          <input type="text" class="search__field" placeholder="in Europe" required />
        </div>
        <div class="input_fiels">
          <label for="from">From</label>
          <input type="date" class="search__date_from" id="from" required/>
        </div>

        <div class="input_fiels">
          <label for="to">To</label>
          <input type="date" class="search__date_to" id="to" required />
        </div>

        <div class="input_fiels">
          <label for="No. of people">No. of people</label>
          <select id="people" name="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div class="btn_width">
          <button class="search__btn">
            <span>Search</span>
            <img src="./images/white_search_icon.svg" alt="search icon" />
          </button>
        </div>
        
      </form>
      
    </header>

    <div class="recommendations">
      <p class="title_2">Recommended Countries</p>
      <div class="countries">
        <div id="germany" class="country">
          <img src="./images/cochem_germany.jpg" />
          <p>Germany</p>
        </div>
        <div id="belgium" class="country">
          <img src="./images/dinant_belgium.jpg" />
          <p>Belgium</p>
        </div>
        <div id="austria" class="country">
          <img src="./images/hallstatt_austria.jpg" />
          <p>Austria</p>
        </div>
        <div id="croatia" class="country">
          <img src="./images/venice_italy.jpg" />
          <p>Croatia</p>
        </div>
        <div id="netherland" class="country">
          <img src="./images/netherland.jpg" />
          <p>The Netherland</p>
        </div>
        <div id="italy" class="country">
          <img src="./images/rome_italy.jpg" />
          <p>Italy</p>
        </div>
      </div>
    </div>
  </div>`;
  } 
  

}