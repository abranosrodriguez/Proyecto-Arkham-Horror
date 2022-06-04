function Datos_Cartas_Habilidad() {
    var carta_agallas = new Cartas_Habilidad(0, "Habilidad", "Agallas", "Neutral", 2, 0, 0, 0, 0, "Innato", false, "-", 0, false, 0, false, 0, true, 1)
    var carta_coraje_inesperado = new Cartas_Habilidad(0, "Habilidad", "Coraje Inesperado", "Neutral", 0, 0, 0, 0, 2, "Innato", false, "-", 0, false, 0, false, 0, false, 0)
    var carta_deduccion = new Cartas_Habilidad(0, "Habilidad", "Deduccion", "Buscador", 0, 1, 0, 0, 0, "Experimentado", false, "-", 0, false, 0, true, 1, false, 0)
    var carta_dominar = new Cartas_Habilidad(0, "Habilidad", "Dominar", "Neutral", 0, 0, 2, 0, 0, "Experimentado", false, "-", 0, false, 0, false, 0, true, 1)
    var carta_golpe_brutal = new Cartas_Habilidad(0, "Habilidad", "Golpe Brutal", "Guardian", 0, 0, 1, 0, 0, "Experimentado", false, "-", 0, true, 1, false, 0, false, 0)
    var grupo_habilidad = [carta_agallas, carta_agallas, carta_coraje_inesperado, carta_coraje_inesperado, carta_deduccion, carta_deduccion, carta_dominar, carta_dominar, carta_golpe_brutal, carta_golpe_brutal]
    return grupo_habilidad

}