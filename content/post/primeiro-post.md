---
title: "Primeiro Post"
date: 2017-11-14T08:53:23-03:00
draft: false

---

lifuahlsdu lsauf aslkfjhas lfkjhsadfl ksjhf laskjf asldkfjhsalkfj naslnbcx,mv bsfasdflkjfhsaodifap sufhas lkdjfalskdjf aslkdjfhsl dkfjasdlfkasdfiuahpsdoiuahfoisudhf9a8sd7f  tias8df87asd6fa skdjhfgksadbnf,amsndf  sdf sad fs af sad fasdf
<!--more-->

<div id="vis" width=300></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vega/3.0.7/vega.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vega-lite/2.0.1/vega-lite.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vega-embed/3.0.0-rc7/vega-embed.js"></script>
<script>
    const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
    "data": {
        "url":"https://api.insa.gov.br/reservatorios/12172/monitoramento",
        "format": {
            "type": "json",
            "property": "volumes",
            "parse": {"DataInformacao": "utc:'%d/%m/%Y'" }
        }
     },
     "mark":"tick",
     "width": 100,
     "height": 300,
     "transform" :  [
        {"filter": {"timeUnit":"yearmonth", "field": "DataInformacao", "range": [{"year": 1999, "month": "Jan"}, {"year":2003, "month": "Dec"}]}},

         {
        "timeUnit": "month",
        "field": "DataInformacao",
        "as": "mes"},
        {"timeUnit": "year",
        "field": "DataInformacao",
        "as": "ano"}
        ],
     "encoding":{
       "x": {"field": "ano", "type": "temporal"},

       "color": {"field": "mes", "type": "temporal"},

       "y": {
           "aggregate": "variance",
           "field": "VolumePercentual", "type": "quantitative"
         }
     }

     "data": {
     "url":"https://api.insa.gov.br/reservatorios/12172/monitoramento",
     "format": {
       "type": "json",
       "property": "volumes",
       "parse": {"DataInformacao": "utc:'%d/%m/%Y'" }
       }
    },
    "mark":"area",
    "width": 700,
    "height": 300,
    "transform" :  [
    {"filter": {"timeUnit":"yearmonth", "field": "DataInformacao", "range": [{"year":2012}, {"year": 2017}]}}
       ],
    "encoding":{
       "x" : { "field": "DataInformacao", "type": "temporal"},
      "y": {"field": "Volume", "type": "quantitative"}
    }

    
    "data": {
            "url":"https://api.insa.gov.br/reservatorios/12172/monitoramento",
            "format": {
                "type": "json",
                "property": "volumes",
                "parse": {"DataInformacao": "utc:'%d/%m/%Y'" }
            },
          "mark":"line",
         "width": "800",
         "height": "400",
         "transform" :  [{
        "timeUnit": "yearmonth",
        "field": "DataInformacao",
        "as": "media-mes"}]     ,
         "encoding":{
           "x": {"field": "media-mes", "type": "temporal"
           },
           "y": { "aggregate": "variance",
               "field": "VolumePercentual", "type": "quantitative"
           }
         }
       }
</script>