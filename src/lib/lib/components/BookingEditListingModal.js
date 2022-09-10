import React, {Component} from "react";
import {Box} from "@mui/system";
import {Button, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {connect} from "react-redux";
import {withAuth0} from "@auth0/auth0-react";
import {ActionTypes} from "../actions";

class BookingRemovalListingModal extends Component {
    constructor() {
        super();
    }

    edit = () => {
        const {dispatch, auth0, property, closeMethod} = this.props
        dispatch({
            type: ActionTypes.EDIT_BOOKING,
            property: {
                value: property.value,
                accessToken: auth0.getAccessTokenSilently
            }
        })
        closeMethod()
    }

    render() {
        return (<Box>
            <Dialog open={true} onClose={this.props.closeMethod}>
                <Alert severity="info">Editing listing</Alert>
                <DialogTitle>Are you sure you want to edit listing?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.closeMethod}>Cancel</Button>
                    <Button onClick={this.edit}>Edit</Button>
                </DialogActions>
            </Dialog>
        </Box>);
    }

}

function mapStateToProps(state) {
    return {};
}

export default withAuth0(connect(mapStateToProps)(BookingRemovalListingModal));