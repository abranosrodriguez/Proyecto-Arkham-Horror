function Datos_Cartas_Apoyo() {
    var carta_auto_45 = new Cartas_Apoyo(4, "Apoyo", "Automatica del .45", "Guardian", 0, 0, 0, 1, 0, "Objecto | Arma | Arma de fuego", true, "Mano", 1, false, 0, true, 4, true, 1, "Combatir", "Descripcion", false, 0, "-")
    var carta_cuchillo = new Cartas_Apoyo(1, "Apoyo", "Cuchillo", "Neutral", 0, 0, 1, 0, 0, "Objecto | Arma | Cuerpo a Cuerpo", true, "Mano", 1, false, 0, false, 0, true, 2, "Combatir", "Descripcion", false, 0, "-")
    var carta_linterna = new Cartas_Apoyo(2, "Apoyo", "Linterna", "Neutral", 0, 1, 0, 0, 0, "Objecto | Herramienta", true, "Mano", 1, true, 3, false, 0, true, 1, "Investigar", "Descripcion", false, 0, "-")
    var carta_machete = new Cartas_Apoyo(3, "Apoyo", "Machete", "Guardian", 0, 0, 1, 0, 0, "Objecto | Arma | Cuerpo a Cuerpo", true, "Mano", 1, false, 0, false, 0, true, 1, "Combatir", "Descripcion", false, 0, "-")
    var carta_perro_guardian = new Cartas_Apoyo(3, "Apoyo", "Perro Guardian", "Guardian", 0, 0, 1, 0, 0, "Aliado | Criatura", true, "Aliado", 1, false, 0, false, 0, false, 0, "-", "-", true, 1, "Descripcion")
    var carta_entrenamiento_fisico = new Cartas_Apoyo(2, "Apoyo", "Entrenamiento Fisico", "Guardian", 1, 0, 1, 0, 0, "Talento", false, 0, "-", false, 0, false, 0, false, 0, "-", "-", true, 2, "Descripcion")
    var grupo_apoyo = [carta_auto_45, carta_cuchillo, carta_cuchillo, carta_linterna, carta_linterna, carta_machete, carta_machete, carta_perro_guardian, carta_perro_guardian, carta_entrenamiento_fisico, carta_entrenamiento_fisico]
    return grupo_apoyo
}