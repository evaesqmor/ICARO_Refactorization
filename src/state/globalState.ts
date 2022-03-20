import {offers, offerSpecific} from '../assets/data/offers.js';

// Definiendo los estados para las
// propiedades de los componentes
interface IGlobalState {
    offers:any [];
    offerSpecific:any[];
    activePage:number;
    elementsPage:number;
    collapsed:boolean;
    reference:string;
    colors:string[];
    field:string;
    localty:string;
    requisite:string;
    language:string;
}

// Exportamos el estado global
export default IGlobalState;

// Definimos un estado inicial para las
// propiedades de los componentes
export const initialState: IGlobalState = {
    offers:offers,
    offerSpecific:offerSpecific,
    activePage:1,
    elementsPage:6,
    collapsed:false,
    reference:"321159",
    colors:["primary","danger","success","warning","info","secondary","dark",
    "primary bg-opacity-75","danger bg-opacity-75","success bg-opacity-75"],
    field:"",
    localty:"",
    requisite:"",
    language:""
}
