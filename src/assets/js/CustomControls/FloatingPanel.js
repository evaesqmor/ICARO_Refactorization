/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-new-wrappers */
// Objeto que muestra propiedades de la Página
var Page = function() {
    var w = 0;
    var h = 0;
    //IE
    if (!window.innerWidth) {
        //strict mode
        if (!(document.documentElement.clientWidth === 0)) {
            w = document.documentElement.clientWidth;
            h = document.documentElement.clientHeight;
        }
        //quirks mode
        else {
            w = document.body.clientWidth;
            h = document.body.clientHeight;
        }
    }
    //w3c
    else {
        w = window.innerWidth;
        h = window.innerHeight;
    }
    this.Width = new String(w);
    this.Height = new String(h);
}



//
function ccFpArrastrar(obj, e, limit) {
    var Pagina = new Page();
    if (!e) e = window.event;
    obj = document.getElementById(obj);

    if (obj.style.left === '50%') {
        var x = parseInt(Pagina.Width / 2);
        var y = parseInt(Pagina.Height / 2);
    } else {
        x = parseInt(obj.style.left);
        y = parseInt(obj.style.top);
    }

    var x_ = e.clientX - x;
    var y_ = e.clientY - y;

    if (document.addEventListener) {
        document.addEventListener("mousemove", inFmove, true);
        document.addEventListener("mouseup", inFup, true);
    } else
    if (document.attachEvent) {
        document.attachEvent("onmousemove", inFmove);
        document.attachEvent("onmouseup", inFup);
    }

    inFstop(e);
    inFabort(e)


    function inFmove(e) {
        var evt;
        if (!e) e = window.event;

        if (limit) {
            var op = obj.parentNode;
            var opX = parseInt(op.style.left);
            var opY = parseInt(op.style.top);

            if ((e.clientX - x_) < 0) return false;
            else if ((e.clientX - x_ + obj.offsetWidth + opX) > (opX + op.offsetWidth)) return false;

            if (e.clientY - y_ < 0) return false;
            else if ((e.clientY - y_ + obj.offsetHeight + opY) > (opY + op.offsetHeight)) return false;

        }

        obj.style.left = e.clientX - x_ + "px";
        obj.style.top = e.clientY - y_ + "px";

        inFstop(e);
    }

    function inFup(e) {
        var evt;
        if (!e) e = window.event;

        if (document.removeEventListener) {
            document.removeEventListener("mousemove", inFmove, true);
            document.removeEventListener("mouseup", inFup, true);
        } else
        if (document.detachEvent) {
            document.detachEvent("onmousemove", inFmove);
            document.detachEvent("onmouseup", inFup);
        }

        inFstop(e);

    }

    function inFstop(e) {
        if (e.stopPropagation) return e.stopPropagation();
        else
            return e.cancelBubble = true;
    }

    function inFabort(e) {
        if (e.preventDefault) return e.preventDefault();
        else
            return e.returnValue = false;
    }
}




//$(document).ready(function () {

function pageLoad() // es necesario cuando se está en un updatepanel
{


    $(function() {

        $(window).resize(function() {
            $('.CcFpCentrado').css({
                position: 'fixed',
                left: ($(window).width() - $('.CcFpCentrado').outerWidth()) / 2,
                top: ($(window).height() - $('.CcFpCentrado').outerHeight()) / 2
            });

        });

        // Ejecutamos la función
        $(window).resize();

    })

}