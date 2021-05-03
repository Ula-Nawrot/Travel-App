const mainContainer = document.querySelector(".container");


export default class View {

  clearInput(inputName) {
    document.querySelector(`${inputName}`).value = "";
  }
  render(data) {
    //if (!data || (Array.isArray(data) && data.length === 0))
     // return this.renderError();

    this.data = data.Poland;
    console.log(this.data);
    const markup = this.generateMarkup();

    mainContainer.innerHTML = "";
    mainContainer.insertAdjacentHTML('afterbegin', markup);
    
  }
  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
          <p>${message}</p>
      </div>
    `;
    this._clear();
    mainContainer.insertAdjacentHTML('afterbegin', markup);
  }
}
