import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PlayMakerScore } from './PlayMakerScore'

export default {
  title: 'Score',
  component: PlayMakerScore,
} as ComponentMeta<typeof PlayMakerScore>

const Template: ComponentStory<typeof PlayMakerScore> = args => (
  <PlayMakerScore {...args} />
)

export const TrendUp = Template.bind({})
TrendUp.args = {
  intent: 'trendUp',
}

export const TrendDown = Template.bind({})
TrendDown.args = {
  intent: 'trendDown',
}
