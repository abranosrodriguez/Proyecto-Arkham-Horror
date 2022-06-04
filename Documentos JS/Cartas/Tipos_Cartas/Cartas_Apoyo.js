class Cartas_Apoyo extends Cartas {
    constructor(coste, tipo_carta, nombre, tipo_clase, icono_voluntad, icono_intelecto, icono_combate, icono_agilidad,
        icono_comodin, rasgos, espacio, tipo_espacio, coste_espacio, usos_suministros, cantidad_suministros, usos_municiones,
        cantidad_municiones, accion, cantidad_accion, tipo_accion, accion_descripcion, accion_rapida, cantidad_rapida, accion_rapida_descripcion) {
        super(coste, tipo_carta, nombre, tipo_clase, icono_voluntad, icono_intelecto, icono_combate, icono_agilidad, icono_comodin, rasgos, espacio, tipo_espacio, coste_espacio)
        this.usos_suministros = usos_suministros;
        this.cantidad_suministros = cantidad_suministros;
        this.usos_municiones = usos_municiones;
        this.cantidad_municiones = cantidad_municiones;
        this.accion = accion;
        this.cantidad_accion = cantidad_accion;
        this.tipo_accion = tipo_accion;
        this.accion_descripcion = accion_descripcion
        this.accion_rapida = accion_rapida;
        this.cantidad_rapida = cantidad_rapida;
        this.accion_rapida_descripcion = accion_rapida_descripcion;
    }
}