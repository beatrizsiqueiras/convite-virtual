const timeElapsed = Date.now();

let dataInicial = new Date(timeElapsed);
dataInicial = dataInicial.toLocaleDateString();

let dataFinal = new Date(2022, 9, 22);
dataFinal = dataFinal.toLocaleDateString();

var diff = moment(dataFinal,"DD/MM/YYYY").diff(moment(dataInicial,"DD/MM/YYYY"));
var dias = moment.duration(diff).asDays();

document.getElementById('timer').innerText = "Faltam " + dias + " dias...";
