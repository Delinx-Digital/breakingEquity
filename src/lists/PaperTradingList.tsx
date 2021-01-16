import React from "react";
import { List, Datagrid, TextField } from 'react-admin';

const PaperTradingList = (props: any) => (
    <List {...props} bulkActionButtons={false}>
        <Datagrid>
            <TextField sortable={false} source="id" />
        </Datagrid>
    </List>
);

export default PaperTradingList;
