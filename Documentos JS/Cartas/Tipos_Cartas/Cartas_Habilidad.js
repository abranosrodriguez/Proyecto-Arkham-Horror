class Cartas_Habilidad extends Cartas {
    constructor(coste, tipo_carta, nombre, tipo_clase, iconos_habilidad, maximo_prueba, exito) {
        super(coste, tipo_carta, nombre, tipo_clase, iconos_habilidad)
        this.maximo_prueba = maximo_prueba;
        this.exito = exito;
    }
}