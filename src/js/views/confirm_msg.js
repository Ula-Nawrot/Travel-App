import View from "./View";

export default class Confirm_Msg extends View {
  constructor() {
    super();
  }
  renderFunctions() {
    this.ValidateEmail();
    this.ValidateSurname();
  }
  ValidateSurname() {
    const name = document.getElementById("surname").value;
    
    if (name == "" || name == null) {
      this.showErrorMessage("Please enter First Name & Last Name");
    } else if(name.indexOf(' ') > 0 && name.indexOf(' ') == name.length -1 || name.indexOf(' ') == -1) {
        //alert('Please Enter Last Name');
        this.showErrorMessage("Please enter Last Name!");
      } else {
          return true
      }
  }
  ValidateEmail() {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const inputEmail = document.getElementById("email");
    if (inputEmail.value.match(mailformat)) {
      return true;
    } else if (inputEmail.value === "") {
      this.showErrorMessage("You did not provide an email address!");
    } else {
      this.showErrorMessage("You have entered an invalid email address!");

      return false;
    }
  }

  showErrorMessage(msg) {
    const node = document.createElement("div");
    node.setAttribute("id", "confirm_msg");
    const textnode = document.createTextNode(`${msg}`);
    node.appendChild(textnode);
    document.getElementById("confirmationContainer").appendChild(node);
    //console.log(document.getElementsByClassName("booking"));
  }
}

//if everything is fine clear local storage
//localStorage.clear();
