var dataArray = [77, 36, 48, 25, 65, 47]

var svg = d3.select('body').append('svg').attr('height', '800px').attr('width', '100%')

svg.selectAll('rect')
    .data(dataArray) // Binds dataArray to selection. If there were three rects, respectively linked to 77, 36, 48
    .enter().append('rect') // if there are leftover elements, these go into an enter selection.
              .attr('height', function (d) { return d*5 })
              .attr('width', '50') // Default units are pixels
              .attr('x', function (d, i) { return  60 * i }) // Positions rectangle horizontally. Needs dynamic value - function. d = data point. i = index. 77,0 ; 36,1 ; 48,2 ; etc
              .attr('y', function (d) { return 600 - d*5 }) // Working from top; needs to be inverted from regular value (e.g. 300)
              .attr('fill', 'blue')

svg.selectAll('circle')
    .data(dataArray)
    .enter().append('circle')
              .attr('cx', (d, i) => 300 + (i * 60))
              .attr('cy', '100')
              .attr('r', (d) => d/2)

// // Lynda sample code
//
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
