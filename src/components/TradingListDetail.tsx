import React from 'react';
import Chart from './Chart';
import { Grid } from '@material-ui/core'

const TradingListDetail = ({ record }: any) => {
    const {
        current_positions,
        market_value,
        available_cash,
        open_orders,
        beta,
        r2,
        mdd,
        return_value,
        enter_criteria,
        exit_criteria,
        serialized_result,
    } = record;

    const info = [
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
            value: market_value,
        },
        {
            label: 'Available cash',
            value: available_cash,
        },
        {
            label: 'Open Order',
            value: open_orders.length,
        },
        {
            label: 'Max Beta',
            value: beta,
        },
        {
            label: 'R Squared',
            value: r2,
        },
        {
            label: 'Return',
            value: return_value,
        },
        {
            label: 'MDD',
            value: mdd,
        },
    ];

    const chartData = JSON.parse(serialized_result);

    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={5}>
                    <Chart data={chartData?.position_history[3]?.positions.map((position: any)=> ({ time: position[0], value: position[1] }))}
                    />
                </Grid>
                <Grid item xs={3}>
                    {info.map(({ label, value })=> (
                        <div>
                            <span>{label}</span>
                            <span>{value}</span>
                        </div>
                    ))}
                </Grid>
                <Grid item xs={4}>
                    {enter_criteria}
                    {exit_criteria}
                </Grid>
            </Grid>
        </div>
    );
};

export default TradingListDetail;
