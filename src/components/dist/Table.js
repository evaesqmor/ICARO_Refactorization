"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
var React = require("react");
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        return _super.call(this, props) || this;
    }
    Table.prototype.render = function () {
        return (React.createElement("div", { className: "container mt-6 " },
            React.createElement("div", { className: "mb-4" },
                React.createElement("div", { className: "text-light" },
                    React.createElement("h2", { className: "display-1 m-4" }, "Ofertas Disponibles"),
                    React.createElement("h3", { className: "display-5 m-4" }, "Agencia de Colocaci\u00F3n"),
                    React.createElement("hr", { className: "divider" }),
                    React.createElement("p", { className: "lead" },
                        React.createElement("b", null, "En esta opci\u00F3n puede ver todas las ofertas que coinciden con su titulaci\u00F3n y que est\u00E1n disponibles para el programa Agencia de Colocaci\u00F3n."))),
                React.createElement("div", { className: "text-dark m-4 cn", id: "infoSection" },
                    React.createElement("div", { className: " column text-center card bg-secondary text-white mt-4", id: "information" },
                        React.createElement("div", { className: "mx-4" },
                            React.createElement("dt", null, "Oferta gestionada por:"),
                            React.createElement("dd", null, "Universidad de Sevilla")),
                        React.createElement("div", { className: "mx-4" },
                            React.createElement("dt", null, "Modo de Participaci\u00F3n: "),
                            React.createElement("dd", null, "Esta universidad permite que sea usted mismo el que indique su deseo de participar en algunas ofertas. Pulse el INSCRIBIRSE (antes de que la oferta deje de estar disponible) en la parte inferior de cada oferta para solicitar la participaci\u00F3n. Si su curriculum cumple con los restos de condiciones que requieren la oferta, la universidad validar\u00E1 su participaci\u00F3n y pasar\u00E1 a estar preseleccionado."))),
                    React.createElement("div", { className: "column text-center card bg-warning mt-4", id: "information" },
                        React.createElement("div", { className: "mx-4" },
                            React.createElement("dt", null, "Ofertas para:"),
                            React.createElement("dd", null, "Agencia de Colocaci\u00F3n - 0100000003")),
                        React.createElement("div", { className: "mx-4" },
                            React.createElement("dt", null, "Nota Importante:"),
                            React.createElement("dd", null, "Las ofertas aqu\u00ED mostradas atienden \u00FAnicamente a su titulaci\u00F3n, el hecho de que usted sea preseleccionado para una entrevista depender\u00E1 del resto de condiciones de la oferta y del perfil demandado por la empresa.")))))));
    };
    return Table;
}(React.Component));
exports["default"] = Table;
