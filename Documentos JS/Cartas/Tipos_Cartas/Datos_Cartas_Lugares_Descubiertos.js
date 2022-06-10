function Datos_Cartas_Lugares_Descubiertos() {  //Datos de las cartas de lugares descubiertos
    var carta_lugar_revelado_estudio = new Cartas_Lugares_Revelados("Circulo Amarillo", "Estudio", "Descripcion", false, false, false, false, 2, 2, false, "-", false, "-", false, "-", false, 0)
    var carta_lugar_revelado_pasillo = new Cartas_Lugares_Revelados("Cuadrado Rojo", "Pasillo", "Descripcion", false, true, true, true, 1, 0, false, "-", false, "-", false, "-", false, 0)
    var carta_lugar_revelado_atico = new Cartas_Lugares_Revelados("Triangulo", "Atico", "Descripcion", true, false, false, false, 1, 2, true, "Descripcion Ob", false, "-", false, "-", true, 1)
    var carta_lugar_revelado_sotano = new Cartas_Lugares_Revelados("Mas", "Sotano", "Descripcion", true, false, false, false, 4, 2, true, "Descripcion obli", false, "-", false, "-", true, 1)
    var carta_lugar_revelado_salita = new Cartas_Lugares_Revelados("Rombo", "Salita", "Descripcion", true, false, false, false, 2, 0, false, "-", true, "Descri desistir", true, "Descri negociar", false, 0)
    grupo_lugares_revelados = [carta_lugar_revelado_estudio, carta_lugar_revelado_pasillo, carta_lugar_revelado_atico, carta_lugar_revelado_sotano, carta_lugar_revelado_salita]
    // console.log(grupo_lugares_revelados)
    return grupo_lugares_revelados
}