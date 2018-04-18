var dataArray = [3, 4, 25, 46, 107, 8, 59, 10, 100, 14, 16, 137, 22, 23, 64, 125];
var dataYears = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014', '2015'];

var height = 200;
var width = 500;

var parseDate = d3.timeParse("%Y");


var y = d3.scaleLinear() // to create a corresponding y-value for each datapoint in dataArray
            .domain([0, d3.max(dataArray)])
            .range([height, 0]); //because svgs are drawn from top to bottom, unlike graphs

 var x = d3.scaleTime() // to create a corresponding x-value for each date in dataYears
            .domain(d3.extent(dataYears, function(d) {return parseDate(d);}))
            .range([0, width]);

var yAxis = d3.axisLeft(y) //where to put the labels relative to the line
                .ticks(3) //to specify the number of ticks in the axis - this is a soft suggestion
                .tickPadding(10); //to specify the amount of padding

var xAxis = d3.axisBottom(x) //where to put the labels relative to the line
                .ticks(5); //to specify the number of ticks in the axis - this is a soft suggestion


var margin={left:50, right:50, top:40, bottom:0};

var area = d3.area()
                .x(function(d, i) {return x(parseDate(dataYears[i])); })
                .y0(height) 
                .y1(function (d) {return y(d); });

var svg = d3.select("body").append("svg")
                            .attr("height", "100%")
                            .attr("width", "100%");
var chartGroup = svg.append("g").attr("transform","translate("+margin.left+","+margin.top+")");

chartGroup.append("path")
    .attr("d", area(dataArray));
    
chartGroup.append("g")
    .attr("class","axis y")
    .call(yAxis); 

chartGroup.append("g")
    .attr("class","axis x")
    .call(xAxis)
    .attr("transform","translate(0,"+height+")"); 
    