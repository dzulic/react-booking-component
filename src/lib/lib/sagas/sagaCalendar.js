import {call, put} from "redux-saga/effects";
import {handleApiFetchDELETE, handleApiFetchGET, handleApiFetchPATCH, handleApiFetchPOST} from "../api/Api";
import {AGENDA_ENTRIES, CURRENT_USER_ENTRIES} from "../utils/Utils";
import {ActionTypes} from "../actions";
export const REST_ROOT_ENDPOINT = "http://localhost:8081/calendars";

export function* submitScheduleRoom(action) {
    const accessToken = yield call(action.property.accessToken)
    let body = {
        roomId: action.property.roomId,
        timeStart: action.property.selectedTimeStart,
        timeEnd: action.property.selectedTimeEnd,
        usePurposeDescription: action.property.description
    }
    try {
        const response = yield call(handleApiFetchPOST, REST_ROOT_ENDPOINT + "/reservations", body, accessToken)

        if (response.error != null) {
            throw new Error(response.message);
        }

        yield put({
            property: "You have scheduled new booking",
            type: ActionTypes.SHOW_SUCCESS_MODAL
        });

    } catch (e) {
        console.log(e)
        yield put({
            type: ActionTypes.SHOW_ERROR
        });
    }
}

export function* getAgendasForTimeAndType(action) {
    const accessToken = yield call(action.property.accessToken)
    try {
        const response = yield call(
            handleApiFetchGET, `${REST_ROOT_ENDPOINT}/availability?${new URLSearchParams({
                timeStart: (action.property.selectedDate === undefined || action.property.selectedDate === null) ? (new Date()).toISOString() : action.property.selectedDate,
                roomsIds: action.property.roomIds
            })}`, accessToken
        )
        if (response.error != null) {
            throw new Error(response.message);
        }
        if (response) {
            yield put({
                type: ActionTypes.ADD_EDIT_APP_PROP_STORE, property: {
                    key: AGENDA_ENTRIES, value: response
                }
            });
        }

    } catch
        (e) {
        console.log(e)
        yield put({
            property: e,
            type: ActionTypes.SHOW_ERROR
        });
    }
}

export function* getCurrentUserBookings(action) {
    const accessToken = yield call(action.property.accessToken)
    try {
        const response = yield call(handleApiFetchGET, `${REST_ROOT_ENDPOINT}/reservations/current`, accessToken)

        if (response.error != null) {
            throw new Error(response.message);
        }
        if (response) {
            yield put({
                type: ActionTypes.ADD_EDIT_APP_PROP_STORE, property: {
                    key: CURRENT_USER_ENTRIES, value: response
                }
            });

        }

    } catch
        (e) {
        console.log(e)
        yield put({
            property: e,
            type: ActionTypes.SHOW_ERROR
        });
    }
}

export function* removeBooking(action) {
    const accessToken = yield call(action.property.accessToken)
    try {
        yield call(handleApiFetchDELETE, `${REST_ROOT_ENDPOINT}/reservations/${action.property.value}`, accessToken)
        const response = yield call(handleApiFetchGET, `${REST_ROOT_ENDPOINT}/reservations/current`, accessToken)

        if (response.error != null) {
            throw new Error(response.message);
        }
        if (response) {
            yield put({
                type: ActionTypes.ADD_EDIT_APP_PROP_STORE, property: {
                    key: CURRENT_USER_ENTRIES, value: response
                }
            });
            yield put({
                property: "You have removed your booking",
                type: ActionTypes.SHOW_SUCCESS_MODAL
            });
        }
    } catch
        (e) {
        console.log(e)
        yield put({
            property: e,
            type: ActionTypes.SHOW_ERROR
        });
    }
}

export function* editBooking(action) {
    const accessToken = yield call(action.property.accessToken)
    try {
        yield call(handleApiFetchPATCH, `${REST_ROOT_ENDPOINT}/reservations/${action.property.value}`, accessToken)
        const response = yield call(handleApiFetchGET, `${REST_ROOT_ENDPOINT}/reservations/`, accessToken)

        if (response.error != null) {
            throw new Error(response.message);
        }
        if (response) {
            yield put({
                type: ActionTypes.ADD_EDIT_APP_PROP_STORE, property: {
                    key: CURRENT_USER_ENTRIES, value: response
                }
            });
            yield put({
                property: "You have edited your booking",
                type: ActionTypes.SHOW_SUCCESS_MODAL
            });
        }
    } catch
        (e) {
        console.log(e)
        yield put({
            property: e,
            type: ActionTypes.SHOW_ERROR
        });
    }
}