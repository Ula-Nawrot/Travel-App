export default class View {
  _clearInput(inputName) {
    document.querySelector(`${inputName}`).value = "";
  }
}
