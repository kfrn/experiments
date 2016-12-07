var dataArray = [{x:5,y:4},{x:7,y:8},{x:8,y:4},{x:11,y:6},{x:15,y:8},{x:16,y:7}]

var interpolateTypes = [d3.curveLinear, d3.curveNatural, d3.curveStep, d3.curveBasis, d3.curveBundle, d3.curveCardinal]

var svg = d3.select('body').append('svg').attr('width', '960').attr('height', '1260')


for (var p = 0; p < interpolateTypes.length; p++) {
      // Line Generator. Should be placed toward top of code. FN, needs to be executed.
      var line = d3.line() // line generator. Has to output line. Tell it what to do with each data point
                  .x((d, i) => d.x*34)
                  .y((d, i) => d.y*42)
                  // .curve(d3.curveStep)
                  .curve(interpolateTypes[p]) // LOTS of interpolate FNs you can use with curve

      var shiftX = 0
      var shiftY = p*140

      var chartGroup = svg.append('g').attr('class', 'group'+p).attr('transform', 'translate(0,'+shiftY+')') // rotate, scale, translate(shift)

      chartGroup.append('path')
                  .attr('d', line(dataArray))
                  // .attr('d', 'M 120 48 L 168 96 L 192 48 L 264 72 L 360 96 L 384 84') // same as above line
                  .attr('fill', 'none')
                  .attr('stroke', 'green')

      svg.selectAll('circle.grp'+p)
            .data(dataArray)
            .enter().append('circle')
                  .attr('class', (d, i) => "grp"+i)
                  .attr('cx', (d, i) => d.x*34)
                  .attr('cy', (d, i) => d.y*42)
                  .attr('r', '2')
}
