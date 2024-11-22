

// apiKEY
const apiKey = '446a378f6e64132a15823a1b4201a2d7';


// Capturamos los elementos del DOM
const inputCiudad = document.getElementById('city'); // Asegúrate de tener un input con este ID
const botonBuscar = document.getElementById('get'); // Asegúrate de tener un botón con este ID
const resultados = document.getElementById('results'); // Contenedor para mostrar los resultados


//Evento al hacer click
botonBuscar.addEventListener('click', () => {
    const city = inputCiudad.value.trim(); // Obtiene la ciudad ingresada
  
    if (!city) {
      resultados.innerText = "Por favor, ingresa una ciudad.";
      return;
    }



// URL de la API de OpenWeatherMap
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;


//Solicitud a la Api
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error("Ciudad no encontrada");
            return response.json();
        })
       
        .then(data => {
            // Extraemos los datos del clima
            const temperature = data.main.temp;
            const weather = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            
             // Mostramos la información en la página
            document.getElementById('temperature').innerText = `Temperatura: ${temperature} °C`;
            document.getElementById('weather').innerText = `Estado: ${weather}`;
            document.getElementById('humidity').innerText = `Humedad : ${humidity}%`;
            document.getElementById('wind-speed').innerText = `Velocidad del Viento: ${windSpeed} m/s`;
        })
        .catch(error => {
            resultados.innerText = `Error al obtener los datos del clima: ${error.message}`;
        });
});




