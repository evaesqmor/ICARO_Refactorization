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
var PaginationSection = /** @class */ (function (_super) {
    __extends(PaginationSection, _super);
    function PaginationSection(props) {
        return _super.call(this, props) || this;
    }
    PaginationSection.prototype.render = function () {
        var _this = this;
        var items = [];
        var code = "";
        var elmFilter = [];
        var studies = [];
        var localties = [];
        var requisites = [];
        var languages = [];
        var colorByField = new Map();
        var studiesByCode = new Map();
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
        console.log("1ST FILTER: ", elmFilter);
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
        console.log("2ND FILTER: ", auxiliar);
        var elmToDistribute = !(studies.includes(this.props.field)) && !(localties.includes(this.props.localty)) && !(requisites.includes(this.props.requisite)) && !(languages.includes(this.props.language)) ? this.props.offers : elmFilter;
        var nPages = Math.ceil(elmToDistribute.length / this.props.elementsPage);
        console.log("ac1", this.props.activePage);
        var _loop_1 = function (number) {
            aux = this_1.props.activePage;
            if (elmToDistribute.length <= this_1.props.elementsPage) {
                aux = 1;
            }
            items.push(React.createElement(react_bootstrap_1.Pagination.Item, { key: number, active: number === aux, onClick: function () {
                    _this.props.onChangePage(number);
                } }, number));
        };
        var this_1 = this, aux;
        for (var number = 1; number <= nPages; number++) {
            _loop_1(number);
        }
        return (React.createElement("div", null,
            React.createElement(react_bootstrap_1.Pagination, { size: "lg", style: { justifyContent: 'center' }, className: "m-5" }, items)));
    };
    return PaginationSection;
}(React.Component));
exports["default"] = PaginationSection;
