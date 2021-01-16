import React from "react";
import { Chip } from '@material-ui/core'

const StatusField = ({source, record}: any) => {
    const status = record[source];
    return (
        <Chip label={status} />
    )
};

export default StatusField;
