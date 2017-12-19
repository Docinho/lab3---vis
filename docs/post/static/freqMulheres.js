margin = {top: 40,right: 20,bottom: 60,left: 60},
width = 800,
height = 600;

const tooltip = d3.select('body').append('div')
.attr('id', 'tooltip');

const x1 = d3.scaleTime()
.range([0, width]);

const y1 = d3.scaleLinear()
.range([height, 0]);

const chart = d3.select('#chart')
.attr('width', width + margin.left + margin.right)
.attr('height', height + margin.top + margin.bottom)
.append('g')
.attr('transform', `translate(${margin.left}, ${margin.top})`);

chart.append('text')             
.attr('transform', `translate(${width/2},${margin.top - 54})`)
.attr('id', 'title')
.text('Frequencia das mulheres no açude');

let parseTime = d3.timeParse("%H:%M");
let color1 = ['#a6cee3', '#1f78b4', '#b2df8a'];

d3.csv("../static/mulheres.csv", function(data){
  
  data.forEach(function(d) {
      d.horarioInicial = parseTime(d.horarioInicial);
      d.total = +d.total;
  });
  x1.domain([d3.min(data, d =>  d.horarioInicial), d3.max(data, d => d.horarioInicial)]);
  y1.domain([0, d3.max(data, function(d) { return d.total; })]);

  chart.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x1).ticks(7).tickFormat(d3.timeFormat('%H:%M')));
  
  chart.append('text')             
    .attr('transform', `translate(${width/2},${height + margin.top})`)
    .attr('id', 'x-label')
    .text('Horario');

  chart.append('g')
    .call(d3.axisLeft(y1).tickValues([1].concat(y1.ticks())));

  chart.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('dx', '-20em')
    .attr('dy', '-2.5em')
    .text('Frequencia das mulheres no açude');

  chart.append('circle')
    .attr('cx', '400')
    .attr('cy', '100')
    .attr('r', '5')
    .style('fill', color1[0]);

  chart.append('text')
    .attr('x', '410')
    .attr('y', '105')
    .text('Burrinhos');

  chart.append('circle')
    .attr('cx', '400')
    .attr('cy', '130')
    .attr('r', '5')
    .style('fill', color1[1]);

  chart.append('text')
    .attr('x', '410')
    .attr('y', '135')
    .text('Jackson');

    chart.append('circle')
    .attr('cx', '400')
    .attr('cy', '160')
    .attr('r', '5')
    .style('fill', color1[2]);

  chart.append('text')
    .attr('x', '410')
    .attr('y', '165')
    .text("Bob's");

  chart.selectAll('.circle')
    .data(data)
    .enter().append('circle')
    .attr('class','circle')
    .attr('cx', (d) => x1(d.horarioInicial))
    .attr('cy', (d) => y1(d.total))
    .attr('r', 5)
    .style('fill', (d) => d.local == 'burrinhos' ? color[0] : (d.local == "jackson" ?  color[1]: color[2]))
    .on('mouseover', (d) => {
      tooltip.transition()
        .duration(100)		
        .style('opacity', .9);
      tooltip.text(`Lugar: ${d.local} - Mulheres Pedestres ${d.mulheresPedestres} - Mulheres ciclistas: ${d.mulheresCiclistas}`)
        .style('left', `${d3.event.pageX + 2}px`)	
        .style('top', `${d3.event.pageY - 18}px`);
    })
    .on('mouseout', () => {		
      tooltip.transition()		
      .duration(400)		
      .style('opacity', 0);	
    });
})