class Cartas_Evento extends Cartas {
    constructor(coste, tipo_carta, nombre, tipo_clase, iconos_habilidad, accion_rapida, accion) {
        super(coste, tipo_carta, nombre, tipo_clase, iconos_habilidad)
        this.accion_rapida = accion_rapida;
        this.accion = accion;
    }
}