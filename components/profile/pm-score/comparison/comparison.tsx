import { TProfilePMScore } from 'types/profile'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import ComparisonIlustration from './ilustration'

const PMScoreComparison = ({
  comparisonPercentage,
}: Pick<TProfilePMScore, 'comparisonPercentage'>) => (
  <SectionContainer className="flex flex-col items-center" layout>
    <Heading className="self-start pb-7">Porównanie</Heading>
    <div className="flex flex-col md:flex-row-reverse md:p-7">
      <div className="relative flex flex-col items-center justify-center md:flex-row-reverse">
        <div className="z-20 max-w-[15rem] bg-light py-4 px-5 text-center font-inter text-body-sm font-medium text-darkAlpha-40 md:max-w-[20.188rem] md:py-5 md:text-body-md">
          Ten zawodnik rozwija się lepiej niż{' '}
          <span className="font-bold">{comparisonPercentage}%</span> innych
          zawodników w jego wieku
        </div>
        <div className="absolute -bottom-[0.4rem] rotate-45 bg-light icon-24 md:bottom-[6.2rem] md:-left-[0.4rem] md:icon-32" />
      </div>
      <div className="flex max-w-[19rem] flex-col items-center md:rotate-90">
        <ComparisonIlustration comparisonPercentage={comparisonPercentage} />
        <div className="mt-5 flex w-[13.125rem] justify-between font-inter text-body-xs font-medium text-darkAlpha-40">
          <div className="flex h-full w-full items-center justify-between md:pt-5">
            <span className="text-center md:rotate-90 md:-scale-x-100 md:-scale-y-100 md:text-body-sm">
              Poniżej <br />
              średniej
            </span>
            <span className="text-center md:rotate-90 md:-scale-x-100 md:-scale-y-100 md:text-body-sm">
              Powyżej <br />
              średniej
            </span>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
)

export default PMScoreComparison
