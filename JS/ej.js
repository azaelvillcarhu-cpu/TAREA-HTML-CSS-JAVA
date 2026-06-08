async function obtenerClima(){

    let ciudad =
    document.getElementById("ciudad").value;

    let apiKey =
    "f8a19c13c40bf5ec8260f852e21b01c8";

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try{

        let respuesta =
        await fetch(url);

        if(!respuesta.ok){
            throw new Error(
                "Ciudad no encontrada"
            );
        }

        let datos =
        await respuesta.json();

        document.getElementById(
            "resultado"
        ).innerHTML = `
            <h3>${ciudad}</h3>
            <p>🌡 Temperatura:
            ${datos.main.temp} °C</p>

            <p>☁ Estado:
            ${datos.weather[0].description}</p>

            <p>💧 Humedad:
            ${datos.main.humidity}%</p>
        `;

    }
    catch(error){

        document.getElementById(
            "resultado"
        ).innerHTML =
        "Error: " + error.message;

    }
}