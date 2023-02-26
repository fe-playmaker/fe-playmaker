import 'chart.js/auto'

import { Doughnut } from 'react-chartjs-2'
import { TProfileOverview } from 'types/profile'

export const ChartPie = ({
  fromBench,
  firstEleven,
  bench,
  outsideCadre,
  totalParticipationPercentage,
}: Omit<TProfileOverview['regularity'], 'additional' | 'ofMatches'>) => {
  const data = {
    labels: ['Pierwsza "11"', 'Wejście z ławki', 'Ławka', 'Poza kadrą'],
    datasets: [
      {
        label: '',
        data: [firstEleven, fromBench, outsideCadre, bench],
        backgroundColor: [
          'rgba(46, 143, 0, 1)',
          'rgba(120, 194, 83, 1)',
          'rgba(199, 199, 199, 1)',
          'rgba(30, 120, 255, 1)',
        ],
        borderWidth: 2,
        cutout: '60%',
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
      animation: {
        animateRotate: false,
        animateScale: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      datalabels: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label(context: any) {
            let label = context.label || ''

            if (label) {
              label += ': '
            }
            const value = context.parsed || 0
            const total = context.dataset.data.reduce(
              (a: number, b: number) => a + b,
            )
            const percentage = ((value / total) * 100).toFixed(2)
            label += `${value} (${percentage}%)`
            return label
          },
        },
      },
    },
  }

  return (
    <div className="flex items-center justify-center">
      <div className="absolute flex flex-col items-center justify-center text-center">
        <p className="text-heading-md font-bold">
          {totalParticipationPercentage}%
        </p>
        <p className="font-inter text-body-xs font-medium text-darkAlpha-20">
          Udział <br /> w meczach
        </p>
      </div>

      <Doughnut
        className="z-10 max-h-[10rem] max-w-[10rem]"
        data={data}
        options={options}
        width={155}
        height={155}
      />
    </div>
  )
}
