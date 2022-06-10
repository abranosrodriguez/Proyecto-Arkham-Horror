class Roland_Banks extends Personajes {
    sumar_Suministros() {   // Sumamos los suministros
        this.suministros = this.suministros + 1
        return this.suministros
    }

    restar_Suministros(coste_carta) {   // Restamos los suministros
        this.suministros = this.suministros - coste_carta
        return this.suministros
    }

    sumar_Intelecto(intelecto_carta) {  // Sumamos intelecto
        this.intelecto = this.intelecto + intelecto_carta
        return this.intelecto
    }
    restar_Intelecto_prueba_Anterior(intelecto_carta) { // Restamos el intelecto sumado anterior para que no el personaje con la estadistica subida
        this.intelecto = this.intelecto - intelecto_carta
        return this.intelecto
    }

    sumar_Pistas() {    // Sumamos las pistas 
        this.pistas = this.pistas + 1
        return this.pistas
    }

    obligado_Sotano() { //Si entra en el sotano recibe punto de daño
        this.vida = this.vida - 1
        return this.vida
    }

    obligado_Atico() {  // Si entra en el atico recibe punto de horror
        this.cordura = this.cordura - 1
        return this.cordura
    }

    dano_Horror(cantidad) { // Funcion para la prueba de descarta una carta o recibir puntos de dano
        this.cordura = this.cordura - cantidad
        return this.cordura
    }

}