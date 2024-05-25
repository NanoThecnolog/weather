// JavaScript Document
const address = "https://api.openweathermap.org/data/2.5/weather?q=";
const cidade = "Rio de Janeiro";
const apiKey = "6d055e39ee237af35ca066f35474e9df";
const endPoint = "&units=metric&appid=";

async function fetchDados() {
	const dados = await fetch(address + cidade + endPoint + apiKey);
	const dadosTraduzidos = await dados.json();
	console.log(dadosTraduzidos);
}
