/*
*    main.js
*/

var svg = d3.select("#chart-area").append("svg")
     .attr("width", 500)
     .attr("height", 500);

var buildings = []

d3.json("data/buildings.json").then((data) => {

     data.forEach((d) => {

          d.name = +d.building;

     });

     var rect = svg.selectAll("rect")
          .data(data);

     console.log(buildings);

     rect.enter()
          .append("rect")
          .attr("x", (d, i) => { return (i * 50) + 25; })
          .attr("width", 20)
          .attr("height", (d) => { return d.building;})
          .attr("fill", "red");


     var x = d3.scaleBand()

          .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

          .range([0, 400])

          .paddingInner(0.3)

          .paddingOuter(0.3);

     var y = d3.scaleLinear()
          .domain([0, 828])
          .range([0, 400]);

     var color = d3.scaleOrdinal()

          .domain(data.lenght)

          .range(['turquoise', 'pink', 'orangered', 'royalblue']);

}).catch(function (error) {
     console.log(error);
}); 