var parseDate = d3.timeParse('%m/%d/%Y')

// This is normal way that author would lay out a project

d3.csv('prices.csv')
        .row((d) => {
          return { month: parseDate(d.month), price: Number(d.price.trim().slice(1)) }
        })
        .get((error, data) => {
          var height = 300
          var width = 500

          var max = d3.max(data, (d) => d.price)
          var minDate = d3.min(data, (d) => d.month)
          var maxDate = d3.max(data, (d) => d.month)

          var y = d3.scaleLinear()
                      .domain([0, max])
                      .range([height, 0])

          var x = d3.scaleTime()
                      .domain([minDate, maxDate])
                      .range([0, width])

          var yAxis = d3.axisLeft(y)
          var xAxis = d3.axisBottom(x)

          var svg = d3.select('body').append('svg').attr('height', '500').attr('width', '960')

          var margin = { left: 50, right: 50, top: 40, bottom: 0 }

          var chartGroup = svg.append('g')
                                .attr('transform', 'translate('+margin.left+','+margin.top+')')

          var line = d3.line()
                          .x( (d) => x(d.month) ) // Using x and y values applies scale
                          .y( (d) => y(d.price) )

          chartGroup.append('path').attr('d', line(data)) // Path because generators always generate paths (sometimes groups)
          chartGroup.append('g').attr('class', 'x axis').attr('transform', 'translate(0,'+height+')').call(xAxis)
          chartGroup.append('g').attr('class', 'y axis').call(yAxis)

        })

d3.json('treeData.json').get((err, data) => {
  console.log(data[0]);
})
