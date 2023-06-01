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
}); /* */
d3.json("data/ages.json").then((data) => {

     data.forEach((d) => {

          d.age = +d.age;

     });

     console.log(data);

});
