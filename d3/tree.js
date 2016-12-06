var height = 200
var width = 500
var margin = { left: 50, right: 50, top: 40, bottom: 0 }

var tree = d3.tree().size([width, height])

var svg = d3.select('body').append('svg').attr('width', '960').attr('height', '600')

var chartGroup = svg.append('g').attr('transform', 'translate('+margin.left+','+margin.right+')')

d3.json('treeData.json').get( (err, data) => {
  var root = d3.hierarchy(data[0])
  console.log(root)
  tree(root)
  chartGroup.selectAll('circle')
      .data(root.descendants())
      .enter().append('circle')
                  .attr('cx', (d) => d.x)
                  .attr('cy', (d) => d.y)
                  .attr('r', '5')

  chartGroup.selectAll('path')
      .data(root.descendants().slice(1)) // Always need one less line than dot, cause the last line joins the last two dots.
      .enter().append('path')
                  .attr('class', 'link')
                  .attr('d', (d) => "M"+d.x+','+d.y+'L'+d.parent.x+','+d.parent.y )

})
