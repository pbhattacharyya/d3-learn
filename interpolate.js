var dataArray = [{x:5,y:6}, {x:15,y:16}, {x:25,y:21}, {x:35,y:36}, {x:45,y:49}, {x:55,y:56}];
var interpolateTypes = [d3.curvelinear, d3.curveNatural, d3.curveStep, d3.curveBasis, d3.curveBasis, d3.curveCardinal];

var svg = d3.select("body").append("svg")
                                .attr("height", "100%") 
                                .attr("width", "100%");

for (var p=0; p<6; p++)
{

                var line = d3.line()
                            .x(function (d, i) {return d.x*6; })
                            .y(function (d, i) {return d.y*4; })
                            .curve(d3.curveCardinal);

            var shiftX = p*250;
            var shiftY =  0;
            var chartGroup = svg.append("g").attr("class", "group"+ p).attr("transform", "translate("+shiftX+", 0)") ; 

            chartGroup.append("path")
                .attr("stroke", "blue")
                .attr("fill", "none")
                .attr("d", line(dataArray));

            chartGroup.selectAll("circle.grp"+p)
                .data(dataArray)
                .enter().append("circle")
                            .attr("class", function (d,i) {return "grp"+i; })
                            .attr("cx", function (d, i) {return d.x*6; } )
                            .attr("cy", function (d, i) {return d.y*4; } )
                            .attr("r", 3);


}

