class Cartas_Mitos_Traiciones extends Cartas_Mitos {
    constructor(nombre, tipo, subtipo, revelacion, revelacion_descripcion, obligado, obligado_descripcion, prueba_cabeza, cantidad_cabeza, prueba_velocidad, cantidad_velocidad, otro) {
        super(nombre, tipo, subtipo)
        this.nombre = nombre;
        this.tipo = tipo;
        this.revelacion = revelacion;
        this.revelacion_descripcion = revelacion_descripcion;
        this.obligado = obligado;
        this.obligado_descripcion = obligado_descripcion;
        this.prueba_cabeza = prueba_cabeza;
        this.cantidad_cabeza = cantidad_cabeza
        this.prueba_velocidad = prueba_velocidad;
        this.cantidad_velocidad = cantidad_velocidad
        this.otro = otro;
    }
}