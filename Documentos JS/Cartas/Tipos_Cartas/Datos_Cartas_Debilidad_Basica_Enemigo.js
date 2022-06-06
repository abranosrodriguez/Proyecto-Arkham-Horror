function Datos_Cartas_Debilidad_Basica_Enemigo() {
    var carta_debilidad_basica_soldado_de_mafia = new Cartas_Debilidad_Basica_Enemigos("Imagenes/Cartas/Debilidades/Enemigos/soldado_de_mafia.png", "Debilidad Basica", "Soldado de la Mafia", "Enemigo", "Humanoide | Criminal", 4, 3, 3, 1, 0, true, true, "Descripcion", false, "-", "-")
    var carta_debilidad_basica_sacolito_del_crespusculo = new Cartas_Debilidad_Basica_Enemigos("Imagenes/Cartas/Debilidades/Enemigos/acolito_crepusulo_plata.png", "Debilidada Basica", "Acolito del Crepusculo de Plata", "Enemigo", "Humanoide | Sectario | Crepusculo de Plata", 2, 3, 3, 1, 0, true, false, "-", true, "Descripcion", "-")
    var carta_debilidad_basica_detective_tenaz = new Cartas_Debilidad_Basica_Enemigos("Imagenes/Cartas/Debilidades/Enemigos/detective_tenaz.png", "Debilidad Basica", "Detective Tenaz", "Enemigo", "Humanoide | Detective", 3, 2, 2, 1, 0, true, false, "-", false, "-", "Descripcion")
    grupo_debilidades_enemigos_basicas = [carta_debilidad_basica_soldado_de_mafia, carta_debilidad_basica_sacolito_del_crespusculo, carta_debilidad_basica_detective_tenaz]
    return grupo_debilidades_enemigos_basicas
}