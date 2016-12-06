var dataArray = [45, 67, 34, 56, 23, 88, 55, 67, 47, 78, 83, 73, 34, 55, 69, 50, 81]
var dataYears = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']

var height = 200
var width = 500

var margin = {left: 50, right: 50, top: 40, bottom: 0}

// var y = d3.scaleLinear().domain([min, max]).range() // Structure that scales always take
var y = d3.scaleLinear()
            .domain([0, 100])
            .range([height, 0])

var yAxis = d3.axisLeft(y)

var area = d3.area()
                .x((d, i) => i*20) // Better way of doing this. To be covered in next chapter
                .y0(height) // distance from top of the screen (when y = 0)
                .y1((d) => height - y(d)) // represents the data points

var svg = d3.select('body').append('svg').attr('width', '960').attr('height', '960')

var chartGroup = svg.append('g').attr('transform', 'translate('+margin.left+','+margin.top+')')

chartGroup.append('path')
      .attr('d', area(dataArray))

chartGroup.append('g')
      .attr('class', 'axis y')
      .call(yAxis)
