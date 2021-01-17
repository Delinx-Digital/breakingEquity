import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Layout } from 'react-admin';
import { AppBar } from '../components'

const useStyles = makeStyles({
    layout: {
        paddingLeft: 20,
    },
});

//TODO: Adding interface here
const DefaultLayout = ({ children, ...restProps }: any) => {
    const classes = useStyles();

    return (
        <Layout
            appBar={AppBar}
            {...restProps}
        >
            <div className={classes.layout}>
                {children}
            </div>
        </Layout>
    )
};

export default DefaultLayout;
