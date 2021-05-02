const mainContainer = document.querySelector(".container");

export default class View {

  clearInput(inputName) {
    document.querySelector(`${inputName}`).value = "";
  }
  render(data, render = true) {
    //if (!data || (Array.isArray(data) && data.length === 0))
     // return this.renderError();

    this.data = data.Poland;
    console.log(this.data);
    const markup = this.generateMarkup();

    mainContainer.innerHTML = "";
    mainContainer.insertAdjacentHTML('afterbegin', markup);
  }
}
