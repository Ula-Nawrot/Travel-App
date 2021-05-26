import View from "./View";

export default class Confirm_Msg extends View {
  constructor() {
    super();
  }
  renderFunctions() {
    this.ValidateEmail();
    this.ValidateSurname();
    this.ValidatePayment();
    this.closeConfirmMsg();
    //this.showConfirmation();
  }
  ValidateSurname() {
    this.clearErrorDiv("error_msg_name");
    const name = document.getElementById("surname").value;

    if (name == "" || name == null) {
      this.showErrorMessage(
        "Please enter First Name & Last Name",
        "error_msg_name"
      );
    } else if (
      (name.indexOf(" ") > 0 && name.indexOf(" ") == name.length - 1) ||
      name.indexOf(" ") == -1
    ) {
      this.showErrorMessage("Please enter Last Name!", "error_msg_name");
    } else {
      return true;
    }
  }
  ValidateEmail() {
    this.clearErrorDiv("error_msg_email");
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const inputEmail = document.getElementById("email");
    if (inputEmail.value.match(mailformat)) {
      return true;
    } else if (inputEmail.value === "") {
      this.showErrorMessage(
        "You did not provide an email address!",
        "error_msg_email"
      );
    } else {
      this.showErrorMessage(
        "You have entered an invalid email address!",
        "error_msg_email"
      );
    }
  }
  ValidatePayment() {
    this.clearErrorDiv("error_msg_payment");
    const payment_methods = document.getElementsByName("payment_method");
    const isChecked = [];
    for (var i = 0; i < payment_methods.length; i++) {
      if (payment_methods[i].checked) {
        isChecked[i] = true;
      } else {
        isChecked[i] = false;
      }
    }
    if (isChecked.some((payment) => payment == true)) {
      return true;
    } else {
      this.showErrorMessage(
        "You have not selected a payment method!",
        "error_msg_payment"
      );
    }
    // isChecked.some((payment) => payment == true) ? true : this.showErrorMessage(
    //     "You have not selected a payment method!",
    //     "error_msg_payment"
    //   );
  }

  showErrorMessage(msg, id) {
    const node = document.createElement("div");
    node.setAttribute("id", id);
    const textnode = document.createTextNode(`${msg}`);
    node.appendChild(textnode);
    document.getElementById("confirmationContainer").appendChild(node);
    //console.log(document.getElementsByClassName("booking"));
  }
  showConfirmation(dataHotel) {
    const form = document.getElementById("feelingForm");
    const confirm_msg = document.getElementById("confirm_msg");
    const modalWindow = document.getElementById('modal')
    // const confirm_window = document.getElementById("modal");

    const overlay = document.querySelector(".overlay");
    //form.classList.add("hidden");
    confirm_msg.classList.remove("hidden");
    //confirm_window.classList.remove("hidden");
    overlay.classList.remove("hidden");

    const markup = this.generateMarkupHotel(dataHotel);
    modalWindow.insertAdjacentHTML("beforeend", markup);
  }
  clearErrorDiv(id) {
    const errorMsg = document.getElementById(id);
    if (document.body.contains(errorMsg)) {
      errorMsg.remove();
    }
  }
  closeConfirmMsg() {
    const btnCloseModal = document.querySelector(".close-modal");
    const overlay = document.querySelector(".overlay");
    const modal = document.querySelector("#confirm_msg");
    btnCloseModal.onclick = () => {
      this.closeModal();
    };
    overlay.onclick = () => {
      this.closeModal();
    };
    document.onkeydown = function (e) {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        Confirm_Msg.prototype.closeModal();
      }
    };
  }
  closeModal() {
    const modal = document.querySelector("#confirm_msg");
    const choosingCountry = document.getElementById("choosingCountry");
    const formPage = document.getElementById("feelingForm");

    const inputCountry = document.querySelector(".search__field");
    const inputDateFrom = document.querySelector(".search__date_from");
    const inputDateTo = document.querySelector(".search__date_to");
    const inputPeople = document.querySelector("#people");

    modal.classList.add("hidden");
    formPage.classList.add("hidden");
    choosingCountry.classList.remove("hidden");

    inputCountry.value = "";
    inputDateFrom.value = "";
    inputDateTo.value = "";
    inputPeople.value = "";

    localStorage.clear();
  }
  generateMarkupHotel(dataHotel) {
    const retrievedData = JSON.parse(localStorage.getItem("formDataToSave"));
    //const days = View.prototype.diffBetweenDates3(userData);
    const index = retrievedData.hotelIndex;
    let paymentMathod = "";
    if (retrievedData.mobilePayment) {
      paymentMathod = "Mobile Payment";
    }
    if (retrievedData.bankTransfer) {
      paymentMathod = "Bank Transfer";
    }
    if (retrievedData.creditCard) {
      paymentMathod = "Credit Card";
    }

    return `<div class="message">
    <b>Thank you</b> for booking at ${retrievedData.hotel} Hotel on our website! </br>
    The booking process was successfull! </br>
    You have payed <b>${retrievedData.totalPrice} ${dataHotel[index].currency}</b> using ${paymentMathod}.</b> </div>
    <img src="${dataHotel[index].photos[0].base64}" />`;
  }
}
