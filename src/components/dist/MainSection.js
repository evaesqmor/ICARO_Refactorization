"use strict";
/* eslint-disable array-callback-return */
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
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Offer_1 = require("../containers/Offer");
var MainSection = /** @class */ (function (_super) {
    __extends(MainSection, _super);
    function MainSection(props) {
        return _super.call(this, props) || this;
    }
    MainSection.prototype.render = function () {
        var _this = this;
        var studies = [];
        var localties = [];
        var requisites = [];
        var languages = [];
        var studiesByCode = new Map();
        var colorByField = new Map();
        /**Obteniendo estudios, requisitos e idiomas */
        this.props.offerSpecific.map(function (offer) {
            studiesByCode.set(offer["code"], offer["studies"]);
            offer["studies"].map(function (field) {
                if (!studies.includes(field)) {
                    studies.push(field);
                }
            });
            offer["requisites"].map(function (req) {
                if (!requisites.includes(req)) {
                    requisites.push(req);
                }
            });
            offer["languages"].map(function (lan) {
                if (!languages.includes(lan)) {
                    languages.push(lan);
                }
            });
        });
        /**Obteniendo localidades**/
        this.props.offers.map(function (offer) {
            if (!localties.includes(offer["localty"])) {
                localties.push(offer["localty"]);
            }
        });
        /*Map de campos de estuio por color*/
        studies.map(function (st, i) {
            colorByField.set(st, _this.props.colors[i]);
        });
        /*Repartiendo elementos por pagina*/
        var elmFilter = [];
        var code = "";
        var flb = (!(this.props.field.includes("----") || this.props.field === "")) ? true : false;
        var reqb = (!(this.props.requisite.includes("----") || this.props.requisite === "")) ? true : false;
        var lanb = (!(this.props.language.includes("----") || this.props.language === "")) ? true : false;
        /*Primer filtro*/
        this.props.offerSpecific.map(function (offer) {
            if ((_this.props.field.includes("----") || _this.props.field === "") &&
                (_this.props.requisite.includes("----") || _this.props.requisite === "") &&
                (_this.props.language.includes("----") || _this.props.language === "")) {
                code = offer["code"];
                _this.props.offers.map(function (offer) {
                    if (offer["code"] === code) {
                        elmFilter.push(offer);
                    }
                });
            }
            else {
                code = offer["code"];
                if (flb && reqb && lanb) {
                    console.log("flb-reqb-lanb");
                    if (offer["studies"].includes(_this.props.field) && offer["requisites"].includes(_this.props.requisite) && offer["languages"].includes(_this.props.language)) {
                        if (!elmFilter.includes(offer)) {
                            _this.props.offers.map(function (offer) {
                                if (offer["code"] === code) {
                                    elmFilter.push(offer);
                                }
                            });
                        }
                    }
                }
                else if (reqb && lanb) {
                    console.log("reqb-lanb");
                    if (offer["requisites"].includes(_this.props.requisite) && offer["languages"].includes(_this.props.language)) {
                        if (!elmFilter.includes(offer)) {
                            _this.props.offers.map(function (offer) {
                                if (offer["code"] === code) {
                                    elmFilter.push(offer);
                                }
                            });
                        }
                    }
                }
                else if (flb && lanb) {
                    console.log("flb-lanb");
                    if (offer["studies"].includes(_this.props.field) && offer["languages"].includes(_this.props.language)) {
                        if (!elmFilter.includes(offer)) {
                            _this.props.offers.map(function (offer) {
                                if (offer["code"] === code) {
                                    elmFilter.push(offer);
                                }
                            });
                        }
                    }
                }
                else if (flb && reqb) {
                    console.log("flb-reqb");
                    if (offer["studies"].includes(_this.props.field) && offer["requisites"].includes(_this.props.requisite)) {
                        if (!elmFilter.includes(offer)) {
                            _this.props.offers.map(function (offer) {
                                if (offer["code"] === code) {
                                    elmFilter.push(offer);
                                }
                            });
                        }
                    }
                }
                else if (flb) {
                    console.log("flb");
                    if (offer["studies"].includes(_this.props.field)) {
                        if (!elmFilter.includes(offer)) {
                            _this.props.offers.map(function (offer) {
                                if (offer["code"] === code) {
                                    elmFilter.push(offer);
                                }
                            });
                        }
                    }
                }
                else if (reqb) {
                    console.log("reqb");
                    if (offer["requisites"].includes(_this.props.requisite)) {
                        if (!elmFilter.includes(offer)) {
                            _this.props.offers.map(function (offer) {
                                if (offer["code"] === code) {
                                    elmFilter.push(offer);
                                }
                            });
                        }
                    }
                }
                else if (lanb) {
                    console.log("lanb");
                    if (offer["languages"].includes(_this.props.language)) {
                        if (!elmFilter.includes(offer)) {
                            _this.props.offers.map(function (offer) {
                                if (offer["code"] === code) {
                                    elmFilter.push(offer);
                                }
                            });
                        }
                    }
                }
            }
        });
        //console.log("1ST FILTER: ",elmFilter);
        /*Segundo Filtro*/
        var auxiliar = [];
        elmFilter.map(function (offer) {
            if ((localties.includes(_this.props.localty))) {
                if (_this.props.localty === offer["localty"]) {
                    auxiliar.push(offer);
                }
            }
            else {
                code = offer["code"];
                _this.props.offers.map(function (offer) {
                    if (offer["code"] === code) {
                        auxiliar.push(offer);
                    }
                });
            }
        });
        elmFilter = auxiliar;
        //console.log("2ND FILTER: ",auxiliar);
        /**Distribuyendo elementos por página**/
        var elmToDistribute = this.props.field === "" && this.props.localty === "" && this.props.requisite === "" && this.props.language === "" ? this.props.offers : elmFilter;
        var nPages = Math.ceil(elmToDistribute.length / this.props.elementsPage);
        var r1 = 0;
        var r2 = 0;
        var rest = 0;
        console.log("PAGES:", nPages);
        console.log("ACTIVE PAGE: " + this.props.activePage);
        /*Condiciones para repartir los elementos por página */
        if (elmToDistribute.length <= this.props.elementsPage) {
            console.log("case 1");
            r1 = 0;
            r2 = elmToDistribute.length;
        }
        else {
            console.log("case 2: ", this.props.offers.length);
            r1 = this.props.elementsPage * (this.props.activePage - 1);
            rest = this.props.offers.length - (this.props.elementsPage * (nPages - 1));
            r2 = this.props.activePage === nPages ? r1 + rest : this.props.elementsPage * this.props.activePage;
            if (this.props.activePage === nPages) {
                console.log("case 3");
                r2 = elmToDistribute.length;
            }
        }
        var elmSortedByDate = elmToDistribute.sort(function (a, b) { return parseInt(b["code"]) - parseInt(a["code"]); });
        elmToDistribute = elmSortedByDate;
        console.log("offs: ", elmToDistribute);
        var sliceOffers = elmToDistribute.slice(r1, r2);
        console.log("Desde: ", r1 + 1, ", hasta: ", r2, "rest: ", rest);
        console.log("---------");
        return (React.createElement("div", { className: "" },
            React.createElement("div", { className: "row m-6 mt-5" },
                React.createElement(react_bootstrap_1.Badge, { bg: "", className: "is-size-5 has-background-link-dark mb-1" },
                    React.createElement("p", { className: "mb-2" }, elmToDistribute.length === 0 ? "" : "Mostrando Ofertas " + (r1 + 1) + "-" + r2),
                    React.createElement("p", null,
                        "N\u00FAmero total de Ofertas: ",
                        elmToDistribute.length)),
                sliceOffers.length === 0 ?
                    React.createElement("div", { className: "box bg-warning text-dark bg-opacity-75" },
                        React.createElement("h5", { className: "display-6 mb-4" },
                            React.createElement("b", null, "No hay resultados con este filtro")),
                        React.createElement("p", null,
                            React.createElement("b", null, "Prueba con otras opciones distintas a:")),
                        React.createElement("p", null,
                            React.createElement("b", null, this.props.field !== "" && !this.props.field.includes("----") ? "Campo de estudios: " + this.props.field : "")),
                        React.createElement("p", null,
                            React.createElement("b", null, this.props.localty !== "" && !this.props.localty.includes("----") ? "Localidad: " + this.props.localty : "")),
                        React.createElement("p", null,
                            React.createElement("b", null, this.props.requisite !== "" && !this.props.requisite.includes("----") ? "Requisito: " + this.props.requisite : "")),
                        React.createElement("p", null,
                            React.createElement("b", null, this.props.language !== "" && !this.props.language.includes("----") ? "Idioma: " + this.props.language : "")))
                    : "",
                sliceOffers.map(function (offer) { return (React.createElement(Offer_1["default"], { code: offer.code, convDate: offer.convDate, preselectionUntilDate: offer.preselectionUntilDate, availableUntilDate: offer.availableUntilDate, vacancies: offer.vacancies, duration: offer.duration, localty: offer.localty, profile: offer.profile, profileDescription: offer.profileDescription, additionalInfo: offer.additionalInfo, studies: studiesByCode, colors: colorByField })); }))));
    };
    return MainSection;
}(React.Component));
exports["default"] = MainSection;
