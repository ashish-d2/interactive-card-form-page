"use strict";

// for inputs -> to get value
const inputCardholderNameField = document.getElementById("cardholder-name");
const inputCardNumberField = document.getElementById("card-number");
const inputExpMonthField = document.getElementById("exp-month");
const inputExpYearField = document.getElementById("exp-year");
const inputCvvNumberField = document.getElementById("cvv-number");
const submitButton = document.querySelector(".submit-btn");

// to display values on card
const displayCardName = document.querySelector(".display-card-name");
const displayCardNumber = document.querySelector(".card-number");
const displayExpDate = document.querySelector(".display-exp-dt");
const displayCvv = document.querySelector(".display-cvv");

// to display error message
const errorCardholderName = document.getElementById("error-cardholder-name");
const errorCardnumber = document.getElementById("error-cardnumber");
const errorExpDate = document.getElementById("error-expdt");
const errorCvv = document.getElementById("error-cvv");

//
const form = document.querySelector(".card-form");
const completed = document.querySelector(".completed");

// Global variable
let cardholderName = "";
let cardNumber = "";
let cardNumberDisplay = "";
let expMonth = "";
let expYear = "";
let cvv = "";

let nameValid = true;
let cardNumberValid = true;
let expMonthValid = true;
let expYearValid = true;
let cvvValid = true;

// Get card holder name
inputCardholderNameField.addEventListener("input", function (event) {
  cardholderName = event.target.value;
});

// Get card holder number
inputCardNumberField.addEventListener("input", function (event) {
  cardNumber = event.target.value.replace(/\s/g, "");
  let formattedNumber = "";

  for (let i = 0; i < cardNumber.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedNumber += " ";
    }
    formattedNumber += cardNumber[i];
  }

  cardNumberDisplay = formattedNumber;

  event.target.value = formattedNumber;
});

// Get exp-date
inputExpMonthField.addEventListener("input", function (event) {
  expMonth = event.target.value;
});

inputExpYearField.addEventListener("input", function (event) {
  expYear = event.target.value;
});

// Get CVV
inputCvvNumberField.addEventListener("input", function (event) {
  cvv = event.target.value;
});

const displayCardDetails = function (name, number, expire, cvv) {
  displayCardName.textContent = name;
  displayCardNumber.textContent = number;
  displayCvv.textContent = cvv;
  displayExpDate.textContent = expire;
};

// Error Logic
// Render Error
const renderError = function (renderErrorInput, renderErrorMessage, message) {
  renderErrorInput.classList.add("error-input");
  renderErrorMessage.classList.add("error-message");
  renderErrorMessage.textContent = message;
};

// Remove Error
const removeError = function (renderErrorInput, renderErrorMessage) {
  renderErrorInput.classList.remove("error-input");
  renderErrorMessage.classList.remove("error-message");
  renderErrorMessage.textContent = "";
};

const checkNameField = function () {
  if (cardholderName === "") {
    renderError(
      inputCardholderNameField,
      errorCardholderName,
      "Cannot be blank"
    );
    return false;
  }

  if (nameValid === false) {
    removeError(inputCardholderNameField, errorCardholderName);
    return true;
  }

  return true;
};

const checkCardField = function () {
  if (cardNumber === "") {
    renderError(inputCardNumberField, errorCardnumber, "Cannot be blank");
    return false;
  }

  if (isNaN(cardNumber)) {
    renderError(
      inputCardNumberField,
      errorCardnumber,
      "Wrong format, numbers only"
    );

    return false;
  }

  if (cardNumberValid === false) {
    removeError(inputCardNumberField, errorCardnumber);
    return true;
  }

  return true;
};

const checkExpMonth = function () {
  if (expMonth === "") {
    renderError(inputExpMonthField, errorExpDate, "Cannot be blank.");
    return false;
  }

  if (expMonthValid === false) {
    removeError(inputExpMonthField, errorExpDate);
    return true;
  }

  return true;
};

const checkExpYear = function () {
  if (expYear === "") {
    renderError(inputExpYearField, errorExpDate, "Cannot be blank.");
    return false;
  }

  if (expYearValid === false) {
    removeError(inputExpYearField, errorExpDate);
    return true;
  }

  return true;
};

const checkCvv = function () {
  if (cvv === "") {
    renderError(inputCvvNumberField, errorCvv, "Cannot be blank.");
    return false;
  }

  if (isNaN(cvv)) {
    renderError(inputCvvNumberField, errorCvv, "Wrong format, numbers only");

    return false;
  }

  if (cvvValid === false) {
    removeError(inputCvvNumberField, errorCvv);
    return true;
  }

  return true;
};

const formValid = function () {
  nameValid = checkNameField();
  cardNumberValid = checkCardField();
  expMonthValid = checkExpMonth();
  expYearValid = checkExpYear();
  cvvValid = checkCvv();

  return (
    nameValid && cardNumberValid && expMonthValid && expYearValid && cvvValid
  );
};

// Submit btn
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(cardholderName, cardNumber, expMonth, expYear, cvv);
  let expDate = expMonth + "/" + expYear;

  if (!formValid()) {
    return;
  }

  displayCardDetails(cardholderName, cardNumberDisplay, expDate, cvv);
  form.classList.add("hidden");
  completed.classList.remove("hidden");
});

// continue button clicked
document.querySelector(".continue").addEventListener("click", function () {
  form.classList.remove("hidden");
  completed.classList.add("hidden");

  displayCardName.textContent = "Jane Appleseed";
  displayCardNumber.textContent = "0000 0000 0000 0000";
  displayCvv.textContent = "000";
  displayExpDate.textContent = "00/0000";

  inputCardholderNameField.value = "";
  inputCardNumberField.value = "";
  inputExpMonthField.value = "";
  inputExpYearField.value = "";
  inputCvvNumberField.value = "";

  cardholderName = "";
  cardNumber = "";
  cardNumberDisplay = "";
  expMonth = "";
  expYear = "";
  cvv = "";
});
