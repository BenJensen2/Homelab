window.onload = function (event) {
  // Mouse Coordinate Display Variables
  const currentYElement = document.querySelector(".current-coordinates .coordinates-y");
  const currentXElement = document.querySelector(".current-coordinates .coordinates-x");
  const endYElement = document.querySelector(".end-coordinates .coordinates-y");
  const endXElement = document.querySelector(".end-coordinates .coordinates-x");


  console.log(currentYElement);

  // Visual display of the mouse move
  document.addEventListener("mousemove", (e) => {
    var currentY = e.clientY + "px";
    var currentX = e.clientX + "px";
    (currentXElement.innerHTML = "X: " + currentX),
      (currentYElement.innerHTML = "Y: " + currentY);

    const movableElement = document.querySelector("#movable");
    console.log(movableElement.style)

    // Start Element movement when clicked and held
    movableElement.addEventListener("mousedown", () => {
      movableElement.style.background = "red";

      // Track coordinates as mouse moves
      movableElement.addEventListener("mousemove",(event)=>{

        // Get dimensions of movable element
        let movableElementWidth = 30;
        let movableElementHeight = 30;

        // Divide Height & Width to get to the center of the element
        let centerElementX = (event.clientX - (movableElementWidth/2));
        let centerElementY = (event.clientY - (movableElementHeight/2));
        
        // Set Left and Top offset of movable element
        movableElement.style.left = centerElementX + 'px';
        movableElement.style.top = centerElementY + 'px';
      })
    });
    

    // Change color after dropping element
    movableElement.addEventListener("mouseup", (event) => {
      movableElement.style.background = "blue";
      endXElement.innerHTML = "X: " + event.clientX;
      endYElement.innerHTML = "Y: " + event.clientY;
    });
  });

  // Don't use draggable, leaves shadow
  // https://stackoverflow.com/questions/6230834/html5-drag-and-drop-anywhere-on-the-screen

  // Coordinate Display
  // const currentXElement = document.querySelector(".coordinates-x")
};
