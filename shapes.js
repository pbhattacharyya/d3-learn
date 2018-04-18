


console.log( "document loaded!" );

var dataArray = [5,11,18];
var dataDays = ['Mon','Wed', 'Fri'];

var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0,4]);

var cat20 = d3.schemeCategory20;

console.log(cat20);

/* var x = d3.scaleOrdinal()
            .domain(dataDays)
            .range([25,85,145]); */

var x = d3.scaleBand()
            .domain(dataDays)
            .paddingInner(0.1176)
            .range([0,170]);

var xAxis = d3.axisBottom(x);

var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");

svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")                 //adds a rect for each datapoint in the enter selection (i.e. 3) 
                .attr("height", function (d, i) {return d*15;})
                .attr("width", "30")
                .attr("fill", function(d,i) { return cat20[i]; })
                .attr("x", function (d, i) {return 60*i + 10;})
                .attr("y", function (d, i) {return 300 - d*15 + 30;});
                
svg.append("g")
        .attr("class", "x axis hidden")
        .call(xAxis)
        .attr("transform","translate(0,330)")


var newX = 300;
svg.selectAll("circle.first")
    .data(dataArray)
    .enter().append("circle") 
                .attr("class", "first")
                .attr("cx", function (d, i) {newX += d*6 + (i*20); return newX;})
                .attr("cy", "100")
                .attr("r", function (d, i) {return d*3;});

var newX = 600;
svg.selectAll("ellipse.second")
    .data(dataArray)
    .enter().append("ellipse") 
                .attr("class", "second")
                .attr("cx", function (d, i) {newX += d*3 + (i*20); return newX;})
                .attr("cy", "100")
                .attr("rx", function (d, i) {return d*3;})
                .attr("ry", "30");

var newX = 900;
svg.selectAll("line")
    .data(dataArray)
    .enter().append("line") 
                .attr("x1", newX)
                .attr("y1", function (d, i) {return 80 + i*20;})
                .attr("x2", function (d, i) {return newX + d*15;})
                .attr("y2", function (d, i) {return 80 + i*20;})
                /* .style("stroke", "green")
                .attr("stroke", "blue") */
                .attr("stroke-width", "2");

var textArray = ["start", "middle", "end"];

svg.append("text").selectAll("tspan")
            .data(textArray)
            .enter().append("tspan") 
                .text(function (d) {return d;})
                .attr("x", newX)
                .attr("y", function (d, i) {return 150 + i*30;})
                .attr("fill", "blue")
                .attr("stroke", "none")
                .attr("text-anchor","start")
                .attr("dominant-baseline", "middle")
                .attr("stroke-width", "1")
                .attr("font-size", "30");

                
                
                

