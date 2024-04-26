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

// Global variable
let cardholderName = "";
let cardNumber = "";
let expMonth = "";
let expYear = "";
let cvv = "";

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

  cardNumber = formattedNumber;

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

// Submit btn
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(cardholderName, cardNumber, expMonth, expYear, cvv);
  let expDate = expMonth + "/" + expYear;
  displayCardDetails(cardholderName, cardNumber, expDate, cvv);
});
