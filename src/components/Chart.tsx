import React, { useEffect } from 'react';
import { createChart, SeriesDataItemTypeMap } from 'lightweight-charts';

interface Props {
  data: [SeriesDataItemTypeMap['Bar']];
}

const Chart = ({ data }: Props)=> {
  const ref: any = React.useRef();

  useEffect(() => {
    const chart = createChart(ref.current, {
      height: 300,
      rightPriceScale: {
        visible: false,
      },
      leftPriceScale: {
        visible: true,
      },
      layout: {
        backgroundColor: '#FFFFFF',
        textColor: '#191919',
      },
      watermark: {
        color: 'rgba(0, 0, 0, 0)',
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          color: '#f0f3fa',
        },
      },
    });

    const areaSeries = chart.addAreaSeries({
      topColor: 'rgba(33, 150, 243, 0.56)',
      bottomColor: 'rgba(33, 150, 243, 0.04)',
      lineColor: 'rgba(33, 150, 243, 1)',
      lineWidth: 2,
    });

    areaSeries.setData(data);
  }, []);

  return (
    <div ref={ref} />
  );
}

export default Chart;
