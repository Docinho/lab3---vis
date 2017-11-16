---
title: "Analisando os dados de volume de água do Epitácio Pessoa."
date: 2017-11-16T13:24:44-03:00
draft: false
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/vega/3.0.7/vega.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vega-lite/2.0.1/vega-lite.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vega-embed/3.0.0-rc7/vega-embed.js"></script>
<script>
    let spec = "https://gist.githubusercontent.com/Docinho/ffa499e8e3c4596ec41494bec53e9155/raw/f4b0fa0f0288d2cc2a3c6f8a244d8d67e093f1d2/sdPercentual.json";
  	vegaEmbed('#vis1', spec).catch(console.warn);
    let spec2 = "https://gist.githubusercontent.com/Docinho/ffa499e8e3c4596ec41494bec53e9155/raw/f4b0fa0f0288d2cc2a3c6f8a244d8d67e093f1d2/volume11-17.json";
  	vegaEmbed('#vis2', spec2).catch(console.warn);
    let spec3 = "https://gist.githubusercontent.com/Docinho/ffa499e8e3c4596ec41494bec53e9155/raw/f4b0fa0f0288d2cc2a3c6f8a244d8d67e093f1d2/volume-geral.json";
  	vegaEmbed('#vis3', spec3).catch(console.warn);
    let spec4 = "https://gist.githubusercontent.com/Docinho/ffa499e8e3c4596ec41494bec53e9155/raw/f4b0fa0f0288d2cc2a3c6f8a244d8d67e093f1d2/sd99-03.json";
  	vegaEmbed('#vis4', spec4).catch(console.warn);
    let spec5 = "https://gist.githubusercontent.com/Docinho/ffa499e8e3c4596ec41494bec53e9155/raw/f4b0fa0f0288d2cc2a3c6f8a244d8d67e093f1d2/qnt-medicoes.json";
  	vegaEmbed('#vis5', spec5).catch(console.warn);
</script>

<p>
    No gráfico de linha, verificamos que a região possui períodos de chuva abundante, nos quais o reservatório enche muito. O pico em maior evidência aconteceu em 2004, um ano de muitas chuvas e que esteve e destaque como um todo, formando, por isso uma coluna no gráfico.
</p>
<p>
    Destaque-se que só é possível notar nesse gráfico períodos de cheias, nos quais a a variância é grande. Depois de 2004, por exemplo, a quantidade de água manteve-se alta, mas esse período não é expressivo nessa análise em questão.
</p>
<div id="vis1" width=300></div>
<p>
    Por outro lado, o gráfico de área que mostra a mediana de 2011 até esse ano, mostra que nesse período ocorreu uma queda continua da quantidade de água e reposições mínimas. Ao contrário do gráfico anterior, fica bem explícito a eminência da falta de água.
</p>
<div id="vis2" width=300></div>
<p>
    Sob outra perspectiva, em ambos a transposição é vista pelo seu padrão não característico do clima local, uma vez que o volume aumenta de uma forma que se diferencia da queda vista até então, como também da caracteríca contínua, percepitível no gráfico de linha da variância.
</p>
<p>
    Se continuar dessa forma, o reservatório terá, uma reserva fixa e a verificação absoluta do impacto das chuvas virá sempre acompanhado de um ruído das águas da transposição.
</p>
<div id="vis3" width=300></div>
<p>
    Durante essa análise, foi percebida uma dificuldade de abordagens e possibilidade de obtenção de respostas a certos questionamentos devido à característica não padronizada nem contínua dos dados. Ou seja, a coleta dos dados não possui um intervalo padrão de coleta podendo ser consideravelmente esparsos para certas abordagens.
</p>
<div id="vis5" width=300></div>
<p>
    Isso foi visto com um gráfico de contagem das coletas de volume. Com isso fizemos uma análise mais específica da variância no período mais contínuo encontrado que é de 1999 a 2003. 
</p>
<div id="vis4" width=300></div>
<p>
    Estudando a variância do volume percentual e em um período mais curto é mais fácil relacionar os resultados desse gráfico com o do volume geral.
    É notório que ocorreram muitas chuvas em 2000 e que, logo, o Epitácio Pessoa quase que dobrou de volume. Além disso, é intuitivo que em anos que chovem menos que o anterior há uma queda no volume. Dessa forma, a análise é feita a partir de dados mais "limpos" facilitando inferências corretas, também pela caracterítica do periodo já mencionada.
</p>
<!--more-->