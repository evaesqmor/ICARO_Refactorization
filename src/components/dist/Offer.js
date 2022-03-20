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
/* eslint-disable jsx-a11y/anchor-is-valid */
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Offer = /** @class */ (function (_super) {
    __extends(Offer, _super);
    function Offer(props) {
        return _super.call(this, props) || this;
    }
    Offer.prototype.render = function () {
        var _this = this;
        var handleOpen = function () { return _this.props.onClickCollapsed(!!!_this.props.collapsed); };
        var setReference = function () { _this.props.saveOfferReference(_this.props.code); };
        var studiesInOffer = this.props.studies.get(this.props.code);
        return (React.createElement(react_bootstrap_1.Card, { className: "cn col col-4 d-inline-block mb-1 pb-0 position-relative", id: "offer", style: { 'paddingBottom': '5%' } },
            React.createElement(react_bootstrap_1.Card.Body, { className: "inner row container  " },
                studiesInOffer === undefined || studiesInOffer.length === 0 ? "" :
                    React.createElement("div", { className: "row mx-1 justify-content-center" }, studiesInOffer.map(function (st, i) {
                        return React.createElement(react_bootstrap_1.Badge, { className: "d-inline-block m-1 col-5 is-size-6 text-truncate", bg: _this.props.colors.get(st) }, st);
                    })),
                React.createElement(react_bootstrap_1.Badge, { bg: "primary is-size-6 mb-2" },
                    "#",
                    this.props.code),
                React.createElement("b", null,
                    this.props.profile,
                    " en ",
                    this.props.localty),
                React.createElement(react_bootstrap_1.ListGroup, { className: "list-group-flush" },
                    React.createElement(react_bootstrap_1.ListGroupItem, null,
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCalendarDay, className: "mr-1" }),
                        React.createElement("strong", null, "Fechas de Inicio de Convocatoria:"),
                        " ",
                        this.props.convDate),
                    React.createElement(react_bootstrap_1.ListGroupItem, null,
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCalendarCheck, className: "mr-1" }),
                        React.createElement("strong", null, "Fecha de Fin de la Convocatoria: "),
                        " ",
                        this.props.availableUntilDate),
                    React.createElement(react_bootstrap_1.ListGroupItem, null,
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBusinessTime, className: "mr-1" }),
                        React.createElement("strong", null, "Duraci\u00F3n:"),
                        " ",
                        this.props.duration),
                    React.createElement(react_bootstrap_1.ListGroupItem, null,
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUser, className: "mr-1" }),
                        React.createElement("strong", null, "N\u00FAmero de puestos:"),
                        " ",
                        this.props.vacancies)),
                React.createElement(react_bootstrap_1.Card.Body, { className: "position-relative fixed-bottom d-inline-block " },
                    React.createElement(react_bootstrap_1.Button, { className: "button is-link mr-2 mb-2", href: "window.location.href='/'" }, "Inscribirse"),
                    React.createElement(react_bootstrap_1.Button, { className: "btn btn-warning ml-2 mb-2", onMouseUp: (setReference), onClick: (handleOpen) }, "M\u00E1s Informaci\u00F3n")))));
    };
    return Offer;
}(React.Component));
exports["default"] = Offer;
