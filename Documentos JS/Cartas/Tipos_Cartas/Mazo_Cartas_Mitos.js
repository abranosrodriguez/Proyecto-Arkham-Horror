function datos_mazo_mitos() {
    grupo_cartas_mito_traiciones = Datos_Cartas_Mitos_Traiciones()
    grupo_cartas_mito_enemigos = Datos_Cartas_Mitos_Enemigos()
    mazo_mitos = grupo_cartas_mito_enemigos.concat(grupo_cartas_mito_traiciones)
    // console.log(mazo_mitos)
}