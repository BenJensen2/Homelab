// Output Year, Month and Week days for a calendar

function yearArray(today, quantity) {
  let array = [];
  for (var i = 0; i < quantity + 1; i++) {
    array.push(today.getFullYear() + i);
  }
  return array;
}

function monthArray(today, quantity) {
  let array = [];
  for (var i = 0; i < quantity + 1; i++) {
    array.push(today.getMonth() + i);
  }
  return array;
}

function dayArray(today, quantity) {
  let array = [];
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let daysInMonth = new Date(year, month, 0).getDate();
  let i = 0
  while (i < daysInMonth){
    array.push(today.getDate() + i);
    i++
  }
  return array;
}

function calendar(quantity, type, lowestDetail) {
  let today = new Date();
  if (type == "year") {
    return yearArray(today, quantity);
  }
  if (type == "month") {
    return monthArray(today, quantity);
  }
  if (type == "day") {
    return dayArray(today, quantity);
  }
}

console.log(calendar(5, "year"));
console.log(calendar(5, "month"));
console.log(calendar(50, "day"));
