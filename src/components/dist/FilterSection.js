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
/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var FilterSection = /** @class */ (function (_super) {
    __extends(FilterSection, _super);
    function FilterSection(props) {
        return _super.call(this, props) || this;
    }
    FilterSection.prototype.render = function () {
        var _this = this;
        var studies = [];
        var localties = [];
        var requisites = [];
        var languages = [];
        this.props.offerSpecific.map(function (t) { return t.studies; }).map(function (fields) {
            fields.map(function (field) {
                if (field !== " " && !studies.includes(field)) {
                    studies.push(field);
                }
            });
        });
        this.props.offerSpecific.map(function (offer) {
            if (offer["requisites"] !== []) {
                offer["requisites"].map(function (req) {
                    //console.log("req: ",req);
                    if (!requisites.includes(req)) {
                        requisites.push(req);
                    }
                });
                offer["languages"].map(function (lang) {
                    //console.log("LANG: ",lang);
                    if (!languages.includes(lang)) {
                        languages.push(lang);
                    }
                });
            }
        });
        this.props.offers.map(function (offer) {
            if (!localties.includes(offer["localty"])) {
                localties.push(offer["localty"]);
            }
        });
        return (React.createElement("div", { className: "box mx-auto col-10 has-background-link columns mb-4" },
            React.createElement(react_bootstrap_1.Form, { className: "column" },
                React.createElement(react_bootstrap_1.Form.Group, { as: react_bootstrap_1.Row, className: "mx-3 text-white d-inline-block" },
                    React.createElement(react_bootstrap_1.Form.Label, { column: true, sm: "12" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUserGraduate, className: "mx-1" }),
                        "Campo de estudios"),
                    React.createElement(react_bootstrap_1.Col, { sm: "12" },
                        React.createElement(react_bootstrap_1.Form.Select, { size: "sm", className: "form-select input is-warning mw-100", onChange: function (event) { _this.props.onApplyFilter(event.target.value, _this.props.localty, _this.props.requisite, _this.props.language); } },
                            React.createElement("option", { selected: true }, "-----"),
                            studies.map(function (st) { return React.createElement("option", { value: st }, st); })))),
                React.createElement(react_bootstrap_1.Form.Group, { as: react_bootstrap_1.Row, className: "mx-3 text-white d-inline-block" },
                    React.createElement(react_bootstrap_1.Form.Label, { column: true, sm: "12" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCity, className: "mx-1" }),
                        "Localidad"),
                    React.createElement(react_bootstrap_1.Col, { sm: "12" },
                        React.createElement(react_bootstrap_1.Form.Select, { size: "sm", className: "form-select input is-warning mw-100", onChange: function (event) { _this.props.onApplyFilter(_this.props.field, event.target.value, _this.props.requisite, _this.props.language); } },
                            React.createElement("option", { selected: true }, "-----"),
                            localties.map(function (lc) { return React.createElement("option", { value: lc }, lc); })))),
                React.createElement(react_bootstrap_1.Form.Group, { as: react_bootstrap_1.Row, className: "mx-3 text-white d-inline-block" },
                    React.createElement(react_bootstrap_1.Form.Label, { column: true, sm: "12" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faList, className: "mx-1" }),
                        "Requisito"),
                    React.createElement(react_bootstrap_1.Col, { sm: "12" },
                        React.createElement(react_bootstrap_1.Form.Select, { size: "sm", className: "form-select input is-warning mw-100", onChange: function (event) { _this.props.onApplyFilter(_this.props.field, _this.props.localty, event.target.value, _this.props.language); } },
                            React.createElement("option", { selected: true }, "-----"),
                            requisites.map(function (req) { return React.createElement("option", { value: req }, req); })))),
                React.createElement(react_bootstrap_1.Form.Group, { as: react_bootstrap_1.Row, className: "mx-3 text-white d-inline-block" },
                    React.createElement(react_bootstrap_1.Form.Label, { column: true, sm: "12" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faLanguage, className: "mx-1" }),
                        "Idioma"),
                    React.createElement(react_bootstrap_1.Col, { sm: "12" },
                        React.createElement(react_bootstrap_1.Form.Select, { size: "sm", className: "form-select input is-warning mw-100", onChange: function (event) {
                                _this.props.onApplyFilter(_this.props.field, _this.props.localty, _this.props.requisite, event.target.value);
                            } },
                            React.createElement("option", { selected: true }, "-----"),
                            languages.map(function (lang) { return React.createElement("option", { value: lang }, lang); })))))));
    };
    return FilterSection;
}(React.Component));
exports["default"] = FilterSection;
