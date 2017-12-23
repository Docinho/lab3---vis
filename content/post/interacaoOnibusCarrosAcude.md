---
title: "E ai? Vamo lá no acude? Interação"
date: 2017-11-28T10:09:17-03:00
draft: false
---

<div class='container'>
    <div class='row'>
    <h2> watch time vs. age group</h2>
                <p>total time watched: 1411 minutes</p>
                    <div class='radio'>
                        <label class='radio-inline'>
                            <input type="radio" name="gender" value="Bob's" onclick='change("bob")'> Bob's
                        </label>
                        <label class='radio-inline'>
                            <input type="radio" name="gender" value="female" onclick='change("burrinhos")'> Burrinhos
                        </label>
                        <label class='radio-inline'>
                            <input type="radio" name="gender" value="Jackson" onclick='change("jackson")' checked > Jackson
                        </label>
                        <label class='radio-inline'>
                                <input type="radio" name="gender" value="Inicio" onclick='change("inicio")' checked > inicio
                            </label>
                    </div>
            <svg id='chart'>
            </svg>
    </div>
</div>

<script src="https://d3js.org/d3.v4.min.js" type="text/javascript"></script>
<script>

margin = {top: 40,right: 20,bottom: 60,left: 60},
width = 800,
height = 600;

const x2 = d3.scaleTime()
.range([0, width]);

const y2 = d3.scaleLinear()
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
let color2 = ['#a6cee3', '#1f78b4', '#b2df8a'];

function change(value){

	if(value === "bob"){
		updateBob();
	}else if(value === "burrinhos"){
		updateBurrinhos();
    }else if(value === 'jackson'){
		updatejackson();
	}else{
		update();
	}
}

function update(){
    d3.selectAll("circle")
            .remove();
    d3.selectAll("text")
            .remove();
    d3.selectAll(".node")
            .remove();
    d3.selectAll("clipPath")
            .remove();

const xGeral = d3.scaleLinear()
.range([0, width]);

const yGeral = d3.scaleLinear()
.range([height, 0]);
    d3.csv("/post/static/data.csv", function(data){
  
        data.forEach(function(d) {
            d.id = d.id;
            d.value = +d.value;
        });
        xGeral.domain([0,100]);
        yGeral.domain([0, 100000]);

        chart.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xGeral));
    chart.append("g")
        .call(d3.axisLeft(yGeral));


        chart.selectAll('#circle')
            .data(data)
            .enter().append('circle')
            .attr('class','circle')
            .attr('cx', 400)
            .attr('cy', 300)
            .attr('r', (d) => d.id == "carro" ? 200 :2)
            .style('fill', (d) => d.id == "onibus" ? "#496a5b" : "#fb6a6a");        
            });
};

function updateBurrinhos() {
    d3.selectAll("circle")
            .remove();
    d3.selectAll("text")
            .remove();
    d3.selectAll(".node")
            .remove();
    d3.selectAll("clipPath")
            .remove();

    d3.csv("onibusCarro.csv", function(data){
  
    data.forEach(function(d) {
      d.hora = parseTime(d.horario_inicial);
      d.local = d.local;
      d.veiculos = +d.qnt_veiculo;
      d.ideal = +d.ideal_n_onibus;
      d.tipo = d.tipo;
    });
    x2.domain([d3.min(data, d =>  d.hora), d3.max(data, d => d.hora)]);
    y2.domain([0, d3.max(data, function(d) { return d.veiculos; })]);

    chart.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x2).ticks(7).tickFormat(d3.timeFormat('%H:%M')));
    
    chart.append('text')             
        .attr('transform', `translate(${width/2},${height + margin.top})`)
        .attr('id', 'x-label')
        .text('Horario');

    chart.append('g')
        .call(d3.axisLeft(y2).tickValues([1].concat(y2.ticks())));

    chart.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('dx', '-20em')
        .attr('dy', '-2.5em')
        .text('Frequência das mulheres no açude');

    chart.selectAll('#circle')
        .data(data)
        .enter().append('circle')
        .attr('class','circle')
        .attr('cx', (d) => x2(d.hora))
        .attr('cy', (d) => y2(d.local == "burrinhos" ? d.veiculos : 10000000))
        .attr('r', (d) => d.tipo == "ideal" ? 3 : 6)
        .style('fill', (d) => d.tipo == "onibus" ? "#496a5b" : (d.tipo == "carros" ?"#fb6a6a" : "#ff8d40"));

        
        });
   
}

function updateBob() {
    d3.selectAll("circle")
            .remove();
    d3.selectAll("text")
            .remove();
    d3.selectAll(".node")
            .remove();
    d3.selectAll("clipPath")
            .remove();

    d3.csv("onibusCarro.csv", function(data){
  
    data.forEach(function(d) {
      d.hora = parseTime(d.horario_inicial);
      d.local = d.local;
      d.veiculos = +d.qnt_veiculo;
      d.ideal = +d.ideal_n_onibus;
      d.tipo = d.tipo;
    });
    x2.domain([d3.min(data, d =>  d.hora), d3.max(data, d => d.hora)]);
    y2.domain([0, d3.max(data, function(d) { return d.veiculos; })]);

    chart.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x2).ticks(7).tickFormat(d3.timeFormat('%H:%M')));
    
    chart.append('text')             
        .attr('transform', `translate(${width/2},${height + margin.top})`)
        .attr('id', 'x-label')
        .text('Horario');

    chart.append('g')
        .call(d3.axisLeft(y2).tickValues([1].concat(y2.ticks())));

    chart.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('dx', '-20em')
        .attr('dy', '-2.5em')
        .text('Frequência das mulheres no açude');

    chart.selectAll('#circle')
        .data(data)
        .enter().append('circle')
        .attr('class','circle')
        .attr('cx', (d) => x2(d.hora))
        .attr('cy', (d) => y2(d.local == "bobs" ? d.veiculos : 10000000))
        .attr('r', (d) => d.tipo == "ideal" ? 3 : 6)
        .style('fill', (d) => d.tipo == "onibus" ? "#496a5b" : (d.tipo == "carros" ? "#ffdab9" : "#ff8d40"));

        
        });
   
}

function updatejackson() {
    d3.selectAll("circle")
            .remove();
    d3.selectAll("text")
            .remove();
    d3.selectAll(".node")
            .remove();
    d3.selectAll("clipPath")
            .remove();
            

    d3.csv("onibusCarro.csv", function(data){
  
    data.forEach(function(d) {
      d.hora = parseTime(d.horario_inicial);
      d.local = d.local;
      d.veiculos = +d.qnt_veiculo;
      d.tipo = d.tipo;
    });
    x2.domain([d3.min(data, d =>  d.hora), d3.max(data, d => d.hora)]);
    y2.domain([0, d3.max(data, function(d) { return d.veiculos; })]);

    chart.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x2).ticks(7).tickFormat(d3.timeFormat('%H:%M')));
    
    chart.append('text')             
        .attr('transform', `translate(${width/2},${height + margin.top})`)
        .attr('id', 'x-label')
        .text('Horario');

    chart.append('g')
        .call(d3.axisLeft(y2).tickValues([1].concat(y2.ticks())));

    chart.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('dx', '-20em')
        .attr('dy', '-2.5em')
        .text('Frequência das mulheres no açude');

    chart.selectAll('#circle')
        .data(data)
        .enter().append('circle')
        .attr('class','circle')
        .attr('cx', (d) => x2(d.hora))
        .attr('cy', (d) => y2(d.local == "jackson" ? d.veiculos : 10000000))
        .attr('r', (d) => d.tipo == "ideal" ? 3 : 6)
        .style('fill', (d) => d.tipo == "onibus" ? "#496a5b" : (d.tipo == "carros" ? "#760d1f" : "#ff8d40"));

        
        });
   
}
update();
</script>

