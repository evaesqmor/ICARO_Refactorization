"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var FilterSection_1 = require("../components/FilterSection");
var FilterActions_1 = require("../actions/FilterActions");
// Funcion que recibe el estado global
// de la aplicación y devuelve un JSON
// con las propiedades del componente
var mapStateToProps = function (state) { return ({
    offerSpecific: state.offerSpecific,
    field: state.field,
    localty: state.localty,
    offers: state.offers,
    requisite: state.requisite,
    language: state.language
}); };
var mapDispatchToProps = function (dispatch) { return ({
    onApplyFilter: function (field, localty, requisite, language) {
        dispatch({ type: FilterActions_1.FilterActions.FILTER_ACTION, payload_filter_field: field, payload_filter_localty: localty, payload_filter_requisite: requisite, payload_filter_language: language });
    }
}); };
// Conexión con el componente original:
// De esta manera, el componente recibe
// el store de forma automática
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(FilterSection_1["default"]);
