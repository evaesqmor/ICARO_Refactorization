"use strict";
exports.__esModule = true;
exports.initialState = void 0;
var offers_js_1 = require("../assets/data/offers.js");
// Definimos un estado inicial para las
// propiedades de los componentes
exports.initialState = {
    offers: offers_js_1.offers,
    offerSpecific: offers_js_1.offerSpecific,
    activePage: 1,
    elementsPage: 6,
    collapsed: false,
    reference: "321159",
    colors: ["primary", "danger", "success", "warning", "info", "secondary", "dark",
        "primary bg-opacity-75", "danger bg-opacity-75", "success bg-opacity-75"],
    field: "",
    localty: "",
    requisite: "",
    language: "",
    studies: [],
    localties: [],
    requisites: [],
    languages: []
};
