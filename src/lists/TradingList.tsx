import React from "react";
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    DateField,
    ListProps,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { TradingListDetail } from '../components';
import {
    StatusField,
    PercentField,
    TradingTypeField,
    ArrayLengthField,
} from '../components/fields';

const FIELDS = [
    {
        component: StatusField,
        source: 'status',
        label: 'Status',
    },
    {
        component: TradingTypeField,
        source: 'return_pct',
        label: 'Type',
    },
    {
        component: TextField,
        source: 'name',
        label: 'Name',
    },
    {
        component: TextField,
        source: 'ticker',
        label: 'Ticker',
    },
    {
        component: DateField,
        options: { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' },
        source: 'start_date',
        label: 'Created',
    },
    {
        component: NumberField,
        source: 'initial_capital',
        label: 'Capital',
    },
    {
        component: NumberField,
        source: 'alpha',
        label: 'Alpha',
    },
    {
        component: PercentField,
        options: { style: 'percent' },
        source: 'return_pct',
        label: 'Return %',
    },
    {
        component: ArrayLengthField,
        source: 'open_orders',
        label: 'Today orders',
    },
];

const useStyles = makeStyles({
    headerCell: {
        fontWeight: 600,
        paddingTop: 15,
        paddingBottom: 15,
    },
    rowCell: {
        paddingTop: 15,
        paddingBottom: 15,
    },
});

const LiveTradingList = (props: ListProps) => {
    const classes = useStyles();

    return (
        <List bulkActionButtons={false} exporter={false} perPage={3} {...props}>
            <Datagrid expand={<TradingListDetail />} classes={{ headerCell: classes.headerCell, rowCell: classes.rowCell }}>
                {FIELDS.map(({ component: Component, ...restProps }, index)=> (
                    <Component
                        key={`${restProps.source}-${index}`}
                        {...restProps}
                    />
                ))}
            </Datagrid>
        </List>
    )
};

export default LiveTradingList;
