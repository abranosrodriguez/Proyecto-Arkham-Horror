class Cartas_Evento extends Cartas {
    constructor(imagen, coste, tipo_carta, nombre, tipo_clase, icono_voluntad, icono_intelecto, icono_combate, icono_agilidad, icono_comodin, rasgos, espacio, tipo_espacio, coste_espacio, accion_rapida, accion_rapida_descripcion) {
        super(imagen, coste, tipo_carta, nombre, tipo_clase, icono_voluntad, icono_intelecto, icono_combate, icono_agilidad, icono_comodin, rasgos, espacio, tipo_espacio, coste_espacio)
        this.accion_rapida = accion_rapida;
        this.accion_rapida_descripcion = accion_rapida_descripcion;
    }
}