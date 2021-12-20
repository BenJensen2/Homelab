document.addEventListener("mousemove", (e) => {
  // console.log("Mouse Move")
  // console.log(e.clientX)
  // console.log(e.clientY)

  // Red Box: X Axis
  const mouseX = document.querySelector("#cursor1");
  mouseX.style.left = e.clientX + 'px';

  // Blue Box: Y Axis
  const mouseY = document.querySelector("#cursor2");
  mouseY.style.top = e.clientY + 'px';

  // Orange Box: X & Y Axis
  const mouseLocation = document.querySelector("#cursor3");
  mouseLocation.style.left = e.clientX + 'px';
  mouseLocation.style.top = e.clientY + 'px';
});
