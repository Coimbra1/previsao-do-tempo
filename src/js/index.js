const chaveDaApi = "277a316b4f3c494499b203726232611";

const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", () => {
    const cidade = document.getElementById("input-busca").value;
    
    const dados = buscarDadosDaCidaded(cidade);
} );

function buscarDadosDaCidaded(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${ciade}&aqi=no&lang=pt`;
 }
