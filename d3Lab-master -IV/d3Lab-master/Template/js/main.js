/*
*    main.js
*/

var svg = d3.select("#chart-area").append("svg")
     .attr("width", 500)
     .attr("height", 500);


d3.json("data/buildings.json").then((data) => {
     console.log(data);

     data.forEach(d => {
          d.height = +d.height
     });

     var namesBld = data.map((d) => { return d.name});

     var x = d3.scaleBand()
          .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
          .range([0, 400])
          .paddingInner(0.3)
          .paddingOuter(0.3);

     var y = d3.scaleLinear()
          .domain([0, 828])
          .range([0, 400]);

     var color = d3.scaleOrdinal()

          .domain(0, data.lenght)

          .range(['turquoise', 'pink', 'orangered', 'royalblue']);
     
     

     var rects = svg.selectAll("rect")
          .data(data);

     rects.enter()
          .append("rect")
          .attr("x", (d, i) => {
               return (i * 50) + 20;
          })
          .attr("y", (d) => y(d.height)
          )
          .attr("width", 20)
          .attr("height", (d) => { return d.height; })
          .attr("fill", (d) => { return color(d.name); });


}).catch(function (error) {
     console.log(error);
}); 