import { TProfilePMScore } from 'types/profile'

export const profilePMScoreData: TProfilePMScore = {
  comparisonPercentage: 32,
  events: [
    {
      trend: 'up',
      value: 0.31,
      info: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      trend: 'down',
      value: 0.85,
      info: 'Lorem ipsum dolor sit amet consectetur. Ipsum augue egestas lacus id nec tincidunt turpis.',
    },
    {
      trend: 'up',
      value: 1.28,
      info: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      trend: 'down',
      value: 0.99,
      info: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      trend: 'down',
      value: 0.21,
      info: 'Lorem ipsum dolor sit amet consectetur. Ipsum augue egestas lacus id nec tincidunt turpis.',
    },
    {
      trend: 'up',
      value: 2.21,
      info: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      trend: 'up',
      value: 1.05,
      info: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ],
  lastScore: {
    value: 0.72,
    trend: 'up',
    ofLastMatches: 5,
  },
  score: 63,
  scoreGraph: 'unknown',
}
