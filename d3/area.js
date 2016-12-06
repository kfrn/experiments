var dataArray = [45, 67, 34, 56, 23, 88, 55, 67, 47, 78, 83, 73, 34, 55, 69, 50, 81]
var dataYears = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']

var parseDate = d3.timeParse('%Y') // To recognize as date. %Y represents 4-digit year
console.log(d3.max(dataYears, (d) => parseDate(d))) // gets max
console.log(d3.extent(dataYears, (d) => parseDate(d))) // gives min and max


var height = 200
var width = 500

var margin = {left: 50, right: 50, top: 40, bottom: 0}

// var y = d3.scaleLinear().domain([min, max]).range() // Structure that scales always take
var y = d3.scaleLinear()
            .domain([0, d3.max(dataArray)])
            .range([height, 0])

var x = d3.scaleTime()
            .domain(d3.extent(dataYears, (d => parseDate(d)) ))
            .range([0, width])

var yAxis = d3.axisLeft(y).ticks(4).tickPadding(10) // set ticks

var xAxis = d3.axisBottom(x);

var area = d3.area()
                .x((d, i) => x(parseDate(dataYears[i]))) // Better way of doing this. To be covered in next chapter
                .y0(height) // distance from top of the screen (when y = 0)
                .y1((d) => y(d)) // represents the data points

var svg = d3.select('body').append('svg').attr('width', '960').attr('height', '960')

var chartGroup = svg.append('g').attr('transform', 'translate('+margin.left+','+margin.top+')')

chartGroup.append('path')
      .attr('d', area(dataArray))

chartGroup.append('g')
      .attr('class', 'axis y')
      .call(yAxis)

chartGroup.append('g')
      .attr('class', 'axis x')
      .attr('transform', 'translate(0, '+height+')')
      .call(xAxis)
