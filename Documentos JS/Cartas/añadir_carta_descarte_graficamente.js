function anadir_carta_descarte_graficamente() {
    //Funcion que nos permite añadir la ultima carta graficamente de la zona de descarte
    //Cogemos los datos
    nombre = document.getElementById("Zona_Descarte")
    //Ultimo valor del array
    buscador = -1
    //Hacemos que actualice el src al ultima imagen del array
    nombre.src = (cartas_descartadas.at(buscador).imagen)
    console.log("Link de carta")
    console.log(nombre.src)

}