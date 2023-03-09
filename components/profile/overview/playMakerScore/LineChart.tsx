'use client'

import { useMemo } from 'react'
import { Line } from 'react-chartjs-2'

import { useWindowSize } from './hooks'

interface IProps {
  playerData: number[]
  playersData: number[]
}

export const LineChart = ({ playerData, playersData }: IProps) => {
  const { width } = useWindowSize()

  const chartData = useMemo(
    () => ({
      labels: ['1 mecz', '2 mecz', '3 mecz', '4 mecz', '5 mecz'],
      datasets: [
        {
          label: 'Zawodnik',
          data: playerData,
          fill: false,
          borderColor: 'rgba(240, 14, 14, 1)',
          borderWidth: 3,
          pointHoverRadius: [7, 7, 7, 7, 7],
          pointRadius: [0, 0, 0, 0, 7],
          pointBackgroundColor: 'rgba(240, 14, 14, 1)',
          pointBorderColor: 'transparent',
        },
        {
          label: 'Średnia ligowa',
          data: playersData,
          fill: false,
          borderColor: 'rgba(137, 138, 143, 1)',
          borderWidth: 2,
          pointHoverRadius: [7, 7, 7, 7, 7],
          pointRadius: [0, 0, 0, 0, 7],
          pointBackgroundColor: 'rgba(137, 138, 143, 1)',
          pointBorderColor: 'transparent',
        },
      ],
    }),
    [playerData, playersData],
  )

  const options = {
    scales: {
      x: {
        title: {
          display: false,
          text: 'Oś X',
        },
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: false,
          text: 'Oś Y',
        },
        ticks: {
          display: true,
          stepSize: 1,
          precision: 0,
          font: {
            size: 13,
          },
          padding: 10,
        },
        grid: {
          color: 'rgba(235, 237, 240, 1)',
          drawTicks: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        left: -10,
      },
    },
  }

  return (
    <Line
      data={chartData}
      options={{
        ...options,
        interaction: {
          mode: 'index',
          intersect: false,
        },
      }}
      height={250}
      style={{
        maxHeight: width < 1000 ? 200 : 250,
        maxWidth: 692,
      }}
    />
  )
}
