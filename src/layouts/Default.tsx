import React from 'react';
import { Layout } from 'react-admin';
import { AppBar } from '../components'

const DefaultLayout = (props: any) => (
    <Layout
        appBar={AppBar}
        {...props}
    />
);

export default DefaultLayout;
