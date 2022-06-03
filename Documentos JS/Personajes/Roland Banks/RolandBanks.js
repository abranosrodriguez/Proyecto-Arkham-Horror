class Roland_Banks extends Personajes {
    sumar_Suministros() {
        this.suministros = this.suministros + 1
        return this.suministros
    }

    restar_Suministros() {
        this.suministros = this.suministros - 1
        return this.suministros
    }

    sumar_Intelecto(intelecto_carta) {
        this.intelecto = this.intelecto + intelecto_carta
        return this.intelecto
    }
    restar_Intelecto_prueba_Anterior(intelecto_carta) {
        this.intelecto = this.intelecto - intelecto_carta
        return this.intelecto
    }

    sumar_Pistas() {
        this.pistas = this.pistas + 1
        return this.pistas
    }

    obligado_Sotano() {
        this.vida = this.vida - 1
        return this.vida
    }

    obligado_Atico() {
        this.cordura = this.cordura - 1
        return this.cordura
    }
}