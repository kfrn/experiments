var dataArray = [77, 36, 48, 25, 65, 47]
var dataDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', "Friday", 'Saturday']

var svg = d3.select('body').append('svg').attr('height', '800px').attr('width', '100%')

var x = d3.scaleOrdinal()
            .domain(dataDays)
            .range([30, 90, 150, 210, 270, 330])

var xAxis = d3.axisBottom(x)

svg.selectAll('rect')
    .data(dataArray) // Binds dataArray to selection. If there were three rects, respectively linked to 77, 36, 48
    .enter().append('rect') // if there are leftover elements, these go into an enter selection.
              .attr('height', function (d) { return d*5 })
              .attr('width', '50') // Default units are pixels
              .attr('x', function (d, i) { return  60 * i }) // Positions rectangle horizontally. Needs dynamic value - function. d = data point. i = index. 77,0 ; 36,1 ; 48,2 ; etc
              .attr('y', function (d) { return 600 - d*5 }) // Working from top; needs to be inverted from regular value (e.g. 300)
              .attr('fill', 'blue')

svg.append('g')
    .attr('class', 'x axis hidden')
    .attr('transform', 'translate(0, 600)')
    .call(xAxis)


svg.selectAll('circle')
    .data(dataArray)
    .enter().append('circle')
              .attr('class', 'first')
              .attr('cx', (d, i) => 100 + (i * 80))
              .attr('cy', '100')
              .attr('r', (d) => d/2)


var secondArray = [7, 12, 17]
var newX = 300
svg.selectAll('ellipse')
    .data(secondArray)
    .enter().append('ellipse')
              .attr('class', 'second')
              .attr('cx', (d, i) => { newX += (d*3)+(i*10); return newX })
              .attr('cy', '200')
              .attr('rx', (d) => d)
              .attr('ry', (d) => d*2)

var newerX = 600
svg.selectAll('line')
    .data(secondArray)
    .enter().append('line')
              .attr('class', 'third')
              .attr('x1', newerX)
              .attr('y1', (d, i) => 80 + (i*20))
              .attr('x2', (d) => newerX + d*15)
              .attr('y2', (d, i) => 80 + (i*20))
              // STYLING LINES
              // 1. Add direct property
              // .attr('stroke', 'blue')
              // .attr('stroke-width', '2')
              // 2. Add style. This has precedence, but is not recommended
              // .style('stroke', 'green')
              // 3. Style with CSS. Second precedence. Best practice!

// Manual text
// svg.append('text')
//       .attr('x', newerX)
//       .attr('y', '200')
//       .attr('fill', 'none') // can use pretty much any CSS styling as attrs.
//       .attr('stroke', 'blue')
//       .attr('stroke-width', '2')
//       .attr('dominant-baseline', 'middle') // align vertically
//       .attr('text-anchor', 'start') // align horizontally
//       .attr('font-size', '30')
//       .text('kia ora!')
// svg.append('text')
//       .attr('x', newerX)
//       .attr('y', '240')
//       .attr('fill', 'blue')
//       .attr('stroke', 'none')
//       .attr('dominant-baseline', 'middle')
//       .attr('text-anchor', 'middle')
//       .attr('font-size', '30')
//       .text('tena koutou!')
// svg.append('text')
//       .attr('x', newerX)
//       .attr('y', '280')
//       .attr('stroke', 'blue')
//       .attr('fill', 'none')
//       .attr('dominant-baseline', 'middle')
//       .attr('text-anchor', 'end')
//       .attr('font-size', '30')
//       .text('haere ra')
// svg.append('line')
//       .attr('x1', newerX)
//       .attr('y1', 200)
//       .attr('x2', newerX)
//       .attr('y2', 280)

// Add all text in one block of code
var textArray = ['kia ora!', 'tena koutou', 'haere ra']

svg.append('text').selectAll('tspan')
    .data(textArray)
    .enter().append('tspan')
      .attr('x', newerX)
      .attr('y', (d, i) => 150 + (i*30))
      .attr('fill', 'blue') // can use pretty much any CSS styling as attrs.
      .attr('dominant-baseline', 'middle') // align vertically
      .attr('text-anchor', 'start') // align horizontally
      .attr('font-size', '30')
      .text( (d) => d )


// Lynda sample code

// var dataArray = [5,11,18]
//
// var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%")
//
// svg.selectAll("rect")
//       .data(dataArray)
//       .enter().append("rect")
//                 .attr("height",function(d,i){ return d })
//                 .attr("width","50")
//                 .attr("fill","pink")
//                 .attr("x",function(d,i){ return 60*i; })
//                 .attr("y",function(d,i){ return 300-(d) });
//
// var newX = 300;
// svg.selectAll("circle")
//       .data(dataArray)
//       .enter().append("circle")
//                 .attr("cx",function(d,i){ newX+=(d*3)+(i*20); return newX; }) // changing multiplier of d changes width (how close together)
//                 .attr("cy","80")
//                 .attr("r",function(d){ return d*3; })
