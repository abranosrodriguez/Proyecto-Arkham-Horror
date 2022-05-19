function mazo(grupo_apoyo, grupo_evento, grupo_habilidad, carta_debilidad) {
    //Concateno los 3 arrays diferentes para que sean uno solo
    console.log(carta_debilidad)
    mazo_cartas = grupo_apoyo.concat(grupo_evento).concat(grupo_habilidad)
    console.log(mazo_cartas)

    //Esta función nos permite robar una carta del montón de cartas
    //robar_carta(mazo_cartas)
}
