var parseDate = d3.timeParse('%Y')

d3.xml('stack.xml').get((err, xml) => {

  var height = 200
  var width = 500
  var margin = { left: 50, right: 50, top: 40, bottom: 0 }

  xml = [].map.call(xml.querySelectorAll('dat'), (d) => { // dat for 'dat' xml tag
    return {
      date: parseDate(d.getAttribute('id')),
      top: +d.querySelector('top').textContent,
      middle: +d.querySelector('middle').textContent,
      bottom: +d.querySelector('bottom').textContent
    }
  })
  // console.log(xml)

  var x = d3.scaleTime()
              .domain(d3.extent(xml, (d) => d.date)) // finds min & max dates
              .range([0, width])

  var y = d3.scaleLinear()
              .domain([0, d3.max(xml, (d) => d.top+d.middle+d.bottom )])
              .range([height, 0]) // swapped bc y axis extends down not up.

  var categories = ['top', 'middle', 'bottom']

  var stack = d3.stack().keys(categories) // stack is generator

  var area = d3.area()
                  .x( (d) => x(d.data.date) ) // can use index, or access date (as here)
                  .y0( (d) => y(d[0]) )
                  .y1( (d) => y(d[1]) )

  var svg = d3.select('body').append('svg').attr('width', '960').attr('height', '600')

  var chartGroup = svg.append('g').attr('transform', 'translate('+margin.left+','+margin.left+')')

  var stacked = stack(xml)
  // console.log(stacked)

  chartGroup.append('g').attr('class', 'x axis')
                        .attr('transform', 'translate(0,'+height+')')
                        .call(d3.axisBottom(x))

  chartGroup.append('g').attr('class', 'y axis')
                        .call(d3.axisLeft(y).ticks(5))

  // METHOD #1
  // chartGroup.selectAll('path.area')
  //     .data(stacked)
  //     .enter().append('path')
  //                 .attr('class', 'area')
  //                 .attr('d', (d) => area(d) ) // Runs 3 times. Each time, d will be array of length 26. BC stacked is array with length 3 & each sub-array is length 26.

  // METHOD #2
  chartGroup.selectAll('g.area')
        .data(stacked)
        .enter().append('g')
                  .attr('class', 'area')
        .append('path')
                  .attr('class', 'area')
                  .attr('d', (d) => area(d) )

})
