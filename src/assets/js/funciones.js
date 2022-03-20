/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
  // -----------------------------------------------------------------
  // función que comprueba si un valor es numérico
  // -----------------------------------------------------------------

  function esNumero(valor) {
      var resultado = 10 * valor;
      var salida = true;
      if (resultado.toString() === "NaN") salida = false;
      return salida
  }



  // -----------------------------------------------------------------
  // función que abre una ventana flotante
  // -----------------------------------------------------------------

  var ventana_activa;

  function ventana(id, pagina, anchura, altura, scrollbars, menubar, resizable) {
      if (anchura === -1) anchura = screen.width;
      if (altura === -1) altura = screen.height;

      let xposition = (screen.width - anchura) / 2;
      let yposition = (screen.height - altura) / 2;
      if (!menubar) menubar = 0;
      if (!resizable) resizable = 0;
      if (esNumero(id)) id = 'ventana' + id;

      ventana_activa = open(pagina, id, "titlebar=0,hotkeys=0,resizable=" + resizable + ",toolbar=0,directories=0,menubar=" + menubar + ",status=0,scrollbars=" + scrollbars + ",width=" + anchura + ",height=" + altura + ",left=" + xposition + ",top=" + yposition);
  }



  // -----------------------------------------------------------------
  // marca (l_marcar=true) o desmarca (l_marcar=false) todos los checkbox de la página
  // -----------------------------------------------------------------

  function marcarTodos(formulario, l_marcar) {
      for (var i = 0; i < formulario.elements.length; i++)
          if (formulario.elements[i].type === 'checkbox') formulario.elements[i].checked = l_marcar;
  }




  // -----------------------------------------------------------------
  // Marca o desmarca todos los checkbox en función de como está el check box ke le pasamos
  // -----------------------------------------------------------------


  function marcarTodosCheckBox(objeto) {
      var marcado = objeto.checked;
      var formulario = document.forms[0];

      for (var i = 0; i < formulario.elements.length; i++)
          if (formulario.elements[i].type === 'checkbox' && formulario.elements[i] !== objeto && !formulario.elements[i].disabled)
              formulario.elements[i].checked = marcado;
  }

  function marcarTodosCheckBoxExcepto(objeto, id) {
      var marcado = objeto.checked;
      var formulario = document.forms[0];

      for (var i = 0; i < formulario.elements.length; i++)
          if (formulario.elements[i].type === 'checkbox' && formulario.elements[i] !== objeto && !formulario.elements[i].disabled && formulario.elements[i].id.indexOf(id) !== -1)
              formulario.elements[i].checked = marcado;
  }



  // -----------------------------------------------------------------
  // Iguala las alturas de dos divs
  // -----------------------------------------------------------------


  function igualarAlturaDivs(idDiv1, idDiv2) {
      // obtenemos los objetos a partir de los id dados por parámetros
      var div1 = document.getElementById(idDiv1);
      var div2 = document.getElementById(idDiv2);

      // determinamos cual es el largo y cual es el corto
      var divCorto = (div1.offsetHeight > div2.offsetHeight) ? div2 : div1;
      var divLargo = (div1.offsetHeight < div2.offsetHeight) ? div2 : div1;

      // clonamos el largo y le quitamos el padding y el border (porque la propiedad offsetHeight lo cuenta y style.height no)
      var divLargoClonado = divLargo.cloneNode(true);
      divLargo.parentNode.appendChild(divLargoClonado);
      divLargoClonado.style.padding = "0";
      divLargoClonado.style.border = "0";

      // le damos al div corto la altura del largo
      divCorto.style.height = divLargoClonado.offsetHeight + "px";

      // borramos el id clonado
      divLargo.parentNode.removeChild(divLargoClonado);
  }



  // eventos jquery

  /*jQuery(document).ready(function () {

 jQuery(".filas_resaltadas tbody tr").mouseover(function () {
     jQuery(this).addClass("tr_hover");
});

 jQuery(".filas_resaltadas tbody tr").mouseout(function () {
    jQuery(this).removeClass("tr_hover");
});

});*/


  // -----------------------------------------------------------------
  // redondea numero tantos decimales como indica numDecimales
  // -----------------------------------------------------------------

  function redondear(numero, numDecimales) {
      return (Math.round(Number(numero) * Math.pow(10, numDecimales))) / Math.pow(10, numDecimales);
  }

  function redondearToString(numero, numDecimales) {
      return String(redondear(numero, numDecimales)).replace('.', ',');
  }