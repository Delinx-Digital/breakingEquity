import React from "react";
import { Chip } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core';
import { grey, red, lightGreen, green } from '@material-ui/core/colors';

const useStatus = makeStyles({
    COMPLETED: {
        background: lightGreen[50],
        color: green[600],
    },
    STOPPED: {
        background: grey[200],
        color: grey[600],
    },
    FAILED: {
        background: grey[300],
        color: red[500],
    },
});

const StatusChip = withStyles(()=> ({
    root: {
        borderRadius: 0,
        height: 'auto',
    },
    label: {
        padding: '2px 6px',
        fontWeight: 600,
    },
}))(Chip);

//TODO: Adding interface here
const StatusField = ({source, record}: any) => {
    const statusStyle: any = useStatus();
    const currentStatus = record[source];

    return (
        <StatusChip
            className={statusStyle?.[currentStatus]}
            label={currentStatus}
        />
    )
};

export default StatusField;
