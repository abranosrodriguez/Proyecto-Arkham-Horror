function Datos_Cartas_Mitos_Traiciones() {  // Datos de las cartas de mitos de traiciones
    var carta_mito_resto_en_descomposicion = new Cartas_Mitos_Traiciones("Restos en Descomposicion", "Traicion", "Terror", true, "Des Re", false, "-", true, 3, false, 0, false)
    var carta_mito_manos_aferradoras = new Cartas_Mitos_Traiciones("Manos Aferradoras", "Traicion", "Riesgo", true, "Descr reve", false, "-", false, 0, true, 3, false)
    var carta_mito_voces_disonantes = new Cartas_Mitos_Traiciones("Voces Disonantes", "Traicion", "Terror", true, "Des reve", true, "Descri ob", false, 0, false, 0, true)
    var carta_mito_antiguos_males = new Cartas_Mitos_Traiciones("Antiguos Males", "Traicion", "Augurio", true, "Des reve", false, "-", false, 0, false, 0, false)
    var carta_mito_paralizado_por_el_miedo = new Cartas_Mitos_Traiciones("Paralizado por el miedo", "Traicion", "Terror", true, "Des re", true, "Desc obl", true, 3, false, 0, true)
    var carta_mito_envuelto_en_niebla = new Cartas_Mitos_Traiciones("Envuelto en niebla", "Traicion", "Riesgo", true, "Des re", true, "Des ob", false, 0, false, 0, true)
    var carta_mito_frio_de_la_cripta = new Cartas_Mitos_Traiciones("Frio de la cripta", "Traicion", "Riesgo", true, "Descr re", false, "-", true, 4, false, 0, false)

    grupo_cartas_mito_traiciones = [carta_mito_resto_en_descomposicion, carta_mito_resto_en_descomposicion, carta_mito_resto_en_descomposicion, carta_mito_manos_aferradoras,
        carta_mito_manos_aferradoras, carta_mito_manos_aferradoras, carta_mito_voces_disonantes, carta_mito_voces_disonantes, carta_mito_antiguos_males, carta_mito_antiguos_males, carta_mito_antiguos_males,
        carta_mito_paralizado_por_el_miedo, carta_mito_paralizado_por_el_miedo, carta_mito_envuelto_en_niebla, carta_mito_envuelto_en_niebla, carta_mito_frio_de_la_cripta, carta_mito_frio_de_la_cripta]
    return grupo_cartas_mito_traiciones
}