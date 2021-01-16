import React from 'react';
import Chart from './Chart';
import { Grid } from '@material-ui/core'

const TradingListDetail = (props: any) => (
    <div>
        <Grid container>
            <Grid item xs={5}>
                <Chart data={[
                    { time: '2019-04-11', value: 80.01 },
                    { time: '2019-04-12', value: 96.63 },
                    { time: '2019-04-13', value: 76.64 },
                    { time: '2019-04-14', value: 81.89 },
                    { time: '2019-04-15', value: 74.43 },
                    { time: '2019-04-16', value: 80.01 },
                    { time: '2019-04-17', value: 96.63 },
                    { time: '2019-04-18', value: 76.64 },
                    { time: '2019-04-19', value: 81.89 },
                    { time: '2019-04-20', value: 74.43 },
                    ]}
                />
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={4}>
                dasdsadsa
            </Grid>
        </Grid>
    </div>
);

export default TradingListDetail;
