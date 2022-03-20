/* eslint-disable react/jsx-no-undef */
/*Estilo de la página*/
import './assets/scss/main.scss';
/*Importando el estado inicial*/
import IGlobalState, {initialState } from './state/globalState';
/*Importando Provider: Poner a disposición de los componentes las variables de estado*/
import { Provider } from 'react-redux';
/*createStore de Redux*/
import { Action, createStore } from 'redux';
/*Importando Acciones*/
import { PaginationActions, IPaginationActions } from './actions/PaginationActions';
import { IOfferActions, OfferActions } from './actions/OfferActions';
/*Importando componentes*/
import Table from './components/Table';
import BreadcrumbSection from './components/BreadcrumbSection';
import Footer from './components/Footer';
import Menu from './components/Menu';
/*Importando contenedores*/
import MainSection from './containers/MainSection';
import PaginationSection from './containers/PaginationSection';
import OffcanvasSection from './containers/OffcanvasSection';
import FilterSection from './containers/FilterSection';
import { FilterActions, IFilterActions } from './actions/FilterActions';

// reducer es un método que recibe un estado, una acción, y calcula un nuevo estado.
const reducer = (state: IGlobalState = initialState, action: Action)=>{
  switch(action.type){
    case PaginationActions.CHANGE_ACTIVE_PAGE:
      const activePageAction = action as IPaginationActions;
      return {...state, activePage:activePageAction.payload_page}
    case OfferActions.COLLAPSED:
      const collapsedAction = action as IOfferActions;
      return {...state, collapsed:collapsedAction.payload_collapsed}
    case OfferActions.REFERENCE:
      const referenceAction = action as IOfferActions;
      return {...state, reference:referenceAction.payload_reference}
    case FilterActions.FILTER_ACTION:
      const filterAction = action as IFilterActions;
      return {...state, field:filterAction.payload_filter_field,localty:filterAction.payload_filter_localty,requisite:filterAction.payload_filter_requisite,language:filterAction.payload_filter_language}
    case FilterActions.SET_ELM_FILTER:
      const setElmFilterAction = action as IFilterActions;
      return {...state, sizeElmFilter:setElmFilterAction.payload_set_Elm_Filter}
    }
  return state;
}
// Importando estado inicial de la aplicación: Almacenado en una variable 'store'. Gestionamos
// los cambios mediante un Reducer.
const store = createStore(reducer,initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <html >
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
            <title> ICARO - Ofertas Disponibles Generales </title>
            <meta name="description" content="Portal de Gestión de Prácticas en Empresa y Empleo utilizado por las Universidades Públicas Andaluzas y la Universidad Politécnica de Cartagena."/>
            <meta name="keywords" content="empleo,practicas,empresa,alumnos,universidad,insercion,andalucía,almeria,granada,malaga,cadiz,huelva,sevilla,cordoba,jaen,pablo,olavide,cartagena,beca,contrato,oferta"/>
          </head>
          <body className="background">
            <Menu/>
            <form method="post" action="https://icaro.ual.es/Demandantes/Ofertas/" id="formEntorno">
              <div>
                <div>
                  <BreadcrumbSection/>
                  <Table/>
                  <h4 className="display-4 text-light mb-6">Filtrar resultados</h4>
                  <FilterSection/>
                  <PaginationSection/>
                  <MainSection/>
                  <PaginationSection/>
                  <OffcanvasSection />
                </div>
              </div>
              <Footer/>
            </form>
          </body>
        </html>
      </div>
    </Provider>
  );
}

export default App;
