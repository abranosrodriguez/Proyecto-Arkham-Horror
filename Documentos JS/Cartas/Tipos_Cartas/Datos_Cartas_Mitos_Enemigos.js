function Datos_Cartas_Mitos_Enemigos() {    // Datos de las cartas de mitos de enemigos
    var carta_mito_avalancha_ratas = new Cartas_Mitos_Enemigos("Avalancha de Ratas", "Enemigo", "Criatura", 1, 1, 3, 1, 0, true, "Caz", false, "-", false, "-", false, "-", false, 0)
    var carta_mito_secuaz_gul = new Cartas_Mitos_Enemigos("Secuaz Gul", "Enemigo", "Humanoide | Monstruo | Gul", 2, 2, 2, 1, 1, false, "-", false, "-", false, "-", false, "-", false, 0)
    var carta_mito_gul_voraz = new Cartas_Mitos_Enemigos("Gul Voraz", "Enemigo", "Humanoide | Monstruo | Gul", 3, 3, 3, 1, 1, false, "-", false, "-", true, "Presa - salud", false, "-", false, 0)
    var carta_mito_devorador_carne = new Cartas_Mitos_Enemigos("Devorador de carne", "Enemigo", "Humanoide | Monstruo | Gul", 4, 4, 1, 1, 2, false, "-", true, "Atico", false, "-", false, "-", true, 1)
    var carta_mito_gul_gelido = new Cartas_Mitos_Enemigos("Gul gelido", "Enemigo", "Humanoide | Monstruo | Gul", 3, 4, 4, 2, 1, false, "-", true, "Sotano", false, "-", false, "-", true, 1)
    var carta_mito_sacerdote_gul = new Cartas_Mitos_Enemigos("Sacerdote gul", "Enemigo", "Humanoide | Monstruo | Gul | Elite", 4, 5, 4, 2, 2, true, "Caz", false, "-", true, "Presa fuerza", true, "Repre", true, 2)

    grupo_cartas_mito_enemigos = [carta_mito_avalancha_ratas, carta_mito_avalancha_ratas, carta_mito_avalancha_ratas, carta_mito_secuaz_gul, carta_mito_secuaz_gul, carta_mito_secuaz_gul, carta_mito_gul_voraz, carta_mito_devorador_carne, carta_mito_gul_gelido]
    return grupo_cartas_mito_enemigos
}