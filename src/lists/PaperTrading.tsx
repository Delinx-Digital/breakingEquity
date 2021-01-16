import React from "react";
import { List, Datagrid, TextField } from 'react-admin';

const PaperTrading = (props: any) => (
    <List {...props}>
        <Datagrid>
            <TextField sortable={false} source="id" />
        </Datagrid>
    </List>
);

export default PaperTrading;
