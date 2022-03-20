function desplegar(opcion) {
    if (opcion) {
        var opcionsel = document.getElementById(opcion);
        var menu = document.getElementById('menu');

        // oculta todos los submen�s desplegados menos el seleccionado (necesario  desplegamos dos menu seguidos sin recargar, para que se cierre el primero)
        var uls = menu.getElementsByTagName('ul');
        for (var m = 0; m < uls.length; m++) {
            if (uls[m].parentNode.parentNode !== menu && uls[m] !== opcionsel)
                uls[m].style.display = "none";
        }

        // pliega todas las flechas de submen�
        var spans = menu.getElementsByTagName('span');
        for (m = 0; m < spans.length; m++) {
            if (spans[m].className === "menu_desplegado")
                spans[m].className = "menu_plegado";
        }

        //muestra el submen� seleccionado desplegado o plegado, seg�n est�
        if (opcionsel.style.display === "none") {
            document.getElementById('SPAN_' + opcion).className = "menu_desplegado";
            opcionsel.style.display = "block";
        } else {
            document.getElementById('SPAN_' + opcion).className = "menu_plegado";
            opcionsel.style.display = "none";
        }


    }
}



// muestra el men� y, si tiene valor, despliega el submen� identificado por opcion_desplegada
function mostrarMenu(opcion_submenu) {

    var menu = document.getElementById('menu');
    if (menu) {
        var uls = menu.getElementsByTagName('ul');
        for (var m = 0; m < uls.length; m++) {
            if (uls[m].parentNode.parentNode !== menu)
                uls[m].style.display = "none";
        }
    }

    // si un submenu estaba desplegadao lo mantiene desplegado
    if (opcion_submenu) {
        desplegar(opcion_submenu);
    }

}