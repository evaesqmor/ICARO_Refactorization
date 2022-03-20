import {Action} from 'redux';

export enum FilterActions{
    FILTER_ACTION = "FILTER_ACTION",
    SET_ELM_FILTER = "SET_ELM_FILTER",
    LOAD_ATTRIBUTES = "LOAD_ATTRIBUTES"
}

export interface IFilterActions extends Action {
    payload_filter_field: any;
    payload_filter_localty: any;
    payload_filter_requisite: any;
    payload_filter_language: any;
    payload_set_Elm_Filter:number;

    payload_filter_studies: any;
    payload_filter_localties: any;
    payload_filter_requisites: any;
    payload_filter_languages: any;
}