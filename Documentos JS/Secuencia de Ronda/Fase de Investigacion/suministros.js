function sumarSuministrosRoland() {
    RolandBanks.suministros = RolandBanks.sumar_Suministros()                           // Sumamos los suministros al personaje y actualizamos
    $("#Cuenta_Suministros").html(RolandBanks.suministros)
}

function restarSuministrosRoland() {
    RolandBanks.suministros = RolandBanks.restar_Suministros()
}