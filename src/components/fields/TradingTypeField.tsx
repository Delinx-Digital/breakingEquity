import React from "react";
import { TrendingDown, TrendingUp } from 'react-feather';
import { red, green } from '@material-ui/core/colors';

//TODO: Adding interface here
const TradingTypeField = ({ record, source }: any) => {
    const percentValue = record[source];
    const isPositive = percentValue > 0;

    return (
        <div>
            {isPositive ? <TrendingUp color={green[600]} /> : <TrendingDown color={red[500]} />}
        </div>
    )
};

export default TradingTypeField;
