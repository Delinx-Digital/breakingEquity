import React from 'react';
import { Grid, LinearProgress, Typography } from '@material-ui/core';
import { LogIn, LogOut } from 'react-feather';
import { grey, green, red, lime } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { formatNumber } from '../utils';
import Chart from './Chart';

const useStyles = makeStyles({
    detailWrapper: {
        margin: '-6px 0',
    },
    criteriaWrapper: {
        padding: '0 15px',
    },
    criteria: {
        marginBottom: 30,
        position: 'relative',
        padding: '0 35px',

        '& svg': {
            position: 'absolute',
            width: 22,
            height: 22,
            left: 0,
            top: 0,
            color: grey[600],
        },
        '& code': {
            fontSize: 13,
        }
    },
    tradingDetailInfo: {
        borderLeft: `1px solid ${grey[300]}`,
        borderRight: `1px solid ${grey[300]}`,
        padding: '0 15px',
        height: '100%',
    },
    columnContent: {
        padding: '20px 0',
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    itemLabel: {
        fontWeight: 600,
        color: grey[500],
    },
    itemValue: {
        fontWeight: 600,
    },
    ratioLabel: {
        fontWeight:600,
    },
    ratioWrapper: {
        marginBottom: 20,
    }
});

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 6,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: red[500],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: lime[600],
    },
  }))(LinearProgress);

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
    const { position_history } = serializedResultToJSON
    //TODO: Adding interface here
    const resultbyCashEquity = position_history.filter(({ type }: any)=> type === 'cash+equity')[0];
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
                            <div className={classes.ratioWrapper}>
                                <Typography
                                    className={classes.ratioLabel}
                                    variant="button"
                                >
                                    WIN/LOSS/RATIO
                                </Typography>

                                <BorderLinearProgress
                                    value={return_pct * 100}
                                    variant='determinate'
                                />
                            </div>

                            {tradingDetailInfo.map(({ label, value }, index)=> (
                                <div key={`${label}-${index}`} className={classes.item}>
                                    <Typography
                                        variant="button"
                                        className={classes.itemLabel}
                                    >
                                        {label}
                                    </Typography>
                                    <Typography
                                        variant="button"
                                        className={classes.itemValue}
                                    >
                                        {value}
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.columnContent}>
                        <div className={classes.criteriaWrapper}>
                            <div className={classes.criteria}>
                                <LogIn />
                                <code>{enter_criteria}</code>
                            </div>
                            <div className={classes.criteria}>
                                <LogOut />
                                <code>{exit_criteria}</code>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default TradingListDetail;
