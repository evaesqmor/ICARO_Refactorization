import {Action} from 'redux';

export enum OffcanvasActions{
    SHOW = "SHOW"
}

export interface IOffcanvasActions extends Action {
    payload_show: any;
}