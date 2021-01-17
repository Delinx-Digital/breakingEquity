import React from 'react';
import { Grid, LinearProgress, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Chart from './Chart';
import { formatNumber } from '../utils';

const useStyles = makeStyles({
    detailWrapper: {
        margin: '-6px 0',
    },
    criteriaWrapper: {
        padding: '0 20px',
    },
    tradingDetailInfo: {
        borderLeft: `1px solid ${grey[300]}`,
        borderRight: `1px solid ${grey[300]}`,
        padding: '0 20px',
        height: '100%',
    },
    columnContent: {
        padding: '20px 0',
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

//TODO: Adding interface here
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
    //TODO: Adding interface here
    const resultbyCashEquity = serializedResultToJSON?.position_history.filter(({ type }: any)=> type === 'cash+equity')[0];
    //TODO: Adding interface here
    const chartData = resultbyCashEquity?.positions.map((position: any)=> ({ time: position[0], value: position[1] }));

    return (
        <div className={classes.detailWrapper}>
            <Grid container>
                <Grid item xs={5}>
                    <div className={classes.columnContent}>
                        <Chart data={chartData} />
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className={classes.tradingDetailInfo}>
                        <div className={classes.columnContent}>
                            <Typography variant="button">WIN/LOSS/RATIO</Typography>

                            <LinearProgress
                                value={return_pct * 100}
                                variant='determinate'
                            />

                            {tradingDetailInfo.map(({ label, value })=> (
                                <div className={classes.item}>
                                    <Typography variant="button">{label}</Typography>
                                    <Typography variant="button">{value}</Typography>

                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.columnContent}>
                        <div className={classes.criteriaWrapper}>
                            <code>{enter_criteria}</code>
                            <code>{exit_criteria}</code>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default TradingListDetail;
