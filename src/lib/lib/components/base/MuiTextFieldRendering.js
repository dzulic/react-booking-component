import {TextField} from "@mui/material";
import React from "react";

export const renderTextField = ({input, label, meta: {touched, error}, defaultValue, ...custom}) => {
    if (input.value === null || input.value === "") input.value = defaultValue
    return <TextField
        value={input.value}
        // errorText={touched && error}
        {...custom}
        {...input}
    />
}
