/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from 'react';
import { Container, Nav, Navbar, NavDropdown, Badge} from 'react-bootstrap';
import logo from '../assets/images/boton_portal_icaro.png'
import avatar from '../assets/images/avatar3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSchool, faBell, faPowerOff, faExclamation, faTasks } from '@fortawesome/free-solid-svg-icons';
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";


interface IMenuProps{
}

interface IMenuState{
}


class Menu extends React.Component<IMenuProps, IMenuState>{

    public constructor(props:IMenuProps){
        super(props);
    }

    public render(){
        return (
          <nav id="menu" className="bg-dark">
            <label htmlFor="tm" className="bg-dark" id="toggle-menu">Menú de navegación <span className="drop-icon">▾</span></label>
            <input type="checkbox" id="tm"/>
            <ul className="main-menu clearfix pt-2 ">
              <li className="ml-3 mt-2 col-14 align-top" ref="window.location.href=&#39;/&#39;">
                  <img
                    src={logo} width="auto"
                    className="logo"
                    alt="ICARO logo"
                    />
              </li>
              {/*Desplegable de CV*/}
              <li id="menuprimary">
                <li className="">
                    <a className="drop-icon ml-1 col-14 align-top mx-5 mb-2">
                      <FontAwesomeIcon icon={faUser} className="mr-2"/>
                      Curriculum
                      <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm1">▾</label>
                    </a> 
                </li>
                <input type="checkbox" id="sm1"/>
                <ul className="card sub-menu small mx-3" id="menusecondary">
                  <Nav.Item><a href="https://icaro.ual.es/Demandantes/">Presentación</a></Nav.Item>
                  <Nav.Item><a href="https://icaro.ual.es/Demandantes/Programas.aspx">Programas</a></Nav.Item>
                  <li className="">
                    <a className="">Información personal
                      <span className="drop-icon">▾</span>
                      <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm2">▾</label>
                    </a>
                    <input type="checkbox" id="sm2"/>
                    <ul className="card sub-menu small" id="menuthird">
                      <li className="">
                        <a className="">Gestión de la cuenta
                          <span className="drop-icon">▾</span>
                          <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm3">▾</label>
                        </a>
                        <input type="checkbox" id="sm3"/>
                        <ul className="card sub-menu small" id="menufourth">
                          <Nav.Item><a href="https://icaro.ual.es/Demandantes/Foto.aspx">Foto</a></Nav.Item>
                          <Nav.Item><a href="https://icaro.ual.es/Acceso/ModificarDatosAcceso.aspx">Cambiar Contraseña</a></Nav.Item>
                          <Nav.Item><a href="https://icaro.ual.es/Demandantes/InformacionContacto.aspx">Información de Contacto</a></Nav.Item>
                          <Nav.Item><a href="https://icaro.ual.es/Demandantes/BajaUsuario.aspx">Darme de Baja</a></Nav.Item>
                          <Nav.Item><a href="https://icaro.ual.es/General/Lopd.aspx?p=d">Protección de Datos</a></Nav.Item>
                        </ul>
                      </li>
                      <Nav.Item><a href="https://icaro.ual.es/Demandantes/DatosPersonales.aspx">Datos Personales</a></Nav.Item>
                      <Nav.Item><a href="https://icaro.ual.es/Demandantes/DatosAcademicos">Datos Académicos</a></Nav.Item>
                      <Nav.Item><a href="https://icaro.ual.es/Demandantes/ConocimientosInformaticos.aspx">Conocimientos Informáticos</a></Nav.Item>
                      <Nav.Item><a href="https://icaro.ual.es/Demandantes/ExperienciaProfesional.aspx">Experiencia Profesional</a></Nav.Item>
                      <Nav.Item><a href="https://icaro.ual.es/Demandantes/CompetenciasProfesionales.aspx">Competencias Profesionales</a></Nav.Item>
                      <Nav.Item><a href="https://icaro.ual.es/Demandantes/OtrosDatos.aspx">Otros datos</a></Nav.Item>
                      <Nav.Item><a href="https://icaro.ual.es/Demandantes/Discapacidad.aspx">Datos de Discapacidad</a></Nav.Item>
                    </ul>
                  </li>
                  <li className="">
                    <a className="">Curriculum de Emprendedor
                      <span className="drop-icon">▾</span>
                      <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm4">▾</label>
                    </a>
                    <input type="checkbox" id="sm4"/>
                    <ul className="card sub-menu small" id="menuthird">
                      <Nav.Item><a href="https://icaro.ual.es/Demandantes/ItinerarioEmprendedor.aspx">Itinerario Emprendedor</a></Nav.Item>
                      <Nav.Item><a href="https://icaro.ual.es/Demandantes/Actividades.aspx">Actividades</a></Nav.Item>
                      <Nav.Item><a href="https://icaro.ual.es/Demandantes/Proyectos.aspx">Proyectos</a></Nav.Item>
                      <Nav.Item><a href="https://icaro.ual.es/Demandantes/CitasEmprendimiento.aspx">Agenda Citas</a></Nav.Item>
                    </ul>
                  </li>
                  <li className="">
                    <a className="">Curriculum de Investigador
                      <span className="drop-icon">▾</span>
                      <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm5">▾</label>
                    </a>
                    <input type="checkbox" id="sm5"/>
                    <ul className="card sub-menu small" id="menuthird">
                     <Nav.Item><a href="https://icaro.ual.es/Demandantes/AreasInvestigacion.aspx">Áreas de Investigación</a></Nav.Item>
                     <Nav.Item><a href="https://icaro.ual.es/Demandantes/ExperienciaInvestigadora.aspx">Experiencia Investigadora</a></Nav.Item>
                     <Nav.Item><a href="https://icaro.ual.es/Demandantes/Publicaciones.aspx">Publicaiones</a></Nav.Item>
                    </ul>
                  </li>
                  <li className="">
                    <a className="">Formación Complementaria
                      <span className="drop-icon">▾</span>
                      <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm6">▾</label>
                    </a>
                    <input type="checkbox" id="sm6"/>
                    <ul className="card sub-menu small" id="menuthird">
                      <Nav.Item><a href="https://icaro.ual.es/Demandantes/FormacionComplementaria.aspx">Formación</a></Nav.Item>
                      <Nav.Item><a href="https://icaro.ual.es/Demandantes/AreasConocimiento.aspx">Áreas de Conocimiento</a></Nav.Item>
                    </ul>
                  </li>
                  <li className="">
                    <a className="">Idiomas
                      <span className="drop-icon">▾</span>
                      <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm7">▾</label>
                    </a>
                    <input type="checkbox" id="sm7"/>
                    <ul className="card sub-menu small" id="menu">
                      <Nav.Item><a href="https://icaro.ual.es/Demandantes/Idiomas.aspx">Niveles</a></Nav.Item>
                      <Nav.Item><a href="https://icaro.ual.es/Demandantes/EstanciaExtranjero.aspx">Estancias en el Extranjero</a></Nav.Item>
                    </ul>
                  </li>
                </ul>
              </li>
              {/*Desplegable de Servicios*/}
              <li id="menuprimary">
                <li className="">
                    <a className="drop-icon ml-1 col-14 align-top mx-5 mb-2">
                    <FontAwesomeIcon icon={faSchool} className="mr-2"/>
                    Servicios
                    <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm8">▾</label>
                    </a> 
                </li>
                <input type="checkbox" id="sm8"/>
                {/*Submenu de CV */}
                <ul className="card sub-menu small mx-3" id="menusecondary">
                  <Nav.Item><a href="https://icaro.ual.es/Demandantes/Imprimir">Imprimir Currículum</a></Nav.Item>
                  <Nav.Item><a href="https://icaro.ual.es/Demandantes/VideoCurriculum.aspx">Video Currículum</a></Nav.Item>
                  <Nav.Item><a href="https://icaro.ual.es/Demandantes/Actualidad/default.aspx">Actualidad</a></Nav.Item>
                  <li className="" >
                    <a className="">Ofertas y selecciones
                      <span className="drop-icon">▾</span>
                      <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm9">▾</label>
                    </a>
                    <input type="checkbox" id="sm9"/>
                    <ul className="card sub-menu small" id="menuthird">
                      <li className="">
                        <a className="">Ofertas
                          <span className="drop-icon">▾</span>
                          <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm10">▾</label>
                        </a>
                        <input type="checkbox" id="sm10"/>
                        <ul className="card sub-menu small" id="menufourth">
                          <Nav.Item><a href="https://icaro.ual.es/Demandantes/Ofertas">Generales</a></Nav.Item>
                          <Nav.Item><a href="https://icaro.ual.es/Demandantes/Practicum">Prácticas Curriculares</a></Nav.Item>
                        </ul>
                      </li>  
                      <li className="">
                        <a className="">Selecciones e Informes
                          <span className="drop-icon">▾</span>
                          <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm11">▾</label>
                        </a>
                        <input type="checkbox" id="sm11"/>
                        <ul className="card sub-menu small" id="menufourth">
                           <Nav.Item><a href="https://icaro.ual.es/Demandantes/Entrevistas.aspx">Mis Preselecciones</a></Nav.Item>
                          <Nav.Item><a href="https://icaro.ual.es/Demandantes/Selecciones.aspx">Mis Selecciones</a></Nav.Item>
                          <Nav.Item><a href="https://icaro.ual.es/Demandantes/Informe/Default.aspx?o=p">Mis Informes de Valoración</a></Nav.Item>
                          <Nav.Item><a href="https://icaro.ual.es/Demandantes/Citas/Default.aspx">Solicitar Cita</a></Nav.Item>
                          <Nav.Item><a href="https://icaro.ual.es/General/Encuestas/Default.aspx?p=d">Mis Encuestas</a></Nav.Item>
                        </ul>
                      </li> 
                    </ul>
                  </li>
                  <Nav.Item><a href="https://icaro.ual.es/Ayuda/Demandantes.aspx">Ayuda</a></Nav.Item>
                </ul>
              </li>
              {/*Sección de notificaciones*/}
              <ul className="rab" id="menuprimary">
                <li>
                  <li className="drop-icon ml-1 align-top mb-2">
                    <Nav.Item>
                      <a href="https://icaro.ual.es/acceso">
                        <img src={avatar} className="mr-2" alt="Foto" height="22" width="22"/>Eva Esquivel Moreno
                      </a>
                    </Nav.Item>
                  </li>
                </li>
                <li className="">
                  <li>
                      <a className="drop-icon ml-1 col-14 align-top mx-5 mb-2">
                        <Badge bg="primary" className="mr-2">
                          <FontAwesomeIcon icon={faBell} className=""/>
                          <FontAwesomeIcon icon={faExclamation} className=""/>
                        </Badge>
                        Notificaciones
                        <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm12">▾</label>
                      </a> 
                  </li>
                  <input type="checkbox" id="sm12"/>
                  <ul className="card sub-menu">
                    <Nav.Item>
                      <span className="d-inline-block col-1">
                        <Badge bg="success">
                          <FontAwesomeIcon icon={faTasks} className=""/>
                        </Badge>
                      </span>
                      <span className="d-inline-block">
                        <a>Pendiente: </a>
                      </span>
                    </Nav.Item>
                    <Nav.Item>
                      <span className="col-1 mt-3 mr-1 d-inline-block">
                        <figure className="image is-64x64">
                          <img className="is-rounded" src={avatar} alt="profile"/>
                        </figure>
                      </span>
                      <span className="d-inline-block mt-3 col-8 ml-5">
                        <a href="https://icaro.ual.es/acceso">
                          <p className="text-center text-white"><b>Completa tu perfil </b></p>
                          <progress className="progress is-link is-small" value={80} max={100}>90%</progress>
                        </a>
                      </span>
                    </Nav.Item>
                  </ul>
                </li>
                <li>
                  <li className="drop-icon ml-1 col-14 align-top mx-5 mb-2">
                    <Nav.Item>
                      <a href="https://icaro.ual.es/acceso/Desconectar.aspx">
                        <FontAwesomeIcon icon={faPowerOff} className="mr-2"/>Desconectar
                      </a>
                    </Nav.Item>
                  </li>
                </li>
              </ul>
            </ul>
          </nav>
        );
    }
}

export default Menu;