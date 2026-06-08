function verificar(){

    let nombre =
    document.getElementById("nombre").value;

    let correo =
    document.getElementById("correo").value;

    let telefono =
    document.getElementById("telefono").value;

    if(nombre === "" || correo === "" || telefono === ""){
        alert("Complete todos los campos");
    }
    else{
        alert("Formulario correcto");
    }
}