class Cartas_Habilidad extends Cartas {
    constructor(imagen, coste, tipo_carta, nombre, tipo_clase, icono_voluntad, icono_intelecto, icono_combate, icono_agilidad, icono_comodin, rasgos, espacio, tipo_espacio, coste_espacio, exito_ataque, mas_dano, exito_investigar, pista_adicional, exito_habilidad, roba_carta) {
        super(imagen, coste, tipo_carta, nombre, tipo_clase, icono_voluntad, icono_intelecto, icono_combate, icono_agilidad, icono_comodin, rasgos, espacio, tipo_espacio, coste_espacio)
        this.exito_ataque = exito_ataque;
        this.mas_dano = mas_dano;
        this.exito_investigar = exito_investigar;
        this.pista_adicional = pista_adicional;
        this.exito_habilidad = exito_habilidad;
        this.roba_carta = roba_carta;
    }
}