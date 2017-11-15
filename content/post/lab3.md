---
title: "Análise de Boqueirão"
date: 2017-11-15T15:10:45-03:00
draft: false
---

<div id="vis1" width=300></div>
<div id="vis2" width=300></div>
<div id="vis3" width=300></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vega/3.0.7/vega.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vega-lite/2.0.1/vega-lite.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vega-embed/3.0.0-rc7/vega-embed.js"></script>
<script>
    let spec = "https://gist.githubusercontent.com/Docinho/ffa499e8e3c4596ec41494bec53e9155/raw/07c1508929cdffd16a307253f94babf9c4fc3ffd/sd99-03.json";
  	vegaEmbed('#vis1', spec).catch(console.warn);
    spec = "https://gist.githubusercontent.com/Docinho/ffa499e8e3c4596ec41494bec53e9155/raw/07c1508929cdffd16a307253f94babf9c4fc3ffd/sdPercentual.json";
  	vegaEmbed('#vis2', spec).catch(console.warn);
    spec = "https://gist.githubusercontent.com/Docinho/ffa499e8e3c4596ec41494bec53e9155/raw/07c1508929cdffd16a307253f94babf9c4fc3ffd/volume15-17.json";
  	vegaEmbed('#vis3', spec).catch(console.warn);
</script>

