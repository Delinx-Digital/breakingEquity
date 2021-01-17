import React from 'react';
import { NumberField } from 'react-admin';
import { Grid, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chart from './Chart';
import { formatNumber } from '../utils';

const useStyles = makeStyles({
    item: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

const TradingListDetail = ({ record }: any) => {
    const classes = useStyles();

    const {
        current_positions,
        market_value,
        available_cash,
        open_orders,
        beta,
        r2,
        mdd,
        return_pct,
        return_value,
        enter_criteria,
        exit_criteria,
        serialized_result,
    } = record;

    const tradingDetailInfo = [
        {
            label: 'Current position',
            value: current_positions.map((position: any)=> (
                <div>
                    {Object.keys(position).map((key)=> (
                        <div>
                            {position[key]} x {key}
                        </div>
                    ))}
                </div>
            ))
        },
        {
            label: 'Market value',
            value: formatNumber(market_value),
        },
        {
            label: 'Available cash',
            value: formatNumber(available_cash),
        },
        {
            label: 'Open Order',
            value: open_orders.length,
        },
        {
            label: 'Max Beta',
            value: formatNumber(beta),
        },
        {
            label: 'R Squared',
            value: formatNumber(r2),
        },
        {
            label: 'Return',
            value: formatNumber(return_value),
        },
        {
            label: 'MDD',
            value: formatNumber(mdd),
        },
    ];

    const serializedResultToJSON = JSON.parse(serialized_result);
    const resultbyCashEquity = serializedResultToJSON?.position_history.filter(({ type }: any)=> type === 'cash+equity')[0];
    const chartData = resultbyCashEquity?.positions.map((position: any)=> ({ time: position[0], value: position[1] }));

    return (
        <div>
            <Grid container>
                <Grid item xs={5}>
                    <Chart data={chartData} />
                </Grid>
                <Grid item xs={3}>
                    <span>WIN/LOSS/RATIO</span>
                    <LinearProgress value={return_pct * 100} variant='determinate' />
                    {tradingDetailInfo.map(({ label, value })=> (
                        <div className={classes.item}>
                            <Typography variant="button">{label}</Typography>
                            <Typography variant="button">{value}</Typography>

                        </div>
                    ))}
                </Grid>
                <Grid item xs={4}>
                    <p>{enter_criteria}</p>
                    <p>{exit_criteria}</p>
                </Grid>
            </Grid>
        </div>
    );
};

export default TradingListDetail;
