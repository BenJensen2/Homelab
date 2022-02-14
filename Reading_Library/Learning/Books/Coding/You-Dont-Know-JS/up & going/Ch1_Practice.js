// Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
// * After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
// * Finally, check the amount against your bank account balance to see if you can afford it or not.
// * You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
// * You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
// * **Bonus Challenge:** Try to incorporate input into this program, perhaps with the `prompt(..)` covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!

// Psuedo Code
// Calculate Tax
// While Funds are available, add phones
// While funds are available, add accessories
// Withdraw money from bank

function totalPrice() {
  var taxRate = 0.0735; // 7.35 % Tax Rate
  var cartAmount = 0;
  var spendingThreshold = 1045.5;
  var bankAccountBalance = spendingThreshold;

  var phonePrice = 99.99;
  let phoneCount = 0;
  var accessoryPrice = 12.99;
  let accessoryCount = 0;

  let phoneCost = phonePrice + phonePrice * taxRate;
  let accessoryCost = accessoryPrice + accessoryPrice * taxRate;
  while (cartAmount < bankAccountBalance - phoneCost) {
    cartAmount += phoneCost;
    phoneCount++;
  }
  while (cartAmount < bankAccountBalance - accessoryCost) {
    cartAmount += accessoryCost;
    accessoryCount++;
  }
  console.log("Cart Amount: ");
  formatAmount(cartAmount);
  console.log("Leftover in account: ");
  formatAmount(bankAccountBalance - cartAmount);
  console.log("Phones purchased: ", phoneCount, "Accessories purchased: ",accessoryCount);
}

totalPrice();

// CLEAN CODE
function calculateTax(cost) {
  return cost * taxRate;
}

function addTaxToCost(cost, tax) {
  return cost + tax;
}

function calculateIndividualCost(initialCost) {
  let individualTax = calculateTax(initialCost);
  return addTaxToCost(initialCost, individualTax);
}

function areFundsAvailable(fundsAvalable, cost) {
  if (fundsAvalable > cost) {
    return true;
  } else {
    return false;
  }
}

function addToCart(amount) {
  return (cartAmount += amount);
}

function determineAmountToBuy(fundsAvalable, cost) {
  while (areFundsAvailable(fundsAvalable, cost)) {
    addToCart(cost);
  }
}

function calculateCart(item1, item2) {
  determineAmountToBuy(item1);
  determineAmountToBuy(item2);
}

function formatAmount(amount) {
  console.log("$", amount.toFixed(2));
}

// var phoneCost = calculateIndividualCost(phonePrice);
// var accessoryCost = calculateIndividualCost(accessoryPrice);
// formatAmount(phoneCost);
// formatAmount(accessoryCost);
// formatAmount(addToCart(phoneCost));
// console.log(areFundsAvailable(bankAccountBalance, cartAmount));
// formatAmount(cartAmount);

// END CLEAN CODE
