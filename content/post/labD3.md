---
title: "Visualização Pluviométrica de Boqueirão"
date: 2017-11-28T10:09:17-03:00
draft: false
---

Em azul nós temos os meses com chuvas acima de 80mm a maior parte da precipitação. Eles estão representads de azul e são Abril, Maio, Junho e Julho.
<!--more-->
<script src="https://d3js.org/d3.v4.min.js"></script>


<script type="text/javascript">
    const alturaSVG = 450, larguraSVG = 900;
    const margin = {top: 10, right: 20, bottom:50, left: 45},
    larguraVis = larguraSVG - margin.left - margin.right,
    alturaVis = alturaSVG - margin.top - margin.bottom;
          
    

    function desenhaVis(dados) {
        /*
       * Prepara onde adicionaremos a visualizacao
       */
       let grafico = d3.select('#chart') 
            .append('svg')
            .attr('width', larguraVis + margin.left + margin.right)
            .attr('height', alturaVis + margin.top + margin.bottom)
            .append('g') 
            .attr('transform', 'translate(' +  margin.left + ',' + margin.top + ')');

       /*
       * As escalas
       */
        let x = d3.scaleLinear() 
                .domain([0, d3.max(dados, (d) => d.noventa_percentil)])
                .range([0,larguraVis/2]);
        let y = d3.scaleLinear() 
                 .domain([0, d3.max(dados, (d, i) => d.dez_percentil)])
                 .range([0, alturaVis])
                 .rangeRound([alturaVis, 0]);
         /*
       * As marcas
       */
      grafico.selectAll('g')
              .data(dados)
              .enter()
                .append('circle')
                     // usando a escala definida acima
                  .attr('cy', d => y(d.dez_percentil))
                  .attr('cx', d => x(d.noventa_percentil))
                  .attr('r', 10)
                  .attr('fill', d => {if(d.mediana > 80) {return "blue";}else{return "red";}})

       /*
       * Os eixos
       */
       grafico.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + alturaVis + ")")
            .call(d3.axisBottom(x)); 
        grafico.append('g')
            .attr('transform', 'translate(0,0)')
            .call(d3.axisLeft(y))  

        grafico.append("text")
            .attr("transform", "translate(-30," + (alturaVis + margin.top)/2 + ") rotate(-90)")
            .text("10-percentil");
        grafico.append("text")
            .attr("transform", "translate(" + ((larguraVis + margin.right)/2) + "," + (alturaVis +35) + " )")
            .text("90-percentil");
        
        
    }

    d3.json('/lab3---vis/post/static/boqueirao-por-mes.json', function(dados) {
        desenhaVis(dados);
        });
</script>

<div id = "chart">

</div>