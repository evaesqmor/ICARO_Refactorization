"use strict";

exports.__esModule = true;
exports.initialState = void 0;

var offers_js_1 = require("../assets/data/offers.js"); // Definimos un estado inicial para las
// propiedades de los componentes


exports.initialState = {
  offers: offers_js_1.offers,
  offerSpecific: offers_js_1.offerSpecific,
  activePage: 1,
  elementsPage: 8,
  collapsed: false,
  reference: "321159",
  colors: ["danger", "success", "warning", "info", "primary", "secondary", "dark", "secondary"],
  field: "",
  localty: "",
  requisite: "",
  language: ""
};