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
/* eslint-disable @typescript-eslint/no-redeclare */
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var BreadcrumbSection = /** @class */ (function (_super) {
    __extends(BreadcrumbSection, _super);
    function BreadcrumbSection(props) {
        return _super.call(this, props) || this;
    }
    BreadcrumbSection.prototype.render = function () {
        return (React.createElement("div", { className: "card bg-warning" },
            React.createElement(react_bootstrap_1.Breadcrumb, { className: "justify-content-center display-1 mt-3" },
                React.createElement(react_bootstrap_1.Breadcrumb.Item, { className: "separador ml-4", href: "https://icaro.ual.es/" },
                    React.createElement("b", null, "INICIO")),
                React.createElement(react_bootstrap_1.Breadcrumb.Item, { className: "separador", href: "" },
                    React.createElement("b", null, "Servicios")),
                React.createElement(react_bootstrap_1.Breadcrumb.Item, { className: "separador", href: "" },
                    React.createElement("b", null, "Ofertas Disponibles")),
                React.createElement(react_bootstrap_1.Breadcrumb.Item, { className: "separador", active: true },
                    React.createElement("b", null, "Ofertas Disponibles Generales")))));
    };
    return BreadcrumbSection;
}(React.Component));
exports["default"] = BreadcrumbSection;
