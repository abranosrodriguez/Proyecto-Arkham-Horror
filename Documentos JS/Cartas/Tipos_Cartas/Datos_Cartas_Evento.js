function Datos_Cartas_Evento() {
    var carta_una_prueba = new Cartas_Evento(1, "Evento", "!Una Prueba¡", "Guardian", 0, 2, 0, 0, 0, "Inspiracion", false, "-", 0, true, "Descripcion")
    var carta_alijo_de_emergencia = new Cartas_Evento(0, "Evento", "Alijo de Emergencia", "Neutral", 0, 0, 0, 0, 0, "Suministros", false, "-", 0, false, "Descripcion")
    var carta_esquivar = new Cartas_Evento(1, "Evento", "Esquivar", "Guardian", 1, 0, 0, 1, 0, "Tactica", false, "-", 0, true, "Descripcion")
    var carta_explosion_de_dinamita = new Cartas_Evento(5, "Evento", "Explosion de Dinamita", "Guardian", 1, 0, 0, 0, 0, "Tactica", false, "-", 0, false, "-")
    var carta_siguiendo_una_corazonada = new Cartas_Evento(2, "Evento", "Siguiendo una corazonada", "Buscador", 0, 2, 0, 0, 0, "Inspiracion", false, "-", 0, true, "Descripcion")
    var grupo_evento = [carta_una_prueba, carta_una_prueba, carta_alijo_de_emergencia, carta_alijo_de_emergencia, carta_esquivar, carta_esquivar, carta_explosion_de_dinamita, carta_siguiendo_una_corazonada, carta_siguiendo_una_corazonada]
    return grupo_evento
}