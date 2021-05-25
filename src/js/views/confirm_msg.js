import View from "./View";

export default class Confirm_Msg extends View {
  constructor() {
    super();
  }
  renderFunctions() {
    this.ValidateEmail();
    this.ValidateSurname();
    //this.showConfirmation();
  }
  ValidateSurname() {
    this.clearErrorDiv("error_msg_name");
    const name = document.getElementById("surname").value;

    if (name == "" || name == null) {
      
      this.showErrorMessage("Please enter First Name & Last Name","error_msg_name");
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
      
      this.showErrorMessage("You did not provide an email address!","error_msg_email");
    } else {
      
      this.showErrorMessage("You have entered an invalid email address!", "error_msg_email");
    }
  }

  showErrorMessage(msg, id) {
    const node = document.createElement("div");
    node.setAttribute("id", id);
    const textnode = document.createTextNode(`${msg}`);
    node.appendChild(textnode);
    document.getElementById("confirmationContainer").appendChild(node);
    //console.log(document.getElementsByClassName("booking"));
  }
  showConfirmation() {
    const form = document.getElementById("feelingForm");
    const confirm_msg = document.getElementById("confirm_msg");
    const overlay = document.querySelector(".overlay");
    form.classList.add("hidden");
    confirm_msg.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
  clearErrorDiv(id) {
    const errorMsg = document.getElementById(id);
    if (document.body.contains(errorMsg)) {
      errorMsg.remove();
    }
  }
}

//if everything is fine clear local storage
//localStorage.clear();
