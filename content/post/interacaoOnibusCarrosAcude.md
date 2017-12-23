---
title: "E ai? Vamo lá no acude? Interação"
date: 2017-11-28T10:09:17-03:00
draft: false
---

<div class='container'>
    <div class='row'>
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
onibusCarro = [
  {
    "horario_inicial": "06:00",
    "local": "bobs",
    "qnt_veiculo": 30,
    "tipo": "carros"
  },
  {
    "horario_inicial": "06:00",
    "local": "jackson",
    "qnt_veiculo": 21,
    "tipo": "carros"
  },
  {
    "horario_inicial": "06:15",
    "local": "bobs",
    "qnt_veiculo": 51,
    "tipo": "carros"
  },
  {
    "horario_inicial": "06:15",
    "local": "burrinhos",
    "qnt_veiculo": 514,
    "tipo": "carros"
  },
  {
    "horario_inicial": "06:15",
    "local": "jackson",
    "qnt_veiculo": 30,
    "tipo": "carros"
  },
  {
    "horario_inicial": "06:30",
    "local": "bobs",
    "qnt_veiculo": 113,
    "tipo": "carros"
  },
  {
    "horario_inicial": "06:30",
    "local": "burrinhos",
    "qnt_veiculo": 422,
    "tipo": "carros"
  },
  {
    "horario_inicial": "06:30",
    "local": "jackson",
    "qnt_veiculo": 52,
    "tipo": "carros"
  },
  {
    "horario_inicial": "06:45",
    "local": "bobs",
    "qnt_veiculo": 170,
    "tipo": "carros"
  },
  {
    "horario_inicial": "06:45",
    "local": "burrinhos",
    "qnt_veiculo": 808,
    "tipo": "carros"
  },
  {
    "horario_inicial": "06:45",
    "local": "jackson",
    "qnt_veiculo": 101,
    "tipo": "carros"
  },
  {
    "horario_inicial": "07:00",
    "local": "bobs",
    "qnt_veiculo": 186,
    "tipo": "carros"
  },
  {
    "horario_inicial": "07:00",
    "local": "burrinhos",
    "qnt_veiculo": 945,
    "tipo": "carros"
  },
  {
    "horario_inicial": "07:00",
    "local": "jackson",
    "qnt_veiculo": 115,
    "tipo": "carros"
  },
  {
    "horario_inicial": "07:15",
    "local": "bobs",
    "qnt_veiculo": 156,
    "tipo": "carros"
  },
  {
    "horario_inicial": "07:15",
    "local": "burrinhos",
    "qnt_veiculo": 750,
    "tipo": "carros"
  },
  {
    "horario_inicial": "07:15",
    "local": "jackson",
    "qnt_veiculo": 109,
    "tipo": "carros"
  },
  {
    "horario_inicial": "07:30",
    "local": "bobs",
    "qnt_veiculo": 139,
    "tipo": "carros"
  },
  {
    "horario_inicial": "07:30",
    "local": "burrinhos",
    "qnt_veiculo": 772,
    "tipo": "carros"
  },
  {
    "horario_inicial": "07:30",
    "local": "jackson",
    "qnt_veiculo": 125,
    "tipo": "carros"
  },
  {
    "horario_inicial": "07:45",
    "local": "bobs",
    "qnt_veiculo": 148,
    "tipo": "carros"
  },
  {
    "horario_inicial": "07:45",
    "local": "burrinhos",
    "qnt_veiculo": 971,
    "tipo": "carros"
  },
  {
    "horario_inicial": "07:45",
    "local": "jackson",
    "qnt_veiculo": 138,
    "tipo": "carros"
  },
  {
    "horario_inicial": "08:00",
    "local": "bobs",
    "qnt_veiculo": 165,
    "tipo": "carros"
  },
  {
    "horario_inicial": "08:00",
    "local": "burrinhos",
    "qnt_veiculo": 1098,
    "tipo": "carros"
  },
  {
    "horario_inicial": "08:00",
    "local": "jackson",
    "qnt_veiculo": 123,
    "tipo": "carros"
  },
  {
    "horario_inicial": "08:15",
    "local": "bobs",
    "qnt_veiculo": 166,
    "tipo": "carros"
  },
  {
    "horario_inicial": "08:15",
    "local": "burrinhos",
    "qnt_veiculo": 702,
    "tipo": "carros"
  },
  {
    "horario_inicial": "08:15",
    "local": "jackson",
    "qnt_veiculo": 132,
    "tipo": "carros"
  },
  {
    "horario_inicial": "08:30",
    "local": "bobs",
    "qnt_veiculo": 120,
    "tipo": "carros"
  },
  {
    "horario_inicial": "08:30",
    "local": "burrinhos",
    "qnt_veiculo": 855,
    "tipo": "carros"
  },
  {
    "horario_inicial": "08:30",
    "local": "jackson",
    "qnt_veiculo": 143,
    "tipo": "carros"
  },
  {
    "horario_inicial": "08:45",
    "local": "bobs",
    "qnt_veiculo": 158,
    "tipo": "carros"
  },
  {
    "horario_inicial": "08:45",
    "local": "burrinhos",
    "qnt_veiculo": 810,
    "tipo": "carros"
  },
  {
    "horario_inicial": "08:45",
    "local": "jackson",
    "qnt_veiculo": 135,
    "tipo": "carros"
  },
  {
    "horario_inicial": "09:00",
    "local": "bobs",
    "qnt_veiculo": 130,
    "tipo": "carros"
  },
  {
    "horario_inicial": "09:00",
    "local": "burrinhos",
    "qnt_veiculo": 795,
    "tipo": "carros"
  },
  {
    "horario_inicial": "09:00",
    "local": "jackson",
    "qnt_veiculo": 121,
    "tipo": "carros"
  },
  {
    "horario_inicial": "09:15",
    "local": "bobs",
    "qnt_veiculo": 123,
    "tipo": "carros"
  },
  {
    "horario_inicial": "09:15",
    "local": "burrinhos",
    "qnt_veiculo": 438,
    "tipo": "carros"
  },
  {
    "horario_inicial": "09:15",
    "local": "jackson",
    "qnt_veiculo": 132,
    "tipo": "carros"
  },
  {
    "horario_inicial": "09:30",
    "local": "bobs",
    "qnt_veiculo": 153,
    "tipo": "carros"
  },
  {
    "horario_inicial": "09:30",
    "local": "burrinhos",
    "qnt_veiculo": 609,
    "tipo": "carros"
  },
  {
    "horario_inicial": "09:30",
    "local": "jackson",
    "qnt_veiculo": 123,
    "tipo": "carros"
  },
  {
    "horario_inicial": "09:45",
    "local": "bobs",
    "qnt_veiculo": 124,
    "tipo": "carros"
  },
  {
    "horario_inicial": "09:45",
    "local": "burrinhos",
    "qnt_veiculo": 693,
    "tipo": "carros"
  },
  {
    "horario_inicial": "09:45",
    "local": "jackson",
    "qnt_veiculo": 142,
    "tipo": "carros"
  },
  {
    "horario_inicial": "10:00",
    "local": "bobs",
    "qnt_veiculo": 141,
    "tipo": "carros"
  },
  {
    "horario_inicial": "10:00",
    "local": "burrinhos",
    "qnt_veiculo": 715,
    "tipo": "carros"
  },
  {
    "horario_inicial": "10:00",
    "local": "jackson",
    "qnt_veiculo": 128,
    "tipo": "carros"
  },
  {
    "horario_inicial": "10:15",
    "local": "bobs",
    "qnt_veiculo": 134,
    "tipo": "carros"
  },
  {
    "horario_inicial": "10:15",
    "local": "burrinhos",
    "qnt_veiculo": 647,
    "tipo": "carros"
  },
  {
    "horario_inicial": "10:15",
    "local": "jackson",
    "qnt_veiculo": 113,
    "tipo": "carros"
  },
  {
    "horario_inicial": "10:30",
    "local": "bobs",
    "qnt_veiculo": 97,
    "tipo": "carros"
  },
  {
    "horario_inicial": "10:30",
    "local": "burrinhos",
    "qnt_veiculo": 557,
    "tipo": "carros"
  },
  {
    "horario_inicial": "10:30",
    "local": "jackson",
    "qnt_veiculo": 149,
    "tipo": "carros"
  },
  {
    "horario_inicial": "10:45",
    "local": "bobs",
    "qnt_veiculo": 111,
    "tipo": "carros"
  },
  {
    "horario_inicial": "10:45",
    "local": "burrinhos",
    "qnt_veiculo": 636,
    "tipo": "carros"
  },
  {
    "horario_inicial": "10:45",
    "local": "jackson",
    "qnt_veiculo": 147,
    "tipo": "carros"
  },
  {
    "horario_inicial": "11:00",
    "local": "bobs",
    "qnt_veiculo": 177,
    "tipo": "carros"
  },
  {
    "horario_inicial": "11:00",
    "local": "burrinhos",
    "qnt_veiculo": 693,
    "tipo": "carros"
  },
  {
    "horario_inicial": "11:00",
    "local": "jackson",
    "qnt_veiculo": 130,
    "tipo": "carros"
  },
  {
    "horario_inicial": "11:15",
    "local": "bobs",
    "qnt_veiculo": 162,
    "tipo": "carros"
  },
  {
    "horario_inicial": "11:15",
    "local": "burrinhos",
    "qnt_veiculo": 708,
    "tipo": "carros"
  },
  {
    "horario_inicial": "11:15",
    "local": "jackson",
    "qnt_veiculo": 139,
    "tipo": "carros"
  },
  {
    "horario_inicial": "11:30",
    "local": "bobs",
    "qnt_veiculo": 164,
    "tipo": "carros"
  },
  {
    "horario_inicial": "11:30",
    "local": "burrinhos",
    "qnt_veiculo": 640,
    "tipo": "carros"
  },
  {
    "horario_inicial": "11:30",
    "local": "jackson",
    "qnt_veiculo": 168,
    "tipo": "carros"
  },
  {
    "horario_inicial": "11:45",
    "local": "bobs",
    "qnt_veiculo": 211,
    "tipo": "carros"
  },
  {
    "horario_inicial": "11:45",
    "local": "burrinhos",
    "qnt_veiculo": 772,
    "tipo": "carros"
  },
  {
    "horario_inicial": "11:45",
    "local": "jackson",
    "qnt_veiculo": 150,
    "tipo": "carros"
  },
  {
    "horario_inicial": "12:00",
    "local": "bobs",
    "qnt_veiculo": 199,
    "tipo": "carros"
  },
  {
    "horario_inicial": "12:00",
    "local": "burrinhos",
    "qnt_veiculo": 654,
    "tipo": "carros"
  },
  {
    "horario_inicial": "12:00",
    "local": "jackson",
    "qnt_veiculo": 169,
    "tipo": "carros"
  },
  {
    "horario_inicial": "12:15",
    "local": "bobs",
    "qnt_veiculo": 141,
    "tipo": "carros"
  },
  {
    "horario_inicial": "12:15",
    "local": "burrinhos",
    "qnt_veiculo": 712,
    "tipo": "carros"
  },
  {
    "horario_inicial": "12:15",
    "local": "jackson",
    "qnt_veiculo": 155,
    "tipo": "carros"
  },
  {
    "horario_inicial": "12:30",
    "local": "bobs",
    "qnt_veiculo": 150,
    "tipo": "carros"
  },
  {
    "horario_inicial": "12:30",
    "local": "burrinhos",
    "qnt_veiculo": 841,
    "tipo": "carros"
  },
  {
    "horario_inicial": "12:30",
    "local": "jackson",
    "qnt_veiculo": 116,
    "tipo": "carros"
  },
  {
    "horario_inicial": "12:45",
    "local": "bobs",
    "qnt_veiculo": 192,
    "tipo": "carros"
  },
  {
    "horario_inicial": "12:45",
    "local": "burrinhos",
    "qnt_veiculo": 827,
    "tipo": "carros"
  },
  {
    "horario_inicial": "12:45",
    "local": "jackson",
    "qnt_veiculo": 118,
    "tipo": "carros"
  },
  {
    "horario_inicial": "13:00",
    "local": "bobs",
    "qnt_veiculo": 209,
    "tipo": "carros"
  },
  {
    "horario_inicial": "13:00",
    "local": "burrinhos",
    "qnt_veiculo": 786,
    "tipo": "carros"
  },
  {
    "horario_inicial": "13:00",
    "local": "jackson",
    "qnt_veiculo": 133,
    "tipo": "carros"
  },
  {
    "horario_inicial": "13:15",
    "local": "bobs",
    "qnt_veiculo": 177,
    "tipo": "carros"
  },
  {
    "horario_inicial": "13:15",
    "local": "burrinhos",
    "qnt_veiculo": 732,
    "tipo": "carros"
  },
  {
    "horario_inicial": "13:15",
    "local": "jackson",
    "qnt_veiculo": 140,
    "tipo": "carros"
  },
  {
    "horario_inicial": "13:30",
    "local": "bobs",
    "qnt_veiculo": 184,
    "tipo": "carros"
  },
  {
    "horario_inicial": "13:30",
    "local": "burrinhos",
    "qnt_veiculo": 698,
    "tipo": "carros"
  },
  {
    "horario_inicial": "13:30",
    "local": "jackson",
    "qnt_veiculo": 128,
    "tipo": "carros"
  },
  {
    "horario_inicial": "13:45",
    "local": "bobs",
    "qnt_veiculo": 220,
    "tipo": "carros"
  },
  {
    "horario_inicial": "13:45",
    "local": "burrinhos",
    "qnt_veiculo": 795,
    "tipo": "carros"
  },
  {
    "horario_inicial": "13:45",
    "local": "jackson",
    "qnt_veiculo": 151,
    "tipo": "carros"
  },
  {
    "horario_inicial": "14:00",
    "local": "bobs",
    "qnt_veiculo": 195,
    "tipo": "carros"
  },
  {
    "horario_inicial": "14:00",
    "local": "burrinhos",
    "qnt_veiculo": 900,
    "tipo": "carros"
  },
  {
    "horario_inicial": "14:00",
    "local": "jackson",
    "qnt_veiculo": 162,
    "tipo": "carros"
  },
  {
    "horario_inicial": "14:15",
    "local": "bobs",
    "qnt_veiculo": 224,
    "tipo": "carros"
  },
  {
    "horario_inicial": "14:15",
    "local": "burrinhos",
    "qnt_veiculo": 844,
    "tipo": "carros"
  },
  {
    "horario_inicial": "14:15",
    "local": "jackson",
    "qnt_veiculo": 149,
    "tipo": "carros"
  },
  {
    "horario_inicial": "14:30",
    "local": "bobs",
    "qnt_veiculo": 150,
    "tipo": "carros"
  },
  {
    "horario_inicial": "14:30",
    "local": "burrinhos",
    "qnt_veiculo": 761,
    "tipo": "carros"
  },
  {
    "horario_inicial": "14:30",
    "local": "jackson",
    "qnt_veiculo": 129,
    "tipo": "carros"
  },
  {
    "horario_inicial": "14:45",
    "local": "bobs",
    "qnt_veiculo": 187,
    "tipo": "carros"
  },
  {
    "horario_inicial": "14:45",
    "local": "burrinhos",
    "qnt_veiculo": 751,
    "tipo": "carros"
  },
  {
    "horario_inicial": "14:45",
    "local": "jackson",
    "qnt_veiculo": 139,
    "tipo": "carros"
  },
  {
    "horario_inicial": "15:00",
    "local": "bobs",
    "qnt_veiculo": 172,
    "tipo": "carros"
  },
  {
    "horario_inicial": "15:00",
    "local": "burrinhos",
    "qnt_veiculo": 723,
    "tipo": "carros"
  },
  {
    "horario_inicial": "15:00",
    "local": "jackson",
    "qnt_veiculo": 131,
    "tipo": "carros"
  },
  {
    "horario_inicial": "15:15",
    "local": "bobs",
    "qnt_veiculo": 135,
    "tipo": "carros"
  },
  {
    "horario_inicial": "15:15",
    "local": "burrinhos",
    "qnt_veiculo": 699,
    "tipo": "carros"
  },
  {
    "horario_inicial": "15:15",
    "local": "jackson",
    "qnt_veiculo": 160,
    "tipo": "carros"
  },
  {
    "horario_inicial": "15:30",
    "local": "bobs",
    "qnt_veiculo": 191,
    "tipo": "carros"
  },
  {
    "horario_inicial": "15:30",
    "local": "burrinhos",
    "qnt_veiculo": 744,
    "tipo": "carros"
  },
  {
    "horario_inicial": "15:30",
    "local": "jackson",
    "qnt_veiculo": 121,
    "tipo": "carros"
  },
  {
    "horario_inicial": "15:45",
    "local": "bobs",
    "qnt_veiculo": 159,
    "tipo": "carros"
  },
  {
    "horario_inicial": "15:45",
    "local": "burrinhos",
    "qnt_veiculo": 714,
    "tipo": "carros"
  },
  {
    "horario_inicial": "15:45",
    "local": "jackson",
    "qnt_veiculo": 145,
    "tipo": "carros"
  },
  {
    "horario_inicial": "16:00",
    "local": "bobs",
    "qnt_veiculo": 173,
    "tipo": "carros"
  },
  {
    "horario_inicial": "16:00",
    "local": "burrinhos",
    "qnt_veiculo": 718,
    "tipo": "carros"
  },
  {
    "horario_inicial": "16:00",
    "local": "jackson",
    "qnt_veiculo": 168,
    "tipo": "carros"
  },
  {
    "horario_inicial": "16:15",
    "local": "bobs",
    "qnt_veiculo": 170,
    "tipo": "carros"
  },
  {
    "horario_inicial": "16:15",
    "local": "burrinhos",
    "qnt_veiculo": 821,
    "tipo": "carros"
  },
  {
    "horario_inicial": "16:15",
    "local": "jackson",
    "qnt_veiculo": 160,
    "tipo": "carros"
  },
  {
    "horario_inicial": "16:30",
    "local": "bobs",
    "qnt_veiculo": 168,
    "tipo": "carros"
  },
  {
    "horario_inicial": "16:30",
    "local": "burrinhos",
    "qnt_veiculo": 617,
    "tipo": "carros"
  },
  {
    "horario_inicial": "16:30",
    "local": "jackson",
    "qnt_veiculo": 164,
    "tipo": "carros"
  },
  {
    "horario_inicial": "16:45",
    "local": "bobs",
    "qnt_veiculo": 205,
    "tipo": "carros"
  },
  {
    "horario_inicial": "16:45",
    "local": "burrinhos",
    "qnt_veiculo": 686,
    "tipo": "carros"
  },
  {
    "horario_inicial": "16:45",
    "local": "jackson",
    "qnt_veiculo": 161,
    "tipo": "carros"
  },
  {
    "horario_inicial": "17:00",
    "local": "bobs",
    "qnt_veiculo": 191,
    "tipo": "carros"
  },
  {
    "horario_inicial": "17:00",
    "local": "burrinhos",
    "qnt_veiculo": 749,
    "tipo": "carros"
  },
  {
    "horario_inicial": "17:00",
    "local": "jackson",
    "qnt_veiculo": 143,
    "tipo": "carros"
  },
  {
    "horario_inicial": "17:15",
    "local": "bobs",
    "qnt_veiculo": 181,
    "tipo": "carros"
  },
  {
    "horario_inicial": "17:15",
    "local": "burrinhos",
    "qnt_veiculo": 921,
    "tipo": "carros"
  },
  {
    "horario_inicial": "17:15",
    "local": "jackson",
    "qnt_veiculo": 160,
    "tipo": "carros"
  },
  {
    "horario_inicial": "17:30",
    "local": "bobs",
    "qnt_veiculo": 209,
    "tipo": "carros"
  },
  {
    "horario_inicial": "17:30",
    "local": "burrinhos",
    "qnt_veiculo": 866,
    "tipo": "carros"
  },
  {
    "horario_inicial": "17:30",
    "local": "jackson",
    "qnt_veiculo": 188,
    "tipo": "carros"
  },
  {
    "horario_inicial": "17:45",
    "local": "bobs",
    "qnt_veiculo": 190,
    "tipo": "carros"
  },
  {
    "horario_inicial": "17:45",
    "local": "burrinhos",
    "qnt_veiculo": 792,
    "tipo": "carros"
  },
  {
    "horario_inicial": "17:45",
    "local": "jackson",
    "qnt_veiculo": 121,
    "tipo": "carros"
  },
  {
    "horario_inicial": "18:00",
    "local": "bobs",
    "qnt_veiculo": 215,
    "tipo": "carros"
  },
  {
    "horario_inicial": "18:00",
    "local": "burrinhos",
    "qnt_veiculo": 538,
    "tipo": "carros"
  },
  {
    "horario_inicial": "18:00",
    "local": "jackson",
    "qnt_veiculo": 125,
    "tipo": "carros"
  },
  {
    "horario_inicial": "18:15",
    "local": "bobs",
    "qnt_veiculo": 170,
    "tipo": "carros"
  },
  {
    "horario_inicial": "18:15",
    "local": "burrinhos",
    "qnt_veiculo": 553,
    "tipo": "carros"
  },
  {
    "horario_inicial": "18:15",
    "local": "jackson",
    "qnt_veiculo": 147,
    "tipo": "carros"
  },
  {
    "horario_inicial": "18:30",
    "local": "bobs",
    "qnt_veiculo": 181,
    "tipo": "carros"
  },
  {
    "horario_inicial": "18:30",
    "local": "burrinhos",
    "qnt_veiculo": 540,
    "tipo": "carros"
  },
  {
    "horario_inicial": "18:30",
    "local": "jackson",
    "qnt_veiculo": 120,
    "tipo": "carros"
  },
  {
    "horario_inicial": "18:45",
    "local": "bobs",
    "qnt_veiculo": 161,
    "tipo": "carros"
  },
  {
    "horario_inicial": "18:45",
    "local": "burrinhos",
    "qnt_veiculo": 439,
    "tipo": "carros"
  },
  {
    "horario_inicial": "18:45",
    "local": "jackson",
    "qnt_veiculo": 121,
    "tipo": "carros"
  },
  {
    "horario_inicial": "19:00",
    "local": "bobs",
    "qnt_veiculo": 116,
    "tipo": "carros"
  },
  {
    "horario_inicial": "19:00",
    "local": "burrinhos",
    "qnt_veiculo": 433,
    "tipo": "carros"
  },
  {
    "horario_inicial": "19:00",
    "local": "jackson",
    "qnt_veiculo": 119,
    "tipo": "carros"
  },
  {
    "horario_inicial": "19:15",
    "local": "bobs",
    "qnt_veiculo": 144,
    "tipo": "carros"
  },
  {
    "horario_inicial": "19:15",
    "local": "burrinhos",
    "qnt_veiculo": 318,
    "tipo": "carros"
  },
  {
    "horario_inicial": "19:15",
    "local": "jackson",
    "qnt_veiculo": 101,
    "tipo": "carros"
  },
  {
    "horario_inicial": "19:30",
    "local": "bobs",
    "qnt_veiculo": 154,
    "tipo": "carros"
  },
  {
    "horario_inicial": "19:30",
    "local": "burrinhos",
    "qnt_veiculo": 293,
    "tipo": "carros"
  },
  {
    "horario_inicial": "19:30",
    "local": "jackson",
    "qnt_veiculo": 79,
    "tipo": "carros"
  },
  {
    "horario_inicial": "19:45",
    "local": "bobs",
    "qnt_veiculo": 148,
    "tipo": "carros"
  },
  {
    "horario_inicial": "19:45",
    "local": "burrinhos",
    "qnt_veiculo": 251,
    "tipo": "carros"
  },
  {
    "horario_inicial": "19:45",
    "local": "jackson",
    "qnt_veiculo": 73,
    "tipo": "carros"
  },
  {
    "horario_inicial": "20:00",
    "local": "bobs",
    "qnt_veiculo": 109,
    "tipo": "carros"
  },
  {
    "horario_inicial": "20:00",
    "local": "burrinhos",
    "qnt_veiculo": 296,
    "tipo": "carros"
  },
  {
    "horario_inicial": "20:00",
    "local": "jackson",
    "qnt_veiculo": 105,
    "tipo": "carros"
  },
  {
    "horario_inicial": "20:15",
    "local": "bobs",
    "qnt_veiculo": 107,
    "tipo": "carros"
  },
  {
    "horario_inicial": "20:15",
    "local": "burrinhos",
    "qnt_veiculo": 233,
    "tipo": "carros"
  },
  {
    "horario_inicial": "20:15",
    "local": "jackson",
    "qnt_veiculo": 66,
    "tipo": "carros"
  },
  {
    "horario_inicial": "20:30",
    "local": "bobs",
    "qnt_veiculo": 105,
    "tipo": "carros"
  },
  {
    "horario_inicial": "20:30",
    "local": "burrinhos",
    "qnt_veiculo": 221,
    "tipo": "carros"
  },
  {
    "horario_inicial": "20:30",
    "local": "jackson",
    "qnt_veiculo": 65,
    "tipo": "carros"
  },
  {
    "horario_inicial": "20:45",
    "local": "bobs",
    "qnt_veiculo": 73,
    "tipo": "carros"
  },
  {
    "horario_inicial": "20:45",
    "local": "burrinhos",
    "qnt_veiculo": 279,
    "tipo": "carros"
  },
  {
    "horario_inicial": "20:45",
    "local": "jackson",
    "qnt_veiculo": 88,
    "tipo": "carros"
  },
  {
    "horario_inicial": "06:00",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "06:00",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "06:15",
    "local": "bobs",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "06:15",
    "local": "burrinhos",
    "qnt_veiculo": 14,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "06:15",
    "local": "jackson",
    "qnt_veiculo": 5,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "06:30",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "06:30",
    "local": "burrinhos",
    "qnt_veiculo": 10,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "06:30",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "06:45",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "06:45",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "06:45",
    "local": "jackson",
    "qnt_veiculo": 7,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "07:00",
    "local": "bobs",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "07:00",
    "local": "burrinhos",
    "qnt_veiculo": 15,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "07:00",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "07:15",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "07:15",
    "local": "burrinhos",
    "qnt_veiculo": 10,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "07:15",
    "local": "jackson",
    "qnt_veiculo": 5,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "07:30",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "07:30",
    "local": "burrinhos",
    "qnt_veiculo": 10,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "07:30",
    "local": "jackson",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "07:45",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "07:45",
    "local": "burrinhos",
    "qnt_veiculo": 6,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "07:45",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "08:00",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "08:00",
    "local": "burrinhos",
    "qnt_veiculo": 7,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "08:00",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "08:15",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "08:15",
    "local": "burrinhos",
    "qnt_veiculo": 7,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "08:15",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "08:30",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "08:30",
    "local": "burrinhos",
    "qnt_veiculo": 9,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "08:30",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "08:45",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "08:45",
    "local": "burrinhos",
    "qnt_veiculo": 4,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "08:45",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "09:00",
    "local": "bobs",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "09:00",
    "local": "burrinhos",
    "qnt_veiculo": 7,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "09:00",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "09:15",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "09:15",
    "local": "burrinhos",
    "qnt_veiculo": 6,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "09:15",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "09:30",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "09:30",
    "local": "burrinhos",
    "qnt_veiculo": 5,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "09:30",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "09:45",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "09:45",
    "local": "burrinhos",
    "qnt_veiculo": 25,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "09:45",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "10:00",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "10:00",
    "local": "burrinhos",
    "qnt_veiculo": 7,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "10:00",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "10:15",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "10:15",
    "local": "burrinhos",
    "qnt_veiculo": 8,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "10:15",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "10:30",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "10:30",
    "local": "burrinhos",
    "qnt_veiculo": 4,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "10:30",
    "local": "jackson",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "10:45",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "10:45",
    "local": "burrinhos",
    "qnt_veiculo": 9,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "10:45",
    "local": "jackson",
    "qnt_veiculo": 4,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "11:00",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "11:00",
    "local": "burrinhos",
    "qnt_veiculo": 5,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "11:00",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "11:15",
    "local": "bobs",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "11:15",
    "local": "burrinhos",
    "qnt_veiculo": 15,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "11:15",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "11:30",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "11:30",
    "local": "burrinhos",
    "qnt_veiculo": 13,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "11:30",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "11:45",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "11:45",
    "local": "burrinhos",
    "qnt_veiculo": 16,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "11:45",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "12:00",
    "local": "bobs",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "12:00",
    "local": "burrinhos",
    "qnt_veiculo": 4,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "12:00",
    "local": "jackson",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "12:15",
    "local": "bobs",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "12:15",
    "local": "burrinhos",
    "qnt_veiculo": 3,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "12:15",
    "local": "jackson",
    "qnt_veiculo": 4,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "12:30",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "12:30",
    "local": "burrinhos",
    "qnt_veiculo": 6,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "12:30",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "12:45",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "12:45",
    "local": "burrinhos",
    "qnt_veiculo": 3,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "12:45",
    "local": "jackson",
    "qnt_veiculo": 4,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "13:00",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "13:00",
    "local": "burrinhos",
    "qnt_veiculo": 3,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "13:00",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "13:15",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "13:15",
    "local": "burrinhos",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "13:15",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "13:30",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "13:30",
    "local": "burrinhos",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "13:30",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "13:45",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "13:45",
    "local": "burrinhos",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "13:45",
    "local": "jackson",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "14:00",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "14:00",
    "local": "burrinhos",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "14:00",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "14:15",
    "local": "bobs",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "14:15",
    "local": "burrinhos",
    "qnt_veiculo": 3,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "14:15",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "14:30",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "14:30",
    "local": "burrinhos",
    "qnt_veiculo": 4,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "14:30",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "14:45",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "14:45",
    "local": "burrinhos",
    "qnt_veiculo": 4,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "14:45",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "15:00",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "15:00",
    "local": "burrinhos",
    "qnt_veiculo": 4,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "15:00",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "15:15",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "15:15",
    "local": "burrinhos",
    "qnt_veiculo": 9,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "15:15",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "15:30",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "15:30",
    "local": "burrinhos",
    "qnt_veiculo": 5,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "15:30",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "15:45",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "15:45",
    "local": "burrinhos",
    "qnt_veiculo": 7,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "15:45",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "16:00",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "16:00",
    "local": "burrinhos",
    "qnt_veiculo": 6,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "16:00",
    "local": "jackson",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "16:15",
    "local": "bobs",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "16:15",
    "local": "burrinhos",
    "qnt_veiculo": 5,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "16:15",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "16:30",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "16:30",
    "local": "burrinhos",
    "qnt_veiculo": 5,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "16:30",
    "local": "jackson",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "16:45",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "16:45",
    "local": "burrinhos",
    "qnt_veiculo": 5,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "16:45",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "17:00",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "17:00",
    "local": "burrinhos",
    "qnt_veiculo": 10,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "17:00",
    "local": "jackson",
    "qnt_veiculo": 4,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "17:15",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "17:15",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "17:15",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "17:30",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "17:30",
    "local": "burrinhos",
    "qnt_veiculo": 7,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "17:30",
    "local": "jackson",
    "qnt_veiculo": 4,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "17:45",
    "local": "bobs",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "17:45",
    "local": "burrinhos",
    "qnt_veiculo": 29,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "17:45",
    "local": "jackson",
    "qnt_veiculo": 6,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "18:00",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "18:00",
    "local": "burrinhos",
    "qnt_veiculo": 20,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "18:00",
    "local": "jackson",
    "qnt_veiculo": 7,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "18:15",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "18:15",
    "local": "burrinhos",
    "qnt_veiculo": 24,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "18:15",
    "local": "jackson",
    "qnt_veiculo": 11,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "18:30",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "18:30",
    "local": "burrinhos",
    "qnt_veiculo": 10,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "18:30",
    "local": "jackson",
    "qnt_veiculo": 6,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "18:45",
    "local": "bobs",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "18:45",
    "local": "burrinhos",
    "qnt_veiculo": 5,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "18:45",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "19:00",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "19:00",
    "local": "burrinhos",
    "qnt_veiculo": 7,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "19:00",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "19:15",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "19:15",
    "local": "burrinhos",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "19:15",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "19:30",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "19:30",
    "local": "burrinhos",
    "qnt_veiculo": 4,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "19:30",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "19:45",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "19:45",
    "local": "burrinhos",
    "qnt_veiculo": 2,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "19:45",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "20:00",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "20:00",
    "local": "burrinhos",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "20:00",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "20:15",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "20:15",
    "local": "burrinhos",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "20:15",
    "local": "jackson",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "20:30",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "20:30",
    "local": "burrinhos",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "20:30",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "20:45",
    "local": "bobs",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "20:45",
    "local": "burrinhos",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "20:45",
    "local": "jackson",
    "qnt_veiculo": 0,
    "tipo": "onibus"
  },
  {
    "horario_inicial": "06:00",
    "local": "bobs",
    "qnt_veiculo": 1,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "06:00",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "06:15",
    "local": "bobs",
    "qnt_veiculo": 1,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "06:15",
    "local": "burrinhos",
    "qnt_veiculo": 8,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "06:15",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "06:30",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "06:30",
    "local": "burrinhos",
    "qnt_veiculo": 7,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "06:30",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "06:45",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "06:45",
    "local": "burrinhos",
    "qnt_veiculo": 12,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "06:45",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "07:00",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "07:00",
    "local": "burrinhos",
    "qnt_veiculo": 14,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "07:00",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "07:15",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "07:15",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "07:15",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "07:30",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "07:30",
    "local": "burrinhos",
    "qnt_veiculo": 12,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "07:30",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "07:45",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "07:45",
    "local": "burrinhos",
    "qnt_veiculo": 15,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "07:45",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "08:00",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "08:00",
    "local": "burrinhos",
    "qnt_veiculo": 16,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "08:00",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "08:15",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "08:15",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "08:15",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "08:30",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "08:30",
    "local": "burrinhos",
    "qnt_veiculo": 13,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "08:30",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "08:45",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "08:45",
    "local": "burrinhos",
    "qnt_veiculo": 12,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "08:45",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "09:00",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "09:00",
    "local": "burrinhos",
    "qnt_veiculo": 12,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "09:00",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "09:15",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "09:15",
    "local": "burrinhos",
    "qnt_veiculo": 7,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "09:15",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "09:30",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "09:30",
    "local": "burrinhos",
    "qnt_veiculo": 9,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "09:30",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "09:45",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "09:45",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "09:45",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "10:00",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "10:00",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "10:00",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "10:15",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "10:15",
    "local": "burrinhos",
    "qnt_veiculo": 10,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "10:15",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "10:30",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "10:30",
    "local": "burrinhos",
    "qnt_veiculo": 9,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "10:30",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "10:45",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "10:45",
    "local": "burrinhos",
    "qnt_veiculo": 10,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "10:45",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "11:00",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "11:00",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "11:00",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "11:15",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "11:15",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "11:15",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "11:30",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "11:30",
    "local": "burrinhos",
    "qnt_veiculo": 10,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "11:30",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "11:45",
    "local": "bobs",
    "qnt_veiculo": 4,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "11:45",
    "local": "burrinhos",
    "qnt_veiculo": 12,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "11:45",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "12:00",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "12:00",
    "local": "burrinhos",
    "qnt_veiculo": 10,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "12:00",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "12:15",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "12:15",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "12:15",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "12:30",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "12:30",
    "local": "burrinhos",
    "qnt_veiculo": 13,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "12:30",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "12:45",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "12:45",
    "local": "burrinhos",
    "qnt_veiculo": 12,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "12:45",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "13:00",
    "local": "bobs",
    "qnt_veiculo": 4,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "13:00",
    "local": "burrinhos",
    "qnt_veiculo": 12,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "13:00",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "13:15",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "13:15",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "13:15",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "13:30",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "13:30",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "13:30",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "13:45",
    "local": "bobs",
    "qnt_veiculo": 4,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "13:45",
    "local": "burrinhos",
    "qnt_veiculo": 12,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "13:45",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "14:00",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "14:00",
    "local": "burrinhos",
    "qnt_veiculo": 14,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "14:00",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "14:15",
    "local": "bobs",
    "qnt_veiculo": 4,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "14:15",
    "local": "burrinhos",
    "qnt_veiculo": 13,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "14:15",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "14:30",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "14:30",
    "local": "burrinhos",
    "qnt_veiculo": 12,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "14:30",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "14:45",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "14:45",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "14:45",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "15:00",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "15:00",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "15:00",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "15:15",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "15:15",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "15:15",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "15:30",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "15:30",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "15:30",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "15:45",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "15:45",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "15:45",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "16:00",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "16:00",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "16:00",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "16:15",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "16:15",
    "local": "burrinhos",
    "qnt_veiculo": 12,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "16:15",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "16:30",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "16:30",
    "local": "burrinhos",
    "qnt_veiculo": 9,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "16:30",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "16:45",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "16:45",
    "local": "burrinhos",
    "qnt_veiculo": 10,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "16:45",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "17:00",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "17:00",
    "local": "burrinhos",
    "qnt_veiculo": 11,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "17:00",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "17:15",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "17:15",
    "local": "burrinhos",
    "qnt_veiculo": 14,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "17:15",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "17:30",
    "local": "bobs",
    "qnt_veiculo": 4,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "17:30",
    "local": "burrinhos",
    "qnt_veiculo": 13,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "17:30",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "17:45",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "17:45",
    "local": "burrinhos",
    "qnt_veiculo": 12,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "17:45",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "18:00",
    "local": "bobs",
    "qnt_veiculo": 4,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "18:00",
    "local": "burrinhos",
    "qnt_veiculo": 8,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "18:00",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "18:15",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "18:15",
    "local": "burrinhos",
    "qnt_veiculo": 9,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "18:15",
    "local": "jackson",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "18:30",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "18:30",
    "local": "burrinhos",
    "qnt_veiculo": 8,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "18:30",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "18:45",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "18:45",
    "local": "burrinhos",
    "qnt_veiculo": 7,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "18:45",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "19:00",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "19:00",
    "local": "burrinhos",
    "qnt_veiculo": 7,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "19:00",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "19:15",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "19:15",
    "local": "burrinhos",
    "qnt_veiculo": 5,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "19:15",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "19:30",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "19:30",
    "local": "burrinhos",
    "qnt_veiculo": 5,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "19:30",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "19:45",
    "local": "bobs",
    "qnt_veiculo": 3,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "19:45",
    "local": "burrinhos",
    "qnt_veiculo": 4,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "19:45",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "20:00",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "20:00",
    "local": "burrinhos",
    "qnt_veiculo": 5,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "20:00",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "20:15",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "20:15",
    "local": "burrinhos",
    "qnt_veiculo": 4,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "20:15",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "20:30",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "20:30",
    "local": "burrinhos",
    "qnt_veiculo": 4,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "20:30",
    "local": "jackson",
    "qnt_veiculo": 1,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "20:45",
    "local": "bobs",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "20:45",
    "local": "burrinhos",
    "qnt_veiculo": 5,
    "tipo": "ideal"
  },
  {
    "horario_inicial": "20:45",
    "local": "jackson",
    "qnt_veiculo": 2,
    "tipo": "ideal"
  }
]

data = [
  {
    "id": "carro",
    "value": 56265
  },
  {
    "id": "bus",
    "value": 596
  }
]

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
        d3.json(data, function(data){
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

    d3.json(onibusCarro, function(data){
  
    x2.domain([d3.min(data, d =>  d.horario_inicial), d3.max(data, d => d.horario_inicial)]);
    y2.domain([0, d3.max(data, function(d) { return d.qnt_veiculo; })]);

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
        .attr('cx', (d) => x2(d.horario_inicial))
        .attr('cy', (d) => y2(d.local == "burrinhos" ? d.qnt_veiculo : 10000000))
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

    d3.json(onibusCarro, function(data){
    x2.domain([d3.min(data, d =>  d.horario_inicial), d3.max(data, d => d.horario_inicial)]);
    y2.domain([0, d3.max(data, function(d) { return d.qnt_veiculo; })]);

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
        .attr('cx', (d) => x2(d.horario_inicial))
        .attr('cy', (d) => y2(d.local == "bobs" ? d.qnt_veiculo : 10000000))
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
            

    d3.json(onibusCarro, function(data){

    x2.domain([d3.min(data, d =>  d.horario_inicial), d3.max(data, d => d.horario_inicial)]);
    y2.domain([0, d3.max(data, function(d) { return d.qnt_veiculo; })]);

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
        .attr('cx', (d) => x2(d.horario_inicial))
        .attr('cy', (d) => y2(d.local == "jackson" ? d.qnt_veiculo : 10000000))
        .attr('r', (d) => d.tipo == "ideal" ? 3 : 6)
        .style('fill', (d) => d.tipo == "onibus" ? "#496a5b" : (d.tipo == "carros" ? "#760d1f" : "#ff8d40"));

        
        });
   
}
update();
</script>

