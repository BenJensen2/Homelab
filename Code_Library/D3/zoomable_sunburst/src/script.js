  // import data from "./data.js";
  fetch('./data.json')
  .then(response => response.json())
  .then(data => console.log(data));

  // const root = partition(data);