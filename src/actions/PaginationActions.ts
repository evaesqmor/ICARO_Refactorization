import {Action} from 'redux';

export enum PaginationActions{
    CHANGE_ACTIVE_PAGE = "CHANGE_ACTIVE_PAGE"
}

export interface IPaginationActions extends Action {
    payload_page: number;
}