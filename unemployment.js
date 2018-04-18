var Rate = [{group:"Black Male",rate:28.1}, {group:"Black Female",rate:22.3}, {group:"White Male",rate:13.6}, {group:"White Female",rate:11.0}, {group:"Average",rate:14.4}];

var height = 300;
var width = 400;

var cat20 = d3.schemeCategory20;


var unemployment = d3.select("#unemployment").append("svg").attr("height", "100%").attr("width", "100%");


var y = d3.scaleLinear()
            .domain([0, d3.max(Rate, function(d) { return d.rate; }) + 10])
            .range([height, 0]);

var x = d3.scaleBand()
            .domain(Rate.map(function(a) {return a.group;}))
            .paddingInner(0.05)
            .range([0,width]);

var yAxis = d3.axisLeft(y);

var xAxis = d3.axisBottom(x);

unemployment.selectAll("rect.rate")
                .data(Rate)
                .enter().append("rect")
                .attr("class", "rate")
                .attr("height", function(d,i) { return height - y(Rate[i].rate);})
                .attr("width", 60)
                .attr("fill", function(d,i) { return cat20[i];})
                .attr("x", function(d,i) { return 80*i + 50; })
                .attr("y", function(d,i) { return y(d.rate); });


unemployment.append("g")
                .attr("class", "yAxis")
                .call(yAxis)
                .attr("transform","translate(40,0)");

                unemployment.append("g")
                .attr("class", "xAxis")
                .call(xAxis)
                .attr("transform","translate(40,"+height+")");