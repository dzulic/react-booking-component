import Box from "@mui/material/Box";
import React, {Component} from "react";
import {IconButton, List, ListItem, ListItemText, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {connect} from "react-redux";
import {ALL_ROOMS, CURRENT_USER_ENTRIES, getValueAppPropertyStore} from "../utils/Utils";
import moment from "moment";
import {ActionTypes} from "../actions";
import {withAuth0} from "@auth0/auth0-react";

class BookingsCurrentUserComponent extends Component {
    componentDidMount() {
        const {dispatch} = this.props
        const {getAccessTokenSilently} = this.props.auth0;
        dispatch({type: ActionTypes.GET_CURRENT_USER_BOOKINGS, property: {accessToken: getAccessTokenSilently}})
    }

    generate = (element) => {
        const {currentUserEntries, availableRooms} = this.props
        if (currentUserEntries != null && availableRooms !== null) {
            return currentUserEntries.map((value) => {
                let room = availableRooms.filter((it) => it.id === value.roomId)[0]
                return React.createElement(element.type, {
                    key: value.id
                }, (
                    <><ListItemText sx={{fontSize: '0.1vw'}}
                                    primary={`Time of your booking is:  ${moment(value.timeStart).format("HH:mm DD/MM/YYYY")}  
                                         At room ${room.roomId} with purpose ${value.usePurposeDescription}`}
                    />
                        <IconButton edge="end" aria-label="edit" sx={{color: 'white'}} key={value.id}
                                    onClick={() => this.handleEdit(value)}>
                            <EditIcon/>
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" sx={{color: 'white'}} key={value.id}
                                    onClick={() => this.handleDelete(value.id)}>
                            <DeleteIcon/>
                        </IconButton></>))
            })
        }
    }

    handleDelete = (id) => {
        const {dispatch} = this.props
        dispatch({
            type: ActionTypes.SHOW_DELETE_MODAL,
            property: {
                value: id
            }
        })
    }
    handleEdit = (value) => {
        const {dispatch} = this.props
        dispatch({
            type: ActionTypes.SHOW_EDIT_MODAL,
            property: {
                value: value
            }
        })
    }

    render() {
        return (<Box sx={{paddingTop: 5}}>
            <Typography variant='h6'>Your listings</Typography>
            <List>
                {this.generate(
                    <ListItem>
                    </ListItem>)}
            </List>
        </Box>)
    }
}

function

mapStateToProps(state) {
    return {
        currentUserEntries: getValueAppPropertyStore(state, CURRENT_USER_ENTRIES),
        availableRooms: getValueAppPropertyStore(state, ALL_ROOMS),
    };
}

export default withAuth0(connect(mapStateToProps)(BookingsCurrentUserComponent))
