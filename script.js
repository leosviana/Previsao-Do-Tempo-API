document.getElementById('getWeatherBtn').addEventListener('click', function(){
    //Aqui vamos adicionar o código para buscar os dados da API
    const city = document.getElementById('cityInput').value; //Campo com o nome digitado da cidade
    const apiKey = '3a4708615351769522e5147a8ea0c6f2'; //Chave da API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; //URL com os campos acima

    fetch(url) //Requisição API
        .then(response => response.json()) //Converte a resposta da API em formato JSON
        .then(data => { //Exibe os dados da API no console
            if(data.cod === 200){ //Se a requisição for 200(Sucesso)            
                const temperatura = data.main.temp;
                //Dentro da resposta da API(data), há o objeto(main), com a informação da temperatura(temp)
                document.getElementById('weatherResult').innerText = `Temperatura em ${city}: ${temperatura}°C`; //Exibe a temperatura
            }if (data = 404){
                document.getElementById('weatherResult').innerText = 'Cidade não encontrada.'; //Exibe mensagem de erro
            }
            else{
                document.getElementById('weatherResult').innerText = 'Cidade não encontrada.'; //Exibe mensagem de erro
            }
        })
        .catch(error => {
            console.error('Erro ao obter dados da API:', error); //Exibe mensagem de erro
        });
});