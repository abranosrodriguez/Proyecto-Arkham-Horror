function Datos_Cartas_Debilidad_Basica_Traicion() {
    var carta_debilidad_basica_amnesia = new Cartas_Debilidad_Basica_Traicion("Traicion", "Amnesia", "Debilidad Basica", "Locura", "Descripcion", "-", "-", "-")
    var carta_debilidad_basica_paranoia = new Cartas_Debilidad_Basica_Traicion("Traicion", "Paranoia", "Debilidad Basica", "Locura", "Descripcion", "-", "-", "-")
    var carta_debilidad_basica_embrujado = new Cartas_Debilidad_Basica_Traicion("Traicion", "Embrujado", "Debilidad Basica", "Locura", "Descripcion", "Descripcion Obligado", 2, "Bla Bla")
    var carta_debilidad_basica_psicosis = new Cartas_Debilidad_Basica_Traicion("Traicion", "Psicosis", "Debilidad Basica", "Locura", "Descripcion", "Descripcion Obligado", 2, "-")
    var carta_debilidad_basica_hipocondria = new Cartas_Debilidad_Basica_Traicion("Traicion", "Hipocondria", "Debilidad Basica", "Locura", "Descripcion", "Descripcion Obli", 2, "-")
    var grupo_debilidades_traiciones_basicas = [carta_debilidad_basica_amnesia, carta_debilidad_basica_paranoia, carta_debilidad_basica_embrujado, carta_debilidad_basica_psicosis, carta_debilidad_basica_hipocondria]
    return grupo_debilidades_traiciones_basicas
}