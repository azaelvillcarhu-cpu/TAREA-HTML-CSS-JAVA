function convertir(){

    let origen =
    parseInt(document.getElementById("origen").value);

    let numero =
    document.getElementById("numero").value;

    let destino =
    parseInt(document.getElementById("destino").value);

    let decimal =
    parseInt(numero, origen);

    let resultado =
    decimal.toString(destino).toUpperCase();

    document.getElementById("resultado").value =
    resultado;
}