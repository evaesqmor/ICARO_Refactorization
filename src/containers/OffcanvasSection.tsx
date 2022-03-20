import {connect} from 'react-redux';
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';
import OffcanvasSection from '../components/OffcanvasSection';
import { OfferActions } from '../actions/OfferActions';

// Funcion que recibe el estado global
// de la aplicación y devuelve un JSON
// con las propiedades del componente
const mapStateToProps = (state: IGlobalState) => ({
    collapsed:state.collapsed,
    reference:state.reference,
    offerSpecific:state.offerSpecific,
    offers:state.offers,
    colors:state.colors,
})

const mapDispatchToProps = (dispatch: Dispatch)=>({
    onClickCollapsed:(collapsed:any)=>{
        dispatch({type: OfferActions.COLLAPSED, payload_collapsed:collapsed});
    },                                                                                                                                                                                                                                
})

// Conexión con el componente original:
// De esta manera, el componente recibe
// el store de forma automática
export default connect(mapStateToProps, mapDispatchToProps)(OffcanvasSection);