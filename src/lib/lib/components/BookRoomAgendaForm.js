import Timeline, {DateHeader, SidebarHeader, TimelineHeaders} from 'react-calendar-timeline';
import moment from 'moment'
import React, {Component} from "react";
import Box from "@mui/material/Box";
import {CustomHeader} from "react-calendar-timeline/lib/lib/headers/CustomHeader";
import {
    AGENDA_ENTRIES,
    ALL_ROOMS,
    AVAILABLE_ROOMS,
    getValueAppPropertyStore,
    ROOM_TYPE,
    SELECTED_DATE
} from "../utils/Utils";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import TodayMarker from "react-calendar-timeline/lib/lib/markers/public/TodayMarker";
import {ActionTypes} from "../actions";
import {withAuth0} from "@auth0/auth0-react";

class BookRoomAgendaForm extends Component {

    getDefaultTimeStart = () => {
        const {selectedDate} = this.props
        if (selectedDate !== undefined && selectedDate !== null) {
            return moment(selectedDate).toDate()
        } else
            return moment()
                .startOf("day")
                .toDate();
    }
    getDefaultTimeEnd = () => {
        const {selectedDate} = this.props
        if (selectedDate !== undefined && selectedDate !== null) {
            return moment(selectedDate)
                .add(24, "h")
                .toDate()
        } else
            return moment()
                .startOf("day")
                .add(24, "h")
                .toDate();
    }

    createGroups = () => {
        const {allRooms, availableRooms, roomType} = this.props
        let groups = []
        if (allRooms !== null) {
            groups = allRooms.filter(it => it.roomType === roomType)
                .filter(all => availableRooms
                    .includes(all.id)).map((room) => {
                    return {
                        id: room.id,
                        title: room.roomId,
                        height: 80,
                        rightTitle: `${room.computerPlaces}cp / ${room.sittingPlaces}sp`
                    }
                })
        }
        if (groups.length === 0 && allRooms != null) {
            return allRooms.map((room) => {
                return {
                    id: room.id, title:
                        `${room.roomId} / ${room.roomType} 
                  `, height: 80, rightTitle: `${room.computerPlaces}cp / ${room.sittingPlaces}sp`
                }
            })
        }
        return groups
    }

    createItems = () => {
        const {agendaEntries} = this.props
        let items = []
        if (agendaEntries !== null) {
            items = agendaEntries.map((entry, index) => {
                return {
                    id: index,
                    group: entry.roomId,
                    title: entry.usePurposeDescription,
                    start_time: moment(entry.timeStart),
                    end_time: moment(entry.timeEnd).add(2, 'h'),
                    agendaEntryId: entry.id,
                    userId: entry.userId
                }
            })
        }
        return items
    }

    handleItemClick = (itemId, _, time) => {
        const {dispatch, auth0} = this.props
        let item = this.createItems().filter(it => it.id === itemId)[0]
        if (item.userId === auth0.user.sub) {
            dispatch({
                type: ActionTypes.SHOW_DELETE_MODAL,
                property: {
                    value: item.agendaEntryId
                }
            })
        } else {
            dispatch({
                type: ActionTypes.SHOW_FORBIDDEN_MODAL,
                property: {}
            })
        }
    }

    handleCanvasClick = (groupId, time) => {
        const {dispatch} = this.props
        dispatch({type: ActionTypes.SHOW_MODAL, property: {groupId: groupId, time: moment(time).format()}})
    }


    render() {
        return (<Box sx={{width: '100%', margin: 'auto'}}>
            <Timeline groups={this.createGroups()}
                      items={this.createItems()}
                      visibleTimeStart={this.getDefaultTimeStart()}
                      visibleTimeEnd={this.getDefaultTimeEnd()}
                      itemHeightRatio={0.75}
                      onItemDoubleClick={this.handleItemClick}
                      onCanvasClick={this.handleCanvasClick}
                      rightSidebarWidth={150}
                      buffer={1.1}>
                <TodayMarker/>
                <TimelineHeaders>
                    <SidebarHeader>
                        {({getRootProps}) => {
                            return <div className="rct-sidebar-title-text" {...getRootProps()}>Room id/Room type</div>
                        }}
                    </SidebarHeader>
                    <DateHeader unit="primaryHeader"/>
                    <DateHeader/>
                    <CustomHeader
                        getLeftOffsetFromDate={(start) => start}
                        showPeriod={() => console.log("Show period")}
                        canvasWidth={50}
                        canvasTimeStart={8}
                        canvasTimeEnd={20}
                        visibleTimeStart={8}
                        visibleTimeEnd={20}
                        timeSteps={{
                            hour: 1
                        }}
                        height={80} headerData={{someData: 'data'}} unit="day">
                        {({
                              headerContext: {intervals}, getRootProps, getIntervalProps, showPeriod,
                          }) => {
                            return (<div {...getRootProps()}>
                                {intervals.map(interval => {
                                    const intervalStyle = {
                                        lineHeight: '30px',
                                        textAlign: 'center',
                                        borderLeft: '1px solid black',
                                        cursor: 'pointer',
                                        backgroundColor: 'Turquoise',
                                        color: 'white'
                                    }
                                    return (<div
                                        onClick={() => {
                                            showPeriod(interval.startTime, interval.endTime)
                                        }}
                                        {...getIntervalProps({
                                            interval, style: intervalStyle
                                        })}
                                    >
                                        <div className="sticky">
                                            {interval.startTime.format('YYYY')}
                                        </div>
                                    </div>)
                                })}
                            </div>)
                        }}
                    </CustomHeader>
                </TimelineHeaders>
            </Timeline>
        </Box>)
    }

}

function mapStateToProps(state) {
    return {
        roomType: getValueAppPropertyStore(state, ROOM_TYPE),
        agendaEntries: getValueAppPropertyStore(state, AGENDA_ENTRIES),
        availableRooms: getValueAppPropertyStore(state, AVAILABLE_ROOMS),
        allRooms: getValueAppPropertyStore(state, ALL_ROOMS),
        selectedDate: getValueAppPropertyStore(state, SELECTED_DATE)
    };
}

export default withAuth0(connect(mapStateToProps)(reduxForm({
    form: "bookRoomModule",
    destroyOnUnmount: false, enableReinitialize: false,
})(BookRoomAgendaForm)))
