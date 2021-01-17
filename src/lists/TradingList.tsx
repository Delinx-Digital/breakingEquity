import React from "react";
import { List, Datagrid, TextField, NumberField, DateField } from 'react-admin';
import { TradingListDetail } from '../components';
import { StatusField, PercentField, TradingTypeField, ArrayLengthField } from '../components/fields';

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

const LiveTradingList = (props: any) => (
    <List {...props} bulkActionButtons={false}>
        <Datagrid expand={<TradingListDetail />}>
            {FIELDS.map(({ component: Component, ...restProps }, index)=> (
                <Component
                    key={`${restProps.source}-${index}`}
                    {...restProps}
                />
            ))}
        </Datagrid>
    </List>
);

export default LiveTradingList;
