import {connect} from 'react-redux';
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';
import PaginationSection from '../components/PaginationSection';
import { PaginationActions } from '../actions/PaginationActions';

// Funcion que recibe el estado global
// de la aplicación y devuelve un JSON
// con las propiedades del componente
const mapStateToProps = (state: IGlobalState) => ({
    //backgroundColor:state.backgroundColor
    offers:state.offers,
    activePage:state.activePage,
    elementsPage:state.elementsPage,
    offerSpecific:state.offerSpecific,
    field:state.field,
    localty:state.localty,
    requisite:state.requisite,
    language:state.language,
    colors:state.colors
})

const mapDispatchToProps = (dispatch: Dispatch)=>({  
    onChangePage:(activePage:number) => {
        dispatch({type: PaginationActions.CHANGE_ACTIVE_PAGE,payload_page:activePage});
    }                                                                                                                                                                                                                                                     
})

// Conexión con el componente original:
// De esta manera, el componente recibe
// el store de forma automática
export default connect(mapStateToProps, mapDispatchToProps)(PaginationSection);