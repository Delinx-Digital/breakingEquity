import React from 'react';
import { Layout } from 'react-admin';
import { AppBar } from '../components'

const DefaultLayout = ({ children, ...restProps }: any) => (
    <Layout
        appBar={AppBar}
        {...restProps}
    >
        <div style={{ paddingLeft: 20 }}>
            {children}
        </div>
    </Layout>
);

export default DefaultLayout;
