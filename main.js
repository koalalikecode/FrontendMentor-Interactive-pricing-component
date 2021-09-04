const input_range = document.querySelector(".slide-input input");
const pageNum = document.querySelector(".pageview-num");
const payment = document.querySelector(".payment");
const check = document.querySelector(".switch input");
const choices = [
  ["0K", "0.00"],
  ["10K", "8.00"],
  ["50K", "12.00"],
  ["100K", "16.00"],
  ["500K", "24.00"],
  ["1M", "36.00"],
];

// Change the value of pageview and payment
function pageRegulation(value) {
  let isDiscount = check.hasAttribute("checked");
  value = Math.floor(Number(value));
  pageNum.innerText = `${choices[value][0]}`;
  if (!isDiscount) {
    payment.innerText = `$${choices[value][1]}`;
  } else {
    payment.innerText = `$${(Number(choices[value][1]) * 0.75).toFixed(2)}`;
  }
}

// When changing the value of slide-input
input_range.oninput = function () {
  let value = this.value;
  // change lower-fill and upper-fill in slide-input
  this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%), hsl(174, 77%, 80%) ${
    (value / 5) * 100
  }%, hsl(224, 65%, 95%) ${(value / 5) * 100}%, hsl(224, 65%, 95%) 100%)`;

  pageRegulation(value);
};

// When clicking the billing method
check.onclick = function () {
  if (this.hasAttribute("checked")) {
    this.removeAttribute("checked");
  } else {
    let newAtt = document.createAttribute("checked");
    this.setAttributeNode(newAtt);
  }
  pageRegulation(input_range.value);
};
