window.onload = function (event) {
  // DashinD3
  // d3.select("body").append("p");
  // d3.select("body")
  //   .append("svg")
  //   .attr("width", 50)
  //   .attr("height", 50)
  //   .append("circle")
  //   .attr("cx", 25)
  //   .attr("cy", 25)
  //   .attr("r", 25)
  //   .style("fill", "yellowgreen");

  var theData = [1, 2, 3];

  // - Binding Data (Virtual Selections)
  //   - Creates placeholders for elements that are not present
  // var p = d3.select("body").selectAll("p").data(theData).enter().append("p");
  // console.log(d3.select("body"))
  // console.log(d3.select("body").data([1]));
  // console.log(p)

  // - Binding Data with a function
  // var p = d3
  //   .select("body")
  //   .selectAll("p")
  //   .data(theData)
  //   .enter()
  //   .append("p")
  //   .text(function (d) {
  //     return d;
  //   });

  // - Binding Data with an involved function
  // var p = d3
  //   .select("body")
  //   .selectAll("p")
  //   .data(theData)
  //   .enter()
  //   .append("p")
  //   .text(function (d) {
  //     var addedNumber = 2;
  //     var tempNumber;
  //     // we add the number 2 to our input
  //     tempNumber = d + addedNumber;
  //     return tempNumber;
  //   });

  // - Binding Data with an involved function (i & d variables)
  // var p = d3
  //   .select("body")
  //   .selectAll("p")
  //   .data(theData)
  //   .enter()
  //   .append("p")
  //   .text(function (d, i) {
  //     return "i = " + i + " d = " + d;
  //   });

  // - SVG with data
  // var circleRadii = [40, 20, 10];

  // var svgContainer = d3
  //   .select("body")
  //   .append("svg")
  //   .attr("width", 200)
  //   .attr("height", 200);

  // var circles = svgContainer
  //   .selectAll("circle")
  //   .data(circleRadii)
  //   .enter()
  //   .append("circle");

  // console.log(circles)

  // circleRadii = [40, 20, 10];

  // var svgContainer = d3
  //   .select("body")
  //   .append("svg")
  //   .attr("width", 200)
  //   .attr("height", 200);

  // var circles = svgContainer
  //   .selectAll("circle")
  //   .data(circleRadii)
  //   .enter()
  //   .append("circle");

  // var circleAttributes = circles
  //   .attr("cx", 50)
  //   .attr("cy", 50)
  //   .attr("r", function (d) {
  //     return d;
  //   })
  //   .style("fill", function (d) {
  //     var returnColor;

  //     if (d === 40) {
  //       returnColor = "green";
  //     } else if (d === 20) {
  //       returnColor = "purple";
  //     } else if (d === 10) {
  //       returnColor = "red";
  //     }

  //     return returnColor;
  //   });

  // SVG in the coordinate space
  // var spaceCircles = [30, 70, 110];

  // var svgContainer = d3
  //   .select("body")
  //   .append("svg")
  //   .attr("width", 200)
  //   .attr("height", 200);

  // var circles = svgContainer
  //   .selectAll("circle")
  //   .data(spaceCircles)
  //   .enter()
  //   .append("circle");

  // var circleAttributes = circles
  //   .attr("cx", function (d) {
  //     return d;
  //   })
  //   .attr("cy", function (d) {
  //     return d;
  //   })
  //   .attr("r", 20)
  //   .style("fill", function (d) {
  //     var returnColor;

  //     if (d === 30) {
  //       returnColor = "green";
  //     } else if (d === 70) {
  //       returnColor = "purple";
  //     } else if (d === 110) {
  //       returnColor = "red";
  //     }

  //     return returnColor;
  //   });

  // SVG in the coordinate space with JSON
  var jsonCircles = [
    {
      x_axis: 30,
      y_axis: 30,
      radius: 20,
      color: "green",
    },
    {
      x_axis: 70,
      y_axis: 70,
      radius: 20,
      color: "purple",
    },
    {
      x_axis: 110,
      y_axis: 100,
      radius: 20,
      color: "red",
    },
  ];

  var svgContainer = d3
    .select("body")
    .append("svg")
    .attr("width", 200)
    .attr("height", 200);

  var circles = svgContainer
    .selectAll("circle")
    .data(jsonCircles)
    .enter()
    .append("circle");

  var circleAttributes = circles
    .attr("cx", function (d) {
      return d.x_axis;
    })
    .attr("cy", function (d) {
      return d.y_axis;
    })
    .attr("r", function (d) {
      return d.radius;
    })
    .style("fill", function (d) {
      return d.color;
    });

  // let main = d3.select("main");
  // console.log(main);
  // console.log(d3.pointer(main));
  // d3.select("p").style("color", "green");
  // d3.selectAll("p").style("color", "green");

  // const data = [100, 200, 300];
  // const paragraph = d3
  //   .select("body")
  //   .selectAll("p")
  //   .data(data)
  //   .text(function (d, i) {
  //     console.log("d: " + d);
  //     console.log("i: " + i);
  //     console.log("this: " + this);

  //     return d;
  //   });

  // d3.select(".div-event")
  //   .on("mouseover", function () {
  //     d3.select(this)
  //       .transition()
  //       .duration(1000)
  //       .style("background-color", "orange");

  //     // Get current event info
  //     console.log(d3.event);

  //     // Get x & y co-ordinates
  //     console.log(d3.pointer(this));
  //   })
  //   .on("mouseout", function () {
  //     d3.select(this).style("background-color", "steelblue");
  //   });
};
