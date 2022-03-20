import {connect} from 'react-redux';
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';
import MainSection from '../components/MainSection';
import { OfferActions } from '../actions/OfferActions';

// Funcion que recibe el estado global
// de la aplicación y devuelve un JSON
// con las propiedades del componente
const mapStateToProps = (state: IGlobalState) => ({
    //backgroundColor:state.backgroundColor
    offers:state.offers,
    activePage:state.activePage,
    elementsPage:state.elementsPage,
    offerSpecific:state.offerSpecific,
    colors:state.colors,
    field:state.field,
    localty:state.localty,
    requisite:state.requisite,
    language:state.language,
})

const mapDispatchToProps = (dispatch: Dispatch)=>({    
                                                                                                                                                                               
})

// Conexión con el componente original:
// De esta manera, el componente recibe
// el store de forma automática
export default connect(mapStateToProps, mapDispatchToProps)(MainSection);