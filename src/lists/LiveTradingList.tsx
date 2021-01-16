import React from "react";
import { List, Datagrid, TextField } from 'react-admin';
import { TradingListDetail } from '../components';

const FIELDS = [
    {
        component: TextField,
        sortable: false,
        source: 'status',
        label: 'Status',
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
        source: 'type',
        label: 'Type',
    },
    {
        component: TextField,
        sortable: false,
        source: 'ticker',
        label: 'Ticker',
    },
    {
        component: TextField,
        sortable: false,
        source: 'start_date',
        label: 'Created',
    },
    {
        component: TextField,
        sortable: false,
        source: 'initial_capital',
        label: 'Capital',
    },
    {
        component: TextField,
        sortable: false,
        source: 'alpha',
        label: 'Alpha',
    },
    {
        component: TextField,
        sortable: false,
        source: 'return_pct',
        label: 'Return %',
    },
    {
        component: TextField,
        sortable: false,
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
