class Cartas_Debilidad_Basica_Enemigos extends Cartas_Debilidad_Basica {
    constructor(tipo, nombre, tipo_debilidad, rasgos, dano_enemigo, vida_enemigo, velocidad_enemigo, dano_jugador, dano_cordura_jugador, presa, accion, accion_descripcion, obligado, obligado_descripcion, otra_caracteristica) {
        super(tipo, nombre, tipo_debilidad, rasgos)
        this.dano_enemigo = dano_enemigo;
        this.vida_enemigo = vida_enemigo;
        this.velocidad_enemigo = velocidad_enemigo;
        this.dano_jugador = dano_jugador;
        this.dano_cordura_jugador = dano_cordura_jugador;
        this.presa = presa;
        this.accion = accion;
        this.accion_descripcion = accion_descripcion;
        this.obligado = obligado;
        this.obligado_descripcion = obligado_descripcion;
        this.otra_caracteristica = otra_caracteristica;
    }
}