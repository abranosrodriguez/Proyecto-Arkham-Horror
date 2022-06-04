function sumarSuministrosRoland() {
    RolandBanks.suministros = RolandBanks.sumar_Suministros()
    console.log("Total de suministros:" + RolandBanks.suministros)
    $("#Cuenta_Suministros").html(RolandBanks.suministros)
}

function restarSuministrosRoland() {
    RolandBanks.suministros = RolandBanks.restar_Suministros()
    console.log("Total de suministros:" + RolandBanks.suministros)
}