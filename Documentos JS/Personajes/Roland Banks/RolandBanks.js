class Roland_Banks extends Personajes {
    sumar_Suministros() {
        this.suministros = this.suministros + 1
        return this.suministros
    }

    restar_Suministros() {
        this.suministros = this.suministros - 1
        return this.suministros
    }
}