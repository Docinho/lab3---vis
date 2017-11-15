---
title: "Análise de Boqueirão"
date: 2017-11-15T15:10:45-03:00
draft: false
---

Analisando os dados de volume de água do Epitácio Pessoa.
<!--more-->

<div id="vis1" width=300></div>
<div id="vis2" width=300></div>
<div id="vis3" width=300></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vega/3.0.7/vega.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vega-lite/2.0.1/vega-lite.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vega-embed/3.0.0-rc7/vega-embed.js"></script>
<script>
    let spec = "https://gist.githubusercontent.com/Docinho/ffa499e8e3c4596ec41494bec53e9155/raw/f4b0fa0f0288d2cc2a3c6f8a244d8d67e093f1d2/explicacao.md";
  	vegaEmbed('#texto', spec).catch(console.warn);
        spec = "https://gist.githubusercontent.com/Docinho/ffa499e8e3c4596ec41494bec53e9155/raw/f4b0fa0f0288d2cc2a3c6f8a244d8d67e093f1d2/sdPercentual.json";
  	vegaEmbed('#vis1', spec).catch(console.warn);
    spec = "https://gist.githubusercontent.com/Docinho/ffa499e8e3c4596ec41494bec53e9155/raw/f4b0fa0f0288d2cc2a3c6f8a244d8d67e093f1d2/volume11-17.json";
  	vegaEmbed('#vis2', spec).catch(console.warn);
    spec = "https://gist.githubusercontent.com/Docinho/ffa499e8e3c4596ec41494bec53e9155/raw/f4b0fa0f0288d2cc2a3c6f8a244d8d67e093f1d2/volume-geral.json";
  	vegaEmbed('#vis3', spec).catch(console.warn);
    spec = "https://gist.githubusercontent.com/Docinho/ffa499e8e3c4596ec41494bec53e9155/raw/f4b0fa0f0288d2cc2a3c6f8a244d8d67e093f1d2/sd99-03.json";
  	vegaEmbed('#vis4', spec).catch(console.warn);
    spec = "https://gist.githubusercontent.com/Docinho/ffa499e8e3c4596ec41494bec53e9155/raw/f4b0fa0f0288d2cc2a3c6f8a244d8d67e093f1d2/qnt-medicoes.json";
  	vegaEmbed('#vis5', spec).catch(console.warn);
</script>

