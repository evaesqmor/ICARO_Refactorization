"use strict";
/* eslint-disable jsx-a11y/anchor-is-valid */
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
var boton_portal_icaro_png_1 = require("../assets/images/boton_portal_icaro.png");
var avatar3_png_1 = require("../assets/images/avatar3.png");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(props) {
        return _super.call(this, props) || this;
    }
    Menu.prototype.render = function () {
        return (React.createElement("nav", { id: "menu", className: "bg-dark" },
            React.createElement("label", { htmlFor: "tm", className: "bg-dark", id: "toggle-menu" },
                "Men\u00FA de navegaci\u00F3n ",
                React.createElement("span", { className: "drop-icon" }, "\u25BE")),
            React.createElement("input", { type: "checkbox", id: "tm" }),
            React.createElement("ul", { className: "main-menu clearfix pt-2 " },
                React.createElement("li", { className: "ml-3 mt-2 col-14 align-top", ref: "window.location.href='/'" },
                    React.createElement("img", { src: boton_portal_icaro_png_1["default"], width: "auto", className: "logo", alt: "ICARO logo" })),
                React.createElement("li", { id: "menuprimary" },
                    React.createElement("li", { className: "" },
                        React.createElement("a", { className: "drop-icon ml-1 col-14 align-top mx-5 mb-2" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUser, className: "mr-2" }),
                            "Curriculum",
                            React.createElement("label", { title: "Toggle Drop-down", className: "drop-icon", htmlFor: "sm1" }, "\u25BE"))),
                    React.createElement("input", { type: "checkbox", id: "sm1" }),
                    React.createElement("ul", { className: "card sub-menu small mx-3", id: "menusecondary" },
                        React.createElement(react_bootstrap_1.Nav.Item, null,
                            React.createElement("a", { href: "https://icaro.ual.es/Demandantes/" }, "Presentaci\u00F3n")),
                        React.createElement(react_bootstrap_1.Nav.Item, null,
                            React.createElement("a", { href: "https://icaro.ual.es/Demandantes/Programas.aspx" }, "Programas")),
                        React.createElement("li", { className: "" },
                            React.createElement("a", { className: "" },
                                "Informaci\u00F3n personal",
                                React.createElement("span", { className: "drop-icon" }, "\u25BE"),
                                React.createElement("label", { title: "Toggle Drop-down", className: "drop-icon", htmlFor: "sm2" }, "\u25BE")),
                            React.createElement("input", { type: "checkbox", id: "sm2" }),
                            React.createElement("ul", { className: "card sub-menu small", id: "menuthird" },
                                React.createElement("li", { className: "" },
                                    React.createElement("a", { className: "" },
                                        "Gesti\u00F3n de la cuenta",
                                        React.createElement("span", { className: "drop-icon" }, "\u25BE"),
                                        React.createElement("label", { title: "Toggle Drop-down", className: "drop-icon", htmlFor: "sm3" }, "\u25BE")),
                                    React.createElement("input", { type: "checkbox", id: "sm3" }),
                                    React.createElement("ul", { className: "card sub-menu small", id: "menufourth" },
                                        React.createElement(react_bootstrap_1.Nav.Item, null,
                                            React.createElement("a", { href: "https://icaro.ual.es/Demandantes/Foto.aspx" }, "Foto")),
                                        React.createElement(react_bootstrap_1.Nav.Item, null,
                                            React.createElement("a", { href: "https://icaro.ual.es/Acceso/ModificarDatosAcceso.aspx" }, "Cambiar Contrase\u00F1a")),
                                        React.createElement(react_bootstrap_1.Nav.Item, null,
                                            React.createElement("a", { href: "https://icaro.ual.es/Demandantes/InformacionContacto.aspx" }, "Informaci\u00F3n de Contacto")),
                                        React.createElement(react_bootstrap_1.Nav.Item, null,
                                            React.createElement("a", { href: "https://icaro.ual.es/Demandantes/BajaUsuario.aspx" }, "Darme de Baja")),
                                        React.createElement(react_bootstrap_1.Nav.Item, null,
                                            React.createElement("a", { href: "https://icaro.ual.es/General/Lopd.aspx?p=d" }, "Protecci\u00F3n de Datos")))),
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/DatosPersonales.aspx" }, "Datos Personales")),
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/DatosAcademicos" }, "Datos Acad\u00E9micos")),
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/ConocimientosInformaticos.aspx" }, "Conocimientos Inform\u00E1ticos")),
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/ExperienciaProfesional.aspx" }, "Experiencia Profesional")),
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/CompetenciasProfesionales.aspx" }, "Competencias Profesionales")),
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/OtrosDatos.aspx" }, "Otros datos")),
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/Discapacidad.aspx" }, "Datos de Discapacidad")))),
                        React.createElement("li", { className: "" },
                            React.createElement("a", { className: "" },
                                "Curriculum de Emprendedor",
                                React.createElement("span", { className: "drop-icon" }, "\u25BE"),
                                React.createElement("label", { title: "Toggle Drop-down", className: "drop-icon", htmlFor: "sm4" }, "\u25BE")),
                            React.createElement("input", { type: "checkbox", id: "sm4" }),
                            React.createElement("ul", { className: "card sub-menu small", id: "menuthird" },
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/ItinerarioEmprendedor.aspx" }, "Itinerario Emprendedor")),
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/Actividades.aspx" }, "Actividades")),
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/Proyectos.aspx" }, "Proyectos")),
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/CitasEmprendimiento.aspx" }, "Agenda Citas")))),
                        React.createElement("li", { className: "" },
                            React.createElement("a", { className: "" },
                                "Curriculum de Investigador",
                                React.createElement("span", { className: "drop-icon" }, "\u25BE"),
                                React.createElement("label", { title: "Toggle Drop-down", className: "drop-icon", htmlFor: "sm5" }, "\u25BE")),
                            React.createElement("input", { type: "checkbox", id: "sm5" }),
                            React.createElement("ul", { className: "card sub-menu small", id: "menuthird" },
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/AreasInvestigacion.aspx" }, "\u00C1reas de Investigaci\u00F3n")),
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/ExperienciaInvestigadora.aspx" }, "Experiencia Investigadora")),
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/Publicaciones.aspx" }, "Publicaiones")))),
                        React.createElement("li", { className: "" },
                            React.createElement("a", { className: "" },
                                "Formaci\u00F3n Complementaria",
                                React.createElement("span", { className: "drop-icon" }, "\u25BE"),
                                React.createElement("label", { title: "Toggle Drop-down", className: "drop-icon", htmlFor: "sm6" }, "\u25BE")),
                            React.createElement("input", { type: "checkbox", id: "sm6" }),
                            React.createElement("ul", { className: "card sub-menu small", id: "menuthird" },
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/FormacionComplementaria.aspx" }, "Formaci\u00F3n")),
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/AreasConocimiento.aspx" }, "\u00C1reas de Conocimiento")))),
                        React.createElement("li", { className: "" },
                            React.createElement("a", { className: "" },
                                "Idiomas",
                                React.createElement("span", { className: "drop-icon" }, "\u25BE"),
                                React.createElement("label", { title: "Toggle Drop-down", className: "drop-icon", htmlFor: "sm7" }, "\u25BE")),
                            React.createElement("input", { type: "checkbox", id: "sm7" }),
                            React.createElement("ul", { className: "card sub-menu small", id: "menu" },
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/Idiomas.aspx" }, "Niveles")),
                                React.createElement(react_bootstrap_1.Nav.Item, null,
                                    React.createElement("a", { href: "https://icaro.ual.es/Demandantes/EstanciaExtranjero.aspx" }, "Estancias en el Extranjero")))))),
                React.createElement("li", { id: "menuprimary" },
                    React.createElement("li", { className: "" },
                        React.createElement("a", { className: "drop-icon ml-1 col-14 align-top mx-5 mb-2" },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faSchool, className: "mr-2" }),
                            "Servicios",
                            React.createElement("label", { title: "Toggle Drop-down", className: "drop-icon", htmlFor: "sm8" }, "\u25BE"))),
                    React.createElement("input", { type: "checkbox", id: "sm8" }),
                    React.createElement("ul", { className: "card sub-menu small mx-3", id: "menusecondary" },
                        React.createElement(react_bootstrap_1.Nav.Item, null,
                            React.createElement("a", { href: "https://icaro.ual.es/Demandantes/Imprimir" }, "Imprimir Curr\u00EDculum")),
                        React.createElement(react_bootstrap_1.Nav.Item, null,
                            React.createElement("a", { href: "https://icaro.ual.es/Demandantes/VideoCurriculum.aspx" }, "Video Curr\u00EDculum")),
                        React.createElement(react_bootstrap_1.Nav.Item, null,
                            React.createElement("a", { href: "https://icaro.ual.es/Demandantes/Actualidad/default.aspx" }, "Actualidad")),
                        React.createElement("li", { className: "" },
                            React.createElement("a", { className: "" },
                                "Ofertas y selecciones",
                                React.createElement("span", { className: "drop-icon" }, "\u25BE"),
                                React.createElement("label", { title: "Toggle Drop-down", className: "drop-icon", htmlFor: "sm9" }, "\u25BE")),
                            React.createElement("input", { type: "checkbox", id: "sm9" }),
                            React.createElement("ul", { className: "card sub-menu small", id: "menuthird" },
                                React.createElement("li", { className: "" },
                                    React.createElement("a", { className: "" },
                                        "Ofertas",
                                        React.createElement("span", { className: "drop-icon" }, "\u25BE"),
                                        React.createElement("label", { title: "Toggle Drop-down", className: "drop-icon", htmlFor: "sm10" }, "\u25BE")),
                                    React.createElement("input", { type: "checkbox", id: "sm10" }),
                                    React.createElement("ul", { className: "card sub-menu small", id: "menufourth" },
                                        React.createElement(react_bootstrap_1.Nav.Item, null,
                                            React.createElement("a", { href: "https://icaro.ual.es/Demandantes/Ofertas" }, "Generales")),
                                        React.createElement(react_bootstrap_1.Nav.Item, null,
                                            React.createElement("a", { href: "https://icaro.ual.es/Demandantes/Practicum" }, "Pr\u00E1cticas Curriculares")))),
                                React.createElement("li", { className: "" },
                                    React.createElement("a", { className: "" },
                                        "Selecciones e Informes",
                                        React.createElement("span", { className: "drop-icon" }, "\u25BE"),
                                        React.createElement("label", { title: "Toggle Drop-down", className: "drop-icon", htmlFor: "sm11" }, "\u25BE")),
                                    React.createElement("input", { type: "checkbox", id: "sm11" }),
                                    React.createElement("ul", { className: "card sub-menu small", id: "menufourth" },
                                        React.createElement(react_bootstrap_1.Nav.Item, null,
                                            React.createElement("a", { href: "https://icaro.ual.es/Demandantes/Entrevistas.aspx" }, "Mis Preselecciones")),
                                        React.createElement(react_bootstrap_1.Nav.Item, null,
                                            React.createElement("a", { href: "https://icaro.ual.es/Demandantes/Selecciones.aspx" }, "Mis Selecciones")),
                                        React.createElement(react_bootstrap_1.Nav.Item, null,
                                            React.createElement("a", { href: "https://icaro.ual.es/Demandantes/Informe/Default.aspx?o=p" }, "Mis Informes de Valoraci\u00F3n")),
                                        React.createElement(react_bootstrap_1.Nav.Item, null,
                                            React.createElement("a", { href: "https://icaro.ual.es/Demandantes/Citas/Default.aspx" }, "Solicitar Cita")),
                                        React.createElement(react_bootstrap_1.Nav.Item, null,
                                            React.createElement("a", { href: "https://icaro.ual.es/General/Encuestas/Default.aspx?p=d" }, "Mis Encuestas")))))),
                        React.createElement(react_bootstrap_1.Nav.Item, null,
                            React.createElement("a", { href: "https://icaro.ual.es/Ayuda/Demandantes.aspx" }, "Ayuda")))),
                React.createElement("ul", { className: "rab", id: "menuprimary" },
                    React.createElement("li", null,
                        React.createElement("li", { className: "drop-icon ml-1 align-top mb-2" },
                            React.createElement(react_bootstrap_1.Nav.Item, null,
                                React.createElement("a", { href: "https://icaro.ual.es/acceso" },
                                    React.createElement("img", { src: avatar3_png_1["default"], className: "mr-2", alt: "Foto", height: "22", width: "22" }),
                                    "Eva Esquivel Moreno")))),
                    React.createElement("li", { className: "" },
                        React.createElement("li", null,
                            React.createElement("a", { className: "drop-icon ml-1 col-14 align-top mx-5 mb-2" },
                                React.createElement(react_bootstrap_1.Badge, { bg: "primary", className: "mr-2" },
                                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBell, className: "" }),
                                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faExclamation, className: "" })),
                                "Notificaciones",
                                React.createElement("label", { title: "Toggle Drop-down", className: "drop-icon", htmlFor: "sm12" }, "\u25BE"))),
                        React.createElement("input", { type: "checkbox", id: "sm12" }),
                        React.createElement("ul", { className: "card sub-menu" },
                            React.createElement(react_bootstrap_1.Nav.Item, null,
                                React.createElement("span", { className: "d-inline-block col-1" },
                                    React.createElement(react_bootstrap_1.Badge, { bg: "success" },
                                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTasks, className: "" }))),
                                React.createElement("span", { className: "d-inline-block" },
                                    React.createElement("a", null, "Pendiente: "))),
                            React.createElement(react_bootstrap_1.Nav.Item, null,
                                React.createElement("span", { className: "col-1 mt-3 mr-1 d-inline-block" },
                                    React.createElement("figure", { className: "image is-64x64" },
                                        React.createElement("img", { className: "is-rounded", src: avatar3_png_1["default"], alt: "profile" }))),
                                React.createElement("span", { className: "d-inline-block mt-3 col-8 ml-5" },
                                    React.createElement("a", { href: "https://icaro.ual.es/acceso" },
                                        React.createElement("p", { className: "text-center text-white" },
                                            React.createElement("b", null, "Completa tu perfil ")),
                                        React.createElement("progress", { className: "progress is-link is-small", value: 80, max: 100 }, "90%")))))),
                    React.createElement("li", null,
                        React.createElement("li", { className: "drop-icon ml-1 col-14 align-top mx-5 mb-2" },
                            React.createElement(react_bootstrap_1.Nav.Item, null,
                                React.createElement("a", { href: "https://icaro.ual.es/acceso/Desconectar.aspx" },
                                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPowerOff, className: "mr-2" }),
                                    "Desconectar"))))))));
    };
    return Menu;
}(React.Component));
exports["default"] = Menu;
