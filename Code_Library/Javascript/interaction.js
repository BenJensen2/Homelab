// Ensure everything is loaded before execution
window.onload = function (event) {
  // window operations
  console.log("Navigator: ", navigator);
  // console.log("Navigator Connection: ",navigator.connection)
  // console.log("Navigator Credentials: ",navigator.credentials)
  // console.log("Navigator Device Memory: ",navigator.deviceMemory)
  // console.log("Navigator Geolocation: ",navigator.geolocation) // Needs access from browser
  // console.log("Navigator Language: ",navigator.language)
  window.onbeforeprint = function () {
    console.log("Printing");
  };
  window.onafterprint = function () {
    console.log("Printed");
  };

  // Console Operations
  //console.time(performance) //Method starts a timer you can use to track how long an operation takes
  console.log("Document: ", document);
  console.log("Hello from Javascript!");
  console.debug("Console Debug");
  console.dir();
  console.info("Console Info");
  console.warn("Warn Message");
  console.trace();

  // Printing
  const printButton = document.querySelector("#print");
  printButton.onclick = function () {
    console.log("Print Button: ", printButton);
    window.print();
  };

  // Focus events
  const focusText = document.querySelector("#focus");
  focusText.onfocus = function () {
    console.trace("Focus");
  };
  focusText.onblur = function () {
    console.trace("Blur");
  };

  // Change Event
  const changeText = document.querySelector("#change");
  changeText.onchange = function () {
    console.trace("change");
  };

  // Context Menu
  const contextButton = document.querySelector("#context-menu");
  contextButton.addEventListener("contextmenu", (e) => {
    console.log("Context Menu");
    contextButton.style.color = "red";
  });

  // Click Events
  const clickElement = document.querySelector("#click");
  clickElement.addEventListener("click", () => {
    console.trace("Green Trace")
    console.log("Click");
    clickElement.style.color = "green";
  });

  // Mouse Events
  const mouseEventElement = document.querySelector("#mouseEvent");
  const mouseDownElement = document.querySelector("#mouseDown");
  mouseEventElement.addEventListener("mousedown", () => {
    console.log("Mouse Down");
    mouseDownElement.style.color = "red";
  });

  const mouseUpElement = document.querySelector("#mouseUp");
  mouseEventElement.addEventListener("mouseup", () => {
    console.log("Mouse Up");
    mouseUpElement.style.color = "red";
  });

  // Drag Events
  const dragElement = document.querySelector("#drag-element");
  dragElement.addEventListener("dragstart", () => {
    console.log("Drag Start");
    dragElement.style.color = "red";
  });
  dragElement.addEventListener("dragend", () => {
    console.log("Drag End");
    dragElement.style.color = "blue";
  });

  const dragEnterLeave = document.querySelector(".drag-enter-leave");
  dragEnterLeave.addEventListener("dragenter", () => {
    console.log("Entered Drop Zone");
    dragEnterLeave.style.border = "solid 1px black";
  });

  dragEnterLeave.addEventListener("dragleave", () => {
    console.log("Left Drop Zone");
    dragEnterLeave.style.border = "solid 1px red";
  });

  const dragOver = document.querySelector(".dragover");
  dragOver.addEventListener("dragover", () => {
    // console.log("Dragover"); // Too much output: Called by milliseconds
    dragOver.style.border = "solid 1px purple";
  });

  const dragDrop = document.querySelector(".dragdrop");
  dragDrop.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  dragDrop.addEventListener("drop", () => {
    console.log("Drag dropped");
    dragDrop.style.border = "solid 1px red";
  });
};
