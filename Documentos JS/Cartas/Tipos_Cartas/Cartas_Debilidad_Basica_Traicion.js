class Cartas_Debilidad_Basica_Traicion extends Cartas_Debilidad_Basica {
    constructor(imagen, tipo, nombre, tipo_debilidad, rasgos, revelacion, obligado, accion_descarte, otra_caracteristica) {
        super(imagen, tipo, nombre, tipo_debilidad, rasgos)
        this.revelacion = revelacion;
        this.obligado = obligado;
        this.accion_descarte = accion_descarte;
        this.otra_caracteristica = otra_caracteristica;
    }
}