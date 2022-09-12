import {ActionTypes} from "./actions";
import {
    getAgendasForTimeAndType,
    getCurrentUserBookings,
    submitScheduleRoom,
    removeBooking, editBooking
} from "./sagas/sagaCalendar";
import {takeEvery, all} from 'redux-saga/effects'
import {addEditAppPropertySaga, closeModalDialog, showModalDialog} from "./sagas/saga";
import {getAllRooms, getRoomsAndAgendasForCriteria} from "./sagas/sagaRooms";

export const componentSagas = [
    takeEvery(ActionTypes.ADD_EDIT_APP_PROPERTY, addEditAppPropertySaga),
    takeEvery(ActionTypes.SUBMIT_SCHEDULE_ROOM, submitScheduleRoom),
    takeEvery(ActionTypes.GET_AGENDAS, getAgendasForTimeAndType),
    takeEvery(ActionTypes.GET_ALL_ROOMS, getAllRooms),
    takeEvery(ActionTypes.CLOSE_MODAL, closeModalDialog),
    takeEvery(ActionTypes.SHOW_MODAL, showModalDialog),
    takeEvery(ActionTypes.GET_CURRENT_USER_BOOKINGS, getCurrentUserBookings),
    takeEvery(ActionTypes.GET_ROOMS_AND_AGENDAS, getRoomsAndAgendasForCriteria),
    takeEvery(ActionTypes.REMOVE_BOOKING, removeBooking),
    takeEvery(ActionTypes.EDIT_BOOKING, editBooking)
]

export default function* sagas() {
    yield all([componentSagas])
}
