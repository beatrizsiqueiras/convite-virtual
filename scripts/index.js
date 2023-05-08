const timeElapsed = Date.now();

let dataInicial = new Date(timeElapsed);
dataInicial = dataInicial.toLocaleDateString();

let dataFinal = new Date(2023, 7, 12);
dataFinal = dataFinal.toLocaleDateString();

var diff = moment(dataFinal, "DD/MM/YYYY").diff(moment(dataInicial, "DD/MM/YYYY"));
var dias = moment.duration(diff).asDays();

document.getElementById('timer').innerText = "Faltam " + dias + " dias...";

var redirecionarParaWhatsApp = () => {
    var mensagem = encodeURIComponent("Olá, Juliana e Anderson! Confirmo a minha presença em seu casamento no dia 12 de agosto às 16h.");
    window.location.assign("https://wa.me/553399206785?text=" + mensagem);
}