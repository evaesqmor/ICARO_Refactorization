import {Action} from 'redux';

export enum OfferActions{
    COLLAPSED = "COLLAPSED",
    REFERENCE="REFERENCE",
    LOAD_COLORS = "LOAD_COLORS"
}

export interface IOfferActions extends Action {
    payload_collapsed: boolean;
    payload_reference:string;
    payload_load_colors:any;
}