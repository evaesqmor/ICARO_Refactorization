import {connect} from 'react-redux';
import IGlobalState from '../state/globalState';
import { Dispatch } from 'redux';
import FilterSection from '../components/FilterSection';
import { FilterActions } from '../actions/FilterActions';

// Funcion que recibe el estado global
// de la aplicación y devuelve un JSON
// con las propiedades del componente
const mapStateToProps = (state: IGlobalState) => ({
    offerSpecific:state.offerSpecific,
    field:state.field,
    localty:state.localty,
    offers:state.offers,
    requisite:state.requisite,
    language:state.language,
})

const mapDispatchToProps = (dispatch: Dispatch)=>({
    onApplyFilter:(field:string,localty:string,requisite:string,language:string)=>{
        dispatch({type: FilterActions.FILTER_ACTION, payload_filter_field:field,payload_filter_localty:localty,payload_filter_requisite:requisite,payload_filter_language:language});
    }                                                                                                                                                                                                    
})

// Conexión con el componente original:
// De esta manera, el componente recibe
// el store de forma automática
export default connect(mapStateToProps, mapDispatchToProps)(FilterSection);