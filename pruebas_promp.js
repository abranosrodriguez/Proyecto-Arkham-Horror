function pruebas_prompt() {
    acciones_jugador = 3
    robar_cinco_cartas = true
    ubicacion_estudio = true
    ubicacion_pasillo = false
    ubicacion_atico = false
    ubicacion_sotano = false

    ficha_mitos = 0

    estudio = grupo_lugares_revelados[0]
    pasillo = grupo_lugares_revelados[1]
    atico = grupo_lugares_revelados[2]
    sotano = grupo_lugares_revelados[3]

    while (incio != 6) {
        if (acciones_jugador == 0) {
            alert("Fase de Enemigos \n Los enemigos con Cazador se mueven \n Cada Enemigo enfrentado ataca")
            alert("Fase de Mantenimiento")
            alert("Fase de Mitos")
            acciones_jugador = 3
            ficha_mitos++
        } else {
            if (robar_cinco_cartas == true) {
                robar_cinco_cartas_turno_inicial()
                robar_cinco_cartas = false

            } else if (robar_cinco_cartas == false) {
                if (ubicacion_estudio != false) {
                    var incio = prompt(`Turnos Restantes: ${acciones_jugador} \nLocalización: Estudio \nEstas en tu turno, que quieres hacer? \n1 - Robar Carta \n2 - Suministro \n3 - Comprobar Cartas de Mano \n4 - Investigar \n6 - Salir`)

                    if (incio == 1) {
                        robar_carta()
                        acciones_jugador--
                    } else if (incio == 2) {
                        var suministros = prompt("1 - Para robar suministros \n2 - Comprobar Suministros")
                        if (suministros == 1) {
                            RolandBanks.sumar_Suministros()
                            acciones_jugador--
                        } else if (suministros == 2) {
                            alert(RolandBanks.suministros)
                        }
                    } else if (incio == 3) {
                        for (i = 0; i < cartas_mano.length; i++) {
                            alert(JSON.stringify(cartas_mano[i], null, 4));
                        }
                        console.log(mazo_cartas)

                    } else if (incio == 4) {
                        Investigar_Lugar_Estudio()
                    }
                } else if (ubicacion_pasillo == true) {
                    var incio = prompt(`Turnos Restantes: ${acciones_jugador} \nLocalización: Pasillo \nEstas en tu turno, que quieres hacer? \n1 - Robar Carta \n2 - Suministro \n3 - Comprobar Cartas de Mano \n4 - Investigar \n5 - Moverte \n6 - Salir`)

                    if (incio == 1) {
                        robar_carta()
                        acciones_jugador--
                    } else if (incio == 2) {
                        var suministros = prompt("1 - Para robar suministros \n2 - Comprobar Suministros")
                        if (suministros == 1) {
                            RolandBanks.sumar_Suministros()
                            acciones_jugador--
                        } else if (suministros == 2) {
                            alert(RolandBanks.suministros)
                        }
                    } else if (incio == 3) {
                        for (i = 0; i < cartas_mano.length; i++) {
                            alert(JSON.stringify(cartas_mano[i], null, 4));
                        }
                        console.log(mazo_cartas)

                    } else if (incio == 4) {
                        console.log("Pistas pasillo" + pasillo.pistas_investigador)
                        Investigar_Lugar_Pasillo()
                    } else if (incio == 5) {
                        moverse = prompt("Donde te quieres mover: Sotano | Atico")
                        if (moverse == "sotano") {
                            ubicacion_pasillo = false
                            ubicacion_sotano = true
                            acciones_jugador--
                            RolandBanks.obligado_Sotano()
                        } else if (moverse == "atico") {
                            ubicacion_pasillo = false
                            ubicacion_atico = true
                            acciones_jugador--
                            RolandBanks.obligado_Atico()
                        }
                    }
                } else if (ubicacion_atico == true) {
                    var incio = prompt(`Turnos Restantes: ${acciones_jugador} \nLocalización: Atico \nEstas en tu turno, que quieres hacer? \n1 - Robar Carta \n2 - Suministro \n3 - Comprobar Cartas de Mano \n4 - Investigar \n5 - Moverte \n6 - Salir`)

                    if (incio == 1) {
                        robar_carta()
                        acciones_jugador--
                    } else if (incio == 2) {
                        var suministros = prompt("1 - Para robar suministros \n2 - Comprobar Suministros")
                        if (suministros == 1) {
                            RolandBanks.sumar_Suministros()
                            acciones_jugador--
                        } else if (suministros == 2) {
                            alert(RolandBanks.suministros)
                        }
                    } else if (incio == 3) {
                        for (i = 0; i < cartas_mano.length; i++) {
                            alert(JSON.stringify(cartas_mano[i], null, 4));
                        }
                        console.log(mazo_cartas)

                    } else if (incio == 4) {
                        console.log("Pistas Atico" + atico.pistas_investigador)
                        Investigar_Lugar_Atico()
                    } else if (incio == 5) {
                        moverse = prompt("Donde te quieres mover: pasillo")
                        if (moverse = "pasillo") {
                            ubicacion_atico = false
                            ubicacion_pasillo = true
                            acciones_jugador--
                        }

                    }
                } else if (ubicacion_sotano == true) {
                    var incio = prompt(`Turnos Restantes: ${acciones_jugador} \nLocalización: Sotano \nEstas en tu turno, que quieres hacer? \n1 - Robar Carta \n2 - Suministro \n3 - Comprobar Cartas de Mano \n4 - Investigar \n5 - Moverte \n6 - Salir`)

                    if (incio == 1) {
                        robar_carta()
                        acciones_jugador--
                    } else if (incio == 2) {
                        var suministros = prompt("1 - Para robar suministros \n2 - Comprobar Suministros")
                        if (suministros == 1) {
                            RolandBanks.sumar_Suministros()
                            acciones_jugador--
                        } else if (suministros == 2) {
                            alert(RolandBanks.suministros)
                        }
                    } else if (incio == 3) {
                        for (i = 0; i < cartas_mano.length; i++) {
                            alert(JSON.stringify(cartas_mano[i], null, 4));
                        }
                        console.log(mazo_cartas)

                    } else if (incio == 4) {
                        console.log("Pistas sotano" + sotano.pistas_investigador)
                        Investigar_Lugar_Sotano()
                    } else if (incio == 5) {
                        moverse = prompt("Donde te quieres mover: pasillo")
                        if (moverse = "pasillo") {
                            ubicacion_sotano = false
                            ubicacion_pasillo = true
                            acciones_jugador--
                        }

                    }
                }
                // var incio = prompt(`Turnos Restantes: ${acciones_jugador} \nLocalización: ${estudio.nombre} \nEstas en tu turno, que quieres hacer? \n1 - Robar Carta \n2 - Suministro \n3 - Comprobar Cartas de Mano \n4 - Investigar \n5 - Salir`)

                // if (incio == 1) {
                //     robar_carta()
                //     acciones_jugador--
                // } else if (incio == 2) {
                //     var suministros = prompt("1 - Para robar suministros \n2 - Comprobar Suministros")
                //     if (suministros == 1) {
                //         RolandBanks.sumar_Suministros()
                //         acciones_jugador--
                //     } else if (suministros == 2) {
                //         alert(RolandBanks.suministros)
                //     }
                // } else if (incio == 3) {
                //     for (i = 0; i < cartas_mano.length; i++) {
                //         alert(JSON.stringify(cartas_mano[i], null, 4));
                //     }
                //     console.log(mazo_cartas)

                // } else if (incio == 4) {
                //     Investigar_Lugar()
                // }
            }
        }
    }
}