import {ActionTypes} from "../actions";

export const modalReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.CLOSE_MODAL_STORE: {
            return {}
        }
        case ActionTypes.SHOW_MODAL_STORE:
            return {SHOW_MODAL_PROPERTY: action.property, SHOW_ADD_BOOKING_MODAL: true};
        case ActionTypes.SHOW_ERROR:
            return {SHOW_MODAL_PROPERTY: action.property, SHOW_ERROR: true}
        case ActionTypes.SHOW_DELETE_MODAL:
            return {SHOW_MODAL_PROPERTY: action.property, SHOW_DELETE_MODAL: true}
        case ActionTypes.SHOW_EDIT_MODAL:
            return {SHOW_MODAL_PROPERTY: action.property, SHOW_EDIT_MODAL: true}
        case ActionTypes.SHOW_FORBIDDEN_MODAL:
            return {SHOW_MODAL_PROPERTY: action.property, SHOW_FORBIDDEN_MODAL: true}
        case ActionTypes.SHOW_SUCCESS_MODAL:
            return {SHOW_MODAL_PROPERTY: action.property, SHOW_SUCCESS_MODAL: true}
        default:
            return state;
    }
}