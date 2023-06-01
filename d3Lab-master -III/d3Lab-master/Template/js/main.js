/*
*    main.js
*/
d3.csv("data/ages.csv").then((data) => {

     console.log(data);

}).catch (function(error) {
          console.log(error);
});

d3.tsv("data/ages.tsv").then((data) => {

     console.log(data);

}).catch(function (error) {
     console.log(error);
}); 


var svg = d3.select("#chart-area").append("svg")
     .attr("width", 400)
     .attr("height", 400);

var agesdt = []

d3.json("data/ages.json").then((data) => {

     data.forEach((d) => {

          d.age = +d.age;

     });

     var circles = svg.selectAll("circle")
          .data(data);

     console.log(agesdt);

     circles.enter()
          .append("circle")
          .attr("cx", (d, i) => { return (i * 50) + 25; })
          .attr("cy", 20)
          .attr("r", (d) => { return d.age; })
          .attr("fill", "blue");

});
