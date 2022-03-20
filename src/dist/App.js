"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/* eslint-disable react/jsx-no-undef */
/*Estilo de la página*/
require("./assets/scss/main.scss");
/*Importando el estado inicial*/
var globalState_1 = require("./state/globalState");
/*Importando Provider: Poner a disposición de los componentes las variables de estado*/
var react_redux_1 = require("react-redux");
/*createStore de Redux*/
var redux_1 = require("redux");
/*Importando Acciones*/
var PaginationActions_1 = require("./actions/PaginationActions");
var OfferActions_1 = require("./actions/OfferActions");
/*Importando componentes*/
var Table_1 = require("./components/Table");
var BreadcrumbSection_1 = require("./components/BreadcrumbSection");
var Footer_1 = require("./components/Footer");
var Menu_1 = require("./components/Menu");
/*Importando contenedores*/
var MainSection_1 = require("./containers/MainSection");
var PaginationSection_1 = require("./containers/PaginationSection");
var OffcanvasSection_1 = require("./containers/OffcanvasSection");
var FilterSection_1 = require("./containers/FilterSection");
var FilterActions_1 = require("./actions/FilterActions");
// reducer es un método que recibe un estado, una acción, y calcula un nuevo estado.
var reducer = function (state, action) {
    if (state === void 0) { state = globalState_1.initialState; }
    switch (action.type) {
        case PaginationActions_1.PaginationActions.CHANGE_ACTIVE_PAGE:
            var activePageAction = action;
            return __assign(__assign({}, state), { activePage: activePageAction.payload_page });
        case OfferActions_1.OfferActions.COLLAPSED:
            var collapsedAction = action;
            return __assign(__assign({}, state), { collapsed: collapsedAction.payload_collapsed });
        case OfferActions_1.OfferActions.REFERENCE:
            var referenceAction = action;
            return __assign(__assign({}, state), { reference: referenceAction.payload_reference });
        case FilterActions_1.FilterActions.FILTER_ACTION:
            var filterAction = action;
            return __assign(__assign({}, state), { field: filterAction.payload_filter_field, localty: filterAction.payload_filter_localty, requisite: filterAction.payload_filter_requisite, language: filterAction.payload_filter_language });
        case FilterActions_1.FilterActions.SET_ELM_FILTER:
            var setElmFilterAction = action;
            return __assign(__assign({}, state), { sizeElmFilter: setElmFilterAction.payload_set_Elm_Filter });
        case FilterActions_1.FilterActions.LOAD_ATTRIBUTES:
            var setAttributes = action;
            return __assign(__assign({}, state), { studies: setAttributes.payload_filter_studies, localties: setAttributes.payload_filter_localties, requisites: setAttributes.payload_filter_requisites, languages: setAttributes.payload_filter_languages });
    }
    return state;
};
// Importando estado inicial de la aplicación: Almacenado en una variable 'store'. Gestionamos
// los cambios mediante un Reducer.
var store = redux_1.createStore(reducer, globalState_1.initialState);
function App() {
    return (React.createElement(react_redux_1.Provider, { store: store },
        React.createElement("div", { className: "App" },
            React.createElement("html", null,
                React.createElement("head", null,
                    React.createElement("meta", { "http-equiv": "Content-Type", content: "text/html; charset=UTF-8" }),
                    React.createElement("title", null, " ICARO - Ofertas Disponibles Generales "),
                    React.createElement("meta", { name: "description", content: "Portal de Gesti\u00F3n de Pr\u00E1cticas en Empresa y Empleo utilizado por las Universidades P\u00FAblicas Andaluzas y la Universidad Polit\u00E9cnica de Cartagena." }),
                    React.createElement("meta", { name: "keywords", content: "empleo,practicas,empresa,alumnos,universidad,insercion,andaluc\u00EDa,almeria,granada,malaga,cadiz,huelva,sevilla,cordoba,jaen,pablo,olavide,cartagena,beca,contrato,oferta" })),
                React.createElement("body", { className: "background" },
                    React.createElement(Menu_1["default"], null),
                    React.createElement("form", { method: "post", action: "https://icaro.ual.es/Demandantes/Ofertas/", id: "formEntorno" },
                        React.createElement("div", null,
                            React.createElement("div", null,
                                React.createElement(BreadcrumbSection_1["default"], null),
                                React.createElement(Table_1["default"], null),
                                React.createElement("h4", { className: "display-4 text-light mb-6" }, "Filtrar resultados"),
                                React.createElement(FilterSection_1["default"], null),
                                React.createElement(PaginationSection_1["default"], null),
                                React.createElement(MainSection_1["default"], null),
                                React.createElement(PaginationSection_1["default"], null),
                                React.createElement(OffcanvasSection_1["default"], null))),
                        React.createElement(Footer_1["default"], null)))))));
}
exports["default"] = App;
