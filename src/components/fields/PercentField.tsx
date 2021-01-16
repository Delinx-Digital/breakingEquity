import React from "react";
import { NumberField } from 'react-admin';
import { Chip } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core';
import { grey, red, lightGreen, green } from '@material-ui/core/colors';

const useStyles = makeStyles({
    positive: {
        background: lightGreen[50],
        color: green[600],
    },
    negative: {
        background: grey[300],
        color: red[500],
    },
});

const PercentChip = withStyles(()=> ({
    root: {
        borderRadius: 0,
        height: 'auto',
    },
    label: {
        padding: '2px 6px',
    },
}))(Chip);

const PercentField = ({ record, source, ...restProps }: any) => {
    const classes = useStyles();
    const percentValue = record[source];
    const isPositive = percentValue > 0;
    return (
        <PercentChip
            label={<NumberField {...restProps} {... { record, source }} style={{ fontWeight: 600 }} />}
            className={isPositive ? classes.positive : classes.negative}
        />
    )
};

export default PercentField;
