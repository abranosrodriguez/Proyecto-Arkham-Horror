class Cartas_Apoyo extends Cartas {
    constructor(coste, tipo_carta, nombre, tipo_clase, iconos_habilidad, usos_suministros, accion_combatir, accion_rapida) {
        super(coste, tipo_carta, nombre, tipo_clase, iconos_habilidad)
        this.usos_suministros = usos_suministros;
        this.accion_combatir = accion_combatir;
        this.accion_rapida = accion_rapida;
    }
}