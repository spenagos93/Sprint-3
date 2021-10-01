let registros = [];

function agregarRegistro() {
    objeto = {usuario:document.getElementById("nombre_usuario").value,
    anoNacimiento:document.getElementById("anoNacimiento_usuario").value,
    contrasena:document.getElementById("contrasena_usuario").value};
    registros.push(objeto);
    console.log(registros);
    return(registros);
}

function EncontrarUsuarioPorEdad(arreglo) {
    arreglo.reverse();
    let ordenar = arreglo.sort((a, b) => a.anoNacimiento - b.anoNacimiento);
    document.getElementById("arreglo").innerHTML = "El usuario con más edad es: " + ordenar[0];
    return(ordenar[0]);
}

module.exports.registros = registros;
module.exports.EncontrarUsuarioPorEdad = EncontrarUsuarioPorEdad;
module.exports.agregarRegistro = agregarRegistro;
