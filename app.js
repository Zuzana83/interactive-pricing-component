const pricingForm = document.getElementById("pricing-form");
const amountEl = document.getElementById("amount");
const priceEl = document.getElementById("price");
const priceSlider = document.getElementById("price-slider");
const billSwitch = document.getElementById("bill-switch");

const pageviews = ["10K", "50k", "100k", "500k", "1M"];
const monthlyPrice = [8, 12, 16, 24, 36];

priceSlider.oninput = handleDrag;

function handleDrag(e) {

    let yearlyBilling = billSwitch.checked;

    if(yearlyBilling) {
        priceEl.textContent = `$${monthlyPrice[this.value] * 0.75}.00`;

    } else {
        priceEl.textContent = `$${monthlyPrice[this.value]}.00`;

    }
    
    amountEl.textContent = `${pageviews[this.value]}`;

    console.log(monthlyPrice[this.value]);
    console.log(billSwitch.checked);
} 

priceSlider.oninput();

billSwitch.addEventListener("change", function() {
    calculate();
});

function calculate() {
    let yearlyBilling = billSwitch.checked;
    let actualPrice = priceSlider.value;

    if(yearlyBilling) {
        priceEl.textContent = `$${monthlyPrice[actualPrice] * 0.75}.00`;
    } else {
        priceEl.textContent = `$${monthlyPrice[actualPrice]}.00`
    }

    console.log(actualPrice);
}