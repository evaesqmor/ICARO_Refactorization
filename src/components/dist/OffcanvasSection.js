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
/* eslint-disable array-callback-return */
/* eslint-disable react/require-render-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var OffcanvasSection = /** @class */ (function (_super) {
    __extends(OffcanvasSection, _super);
    function OffcanvasSection(props) {
        return _super.call(this, props) || this;
    }
    OffcanvasSection.prototype.render = function () {
        var _this = this;
        // Cerrar la sección del Offcanvas
        var handleClose = function () { return _this.props.onClickCollapsed(!!!_this.props.collapsed); };
        var offer = {};
        var offerSpecificInfo = {};
        var studies = [];
        var process = [];
        var competences = [];
        var requisites = [];
        var languages = [];
        /*Oferta por código*/
        this.props.offers.map(function (offerInfo) {
            if (_this.props.reference === offerInfo["code"]) {
                offer = offerInfo;
                return true;
            }
        });
        /*Función para filtrar por código de la oferta y obtener su información específica*/
        this.props.offerSpecific.map(function (specificInfo) {
            if (_this.props.reference === specificInfo["code"]) {
                offerSpecificInfo = specificInfo;
                specificInfo["studies"].map(function (st) { return studies.push(st); });
                specificInfo["process"].map(function (pr) { return process.push(pr); });
                specificInfo["competences"].map(function (cm) { return competences.push(cm); });
                specificInfo["requisites"].map(function (rq) { return requisites.push(rq); });
                specificInfo["languages"].map(function (lg) { return languages.push(lg); });
                return true;
            }
        });
        return (React.createElement("div", null,
            React.createElement(react_bootstrap_1.Offcanvas, { show: this.props.collapsed, onHide: handleClose },
                React.createElement(react_bootstrap_1.Offcanvas.Header, { closeButton: true },
                    React.createElement(react_bootstrap_1.Card.Body, { className: "row" },
                        React.createElement("div", null,
                            React.createElement("p", { className: "display-7 font-weight-bold" },
                                React.createElement(react_bootstrap_1.Badge, { bg: "primary is-size-6" }, offerSpecificInfo["code"]),
                                " ",
                                React.createElement("b", null,
                                    offer["profile"],
                                    " en ",
                                    offer["localty"],
                                    " (",
                                    offerSpecificInfo["country"],
                                    ")"))),
                        React.createElement("p", null))),
                React.createElement(react_bootstrap_1.Offcanvas.Body, { className: "ml-3" },
                    React.createElement("p", { className: "" }, studies.map(function (st, i) { return React.createElement(react_bootstrap_1.Badge, { className: "mr-2 mb-2 is-size-6", bg: _this.props.colors[i] }, st); })),
                    React.createElement("br", null),
                    React.createElement("p", { className: "mb-2" },
                        React.createElement("b", null, offerSpecificInfo["university"] !== undefined ? "Oferta ofrecida por la " + offerSpecificInfo["university"] : "")),
                    offerSpecificInfo["modality"] === undefined || offerSpecificInfo["modality"] === "" ? "" : React.createElement("p", null,
                        React.createElement("b", null, "Modalidad: "),
                        offerSpecificInfo["modality"]),
                    offerSpecificInfo["salary"] === undefined || offerSpecificInfo["salary"] === "" ? "" : React.createElement("p", null,
                        React.createElement("b", null, "Salario/Retribuci\u00F3n: "),
                        offerSpecificInfo["salary"]),
                    offerSpecificInfo["shift"] === undefined || offerSpecificInfo["shift"] === "" ? "" : React.createElement("p", null,
                        React.createElement("b", null, "Turno: "),
                        offerSpecificInfo["shift"]),
                    React.createElement("br", null),
                    offerSpecificInfo["observations"] === undefined || offerSpecificInfo["observations"] === "" ? "" : React.createElement(react_bootstrap_1.Alert, { variant: "info" }, offerSpecificInfo["observations"]),
                    process === undefined || process.length === 0 ? "" : React.createElement("div", null,
                        React.createElement("label", null,
                            React.createElement("strong", null, "Fases de la selecci\u00F3n:")),
                        React.createElement("br", null),
                        React.createElement(react_bootstrap_1.ListGroup, { as: "ol", numbered: true }, process.map(function (pr, i) { return React.createElement(react_bootstrap_1.ListGroup.Item, { as: "li" }, pr); })),
                        React.createElement("br", null)),
                    competences === undefined || competences.length === 0 ? "" : React.createElement("div", null,
                        React.createElement("label", null,
                            React.createElement("strong", null, "Competencias:")),
                        React.createElement("br", null),
                        React.createElement(react_bootstrap_1.ListGroup, { as: "ol" }, competences.map(function (cmp, i) { return React.createElement(react_bootstrap_1.ListGroup.Item, { as: "li" }, cmp); })),
                        React.createElement("br", null)),
                    requisites === undefined || requisites.length === 0 ? "" : React.createElement("div", null,
                        React.createElement("label", null,
                            React.createElement("strong", null, "Requisitos:")),
                        React.createElement("br", null),
                        React.createElement(react_bootstrap_1.ListGroup, { as: "ol" }, requisites.map(function (rq, i) { return React.createElement(react_bootstrap_1.ListGroup.Item, { as: "li" }, rq); })),
                        React.createElement("br", null)),
                    languages === undefined || languages.length === 0 ? "" : React.createElement("div", null,
                        React.createElement("label", null,
                            React.createElement("strong", null, "Idiomas:")),
                        React.createElement("br", null),
                        React.createElement(react_bootstrap_1.ListGroup, { as: "ol" }, languages.map(function (lg, i) { return React.createElement(react_bootstrap_1.ListGroup.Item, { as: "li" }, lg); })),
                        React.createElement("br", null)),
                    React.createElement("label", null,
                        React.createElement("strong", null, "Funciones:")),
                    React.createElement("p", null, offerSpecificInfo["functions"]),
                    React.createElement("br", null),
                    offerSpecificInfo["jobObservations"] === undefined || offerSpecificInfo["jobObservations"] === "" ? "" : React.createElement("div", null,
                        React.createElement("p", null,
                            React.createElement("strong", null, "Observaciones del puesto")),
                        offerSpecificInfo["jobObservations"])))));
    };
    return OffcanvasSection;
}(React.Component));
exports["default"] = OffcanvasSection;
