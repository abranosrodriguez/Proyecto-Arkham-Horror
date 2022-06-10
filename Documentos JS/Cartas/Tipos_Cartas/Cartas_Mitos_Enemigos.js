class Cartas_Mitos_Enemigos extends Cartas_Mitos {
    constructor(nombre, tipo, subtipo, fuerza, vida, velocidad, dano_jugador, cordura_jugador, cazador, cazador_descripcion,
        aparicion, aparicion_descripcion, presa, presa_descripcion, represalia, represalia_descripcion, victoria, cantidad_victoria) {
        super(nombre, tipo, subtipo)
        this.fuerza = fuerza;
        this.vida = vida;
        this.velocidad = velocidad;
        this.dano_jugador = dano_jugador;
        this.cordura_jugador = cordura_jugador;
        this.cazador = cazador;
        this.cazador_descripcion = cazador_descripcion;
        this.aparicion = aparicion;
        this.aparicion_descripcion = aparicion_descripcion;
        this.presa = presa;
        this.presa_descripcion = presa_descripcion;
        this.represalia = represalia;
        this.represalia_descripcion = represalia_descripcion;
        this.victoria = victoria;
        this.cantidad_victoria = cantidad_victoria
    }
}