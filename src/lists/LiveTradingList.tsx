import React from "react";
import { List, Datagrid, TextField, NumberField, DateField } from 'react-admin';
import { TradingListDetail } from '../components';
import { StatusField, PercentField } from '../components/fields';

const FIELDS = [
    {
        component: StatusField,
        sortable: false,
        source: 'status',
        label: 'Status',
    },
    {
        component: TextField,
        sortable: false,
        source: 'type',
        label: 'Type',
    },
    {
        component: TextField,
        sortable: false,
        source: 'name',
        label: 'Name',
    },
    {
        component: TextField,
        sortable: false,
        source: 'ticker',
        label: 'Ticker',
    },
    {
        component: DateField,
        sortable: true,
        source: 'start_date',
        label: 'Created',
    },
    {
        component: NumberField,
        sortable: false,
        source: 'initial_capital',
        label: 'Capital',
    },
    {
        component: NumberField,
        sortable: false,
        source: 'alpha',
        label: 'Alpha',
    },
    {
        component: PercentField,
        sortable: false,
        options: { style: 'percent' },
        source: 'return_pct',
        label: 'Return %',
    },
    {
        component: TextField,
        sortable: false,
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
