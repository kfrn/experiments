var popData = [
  { name: 'Northland', size: 171400}
  { name: 'Auckland', size: 1614300}
  { name: 'Waikato', size: 449200}
  { name: 'Bay of Plenty', size: 293500}
  { name: 'Gisborne', size: 47900}
  { name: 'Hawkes Bay', size: 161500}
  { name: 'Taranaki', size: 116600}
  { name: 'Manawatu and Whanganui', size: 234500}
  { name: 'Wellington', size: 504900}
  { name: 'Tasman', size: 50300}
  { name: 'Nelson', size: 50600}
  { name: 'Marlborough', size: 45500}
  { name: 'West Coast', size: 32600}
  { name: 'Canterbury', size: 600100}
  { name: 'Otago', size: 219200}
  { name: 'Southland', size: 98000}
]

var width = 960
var height = 800
var radius = Math.min(width, height) / 2

var rainbow = d3.scaleSequential(d3.interpolateRainbow)
                  .domain([0, popData.length])

var svg = d3.select('piechart')
              .append('svg')
                  .attr('width', width)
                  .attr('height', height)
                  // .append('g')
                  //     .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')') // centre 'g' within the svg

var arc = d3.svg.arc()
              .innerRadius(0)
              .outerRadius(radius)

var pie = d3.layout.pie()
              .value( (d) => d.size )
              // .sort(null) // by default, sorts in order of descending value/size

var path = svg.selectAll('path') // actually creates chart
                  .data(pie(dataset))
                  .enter()
                    .append('path')
                        .attr('d', arc)
                        .attr('fill', (d) => rainbow(d.popData.name) )

// (function(d3) {
//        'use strict';
//
//        var dataset = [
//          { label: 'Abulia', count: 10 },
//          { label: 'Betelgeuse', count: 20 },
//          { label: 'Cantaloupe', count: 30 },
//          { label: 'Dijkstra', count: 40 }
//        ];
//
//        var width = 360;
//        var height = 360;
//        var radius = Math.min(width, height) / 2;
//
//        var color = d3.scaleOrdinal(d3.schemeCategory20b);
//
//        var svg = d3.select('#chart')
//          .append('svg')
//          .attr('width', width)
//          .attr('height', height)
//          .append('g')
//          .attr('transform', 'translate(' + (width / 2) +
//            ',' + (height / 2) + ')');
//
//        var arc = d3.arc()
//          .innerRadius(0)
//          .outerRadius(radius);
//
//        var pie = d3.pie()
//          .value(function(d) { return d.count; })
//          .sort(null);
//
//        var path = svg.selectAll('path')
//          .data(pie(dataset))
//          .enter()
//          .append('path')
//          .attr('d', arc)
//          .attr('fill', function(d) {
//            return color(d.data.label);
//          });
//
//      })(window.d3);
