import _ from 'lodash';

import { BarChart } from '@mui/x-charts/BarChart';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme } from '@emotion/react';
import { useWindowSize } from '@/lib/utils';

type painLevelData = {
  painLevel: number;
  date: Date;
};

const graphData: painLevelData[] = [
  {
    painLevel: 2,
    date: new Date('2023-11-03T10:20:30Z'),
  },
  {
    painLevel: 3,
    date: new Date('2023-11-04T09:15:00Z'),
  },
  {
    painLevel: 1,
    date: new Date('2023-11-05T12:45:00Z'),
  },
  {
    painLevel: 4,
    date: new Date('2023-11-06T08:30:00Z'),
  },
  {
    painLevel: 2,
    date: new Date('2023-11-07T11:00:00Z'),
  },
  {
    painLevel: 5,
    date: new Date('2023-11-08T15:20:00Z'),
  },
  {
    painLevel: 1,
    date: new Date('2023-11-09T07:50:00Z'),
  },
  {
    painLevel: 3,
    date: new Date('2023-11-10T14:10:00Z'),
  },
  {
    painLevel: 4,
    date: new Date('2023-11-11T10:00:00Z'),
  },
  {
    painLevel: 2,
    date: new Date('2023-11-12T13:30:00Z'),
  },
  {
    painLevel: 3,
    date: new Date('2023-11-13T09:45:00Z'),
  },
  {
    painLevel: 1,
    date: new Date('2023-11-14T10:55:00Z'),
  },
  {
    painLevel: 4,
    date: new Date('2023-11-15T08:20:00Z'),
  },
  {
    painLevel: 2,
    date: new Date('2023-11-16T11:10:00Z'),
  },
  {
    painLevel: 5,
    date: new Date('2023-11-17T14:30:00Z'),
  },
  {
    painLevel: 1,
    date: new Date('2023-11-18T07:40:00Z'),
  },
  {
    painLevel: 3,
    date: new Date('2023-11-19T13:00:00Z'),
  },
  {
    painLevel: 4,
    date: new Date('2023-11-20T10:25:00Z'),
  },
];

const avgPainLevel = (data: painLevelData[]): number => {
  if (data.length == 0) {
    return NaN;
  } else {
    return _.sumBy(data, (d: painLevelData) => d.painLevel) / data.length;
  }
};

const preProcess = (data: painLevelData[]) => {
  const groupedByDate = _.groupBy(data, (d: painLevelData) => d.date.toDateString());
  const dayAndAverage = Object.entries(groupedByDate)
    .map(([_key, values]) => {
      return { date: values[0].date, pain: avgPainLevel(values) };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
  return dayAndAverage;
};

function PainChart() {
  // TODO: fetch real data here
  const preProcessed = preProcess(graphData).slice(-7);

  const mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = createTheme({ palette: { mode } });

  const [width] = useWindowSize();

  return (
    <ThemeProvider theme={theme}>
      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: preProcessed.map((d) => d.date.toDateString()),
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: preProcessed.map((d) => d.pain),
            label: 'Average pain level',
          },
        ]}
        width={Math.min(width, 720)}
        height={480}
      />
    </ThemeProvider>
  );
}

export default PainChart;
