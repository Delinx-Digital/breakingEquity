import React, { useEffect } from 'react';
import { createChart } from 'lightweight-charts';

const Chart = ({ data }: any)=> {
  const ref: any = React.useRef();

  useEffect(() => {
    const chart = createChart(ref.current, { height: 300 });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData(data);

    chart.applyOptions({
        crosshair: {
            vertLine: {
                color: '#6A5ACD',
                width: 1,
                style: 1,
                visible: false,
                labelVisible: false,
            },
            horzLine: {
                color: '#6A5ACD',
                width: 1,
                style: 2,
                visible: true,
                labelVisible: false,
            },
            mode: 1,
        },
    });
  }, []);

  return (
    <div ref={ref} />
  );
}

export default Chart;
