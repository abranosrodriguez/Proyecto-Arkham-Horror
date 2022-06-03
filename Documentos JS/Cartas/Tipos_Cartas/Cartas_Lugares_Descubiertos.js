class Cartas_Lugares_Revelados extends Cartas_Lugares {
    constructor(conecta, nombre, descripcion, conecta_cuadrado, conecta_triangulo, conecta_mas, conecta_rombo, dificultad, pistas_investigador, obligado, obligado_descripcion, desistir, desistir_descripcion, negociar, negociar_descripcion, victoria, cantidad_victoria) {
        super(conecta, nombre, descripcion, conecta_cuadrado, conecta_triangulo, conecta_mas, conecta_rombo)
        this.dificultad = dificultad;
        this.pistas_investigador = pistas_investigador;
        this.obligado = obligado;
        this.obligado_descripcion = obligado_descripcion;
        this.desistir = desistir;
        this.desistir_descripcion = desistir_descripcion;
        this.negociar = negociar;
        this.negociar_descripcion = negociar_descripcion;
        this.victoria = victoria;
        this.cantidad_victoria = cantidad_victoria;
    }


}