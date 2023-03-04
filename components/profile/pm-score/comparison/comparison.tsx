import { TProfilePMScore } from 'types/profile'

import { Heading } from '../../common/Heading'
import { SectionContainer } from '../../common/SectionContainer'
import ComparisonIlustration from './ilustration'

const PMScoreComparison = ({
  comparisonPercentage,
}: Pick<TProfilePMScore, 'comparisonPercentage'>) => (
  <SectionContainer className="flex flex-col items-center" layout>
    <Heading className="self-start">Porównanie</Heading>
    <div className="flex flex-col md:flex-row-reverse">
      <div className="mt-3 flex flex-col items-center justify-center">
        <div className="z-20 max-w-[15rem] bg-light py-4 px-5 text-center font-inter text-body-sm font-medium text-darkAlpha-40">
          Ten zawodnik rozwija się lepiej niż{' '}
          <span className="font-bold">{comparisonPercentage}%</span> innych
          zawodników w jego wieku
        </div>
        <div className="-mt-6 rotate-45 bg-light icon-24" />
      </div>
      <div className="flex flex-col items-center">
        <ComparisonIlustration comparisonPercentage={comparisonPercentage} />
        <div className="mt-5 flex w-[13.125rem] justify-between font-inter text-body-xs font-medium text-darkAlpha-40">
          <div className="flex h-full w-full items-center justify-between md:flex-col">
            <span>
              Poniżej <br />
              średniej
            </span>
            <span>
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
